/* Растяжение закреплённого стержня — перерисовка tikz-иллюстрации конспекта
   (inputs/07/pics/line_def): стена со штриховкой, стержень длины l сечением S,
   добавка δl (токен --fig-b) и растягивающая сила F. Символы совпадают
   с выводом локальной формы закона Гука. */
window.FIGS = window.FIGS || {};
window.FIGS['rastyazhenie-sterzhnya'] = String.raw`
<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Стержень длины l и сечения S, закреплённый в стене; сила F растягивает его на добавку дельта l">
  <defs>
    <marker id="fig-arr-dg-rs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- стена со штриховкой -->
  <line x1="42" y1="40" x2="42" y2="150" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.3" opacity="0.55">
    <line x1="42" y1="52" x2="26" y2="66"/>
    <line x1="42" y1="72" x2="26" y2="86"/>
    <line x1="42" y1="92" x2="26" y2="106"/>
    <line x1="42" y1="112" x2="26" y2="126"/>
    <line x1="42" y1="132" x2="26" y2="146"/>
  </g>
  <!-- стержень длины l -->
  <rect x="42" y="62" width="363" height="66" fill="var(--fig-a, #0f7a8a)" fill-opacity="0.28" stroke="currentColor" stroke-width="1.8"/>
  <!-- добавка δl -->
  <rect x="405" y="62" width="55" height="66" fill="var(--fig-b, #c2571a)" fill-opacity="0.4" stroke="currentColor" stroke-width="1.8"/>
  <!-- размер l -->
  <line x1="46" y1="46" x2="401" y2="46" stroke="currentColor" stroke-width="1.3" marker-start="url(#fig-arr-dg-rs)" marker-end="url(#fig-arr-dg-rs)"/>
  <text x="216" y="38" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor" text-anchor="middle">l</text>
  <!-- размер δl -->
  <text x="432" y="38" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)" text-anchor="middle">&#948;l</text>
  <line x1="409" y1="46" x2="456" y2="46" stroke="var(--fig-b, #c2571a)" stroke-width="1.3"/>
  <!-- сила F -->
  <line x1="460" y1="95" x2="566" y2="95" stroke="currentColor" stroke-width="2.6" marker-end="url(#fig-arr-dg-rs)"/>
  <text x="584" y="102" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">F</text>
  <!-- сечение S -->
  <text x="460" y="176" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor" text-anchor="middle">S</text>
  <line x1="460" y1="132" x2="460" y2="158" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.6"/>
</svg>`;
