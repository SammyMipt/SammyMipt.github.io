/* Рассеяние тяжёлой частицы на лёгкой — перерисовка tikz-иллюстрации
   конспекта (pics/collision_1): слева частица M налетает со скоростью v
   на покоящуюся m, справа обе разлетаются со скоростями v1' и v2'.
   Тяжёлая частица — токен --fig-a, лёгкая — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['rasseyanie'] = String.raw`
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="До столкновения: тяжёлая частица M со скоростью v и покоящаяся лёгкая m; после: частицы разлетаются со скоростями v1' и v2'">
  <!-- до столкновения -->
  <circle cx="50" cy="100" r="15" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="200" cy="100" r="10" fill="var(--fig-b, #c2571a)"/>
  <line x1="68" y1="100" x2="148" y2="100" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="152,100 141,95 141,105" fill="currentColor"/>
  <!-- стрелка-переход -->
  <line x1="252" y1="100" x2="322" y2="100" stroke="currentColor" stroke-width="12" opacity="0.8"/>
  <polygon points="322,86 350,100 322,114" fill="currentColor" opacity="0.8"/>
  <!-- после столкновения -->
  <circle cx="400" cy="85" r="15" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="405" cy="112" r="10" fill="var(--fig-b, #c2571a)"/>
  <line x1="414.2" y1="80" x2="495" y2="51.7" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="500,50 488.2,48.9 492.1,60.1" fill="currentColor"/>
  <line x1="414.5" y1="115.2" x2="446" y2="123.7" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="450,125 439.7,119.1 436.7,130.3" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21">
    <text x="50" y="70" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">M</text>
    <text x="200" y="76" text-anchor="middle" fill="var(--fig-b, #c2571a)">m</text>
    <text x="108" y="124" text-anchor="middle" fill="currentColor">v</text>
    <text x="400" y="56" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">M</text>
    <text x="392" y="142" text-anchor="middle" fill="var(--fig-b, #c2571a)">m</text>
    <text x="452" y="86" fill="currentColor">v&#8321;&#8242;</text>
    <text x="428" y="146" fill="currentColor">v&#8322;&#8242;</text>
  </g>
</svg>`;
