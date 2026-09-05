/* Перерисовка pics/karno_prove_1.tex: доказательство первой теоремы
   Карно. Верхняя машина работает по прямому циклу (забирает Q_H, отдаёт
   Q_X, совершает A), её работа приводит нижнюю машину, запущенную по
   обратному циклу (забирает Q'_X у холодильника, передаёт Q'_H
   нагревателю). Символы совпадают с текстом вывода. */
window.FIGS = window.FIGS || {};
window.FIGS['dokazatelstvo-karno'] = String.raw`
<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две машины Карно: прямая сверху совершает работу A, обратная снизу на эту работу возвращает тепло от холодильника нагревателю">
  <!-- верхний ряд: прямой цикл -->
  <rect x="20" y="40" width="150" height="76" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <circle cx="320" cy="78" r="34" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <rect x="470" y="40" width="150" height="76" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <line x1="170" y1="78" x2="268" y2="78" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 279 78 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="354" y1="78" x2="459" y2="78" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 470 78 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- работа первой машины приводит вторую -->
  <line x1="320" y1="112" x2="320" y2="243" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 320 254 l -4.5 -11 h 9 z" fill="currentColor"/>
  <!-- нижний ряд: обратный цикл -->
  <rect x="20" y="250" width="150" height="76" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <circle cx="320" cy="288" r="34" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <rect x="470" y="250" width="150" height="76" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <line x1="284" y1="288" x2="181" y2="288" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 170 288 l 11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="470" y1="288" x2="367" y2="288" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 356 288 l 11 -4.5 v 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="95" y="85" text-anchor="middle">T<tspan font-size="15" dy="5">H</tspan><tspan dy="-5"> &gt; T</tspan><tspan font-size="15" dy="5">X</tspan></text>
    <text x="545" y="85" text-anchor="middle">T<tspan font-size="15" dy="5">X</tspan></text>
    <text x="222" y="62" text-anchor="middle">Q<tspan font-size="15" dy="5">H</tspan></text>
    <text x="412" y="62" text-anchor="middle">Q<tspan font-size="15" dy="5">X</tspan></text>
    <text x="336" y="188">A</text>
    <text x="95" y="295" text-anchor="middle">T<tspan font-size="15" dy="5">H</tspan><tspan dy="-5"> &gt; T</tspan><tspan font-size="15" dy="5">X</tspan></text>
    <text x="545" y="295" text-anchor="middle">T<tspan font-size="15" dy="5">X</tspan></text>
    <text x="222" y="272" text-anchor="middle">Q&#8242;<tspan font-size="15" dy="5">H</tspan></text>
    <text x="412" y="272" text-anchor="middle">Q&#8242;<tspan font-size="15" dy="5">X</tspan></text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="currentColor">
    <text x="320" y="85" text-anchor="middle">РТ</text>
    <text x="320" y="295" text-anchor="middle">РТ</text>
  </g>
</svg>`;
