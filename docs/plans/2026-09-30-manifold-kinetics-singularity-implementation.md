# Manifold Kinetic Dynamics & Geometric Singularity Implementation Plan

**Goal:** Implement interactive rubber-sheet cursor warping, dynamic radial damping ripples, kinetic drag-and-flick probe launching, an 8-node quantum accretion ring, geodesic wormhole transit arcs, and pure geometric non-verbal landmarks on the Three.js loss manifold.

**Architecture:** Hybrid GPU-Shader deformation (procedural Gaussian cursor indentation and multi-wave ripples in vertex shader with relativistic redshift in fragment shader) coupled with analytical CPU probe kinematics, elastic trajectory lines, and pooled 3D bezier transit arcs.

**Tech Stack:** Vanilla ES6+ JavaScript, Three.js r128 (CDN), WebGL GLSL Shaders, Node.js regression harness (`test_suite.js`).

---

### Task 1: De-Clutter Critical Points (Eliminate Verbal Text Labels)

**Files:**
- Modify: `app.js` (lines ~1490–1620)
- Test: `test_suite.js`

**Step 1: Inspect text sprite implementation**
Review `createTextBadgeSprite` and `criticalPointsConfig` in `app.js`.

**Step 2: Remove text sprite creation**
Remove `createTextBadgeSprite` function and the sprite addition logic in `criticalPointsConfig.forEach`. Retain `octMesh` (diamond octahedron), `grMesh` (ground anchor ring), and `tetherLine` (vertical datum line).

**Step 3: Run regression tests**
Run: `node test_suite.js`
Expected: 38/38 tests PASS.

**Step 4: Commit**
```bash
git add app.js
git commit -m "refactor(manifold): remove verbal text labels and retain pure geometric landmarks"
```

---

### Task 2: Vertex & Fragment Shader Pipeline (Rubber-Sheet Indentation, Wave Ripples & Redshift)

**Files:**
- Modify: `app.js` (lines ~1420–1476)
- Test: `test_suite.js`

**Step 1: Declare shader uniforms**
Add `uCursorPos` (`vec2`), `uCursorActive` (`float`), `uCursorDepth` (`float`), and `uRipples` (`vec4[4]`) to `customShaderUniforms` and pass them into `skinMat.onBeforeCompile`.

**Step 2: Update vertex shader**
In `skinMat.onBeforeCompile`, augment the vertex shader to displace vertices by:
1. Rubber-sheet Gaussian depression under the active cursor:
   $$\Delta z_{\text{indent}} = -uCursorDepth \cdot \exp\left(-\frac{\|\mathbf{p}_{xy} - uCursorPos\|^2}{2\sigma^2}\right)$$
2. Sum of active radial damping wave ripples from `uRipples`:
   $$\Delta z_{\text{wave}} = \sum_{i=0}^3 uRipples[i].w \cdot \sin(1.8 r_i - 6.0 \Delta t_i) \cdot \frac{e^{-1.5 \Delta t_i}}{1.0 + 0.35 r_i}$$

**Step 3: Update fragment shader for relativistic redshift**
In `skinMat.onBeforeCompile` fragment shader, detect vertices displaced deep into the singularity throat ($z < -1.8$) and blend `gl_FragColor.rgb` towards relativistic redshift deep-crimson (`#dc2626`) and amber (`#f59e0b`).

**Step 4: Run regression tests**
Run: `node test_suite.js`
Expected: 38/38 tests PASS.

**Step 5: Commit**
```bash
git add app.js
git commit -m "feat(manifold): implement shader rubber-sheet indentation, wave ripples, and relativistic redshift"
```

---

### Task 3: Analytic Probe Gradient Coupling & Kinetic Slingshot Mechanics

**Files:**
- Modify: `app.js` (lines ~1680–1860, ~2100–2240)
- Test: `test_suite.js`

