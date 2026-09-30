# 3D Loss Manifold Kinetic Dynamics & Geometric Singularity Design

**Date**: 2026-09-30  
**Status**: Approved  
**Scope**: 3D Loss Manifold Physics, Kinetic Interactions, Slingshot Probe Launching, Non-Verbal Singularity Accretion Gauge, Geodesic Wormhole Teleportation Arcs, and Relativistic Redshift.

---

## 1. Executive Summary & Objective

This specification details the comprehensive elevation of the Three.js 3D loss manifold in Amirreza Farnam Taheri's portfolio. It transitions the landscape from a passive numerical surface into an active, tactile physics sandbox where:
1. Users intuitively deform the landscape via an interactive "rubber-sheet" mass indenter.
2. Optimization probes can be launched via an elastic kinetic drag-and-flick slingshot.
3. Impacts and events propagate dynamic radial damping wave ripples across the terrain.
4. The black hole features an 8-node quantum accretion charge ring that visually indicates progress toward wormhole threshold without any verbal text labels.
5. Wormhole teleportation is visibly rendered via luminous 3D geodesic hyperspace arcs.
6. The entire scene adheres strictly to a clean, non-verbal geometric presentation.

---

## 2. Constraints & Invariants

* **Architecture**: Zero-build static web portfolio (vanilla ES6+, Three.js r128 CDN).
* **Performance**: Strict 60 FPS performance envelope with zero runtime garbage collection overhead.
* **No Verbal Labels**: Strict user constraint eliminating all textual badges (`min ℒ(θ)`, `saddle ∇²ℒ`, `local min`) and floating HUDs from the 3D canvas.
* **Regression Safety**: 100% pass rate maintained across all 38 test suites in `test_suite.js` (preserving 24.0s blackhole duration, +1.5s absorption rejuvenation, 8 probe threshold, and `window.__triggerWormhole`).
* **Non-Destructive UI**: Clean overlay that never compromises hero text contrast, accessibility, or mobile responsiveness.

---

## 3. Detailed Architectural Specification

### 3.1 Landmark De-Cluttering & Pure Geometric Stationary Points
* Excise `createTextBadgeSprite` and sprite addition from `criticalPointsConfig`.
* Retain and polish the pure geometric elements:
  * Glowing 3D diamond octahedron (`OctahedronGeometry(0.52, 0)`).
  * Surface datum tether line (`LineBasicMaterial`).
  * Ground anchor pulse ring (`RingGeometry(0.65, 0.95)` with additive blending).

### 3.2 GPU Shader Deformation & Wave Ripple Pipeline
* In `skinMat.onBeforeCompile`:
  * **Rubber-Sheet Cursor Indentation**:
    * Uniforms: `uCursorPos` (`vec2`), `uCursorActive` (`float`), `uCursorDepth` (`float`).
    * In vertex shader, compute vertical displacement:
      $$\Delta z_{\text{indent}} = -uCursorDepth \cdot \exp\left(-\frac{\|\mathbf{p}_{xy} - uCursorPos\|^2}{2\sigma^2}\right)$$
      with $\sigma = 3.2$ and $uCursorDepth \in [0, 1.4]$.
  * **Dynamic Radial Wave Ripples**:
    * Uniform array: `uRipples[4]` (`vec4`: $x_i, y_i, t_{0,i}, A_{0,i}$).
    * Vertex displacement sum:
      $$\Delta z_{\text{wave}} = \sum_{i=1}^4 A_{0,i} \cdot \sin(k r_i - \omega \Delta t_i) \cdot \frac{e^{-\lambda \Delta t_i}}{1 + \gamma r_i}$$
      where $r_i = \|\mathbf{p}_{xy} - \mathbf{c}_i\|$ and $\Delta t_i = \max(0.0, t - t_{0,i})$.
  * **Relativistic Gravitational Redshift**:
    * In fragment shader, when vertex displaced elevation drops into the vortex throat ($z < -1.8$), blend fragment color into incandescent relativistic redshift (`vec3(0.86, 0.15, 0.05)` to amber `#f59e0b`).

