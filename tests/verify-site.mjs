// Run with an existing static preview on http://127.0.0.1:4173.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const artifacts = fileURLToPath(new URL('../docs/screenshots/', import.meta.url));
await fs.mkdir(artifacts, { recursive: true });
const names = ['index.html', 'research.html', 'academic-work.html', 'professional-cv.html'];
const browser = await chromium.launch({ headless: true, channel: 'msedge' });
const errors = [], localTargets = new Set();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  for (const name of names) {
    await page.goto('http://127.0.0.1:4173/' + name);
    const ids = await page.locator('[id]').evaluateAll(es => es.map(e => e.id));
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs: ${name}`);
    const links = await page.locator('a[href],img[src],script[src],link[href]').evaluateAll(es => es.map(e => e.href || e.src));
    for (const link of links) if (link.startsWith('http://127.0.0.1:4173/')) localTargets.add(link);
    assert.equal(await page.locator('h1').count(), 1);
    if (name !== 'professional-cv.html') {
      assert.equal(await page.locator('.navbar a').count(), 5);
      if (name !== 'index.html') assert.equal(await page.locator('.navbar [aria-current="page"]').count(), 1);
    }
  }
  for (const url of localTargets) {
    const u = new URL(url), pathname = decodeURIComponent(u.pathname === '/' ? '/index.html' : u.pathname);
    await fs.access(path.join(root, pathname));
    if (u.hash && pathname.endsWith('.html')) {
      const html = await fs.readFile(path.join(root, pathname), 'utf8');
      assert.ok(html.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`), `Missing anchor: ${url}`);
    }
    assert.equal((await page.request.head(url)).status(), 200, url);
  }
  for (const [width,height] of [[1440,900],[1280,800],[768,1024],[390,844],[360,800]]) {
    await page.setViewportSize({width,height});
    for (const name of names) {
      await page.goto('http://127.0.0.1:4173/' + name);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow: ${name} ${width}`);
      await page.locator('img').evaluateAll(es => es.forEach(e => e.loading='eager'));
      await page.waitForFunction(() => [...document.images].every(e => e.complete));
      if (name !== 'professional-cv.html') {
        const bounds=await page.locator('.sidebar,.sidebar .title').evaluateAll(es=>es.map(e=>({left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right})));
        assert.ok(bounds[1].left>=bounds[0].left && bounds[1].right<=bounds[0].right, 'Sidebar title must fit');
      }
      assert.equal(await page.locator('img').evaluateAll(es => es.filter(e => !e.complete || !e.naturalWidth).length), 0);
    }
  }
  await page.setViewportSize({width:1440,height:900});
  await page.goto('http://127.0.0.1:4173/');
  await page.screenshot({path:path.join(artifacts,'home-light.png')});
  await page.locator('[data-theme-toggle]').click();
  await page.screenshot({path:path.join(artifacts,'home-dark.png')});
  await page.goto('http://127.0.0.1:4173/research.html#reconstruction');
  assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
  await page.locator('[data-theme-toggle]').click();
  await page.goto('http://127.0.0.1:4173/research.html');
  await page.screenshot({path:path.join(artifacts,'research-desktop.png')});
  await page.locator('.navbar').evaluate(e=>e.style.visibility='hidden');
  for (const section of ['overview','luminosity','reconstruction','detectors']) {
    await page.locator('#'+section).screenshot({path:path.join(artifacts,section+'.png')});
  }
  await page.locator('.navbar').evaluate(e=>e.style.visibility='');
  await page.setViewportSize({width:390,height:844});
  await page.goto('http://127.0.0.1:4173/research.html');
  await page.screenshot({path:path.join(artifacts,'research-mobile.png')});
  await page.goto('http://127.0.0.1:4173/index.html#projects');
  await page.screenshot({path:path.join(artifacts,'software-mobile.png')});
  await page.setViewportSize({width:1440,height:900});
  await page.goto('http://127.0.0.1:4173/academic-work.html');
  await page.screenshot({path:path.join(artifacts,'academic-work.png')});
  assert.equal(await page.locator('.talk-list li').count(),4);
  const download=page.waitForEvent('download');
  await page.goto('http://127.0.0.1:4173/index.html#cv');
  await page.locator('.cv-banner a[download]').click();
  assert.equal((await download).suggestedFilename(),'Jinxin_Li_Professional_CV.pdf');
  const noJS = await browser.newPage({javaScriptEnabled:false});
  for (const name of names) { await noJS.goto('http://127.0.0.1:4173/'+name); assert.ok(await noJS.locator('main').isVisible()); }
  assert.deepEqual(errors,[]);
  console.log(`PASS: ${localTargets.size} local link/asset targets; four pages at five viewports; IDs, images, PDF download, deep links, theme persistence, no-JS and console checks. Screenshots: ${artifacts}`);
} finally { await browser.close(); }
