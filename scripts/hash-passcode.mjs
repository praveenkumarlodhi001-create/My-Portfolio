// Run this whenever you want to change the resume passcode:
//   node scripts/hash-passcode.mjs "your-new-passcode"
// Then set the printed hash as RESUME_PASSCODE_HASH on Vercel (or edit DEFAULT_HASH in api/resume.js)

import { createHash } from 'node:crypto';

const passcode = process.argv[2];

if (!passcode) {
  console.error('Usage: node scripts/hash-passcode.mjs "your-new-passcode"');
  process.exit(1);
}

const hash = createHash('sha256').update(passcode).digest('hex');
console.log('\nPasscode:', passcode);
console.log('Hash to paste into ResumeGate.jsx:\n');
console.log(hash);
console.log();
