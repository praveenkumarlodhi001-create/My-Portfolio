// Vercel serverless function: the resume PDF lives in /private (not /public),
// so it can only be fetched through this endpoint, with the right passcode.
import { createHash, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// SHA-256 of the passcode. Override on Vercel with the RESUME_PASSCODE_HASH env var.
const DEFAULT_HASH = '4e62cdf927c4a6ce5255392effcd2618df936de11e87213d5d08bc0212525742';

const WINDOW_MS = 60_000;
const MAX_TRIES = 8;
const tries = new Map(); // best-effort, per warm instance

function limited(ip) {
  const now = Date.now();
  const hits = (tries.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  tries.set(ip, hits);
  return hits.length > MAX_TRIES;
}

function same(a, b) {
  const x = Buffer.from(a, 'hex');
  const y = Buffer.from(b, 'hex');
  return x.length === y.length && timingSafeEqual(x, y);
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  let raw = '';
  for await (const chunk of req) raw += chunk;
  try { return JSON.parse(raw || '{}'); } catch { return {}; }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.end('Method not allowed');
  }
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'x').split(',')[0].trim();
  if (limited(ip)) {
    res.statusCode = 429;
    return res.end('Too many attempts');
  }
  const { passcode } = await readBody(req);
  if (typeof passcode !== 'string' || !passcode) {
    res.statusCode = 400;
    return res.end('Passcode required');
  }
  const given = createHash('sha256').update(passcode.trim()).digest('hex');
  const expected = (process.env.RESUME_PASSCODE_HASH || DEFAULT_HASH).toLowerCase();
  if (!same(given, expected)) {
    res.statusCode = 401;
    return res.end('Wrong passcode');
  }
  const pdf = await readFile(path.join(process.cwd(), 'private', 'resume.pdf'));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Praveen_Kumar_Resume.pdf"');
  return res.end(pdf);
}
