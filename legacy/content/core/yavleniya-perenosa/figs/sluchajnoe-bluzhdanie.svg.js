/* Случайное блуждание по столбам («пьяный матрос») — собственный
   рисунок недели (в конспекте пустая заготовка figure). Столбы и
   разметка — currentColor, пример последовательности шагов — --fig-a,
   стартовая точка и вероятности — --fig-b. Символы совпадают
   с выводом: шаг l, смещение X. */
window.FIGS = window.FIGS || {};
window.FIGS['sluchajnoe-bluzhdanie'] = String.raw`
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ряд столбов на равных расстояниях; от стартового столба равновероятны шаги влево и вправо; выше показана ломаная одной случайной последовательности шагов и итоговое смещение X">
  <!-- земля и столбы -->
  <line x1="40" y1="250" x2="606" y2="250" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="3.4" opacity="0.8">
    <line x1="80" y1="250" x2="80" y2="196"/>
    <line x1="160" y1="250" x2="160" y2="196"/>
    <line x1="240" y1="250" x2="240" y2="196"/>
    <line x1="320" y1="250" x2="320" y2="196"/>
    <line x1="400" y1="250" x2="400" y2="196"/>
    <line x1="480" y1="250" x2="480" y2="196"/>
    <line x1="560" y1="250" x2="560" y2="196"/>
  </g>

  <!-- расстояние l между столбами -->
  <g stroke="currentColor" stroke-width="1.4" opacity="0.7">
    <line x1="163" y1="278" x2="237" y2="278"/>
  </g>
  <g fill="currentColor" opacity="0.7">
    <polygon points="160,278 170,274 170,282"/>
    <polygon points="240,278 230,274 230,282"/>
  </g>
  <text x="200" y="273" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="currentColor" text-anchor="middle">l</text>

  <!-- матрос у стартового столба и равновероятные шаги -->
  <circle cx="320" cy="184" r="7" fill="var(--fig-b, #c2571a)"/>
  <path d="M 308 180 Q 280 162 252 178" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <polygon points="248,181 259,172 262,181" fill="var(--fig-b, #c2571a)"/>
  <path d="M 332 180 Q 360 162 388 178" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <polygon points="392,181 378,181 381,172" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="var(--fig-b, #c2571a)" text-anchor="middle">
    <text x="276" y="154">1/2</text>
    <text x="364" y="154">1/2</text>
  </g>

  <!-- пример последовательности шагов (снизу вверх) -->
  <polyline points="320,150 400,132 480,114 400,96 480,78 560,60 480,42" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2"/>
  <g fill="var(--fig-a, #1f8a9d)">
    <circle cx="320" cy="150" r="4"/>
    <circle cx="400" cy="132" r="3.2"/>
    <circle cx="480" cy="114" r="3.2"/>
    <circle cx="400" cy="96" r="3.2"/>
    <circle cx="480" cy="78" r="3.2"/>
    <circle cx="560" cy="60" r="3.2"/>
    <circle cx="480" cy="42" r="4"/>
  </g>

  <!-- итоговое смещение X -->
  <g stroke="currentColor" stroke-width="1.1" opacity="0.4" stroke-dasharray="4 4">
    <line x1="320" y1="144" x2="320" y2="24"/>
    <line x1="480" y1="36" x2="480" y2="24"/>
  </g>
  <g stroke="currentColor" stroke-width="1.4" opacity="0.8">
    <line x1="323" y1="24" x2="477" y2="24"/>
  </g>
  <g fill="currentColor" opacity="0.8">
    <polygon points="320,24 330,20 330,28"/>
    <polygon points="480,24 470,20 470,28"/>
  </g>
  <text x="400" y="19" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="currentColor" text-anchor="middle">X</text>
</svg>`;
