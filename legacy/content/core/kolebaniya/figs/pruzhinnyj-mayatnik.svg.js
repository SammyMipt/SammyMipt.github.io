/* Пружинный маятник в двух состояниях — перерисовка tikz-иллюстрации
   конспекта (inputs/06/pics/spring_pend): слева груз в положении
   равновесия (метка 0), справа груз смещён на x, пружина растянута.
   Контуры — currentColor, смещённое состояние — токен --fig-b. */
window.FIGS = window.FIGS || {};
window.FIGS['pruzhinnyj-mayatnik'] = String.raw`
<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Груз на горизонтальной пружине: слева положение равновесия с меткой 0, справа груз смещён на x">
  <defs>
    <pattern id="fig-hatch-kol-spring" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1.1" opacity="0.5"/>
    </pattern>
  </defs>
  <!-- левая панель: равновесие -->
  <rect x="38" y="30" width="12" height="147" fill="url(#fig-hatch-kol-spring)"/>
  <line x1="50" y1="30" x2="50" y2="177" stroke="currentColor" stroke-width="2.4"/>
  <rect x="50" y="177" width="240" height="10" fill="url(#fig-hatch-kol-spring)"/>
  <line x1="50" y1="177" x2="292" y2="177" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="292,172 292,182 304,177" fill="currentColor"/>
  <text x="310" y="182" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">x</text>
  <polyline fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"
    points="50,150 60,150 66,141 78,159 90,141 102,159 114,141 126,159 138,141 144,150 152,150"/>
  <rect x="152" y="127" width="44" height="50" fill="currentColor" opacity="0.08"/>
  <rect x="152" y="127" width="44" height="50" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="152" y1="172" x2="152" y2="184" stroke="currentColor" stroke-width="2"/>
  <text x="152" y="204" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" fill="currentColor">0</text>
  <text x="174" y="115" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">m</text>
  <text x="100" y="128" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">k</text>
  <!-- правая панель: смещение x -->
  <rect x="348" y="30" width="12" height="147" fill="url(#fig-hatch-kol-spring)"/>
  <line x1="360" y1="30" x2="360" y2="177" stroke="currentColor" stroke-width="2.4"/>
  <rect x="360" y="177" width="240" height="10" fill="url(#fig-hatch-kol-spring)"/>
  <line x1="360" y1="177" x2="602" y2="177" stroke="currentColor" stroke-width="2.4"/>
  <polygon points="602,172 602,182 614,177" fill="currentColor"/>
  <text x="620" y="182" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">x</text>
  <polyline fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"
    points="360,150 370,150 378,139 394,161 410,139 426,161 442,139 458,161 474,139 490,161 500,150 508,150"/>
  <rect x="508" y="127" width="44" height="50" fill="var(--fig-b, #c2571a)" opacity="0.14"/>
  <rect x="508" y="127" width="44" height="50" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <line x1="452" y1="172" x2="452" y2="184" stroke="currentColor" stroke-width="2"/>
  <text x="452" y="204" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" fill="currentColor">0</text>
  <line x1="508" y1="172" x2="508" y2="184" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <text x="508" y="204" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="16" fill="var(--fig-b, #c2571a)">x</text>
  <text x="530" y="115" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="var(--fig-b, #c2571a)">m</text>
  <text x="430" y="126" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor">k</text>
</svg>`;
