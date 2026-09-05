/* Перерисовка pics/second_law.tex: слева машина Клаузиуса (тепло само
   уходит от холодного T1 к горячему T2 — перечёркнуто), справа машина
   Томпсона (тепло одного резервуара T целиком превращается в работу A).
   Горячие резервуары — var(--fig-b), холодные — var(--fig-a), рабочее
   тело и стрелки — currentColor, запрещающий крест — var(--fig-b). */
window.FIGS = window.FIGS || {};
window.FIGS['mashiny-narusheniya'] = String.raw`
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Слева машина Клаузиуса: перечёркнутая стрелка тепла от холодного резервуара к горячему. Справа машина Томпсона: тепло Q одного резервуара целиком уходит в работу A">
  <!-- левая схема: машина Клаузиуса -->
  <rect x="16" y="70" width="118" height="70" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <rect x="252" y="70" width="118" height="70" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <!-- запрещённая стрелка: от холодного к горячему -->
  <line x1="134" y1="95" x2="241" y2="95" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 252 95 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- разрешённая стрелка: от горячего к холодному -->
  <line x1="252" y1="122" x2="145" y2="122" stroke="currentColor" stroke-width="2.4" opacity=".75"/>
  <path d="M 134 122 l 11 -4.5 v 9 z" fill="currentColor" opacity=".75"/>
  <!-- крест запрета -->
  <g stroke="var(--fig-b, #c2571a)" stroke-width="3.6" stroke-linecap="round">
    <line x1="182" y1="84" x2="204" y2="106"/>
    <line x1="204" y1="84" x2="182" y2="106"/>
  </g>
  <!-- правая схема: машина Томпсона -->
  <rect x="420" y="70" width="100" height="70" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <circle cx="583" cy="105" r="32" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="520" y1="105" x2="540" y2="105" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 551 105 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="615" y1="105" x2="657" y2="105" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 668 105 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="75" y="112" text-anchor="middle">T<tspan font-size="15" dy="5">1</tspan></text>
    <text x="311" y="112" text-anchor="middle">T<tspan font-size="15" dy="5">2</tspan><tspan dy="-5"> &gt; T</tspan><tspan font-size="15" dy="5">1</tspan></text>
    <text x="193" y="78" text-anchor="middle">Q</text>
    <text x="470" y="112" text-anchor="middle">T</text>
    <text x="535" y="90" text-anchor="middle">Q</text>
    <text x="638" y="90" text-anchor="middle">A</text>
  </g>
  <text x="583" y="112" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="currentColor">РТ</text>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor" opacity=".72">
    <text x="193" y="185" text-anchor="middle">машина Клаузиуса</text>
    <text x="544" y="185" text-anchor="middle">машина Томпсона</text>
  </g>
</svg>`;
