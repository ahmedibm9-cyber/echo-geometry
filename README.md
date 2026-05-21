# Polyrythm Visualizer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-success)](https://yourusername.github.io/polyrhythm)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![PWA](https://img.shields.io/badge/PWA-ready-5a0fc8)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![JS](https://img.shields.io/badge/vanilla-JS-f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A mesmerizing, real-time polyrythm visualizer with audio reactivity, themes, PNG/webm export, and PWA support — all in a single HTML file with zero build dependencies.

![Polyrythm Visualizer](https://raw.githubusercontent.com/yourusername/polyrhythm/main/screenshot.png)

## Try it

Open `index.html` in any modern browser, or [deploy to GitHub Pages](#deployment).

## Features

| Tier | Feature | Description |
|------|---------|-------------|
| 1 | **Keyboard shortcuts** | Space (pause), F (fullscreen), R (reset), 1-5 (themes) |
| 1 | **URL state sharing** | Share your exact visual config via link (state in URL params) |
| 1 | **GitHub Pages deploy** | One-push CI/CD to Pages |
| 2 | **Audio reactivity** | Mic input drives dot size, speed, and glow in real-time |
| 2 | **5 themes** | Default, Cyberpunk, Ocean, Fire, Monochrome |
| 2 | **PNG export** | Capture the current frame as a high-res PNG |
| 2 | **Touch gestures** | Pinch-to-zoom on mobile, tap to spawn |
| 3 | **WEBM recording** | Record and download your animation as a video |
| 3 | **PWA** | Installable on desktop and mobile, works offline |

## Controls

| Control | Keyboard | Description |
|---------|----------|-------------|
| Click / Tap | — | Spawn a dot at cursor position |
| Scroll / Pinch | — | Zoom in / out |
| Count slider | — | Number of dots (2–30) |
| Speed slider | — | Global speed multiplier |
| Size slider | — | Dot size multiplier |
| Theme dropdown | `1`–`5` | Switch visual theme |
| Trails toggle | `T` | Dot trailing paths |
| Glow toggle | `G` | Glow / neon effect |
| Lines toggle | `L` | Constellation connection lines |
| Mic | `M` | Enable audio reactivity (bass→size, mids→speed, treble→glow) |
| Record | — | Record canvas to WEBM video |
| Export | — | Download current frame as PNG |
| Pause | `Space` | Freeze the animation |
| Reset | `R` | Reset all dots |
| Fullscreen | `F` | Toggle fullscreen mode |

## Keyboard shortcuts reference

```
Space   Pause / Resume
F       Toggle fullscreen
R       Reset dots
T       Toggle trails
G       Toggle glow
L       Toggle lines
M       Toggle microphone
1-5     Switch theme (1=Default, 2=Cyberpunk, 3=Ocean, 4=Fire, 5=Monochrome)
Esc     Resume if paused
```

## Quick start

```bash
git clone https://github.com/yourusername/polyrhythm.git
cd polyrhythm
# Just open index.html — no build step needed
```

## Deployment

Push to GitHub — the included workflow auto-deploys to GitHub Pages:

```bash
gh repo create polyrhythm --public --source=.
git push origin main
```

Then enable **Settings → Pages → Source: GitHub Actions**.

## Tech stack

- **HTML5 Canvas** — high-performance 2D rendering
- **Web Audio API** — real-time microphone analysis
- **CSS** — backdrop-filter glassmorphism UI
- **Vanilla JS** — zero frameworks, zero dependencies
- **PWA** — service worker, manifest, offline support

## Project structure

```
polyrhythm/
├── index.html          # The full visualizer app
├── manifest.json       # PWA manifest
├── sw.js               # Service worker for offline support
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .github/workflows/  # CI/CD configuration
└── tests/              # Node.js test suite
```

## License

MIT — see [LICENSE](LICENSE).
