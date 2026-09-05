/* Задача о двойной звезде — перерисовка tikz-рисунка методички
   (_inputs/pictures/week_5_task_2): две звезды на круговых орбитах
   вокруг общего центра масс; лёгкая (--fig-a) дальше, тяжёлая
   (--fig-b) ближе; расстояние между ними 0,5 а.е. */
window.FIGS = window.FIGS || {};
window.FIGS['dvojnaya-zvezda'] = String.raw`
<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Двойная звезда: лёгкая и тяжёлая компоненты обращаются по круговым орбитам разных радиусов вокруг общего центра масс">
  <!-- орбиты вокруг центра масс -->
  <circle cx="230" cy="150" r="144" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="9 7" opacity="0.8"/>
  <circle cx="230" cy="150" r="72" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="9 7" opacity="0.8"/>
  <!-- центр масс -->
  <circle cx="230" cy="150" r="5" fill="currentColor"/>
  <!-- лёгкая звезда на дальней орбите -->
  <circle cx="86" cy="150" r="34" fill="var(--fig-a, #1f8a9d)" opacity="0.25"/>
  <circle cx="86" cy="150" r="34" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <!-- тяжёлая звезда на ближней орбите -->
  <circle cx="302" cy="150" r="44" fill="var(--fig-b, #c2571a)" opacity="0.25"/>
  <circle cx="302" cy="150" r="44" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <!-- расстояние между звёздами -->
  <line x1="94" y1="262" x2="294" y2="262" stroke="currentColor" stroke-width="2"/>
  <polygon points="86,262 98,256.5 98,267.5" fill="currentColor"/>
  <polygon points="302,262 290,256.5 290,267.5" fill="currentColor"/>
  <line x1="86" y1="192" x2="86" y2="274" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="4 5"/>
  <line x1="302" y1="202" x2="302" y2="274" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="4 5"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18">
    <text x="86" y="157" text-anchor="middle" font-style="italic" fill="currentColor">M<tspan dy="6" font-size="14" font-style="normal">&#8857;</tspan></text>
    <text x="302" y="157" text-anchor="middle" font-style="italic" fill="currentColor">2M<tspan dy="6" font-size="14" font-style="normal">&#8857;</tspan></text>
    <text x="230" y="178" text-anchor="middle" fill="currentColor">ЦМ</text>
    <text x="194" y="288" text-anchor="middle" fill="currentColor">0,5 а.е.</text>
  </g>
</svg>`;
