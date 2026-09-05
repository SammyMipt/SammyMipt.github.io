/* Перерисовка pics/3balls_box.tex: три коробки с перегородкой, в каждой
   три пронумерованных шарика; расположения различимы как микросостояния,
   макросостояние одно. Шарики — var(--fig-a), контуры и подписи —
   currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['tri-sharika'] = String.raw`
<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три коробки с перегородкой и тремя пронумерованными шариками: в каждой один шарик слева и два справа, но номера шариков разные. Это три микросостояния одного макросостояния">
  <g fill="none" stroke="currentColor" stroke-width="2.2">
    <rect x="35" y="48" width="160" height="80"/>
    <line x1="115" y1="48" x2="115" y2="128"/>
    <rect x="240" y="48" width="160" height="80"/>
    <line x1="320" y1="48" x2="320" y2="128"/>
    <rect x="445" y="48" width="160" height="80"/>
    <line x1="525" y1="48" x2="525" y2="128"/>
  </g>
  <g fill="var(--fig-a, #1f8a9d)" fill-opacity=".18" stroke="currentColor" stroke-width="2">
    <circle cx="75" cy="88" r="12"/><circle cx="143" cy="100" r="12"/><circle cx="167" cy="76" r="12"/>
    <circle cx="280" cy="88" r="12"/><circle cx="348" cy="100" r="12"/><circle cx="372" cy="76" r="12"/>
    <circle cx="485" cy="88" r="12"/><circle cx="553" cy="100" r="12"/><circle cx="577" cy="76" r="12"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="14" fill="currentColor" text-anchor="middle">
    <text x="75" y="93">3</text><text x="143" y="105">1</text><text x="167" y="81">2</text>
    <text x="280" y="93">2</text><text x="348" y="105">1</text><text x="372" y="81">3</text>
    <text x="485" y="93">1</text><text x="553" y="105">2</text><text x="577" y="81">3</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor" text-anchor="middle" opacity=".72">
    <text x="115" y="32">Микро 1</text>
    <text x="320" y="32">Микро 2</text>
    <text x="525" y="32">Микро 3</text>
    <text x="115" y="160">Макро 1</text>
    <text x="320" y="160">Макро 1</text>
    <text x="525" y="160">Макро 1</text>
  </g>
</svg>`;
