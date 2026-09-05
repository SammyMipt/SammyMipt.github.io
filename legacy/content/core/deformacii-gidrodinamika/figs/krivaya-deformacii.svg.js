/* Кривая деформации твёрдого тела — перерисовка tikz-иллюстрации конспекта
   (inputs/07/pics/deformation_force): сила F против удлинения Δx, гладкая
   кривая через опорные точки tikz (0,0)–(1,2)–(2,5;3)–(4,5;3,1)–(5;2,5).
   Зоны 1–3 и точка 4 — как в исходнике; номера зон и точка разрушения —
   токен --fig-b, пунктирные ординаты — currentColor вполнакала. */
window.FIGS = window.FIGS || {};
window.FIGS['krivaya-deformacii'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="График зависимости силы от удлинения: линейная зона упругости, зона пластичности, полка текучести и точка разрушения">
  <defs>
    <marker id="fig-arr-dg-kd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- оси -->
  <line x1="42" y1="292" x2="496" y2="292" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-arr-dg-kd)"/>
  <text x="504" y="299" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">&#916;x</text>
  <line x1="42" y1="292" x2="42" y2="48" stroke="currentColor" stroke-width="1.8" marker-end="url(#fig-arr-dg-kd)"/>
  <text x="54" y="58" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">F</text>
  <!-- пунктирные границы зон -->
  <g stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5" opacity="0.55">
    <line x1="118" y1="292" x2="118" y2="168"/>
    <line x1="232" y1="292" x2="232" y2="106"/>
    <line x1="422" y1="292" x2="422" y2="137"/>
  </g>
  <!-- кривая F(Δx) -->
  <polyline fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"
    points="42.0,292.0 45.6,285.8 49.8,277.8 54.8,268.3 60.3,257.6 66.4,246.0 72.9,233.9 79.8,221.6 87.0,209.3 94.5,197.5 102.3,186.5 110.1,176.6 118.0,168.0 126.0,160.5 134.4,153.4 142.9,146.8 151.8,140.7 160.9,134.9 170.2,129.6 179.9,124.7 189.8,120.2 199.9,116.1 210.4,112.4 221.0,109.0 232.0,106.0 243.7,103.4 256.5,101.2 270.0,99.5 284.1,98.2 298.4,97.3 312.8,96.7 326.8,96.5 340.4,96.6 353.1,97.0 364.8,97.7 375.2,98.6 384.0,99.8 391.3,101.5 397.4,103.9 402.4,106.9 406.5,110.4 409.8,114.1 412.5,118.0 414.6,121.9 416.4,125.7 417.8,129.3 419.2,132.5 420.5,135.1 422.0,137.0"/>
  <!-- точка разрушения -->
  <circle cx="422" cy="137" r="4" fill="var(--fig-b, #c2571a)"/>
  <!-- номера зон и точки -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18" fill="var(--fig-b, #c2571a)">
    <text x="76" y="266">1</text>
    <text x="152" y="236">2</text>
    <text x="304" y="204">3</text>
    <text x="417" y="316">4</text>
  </g>
</svg>`;
