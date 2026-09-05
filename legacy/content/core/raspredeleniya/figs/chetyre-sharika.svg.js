/* Перерисовка pics/4balls_box.tex: пять макросостояний четырёх
   неразличимых шариков в коробке с двумя ячейками, под каждым — его
   статистический вес G. Раскладка 3+2, как в tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['chetyre-sharika'] = String.raw`
<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Пять коробок с перегородкой и четырьмя неразличимыми шариками: все справа (G=1), один слева и три справа (G=4), поровну (G=6), три слева и один справа (G=4), все слева (G=1)">
  <g fill="none" stroke="currentColor" stroke-width="2.2">
    <rect x="35" y="48" width="160" height="80"/>
    <line x1="115" y1="48" x2="115" y2="128"/>
    <rect x="240" y="48" width="160" height="80"/>
    <line x1="320" y1="48" x2="320" y2="128"/>
    <rect x="445" y="48" width="160" height="80"/>
    <line x1="525" y1="48" x2="525" y2="128"/>
    <rect x="135" y="248" width="160" height="80"/>
    <line x1="215" y1="248" x2="215" y2="328"/>
    <rect x="345" y="248" width="160" height="80"/>
    <line x1="425" y1="248" x2="425" y2="328"/>
  </g>
  <g fill="var(--fig-a, #1f8a9d)" fill-opacity=".18" stroke="currentColor" stroke-width="2">
    <circle cx="135" cy="100" r="12"/><circle cx="171" cy="76" r="12"/><circle cx="175" cy="100" r="12"/><circle cx="143" cy="76" r="12"/>
    <circle cx="280" cy="88" r="12"/><circle cx="348" cy="100" r="12"/><circle cx="372" cy="76" r="12"/><circle cx="340" cy="76" r="12"/>
    <circle cx="485" cy="100" r="12"/><circle cx="485" cy="76" r="12"/><circle cx="553" cy="100" r="12"/><circle cx="553" cy="76" r="12"/>
    <circle cx="155" cy="300" r="12"/><circle cx="155" cy="276" r="12"/><circle cx="179" cy="288" r="12"/><circle cx="255" cy="288" r="12"/>
    <circle cx="365" cy="300" r="12"/><circle cx="389" cy="276" r="12"/><circle cx="365" cy="276" r="12"/><circle cx="389" cy="300" r="12"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor" text-anchor="middle" opacity=".72">
    <text x="115" y="32">Макро 1</text>
    <text x="320" y="32">Макро 2</text>
    <text x="525" y="32">Макро 3</text>
    <text x="215" y="232">Макро 4</text>
    <text x="425" y="232">Макро 5</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="currentColor" text-anchor="middle">
    <text x="115" y="162">G = 1</text>
    <text x="320" y="162">G = 4</text>
    <text x="525" y="162">G = 6</text>
    <text x="215" y="362">G = 4</text>
    <text x="425" y="362">G = 1</text>
  </g>
</svg>`;
