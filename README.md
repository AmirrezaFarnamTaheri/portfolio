# Amirreza “Farnam” Taheri — Portfolio & Curriculum Vitae

Static, zero-dependency web portfolio and print-ready curriculum vitae built for GitHub Pages hosting.

---

## Key Features

- **Typography & Design System**: Typeset in `Geist` and `Geist Mono` with custom color tokens, responsive layout grids, and full dark/light theme support.
- **Three.js WebGL 3D Adaptive Loss Manifold**:
  - **Adaptive Mesh Refinement (AMR)**: Procedurally deformed grid with $>5\times$ concentrated vertex density around global and local optima basins, revealing intricate curvature at critical points.
  - **Dual-Layered PBR Topology**: Shaded semi-transparent topological skin with real-time wave physics, normal recomputation, and sharp adaptive wireframe overlay.
  - **Click-to-Spawn Descent Probes & Real-time Traces**: Click or tap anywhere on the manifold to spawn a glowing 3D gemstone probe that rolls down the loss landscape following analytical gradients $\nabla H(x, y)$, etching a luminous convergence trace.
  - **Interactive Drag Orbit & Wave Gravity Well**: Smooth mouse drag rotation with momentum damping and localized cursor wave perturbation.
  - **Dynamic Theme Sync**: Materials, lighting temperatures, and wireframe colors update automatically on theme switch.
- **Command Palette (`Ctrl+K` / `Cmd+K`)**:
  - Full keyboard navigation (`↑`/`↓` arrow keys, `Enter` to select, `Esc` to close).
  - Search across sections, projects, coursework, and actions.
- **Project Architecture Modal**:
  - Native `<dialog>` modal showing ASCII system blueprints, benchmarks, and project details.
- **Coursework Search & Filters**:
  - Real-time search across course titles, topics, and tools.
  - Category filters (*All*, *Econometrics & Economics*, *Machine Learning & AI*, *Math & Computation*).
  - Score progress gauges.
- **Academic Distinctions**: Highlights TeIAS Graduate GPA (18.72/20), AUT Economics Minor GPA (19.20/20), Nationwide Rank 27, and completed graduate modules.
- **Printable Resume (`resume.html`)**: Standalone A4 print-optimized resume with calibrated CSS print media queries.
- **Zero Build Step**: Native browser execution with no bundlers or runtime dependencies.

---

## Repository Structure

```
├── index.html                     # Main portfolio page
├── app.js                         # DOM hydration, Three.js canvas, command palette & modal
├── styles.css                     # Design tokens, responsive grid & component styles
├── data.js                        # Single source of truth data model & ASCII diagrams
├── resume.html                    # A4 print-ready resume page
├── resume.css                     # Print stylesheet
├── resume.js                      # Resume data loader
├── DESIGN.md                      # Design system documentation
├── .nojekyll                      # Disables Jekyll on GitHub Pages
└── README.md                      # Documentation
```

---

## Local Development

Run any static file server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## GitHub Pages Deployment

1. Push files to the `main` branch.
2. In GitHub: **Settings** → **Pages**.
3. Set Source to `Deploy from a branch` (Branch: `main`, Folder: `/ (root)`).

---

## Academic Record & Course Repositories

- **National Master's Entrance Examination (2023)**: Rank 27 nationwide
- **Econometrics II (Applied Econometrics)**: 19.0 / 20 (Graduate, TeIAS)
- **Econometrics I**: 19.0 / 20 (Graduate, TeIAS) — [Repository](https://github.com/AmirrezaFarnamTaheri/Econometrics-I)
- **Machine Learning**: 18.5 / 20 (Graduate, TeIAS) — [Repository](https://github.com/AmirrezaFarnamTaheri/Machine-Learning)
- **Neural Networks & Deep Learning**: 17.0 / 20 (Graduate, TeIAS) — [Repository](https://github.com/AmirrezaFarnamTaheri/Deep-Learning-2025)
- **Macroeconomics I**: Graduate Coursework & RBC Models (TeIAS) — [Repository](https://github.com/AmirrezaFarnamTaheri/Macroeconomics-I)
- **Mathematics for Economists**: 19.3 / 20 (Graduate, TeIAS)
- **Microeconomics (Graduate)**: 18.1 / 20 (Graduate, TeIAS)
- **Econometrics (Economics Minor)**: 20.0 / 20 (AUT)
- **Macroeconomics (Economics Minor)**: 20.0 / 20 (AUT)
- **Game Theory (Economics Minor)**: 20.0 / 20 (AUT)
- **Research Method & Report Writing**: 19.5 / 20 (AUT)
- **Engineering Economics**: 17.0 / 20 (B.Sc. Coursework, AUT)
- **Calculus II**: 17.6 / 20 (B.Sc. Coursework, AUT)
- **Numerical Analysis**: 16.5 / 20 (B.Sc. Coursework, AUT)