**Step 1: Analytic cursor gradient coupling**
In the probe gradient descent integration loop, evaluate the analytic derivative of the Gaussian cursor indentation:
$$\nabla \mathcal{L}_{\text{cursor}}(\mathbf{x}) = uCursorActive \cdot \frac{uCursorDepth}{\sigma^2} (\mathbf{x} - \mathbf{x}_{\text{cursor}}) \exp\left(-\frac{\|\mathbf{x} - \mathbf{x}_{\text{cursor}}\|^2}{2\sigma^2}\right)$$
Add $\nabla \mathcal{L}_{\text{cursor}}$ to the probe's total acceleration vector $\vec{a}$.

**Step 2: Implement slingshot aiming line & gesture detection**
In the canvas pointer handlers:
- Track pointer down position $\mathbf{p}_{\text{start}}$.
- When pointer drag exceeds $12\text{px}$, engage slingshot mode.
- Render elastic aiming vector line (`THREE.Line`) with color ramp (cyan when low tension, energetic amber when high tension).
- On pointer up: if in slingshot mode, launch probe with $\vec{v}_0 = \min(v_{\max}, \kappa \cdot (\mathbf{p}_{\text{start}} - \mathbf{p}_{\text{curr}}))$ and trigger impulse wave into the `uRipples` buffer.
- If drag $< 12\text{px}$, spawn stationary probe ($\vec{v}_0 = 0$).

**Step 3: Run regression tests**
Run: `node test_suite.js`
Expected: 38/38 tests PASS.

**Step 4: Commit**
```bash
git add app.js
git commit -m "feat(manifold): add analytic gradient cursor coupling and kinetic slingshot probe launching"
```

---

### Task 4: 8-Node Quantum Accretion Ring & Geodesic Wormhole Transit Arcs

**Files:**
- Modify: `app.js` (lines ~1550–1780, ~2170–2260)
- Test: `test_suite.js`

**Step 1: Construct 8-node quantum accretion ring**
Around the singularity event horizon ($r = 2.4$), build a group of 8 diamond octahedra spaced at $\theta_k = \frac{2\pi k}{8}$.
Set initial state to dormant (`emissiveIntensity: 0.08`, slate color).

**Step 2: Dynamic charge progression**
When `activeBlackhole.absorbedCount` increments from $k-1 \to k$, flare the $k$-th node to luminous cyan (`#38bdf8`, peak intensity $2.4$, resting at $1.0$).
Accelerate the accretion ring orbital rotation speed proportionally with mass $n$.

**Step 3: Geodesic wormhole transit arcs**
Create a pool of 3 `THREE.Line` quadratic bezier objects.
When a probe is teleported from entrance $\mathbf{p}_t$ to exit $\mathbf{p}_e$:
- Form bezier curve $\mathbf{B}(t)$ with hyperspace apex at $z \approx 6.5$.
- Animate a photon traveling along the curve over $450\text{ms}$.
- Upon arrival at exit, trigger an exit shockwave into `uRipples` and spawn the teleported probe with an outward burst flare.

**Step 4: Invariant verification**
Ensure all assertions in `test_suite.js` remain intact (`duration: 24.0`, `activeBlackhole.startTime += 1.5`, `activeBlackhole.absorbedCount >= 8`, `window.__triggerWormhole`).

**Step 5: Run regression tests**
Run: `node test_suite.js`
Expected: 38/38 tests PASS.

**Step 6: Commit**
```bash
git add app.js
git commit -m "feat(manifold): implement 8-node accretion ring and geodesic wormhole transit arcs"
```

---

### Task 5: End-to-End Regression Verification & Invariant Audit

**Files:**
- Test: `test_suite.js`
- Audit: `app.js`, `styles.css`, `index.html`

**Step 1: Run comprehensive regression suite**
Run: `node test_suite.js`
Expected: 38/38 tests PASS.

**Step 2: Emoji & verbal label audit**
Audit files to confirm:
- Zero emoji characters across codebase (`index.html`, `app.js`, `styles.css`, `resume.js`, `i18n.js`).
- Zero text sprite badges on the 3D manifold canvas.
- No console errors or garbage collection hiccups.

**Step 3: Final integration commit**
```bash
git add .
git commit -m "chore(manifold): complete verification of kinetic dynamics and geometric singularity"
```
