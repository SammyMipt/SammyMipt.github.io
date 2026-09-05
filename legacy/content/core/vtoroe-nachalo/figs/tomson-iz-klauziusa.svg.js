/* Перерисовка pics/tompson_to_klauzius.tex: если бы машина Клаузиуса
   существовала (пунктирная рамка: она возвращает Q_X от холодного T1
   к горячему T2), то обычная тепловая машина в паре с ней совершала бы
   работу A за счёт охлаждения одного лишь горячего резервуара — вышла бы
   машина Томпсона. Индексы латинские H и X, как на схемах конспекта. */
window.FIGS = window.FIGS || {};
window.FIGS['tomson-iz-klauziusa'] = String.raw`
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Машина Клаузиуса в пунктирной рамке возвращает тепло Q X от холодного резервуара горячему, а рабочее тело берёт Q H у горячего, сбрасывает Q X холодному и выдаёт работу A">
  <!-- рамка: резервуары и машина Клаузиуса между ними -->
  <rect x="14" y="30" width="612" height="130" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 7"/>
  <rect x="30" y="60" width="120" height="70" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <rect x="490" y="60" width="120" height="70" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <!-- перенос тепла машиной Клаузиуса -->
  <line x1="150" y1="83" x2="479" y2="83" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 490 83 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- рабочее тело внизу -->
  <circle cx="320" cy="235" r="34" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="520" y1="130" x2="351" y2="209" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 341 214 l 12 0.8 l -2.6 -7.6 z" fill="currentColor"/>
  <line x1="296" y1="209" x2="127" y2="130" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 117 125 l 7 9.8 l 3.4 -7.3 z" fill="currentColor"/>
  <line x1="354" y1="235" x2="420" y2="235" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 431 235 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="90" y="102" text-anchor="middle">T<tspan font-size="15" dy="5">1</tspan></text>
    <text x="550" y="102" text-anchor="middle">T<tspan font-size="15" dy="5">2</tspan><tspan dy="-5"> &gt; T</tspan><tspan font-size="15" dy="5">1</tspan></text>
    <text x="320" y="72" text-anchor="middle">Q<tspan font-size="15" dy="5">X</tspan></text>
    <text x="462" y="182">Q<tspan font-size="15" dy="5">H</tspan></text>
    <text x="160" y="182">Q<tspan font-size="15" dy="5">X</tspan></text>
    <text x="388" y="222" text-anchor="middle">A</text>
  </g>
  <text x="320" y="242" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="currentColor">РТ</text>
  <text x="320" y="152" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor" opacity=".72">машина Клаузиуса</text>
</svg>`;
