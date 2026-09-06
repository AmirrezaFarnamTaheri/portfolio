# Design System & Technical Specifications

Design system tokens, typography scales, layout rules, and component specifications for the portfolio and CV.

---

## 1. Design Tokens & Colors

The design uses an electric cobalt accent paired with neutral slate and deep zinc backgrounds.

| Token | Light Mode (`default`) | Dark Mode (`[data-theme="dark"]`) | Description |
|---|---|---|---|
| `--bg` | `#f5f7fa` | `#080b11` | Primary background |
| `--surface` | `#ffffff` | `#0f1523` | Cards, panels, and modal containers |
| `--surface-subtle` | `#ebf0f7` | `#151d30` | Table headers and tag backgrounds |
| `--ink` | `#0d121c` | `#f3f6fc` | Primary text and headings |
| `--muted` | `#536074` | `#8d9bb0` | Secondary text and metadata |
| `--line` | `#d2dae6` | `#222d42` | Structural borders and dividers |
| `--accent` | `#1e56e3` | `#38bdf8` | Primary interactive elements & highlights |
| `--accent-soft` | `#edf3ff` | `#0c2138` | Highlighted cards & active row backgrounds |
| `--good` | `#0d9468` | `#34d399` | Status indicators and badges |

---

## 2. Typography

- **Primary Sans-Serif:** `Geist` (Modern geometric sans-serif for headings, body copy, and UI controls).
- **Monospace Font:** `Geist Mono` (Tabular data, code excerpts, tags, and timestamps).
- **Scale:**
  - `H1`: `clamp(48px, 6.8vw, 104px)` (Line height `0.94`, tracking `-0.05em`)
  - `H2`: `clamp(34px, 4.2vw, 64px)` (Line height `1.0`, tracking `-0.045em`)
  - `H3`: `clamp(20px, 2.5vw, 32px)` (Card titles, tracking `-0.03em`)
  - `Body`: `16px` (Line height `1.6`, measure up to `65ch`)
  - `Mono / Meta`: `10px` – `12px` (Uppercase, `letter-spacing: 0.05em`)

---

## 3. Geometric Scale & Borders

- `--radius-sm`: `4px` (Tags, score chips, buttons)
- `--radius-md`: `8px` (Cards, ledger boxes, inputs)
- `--radius-lg`: `12px` (Featured project cards, dialog modals)

---

## 4. 3D WebGL Visualization (Topological Loss Manifold)

- **Library:** Three.js (`r128`).
- **Core Subject:** Non-Convex Loss Landscape with Saddle Basins, Global Minima, and Analytical Descent Traces.
- **Scoping & Architecture:**
  1. **Strictly Hero-Scoped:**
     - The canvas is contained strictly inside `<section id="top" class="hero">` with `overflow: hidden`, ensuring zero leakage into downstream content sections.
  2. **Harmonic Loss Landscape Formulation:**
     - Evaluates smooth analytical loss equations $H(x, y, t) = \text{macro} + \text{saddle} + \text{basin} + \text{ripples}$ across a uniform high-density topological grid (`PlaneGeometry(68, 68, 56, 56)`).
  3. **Dual-Layered PBR Topology:**
     - Semi-transparent faceted topological skin (`MeshStandardMaterial`, `metalness: 0.52`, `roughness: 0.32`, `flatShading: true`) with real-time vertex normal recomputation.
     - Sharp precision wireframe overlay (`MeshBasicMaterial`).
  4. **Interactive Descent Probe & Trace System:**
     - Clicking or tapping anywhere on the loss manifold casts a ray and spawns a faceted glowing 3D gemstone probe at that exact $(x, y)$ coordinate.
     - The probe evaluates surface gradients $\nabla H(x, y)$ in real time and descends toward the nearest optimum basin under momentum and friction dynamics.
     - As the probe travels, it etches a dynamic, luminous descent trace (`THREE.Line`) into the landscape, dynamically mapped to the moving surface elevation.
- **Controls & Interaction:**
  - Click / tap on surface spawns an optimization probe with real-time descent trace.
  - Mouse movement creates localized topological depressions and wave ripples.
  - Mouse drag rotates the 3D loss surface with smooth momentum damping and parallax drift.
  - Dynamic theme synchronization updating skin colors, emissive tones, wireframe opacities, and rim lighting.
  - `prefers-reduced-motion` compliance halts animation loops and renders a static mathematical view.
  - Automatic 2D canvas fallback simulation if WebGL is unavailable.

---

## 5. Component Specifications

### 5.1 Project Cards
- Responsive grid: 2 columns on desktop (content + visual), 1 column on mobile.
- Includes category pill, numeric badge, title, subtitle, specifications matrix, key points, stack tags, and inspection trigger.

### 5.2 Command Palette (`Ctrl+K`)
- Native HTML `<dialog>` with backdrop blur.
- Keyboard navigation: `↑` / `↓` to highlight, `Enter` to execute, `Esc` to close.
- Filterable search across sections, projects, coursework, and actions.

### 5.3 Coursework Table
- Tabular ledger with course name, context, tools, topics, and score fill gauges.
- Real-time search filter across titles, topics, and libraries.
- Category filter buttons (`All`, `Econometrics & Economics`, `AI & Machine Learning`, `Math & Computation`).
