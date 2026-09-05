/* Физический маятник — перерисовка tikz-иллюстрации конспекта
   (inputs/06/pics/physiacal_pend): твёрдое тело с точкой подвеса A,
   центром масс C и центром качания B; расстояние a — токен --fig-a,
   эффективная длина l_эфф — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['fizicheskij-mayatnik'] = String.raw`
<svg viewBox="0 0 460 385" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Физический маятник: тело произвольной формы с точкой подвеса A, центром масс C и центром качания B; отмечены расстояние a и эффективная длина">
  <defs>
    <marker id="fig-arr-kol-fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-a, #1f8a9d)"/>
    </marker>
    <marker id="fig-arr-kol-fb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--fig-b, #c2571a)"/>
    </marker>
    <marker id="fig-arr-kol-fc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- контур тела -->
  <path d="M 60 240 C 60 160, 77.5 71, 157.5 71 C 237.5 71, 198 150.5, 255 207.5 C 312 264.5, 205 337.5, 125 337.5 C 45 337.5, 60 320, 60 240 Z"
        fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.4"/>
  <!-- вертикаль из точки подвеса -->
  <line x1="79.5" y1="123" x2="79.5" y2="305" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.55"/>
  <!-- эффективная длина A–B -->
  <line x1="79.5" y1="123" x2="255" y2="272.5" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"
        marker-start="url(#fig-arr-kol-fb)" marker-end="url(#fig-arr-kol-fb)"/>
  <text x="196" y="212" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="var(--fig-b, #c2571a)">l</text>
  <text x="203" y="219" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="12.5" fill="var(--fig-b, #c2571a)">&#1101;&#1092;&#1092;</text>
  <!-- расстояние A–C -->
  <line x1="79.5" y1="123" x2="170.5" y2="201" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"
        marker-start="url(#fig-arr-kol-fa)" marker-end="url(#fig-arr-kol-fa)"/>
  <text x="110" y="176" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="var(--fig-a, #1f8a9d)">a</text>
  <!-- точки A, C, B -->
  <circle cx="79.5" cy="123" r="4" fill="currentColor"/>
  <text x="62" y="118" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">A</text>
  <circle cx="170.5" cy="201" r="4" fill="currentColor"/>
  <text x="158" y="226" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">C</text>
  <circle cx="255" cy="272.5" r="4" fill="currentColor"/>
  <text x="276" y="280" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor">B</text>
  <!-- направление g -->
  <line x1="380" y1="110" x2="380" y2="240" stroke="currentColor" stroke-width="2.2" marker-end="url(#fig-arr-kol-fc)"/>
  <text x="396" y="182" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">g&#8407;</text>
</svg>`;
