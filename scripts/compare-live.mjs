// Compares a route on the live site with the local build: visible text diff + pixel diff.
//
//   npm run build && npx vite preview --port 4180 &
//   node scripts/compare-live.mjs /ekip
//
// Screenshots/diffs go to .compare/ (git-ignored). Set CHROMIUM_PATH to use an
// already-downloaded browser instead of `npx playwright install chromium`.
import fs from "node:fs";
import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const route = process.argv[2] || "/";
const LIVE = process.env.LIVE_URL || "https://cybersenselab.sakarya.edu.tr";
const LOCAL = process.env.LOCAL_URL || "http://localhost:4180";
const OUT = ".compare";
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
const slug = route.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "home";

async function capture(browser, url, viewport, file) {
  const page = await browser.newPage({ viewport, reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  // Scroll through the page so in-view reveal animations fire before the full-page shot.
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: file, fullPage: true });
  const text = (await page.evaluate(() => document.body.innerText)).split("\n").map((s) => s.trim()).filter(Boolean);
  await page.close();
  return text;
}

function pixelDiff(fileA, fileB, out) {
  const a = PNG.sync.read(fs.readFileSync(fileA));
  const b = PNG.sync.read(fs.readFileSync(fileB));
  const width = Math.min(a.width, b.width);
  const height = Math.min(a.height, b.height);
  const crop = (img) => {
    const o = new PNG({ width, height });
    PNG.bitblt(img, o, 0, 0, width, height, 0, 0);
    return o;
  };
  const diff = new PNG({ width, height });
  const count = pixelmatch(crop(a).data, crop(b).data, diff.data, width, height, { threshold: 0.1 });
  fs.writeFileSync(out, PNG.sync.write(diff));
  return { count, sizes: `${a.width}x${a.height} vs ${b.width}x${b.height}` };
}

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let failed = false;
for (const [name, viewport] of Object.entries(viewports)) {
  const liveFile = `${OUT}/${slug}-${name}-live.png`;
  const localFile = `${OUT}/${slug}-${name}-local.png`;
  const liveText = await capture(browser, LIVE + route, viewport, liveFile);
  const localText = await capture(browser, LOCAL + route, viewport, localFile);
  const localSet = new Set(localText);
  const liveSet = new Set(liveText);
  const missing = liveText.filter((t) => !localSet.has(t));
  const extra = localText.filter((t) => !liveSet.has(t));
  const { count, sizes } = pixelDiff(liveFile, localFile, `${OUT}/${slug}-${name}-diff.png`);
  console.log(`[${name}] text: ${missing.length} missing, ${extra.length} extra | pixels: ${count} differ (${sizes})`);
  missing.slice(0, 10).forEach((t) => console.log("  - only live :", t.slice(0, 100)));
  extra.slice(0, 10).forEach((t) => console.log("  + only local:", t.slice(0, 100)));
  if (missing.length || extra.length || count) failed = true;
}
await browser.close();
process.exit(failed ? 1 : 0);
