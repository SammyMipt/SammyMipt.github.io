/* Эллипс с фокусами и полуосями — перерисовка tikz-иллюстрации конспекта
   (pics/ellyps): фокусы F1 и F2, оси 2a (--fig-a) и 2b (--fig-b), точка M
   на эллипсе с расстояниями r1 и r2 до фокусов. */
window.FIGS = window.FIGS || {};
window.FIGS['ellips-fokusy'] = String.raw`
<svg viewBox="0 0 520 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эллипс с фокусами F1 и F2, большой осью 2a, малой осью 2b и точкой M, соединённой с фокусами отрезками r1 и r2">
  <ellipse cx="260" cy="170" rx="240" ry="144" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <!-- большая ось 2a -->
  <line x1="28" y1="170" x2="492" y2="170" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <polygon points="20,170 32,164.5 32,175.5" fill="var(--fig-a, #1f8a9d)"/>
  <polygon points="500,170 488,164.5 488,175.5" fill="var(--fig-a, #1f8a9d)"/>
  <!-- малая ось 2b -->
  <line x1="260" y1="34" x2="260" y2="306" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <polygon points="260,26 254.5,38 265.5,38" fill="var(--fig-b, #c2571a)"/>
  <polygon points="260,314 254.5,302 265.5,302" fill="var(--fig-b, #c2571a)"/>
  <!-- отрезки до точки M -->
  <line x1="116" y1="170" x2="444.9" y2="254.6" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="452,256.4 441.4,249.4 438.7,260.5" fill="currentColor"/>
  <line x1="404" y1="170" x2="448.1" y2="249.4" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="452,256.4 441.1,251.1 450.7,245.8" fill="currentColor"/>
  <!-- фокусы и точка M -->
  <circle cx="116" cy="170" r="5.5" fill="currentColor"/>
  <circle cx="404" cy="170" r="5.5" fill="currentColor"/>
  <circle cx="452" cy="256.4" r="5.5" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="116" y="196" text-anchor="middle" fill="currentColor">F<tspan dy="6" font-size="14">1</tspan></text>
    <text x="404" y="158" text-anchor="middle" fill="currentColor">F<tspan dy="6" font-size="14">2</tspan></text>
    <text x="216" y="160" text-anchor="end" fill="var(--fig-a, #1f8a9d)">2a</text>
    <text x="270" y="112" fill="var(--fig-b, #c2571a)">2b</text>
    <text x="282" y="204" text-anchor="middle" fill="currentColor">r<tspan dy="6" font-size="14">1</tspan></text>
    <text x="440" y="212" fill="currentColor">r<tspan dy="6" font-size="14">2</tspan></text>
    <text x="462" y="276" fill="var(--fig-b, #c2571a)">M</text>
  </g>
</svg>`;
