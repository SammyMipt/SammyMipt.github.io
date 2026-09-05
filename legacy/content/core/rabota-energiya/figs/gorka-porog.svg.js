/* Шарик и подвижная горка — перерисовка tikz-иллюстрации конспекта
   (pics/collision_2): слева шарик со скоростью v и энергией K подлетает
   к горке высоты, отвечающей энергии Q; справа шарик заехал на горку
   и они движутся вместе со скоростью V_C. Шарик — токен --fig-a,
   отметка Q — --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['gorka-porog'] = String.raw`
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Слева шарик катится к горке, высота горки отмечена как Q; справа шарик стоит на вершине горки и обе движутся вместе со скоростью V C">
  <defs>
    <pattern id="fig-hatch-gorka" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1.1" opacity="0.5"/>
    </pattern>
  </defs>
  <!-- земля -->
  <line x1="14" y1="143" x2="546" y2="143" stroke="currentColor" stroke-width="2.4"/>
  <rect x="14" y="144" width="532" height="9" fill="url(#fig-hatch-gorka)"/>
  <!-- левая горка -->
  <polyline fill="none" stroke="currentColor" stroke-width="2.4" points="33,143 42.5,143 52,143 61.5,142.8 71,142.2 75.8,141.3 80.5,139.7 85.2,137 90,132.7 94.8,126.6 99.5,118.3 104.2,108.2 109,96.9 113.8,85.6 118.5,75.9 123.2,69.3 128,67 132.8,69.3 137.5,75.9 142.2,85.6 147,96.9 151.8,108.2 156.5,118.3 161.2,126.6 166,132.7 170.8,137 175.5,139.7 180.2,141.3 185,142.2 194.5,142.8 204,143 213.5,143 223,143"/>
  <!-- правая горка -->
  <polyline fill="none" stroke="currentColor" stroke-width="2.4" points="299,143 308.5,143 318,143 327.5,142.8 337,142.2 341.8,141.3 346.5,139.7 351.2,137 356,132.7 360.8,126.6 365.5,118.3 370.2,108.2 375,96.9 379.8,85.6 384.5,75.9 389.2,69.3 394,67 398.8,69.3 403.5,75.9 408.2,85.6 413,96.9 417.8,108.2 422.5,118.3 427.2,126.6 432,132.7 436.8,137 441.5,139.7 446.2,141.3 451,142.2 460.5,142.8 470,143 479.5,143 489,143"/>
  <!-- шарик слева и его скорость -->
  <circle cx="33" cy="131.6" r="11" fill="var(--fig-a, #1f8a9d)"/>
  <line x1="47" y1="131.6" x2="76" y2="131.6" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="82.4,131.6 71.4,126.6 71.4,136.6" fill="currentColor"/>
  <!-- высота горки как энергия Q -->
  <line x1="128" y1="140" x2="128" y2="70" stroke="var(--fig-b, #c2571a)" stroke-width="2.2"/>
  <polygon points="128,67 130.9,76.4 125.1,76.4" fill="var(--fig-b, #c2571a)"/>
  <polygon points="128,143 125.1,133.6 130.9,133.6" fill="var(--fig-b, #c2571a)"/>
  <!-- стрелка-переход -->
  <line x1="234" y1="105" x2="272" y2="105" stroke="currentColor" stroke-width="11" opacity="0.8"/>
  <polygon points="272,92 296,105 272,118" fill="currentColor" opacity="0.8"/>
  <!-- шарик на вершине и общая скорость -->
  <circle cx="394" cy="56" r="11" fill="var(--fig-a, #1f8a9d)"/>
  <line x1="409" y1="56" x2="452" y2="56" stroke="currentColor" stroke-width="2.6"/>
  <polygon points="458.6,56 447.6,51 447.6,61" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19">
    <text x="62" y="120" text-anchor="middle" fill="currentColor">v, K</text>
    <text x="140" y="110" fill="var(--fig-b, #c2571a)">Q</text>
    <text x="432" y="44" text-anchor="middle" fill="currentColor">V<tspan dy="4" font-size="13.5">C</tspan></text>
  </g>
</svg>`;
