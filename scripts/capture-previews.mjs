// Captures a real 1280x800 screenshot of each live demo site into public/demos/<id>.jpg
// Usage: npm i -D playwright && npx playwright install chromium && npm run capture-previews
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import demos from '../src/data/demos.js';

await mkdir('public/demos', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
for (const d of demos) {
  try {
    await page.goto(d.url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `public/demos/${d.id}.jpg`, type: 'jpeg', quality: 82 });
    console.log('OK  ', d.id, d.url);
  } catch (e) {
    console.log('FAIL', d.id, d.url, e.message.split('\n')[0]);
  }
}
await browser.close();
