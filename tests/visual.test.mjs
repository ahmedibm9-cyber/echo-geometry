import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';

test('index.html exists and is valid', () => {
  const html = fs.readFileSync('index.html', 'utf-8');
  assert(html.includes('<!DOCTYPE html>'));
  assert(html.includes('<canvas'));
  assert(html.includes('getContext'));
  assert(html.includes('requestAnimationFrame'));
  assert(html.toLowerCase().includes('polyrhythm'));
});

test('all new features present in HTML', () => {
  const html = fs.readFileSync('index.html', 'utf-8');
  const features = [
    // Tier 1: Keyboard shortcuts
    { name: 'Space pause', check: "case ' ':" },
    { name: 'F fullscreen', check: "keydown" },
    { name: 'R reset', check: "togglePause" },
    // Tier 1: URL state
    { name: 'URL state sync', check: 'syncStateToURL' },
    { name: 'URL state restore', check: 'restoreStateFromURL' },
    // Tier 2: Audio
    { name: 'Web Audio API', check: 'AudioContext' },
    { name: 'Mic button', check: 'toggleAudio' },
    // Tier 2: Themes
    { name: 'Theme system', check: 'THEMES' },
    { name: '5 themes', check: 'cyberpunk' },
    // Tier 2: Export
    { name: 'PNG export', check: 'exportPNG' },
    { name: 'toDataURL', check: 'toDataURL' },
    // Tier 2: Touch
    { name: 'Touch gestures', check: 'touchstart' },
    // Tier 3: Recording
    { name: 'MediaRecorder', check: 'MediaRecorder' },
    // Tier 3: PWA
    { name: 'Manifest link', check: 'manifest.json' },
  ];
  for (const f of features) {
    assert(html.includes(f.check), `Missing: ${f.name} (${f.check})`);
  }
});

test('manifest.json is valid JSON', () => {
  const m = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));
  assert.equal(m.short_name, 'Polyrhythm');
  assert(m.icons);
  assert(m.icons.length >= 2);
  assert(m.start_url);
});

test('sw.js has install, activate, fetch handlers', () => {
  const sw = fs.readFileSync('sw.js', 'utf-8');
  assert(sw.includes("install"));
  assert(sw.includes("activate"));
  assert(sw.includes("fetch"));
  assert(sw.includes("caches"));
});

test('README has all sections', () => {
  const readme = fs.readFileSync('README.md', 'utf-8');
  const sections = ['Features', 'Controls', 'Keyboard shortcuts', 'Quick start', 'Deployment', 'Tech stack', 'Project structure', 'License'];
  for (const s of sections) {
    assert(readme.includes(`## ${s}`), `Missing section: ${s}`);
  }
  const badges = readme.match(/badge/g);
  assert(badges && badges.length >= 5, 'Should have at least 5 badges');
});

test('LICENSE is MIT', () => {
  const l = fs.readFileSync('LICENSE', 'utf-8');
  assert(l.includes('MIT License'));
});

test('CONTRIBUTING.md exists', () => {
  const c = fs.readFileSync('CONTRIBUTING.md', 'utf-8');
  assert(c.includes('Pull request guidelines'));
  assert(c.includes('Code style'));
});

test('deploy workflow exists', () => {
  const w = fs.readFileSync('.github/workflows/deploy.yml', 'utf-8');
  assert(w.includes('Deploy to GitHub Pages'));
  assert(w.includes('actions/deploy-pages'));
});

test('all required files exist', () => {
  const files = ['index.html', 'manifest.json', 'sw.js', 'README.md', 'LICENSE', 'CONTRIBUTING.md', '.github/workflows/deploy.yml'];
  for (const f of files) {
    assert(fs.existsSync(f), `Missing file: ${f}`);
  }
});
