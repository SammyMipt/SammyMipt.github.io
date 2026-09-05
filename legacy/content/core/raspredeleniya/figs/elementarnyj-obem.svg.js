/* Перерисовка pics/elementary_volume_v.tex: трёхмерное пространство
   скоростей, вектор v до элементарного кубика со сторонами dv_x, dv_y,
   dv_z. Косоугольная проекция как в tikz (ось v_z к зрителю вниз-влево).
   Кубик — var(--fig-a), оси и подписи — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['elementarnyj-obem'] = String.raw`
<svg viewBox="0 0 470 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Оси v x, v y, v z пространства скоростей. Из начала координат к маленькому кубику проведён вектор v; стороны кубика подписаны dv x, dv y, dv z">
  <!-- оси -->
  <g stroke="currentColor" stroke-width="2">
    <line x1="200" y1="252" x2="396" y2="252"/>
    <line x1="200" y1="252" x2="200" y2="62"/>
    <line x1="200" y1="252" x2="110" y2="342"/>
  </g>
  <path d="M 407 252 l -11 -4.5 v 9 z" fill="currentColor"/>
  <path d="M 200 51 l -4.5 11 h 9 z" fill="currentColor"/>
  <path d="M 102 350 l 11.5 -3.2 l -6.4 -6.4 z" fill="currentColor"/>
  <!-- вектор v к точке A = (244, 208) -->
  <line x1="200" y1="252" x2="238" y2="214" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 246 206 l -11.5 3.2 l 6.4 6.4 z" fill="currentColor"/>
  <!-- кубик: передняя грань, верхняя, правая -->
  <g stroke="var(--fig-a, #1f8a9d)" stroke-width="2" fill="var(--fig-a, #1f8a9d)">
    <path d="M 244 208 h 23 v -23 h -23 z" fill-opacity=".16"/>
    <path d="M 244 185 h 23 l 12 -12 h -23 z" fill-opacity=".26"/>
    <path d="M 267 208 v -23 l 12 -12 v 23 z" fill-opacity=".10"/>
  </g>
  <!-- размерные стрелки -->
  <g stroke="currentColor" stroke-width="1.4">
    <line x1="244" y1="216" x2="267" y2="216"/>
    <line x1="238" y1="208" x2="238" y2="185"/>
    <line x1="271" y1="214" x2="283" y2="202"/>
  </g>
  <g fill="currentColor">
    <path d="M 244 216 l 6 -3 v 6 z"/>
    <path d="M 267 216 l -6 -3 v 6 z"/>
    <path d="M 238 208 l -3 -6 h 6 z"/>
    <path d="M 238 185 l -3 6 h 6 z"/>
    <path d="M 271 214 l 6.4 -1.8 l -4.6 -4.6 z"/>
    <path d="M 283 202 l -6.4 1.8 l 4.6 4.6 z"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">
    <text x="412" y="258">v</text>
    <text x="425" y="264" font-size="14">x</text>
    <text x="210" y="60">v</text>
    <text x="223" y="66" font-size="14">y</text>
    <text x="88" y="352" text-anchor="end">v</text>
    <text x="101" y="358" font-size="14" text-anchor="end">z</text>
    <text x="204" y="236">v</text>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <line x1="203" y1="220" x2="213" y2="220"/>
  </g>
  <path d="M 216 220 l -6 -2.5 v 5 z" fill="currentColor"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="15" fill="currentColor">
    <text x="255" y="234" text-anchor="middle">dv</text>
    <text x="271" y="238" font-size="11">x</text>
    <text x="212" y="200" text-anchor="end">dv</text>
    <text x="214" y="204" font-size="11">y</text>
    <text x="288" y="220">dv</text>
    <text x="309" y="224" font-size="11">z</text>
  </g>
</svg>`;
