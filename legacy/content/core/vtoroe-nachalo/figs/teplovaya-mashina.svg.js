/* Перерисовка pics/normal_steam_machine.tex: схема любой тепловой машины.
   Рабочее тело забирает Q_H у нагревателя T_H, отдаёт Q_X холодильнику
   T_X и совершает работу A. Нагреватель — var(--fig-b), холодильник —
   var(--fig-a), рабочее тело и потоки — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['teplovaya-mashina'] = String.raw`
<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Схема тепловой машины: нагреватель отдаёт тепло Q H рабочему телу, оно отдаёт Q X холодильнику и совершает работу A">
  <rect x="20" y="40" width="150" height="80" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <circle cx="320" cy="80" r="36" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <rect x="470" y="40" width="150" height="80" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <!-- потоки тепла и работа -->
  <line x1="170" y1="80" x2="266" y2="80" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 277 80 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="356" y1="80" x2="459" y2="80" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 470 80 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="320" y1="116" x2="320" y2="196" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 320 207 l -4.5 -11 h 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="95" y="87" text-anchor="middle">T<tspan font-size="15" dy="5">H</tspan><tspan dy="-5"> &gt; T</tspan><tspan font-size="15" dy="5">X</tspan></text>
    <text x="545" y="87" text-anchor="middle">T<tspan font-size="15" dy="5">X</tspan></text>
    <text x="222" y="64" text-anchor="middle">Q<tspan font-size="15" dy="5">H</tspan></text>
    <text x="412" y="64" text-anchor="middle">Q<tspan font-size="15" dy="5">X</tspan></text>
    <text x="336" y="168">A</text>
  </g>
  <text x="320" y="87" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="currentColor">РТ</text>
</svg>`;
