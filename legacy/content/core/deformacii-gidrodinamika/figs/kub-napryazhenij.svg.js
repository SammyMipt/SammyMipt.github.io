/* Кубик под тремя парами нормальных напряжений — перерисовка tikz-иллюстрации
   конспекта (inputs/07/pics/cube_def) в той же аксонометрии (z-орт вниз-влево).
   Пары стрелок σ_x, σ_y, σ_z — токен --fig-b, оси и куб — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['kub-napryazhenij'] = String.raw`
<svg viewBox="34 62 312 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кубик с тремя парами встречных нормальных напряжений сигма x, сигма y, сигма z вдоль координатных осей">
  <defs>
    <marker id="fig-arr-dg-kb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="fig-arr-dg-kb-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
  </defs>
  <!-- грани куба -->
  <polygon points="150,250 274,250 274,126 150,126" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.7"/>
  <polygon points="150,250 150,126 106.2,169.8 106.2,293.8" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.7"/>
  <polygon points="150,250 274,250 230.2,293.8 106.2,293.8" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.13" stroke="currentColor" stroke-width="1.7"/>
  <!-- ближние рёбра -->
  <g stroke="currentColor" stroke-width="1" opacity="0.75">
    <line x1="230.2" y1="293.8" x2="230.2" y2="169.8"/>
    <line x1="106.2" y1="169.8" x2="230.2" y2="169.8"/>
    <line x1="274" y1="126" x2="230.2" y2="169.8"/>
  </g>
  <!-- оси -->
  <g stroke="currentColor" stroke-width="1.6">
    <line x1="150" y1="250" x2="305" y2="250" marker-end="url(#fig-arr-dg-kb)"/>
    <line x1="150" y1="250" x2="150" y2="95" marker-end="url(#fig-arr-dg-kb)"/>
    <line x1="150" y1="250" x2="95.3" y2="304.7" marker-end="url(#fig-arr-dg-kb)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">
    <text x="308" y="268">x</text>
    <text x="128" y="104">y</text>
    <text x="76" y="302">z</text>
  </g>
  <!-- пары напряжений -->
  <g stroke="var(--fig-b, #c2571a)" stroke-width="2.4">
    <line x1="252.1" y1="209.9" x2="301.7" y2="209.9" marker-end="url(#fig-arr-dg-kb-b)"/>
    <line x1="128.1" y1="209.9" x2="78.5" y2="209.9" marker-end="url(#fig-arr-dg-kb-b)"/>
    <line x1="190.1" y1="147.9" x2="190.1" y2="98.3" marker-end="url(#fig-arr-dg-kb-b)"/>
    <line x1="190.1" y1="271.9" x2="190.1" y2="321.5" marker-end="url(#fig-arr-dg-kb-b)"/>
    <line x1="168.2" y1="231.8" x2="150.7" y2="249.3" marker-end="url(#fig-arr-dg-kb-b)"/>
    <line x1="212" y1="188" x2="229.5" y2="170.5" marker-end="url(#fig-arr-dg-kb-b)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="var(--fig-b, #c2571a)">
    <text x="307" y="216">&#963;<tspan baseline-shift="sub" font-size="12">x</tspan></text>
    <text x="47" y="216">&#963;<tspan baseline-shift="sub" font-size="12">x</tspan></text>
    <text x="198" y="94">&#963;<tspan baseline-shift="sub" font-size="12">y</tspan></text>
    <text x="198" y="338">&#963;<tspan baseline-shift="sub" font-size="12">y</tspan></text>
    <text x="122" y="272">&#963;<tspan baseline-shift="sub" font-size="12">z</tspan></text>
    <text x="234" y="162">&#963;<tspan baseline-shift="sub" font-size="12">z</tspan></text>
  </g>
</svg>`;