### 3.3 Probe Kinematics & Kinetic Drag-and-Flick Slingshot
* **Analytic Gradient Coupling**:
  * Probes evaluate total gradient:
    $$\nabla \mathcal{L}_{\text{total}}(\mathbf{x}) = \nabla \mathcal{L}_{\text{AMR}}(\mathbf{x}) + \nabla \mathcal{L}_{\text{cursor}}(\mathbf{x}) + \mathbf{F}_{\text{singularity}}(\mathbf{x})$$
    $$\nabla \mathcal{L}_{\text{cursor}}(\mathbf{x}) = \frac{uCursorDepth}{\sigma^2} (\mathbf{x} - \mathbf{x}_{\text{cursor}}) \exp\left(-\frac{\|\mathbf{x} - \mathbf{x}_{\text{cursor}}\|^2}{2\sigma^2}\right)$$
* **Kinetic Slingshot (Drag-and-Flick)**:
  * Pointer down records anchor $\mathbf{p}_{\text{start}}$ in manifold coordinates.
  * Dragging $> 12\text{px}$ enters slingshot mode: draws elastic trajectory line (`THREE.Line`) from $\mathbf{p}_{\text{start}}$ to $\mathbf{p}_{\text{curr}}$ with color transition (cyan $\to$ amber).
  * Pointer up launches probe with $\vec{v}_0 = \min(v_{\max}, \; \kappa \cdot (\mathbf{p}_{\text{start}} - \mathbf{p}_{\text{curr}}))$.
  * Dispatches an impulse ripple into the `uRipples` ring buffer upon launch.
  * Tap ($< 12\text{px}$) spawns stationary probe ($\vec{v}_0 = 0$).

### 3.4 8-Node Quantum Accretion Ring & Wormhole Geodesic Arcs
* **8-Node Quantum Accretion Ring ($n/8$)**:
  * 8 geometric octahedra at radius $r = 2.4$ along event horizon periphery.
  * As `activeBlackhole.absorbedCount` increments from $k-1 \to k$, the $k$-th node ignites from dormant (`emissiveIntensity: 0.08`) to hyper-luminous cyan (`emissiveIntensity: 1.0`, peak flash `2.4`).
  * Orbital rotation accelerates proportionally with mass $n$.
  * At $n = 8$, nodes resonate and contract inward, triggering wormhole state.
* **Geodesic Wormhole Teleportation Arcs**:
  * 3 pre-allocated quadratic bezier lines (`THREE.Line`).
  * When a probe is teleported from throat $\mathbf{p}_t$ to exit $\mathbf{p}_e$, render an arched hyperspace trajectory ribbon ($z_{\text{apex}} \approx 6.5$) with a photon particle pulse traversing it over $450\text{ms}$.
  * Dispatches an exit shockwave ripple on the manifold upon arrival.

---

## 4. Decision Log

| Decision | Alternatives Considered | Rationale |
| :--- | :--- | :--- |
| **Pure Geometric Landmarks** | Floating 2D canvas text sprites (`min ℒ(θ)`, `saddle ∇²ℒ`) | User directive: avoid verbal labels. 3D octahedra and ground pulse rings maintain topological clarity without textual clutter. |
| **Non-Verbal Accretion Gauge** | Floating text HUD chip (`SINGULARITY 3/8`) | 8 orbital quantum charge nodes visually communicate state and build anticipation through lighting and spin dynamics. |
| **Hybrid GPU/CPU Deformation** | Full CPU vertex buffer mutation every frame | Vertex shader Gaussian well (`uCursorDepth`) and wave ripples (`uRipples[4]`) preserve 60 FPS on low-power devices. |
| **Kinetic Drag Slingshot Threshold** | Separate UI button / modifier key | Natural $12\text{px}$ drag threshold separates camera orbit from launch aiming without needing UI buttons or modifier keys. |

---

## 5. Verification Plan

1. Run `node test_suite.js` to ensure all 38 regression tests pass.
2. Confirm zero emoji glyphs in the codebase.
3. Validate that no verbal text sprites exist on the 3D manifold canvas.
4. Verify smooth 60 FPS animation, slingshot aiming line, ripple wave propagation, quantum node ignition ($0 \to 8$), and geodesic wormhole transit arcs in browser.
