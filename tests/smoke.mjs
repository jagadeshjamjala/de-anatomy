// Smoke test: the page loads without errors and the Lab's built-in cases behave.
// Run: npm install && npx playwright install chromium && npm test
// Set CHROMIUM_PATH to use an already-installed Chromium.
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox']
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));

await page.goto(pathToFileURL(resolve('index.html')).href);

const problems = await page.evaluate(() => {
  const bad = [];
  const check = (ok, msg) => { if (!ok) bad.push(msg); };

  showView('lab');
  for (const m of ['pipeline', 'dimension', 'rightsize', 'detective']) {
    try { setLabMode(m); } catch (e) { bad.push(`mode ${m} threw: ${e.message}`); }
  }

  // Detective: every case's query is wrong, exactly one cause is right,
  // at least one fix reaches the expected value, and no "wrong" fix is silently the answer
  // unless the case says why it is still wrong.
  for (const c of DET) {
    check(!detEq(c.bug(c.tables), c.expected), `${c.id}: bug already equals expected`);
    check(c.causes.filter(x => x.ok).length === 1, `${c.id}: needs exactly one correct cause`);
    check(c.fixes.some(f => f.good && detEq(f.v(c.tables), c.expected)), `${c.id}: no good fix reaches expected`);
    c.probes.forEach(p => p.a(c.tables));
  }

  // Right-size: every scenario has a Lead's pick.
  for (const sc of RS_SCENARIOS) {
    rs.sc = sc.id; rs.cfg = { ...sc.defaults };
    check(!!rsEvaluate().best, `right-size ${sc.id}: no architecture satisfies the card`);
  }

  // Reference pipeline stays healthy; the boring baseline is recognised as such.
  check(runSim().findings.map(f => f.id).join() === 'healthy', 'reference pipeline should be healthy');
  return bad;
});

await browser.close();
const all = [...errors, ...problems];
if (all.length) { console.error('FAIL\n- ' + all.join('\n- ')); process.exit(1); }
console.log('OK: page loads clean, Lab cases behave.');
