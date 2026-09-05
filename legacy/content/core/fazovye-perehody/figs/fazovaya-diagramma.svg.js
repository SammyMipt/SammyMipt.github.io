/* Перерисовка pics/phase_diagramm.tex: фазовая диаграмма воды в осях
   (T, P). Геометрия tikz-исходника сохранена (тройная точка (2; 1,5),
   критическая (7; 6,5), кривая кипения — та же безье с контрольными
   точками (3; 2,5) и (5; 3), возгонка к (0,5; 0,8), ветви плавления
   к (1,8; 5,5) и (2,2; 6,5)), координаты пересчитаны в viewBox.
   Подписи Δv < 0 (вода, сплошная) и Δv > 0 (большинство веществ,
   пунктир) — как в tikz; Δv = v_ж − v_тт, согласовано с блоком
   ravnovesie-zhidkost-tverdoe. ДОБАВЛЕНО к tikz: пунктирные отсчёты
   тройной точки к осям (в tikz подписи P_тр, T_тр, T_кр стоят на осях
   без линий привязки). */
window.FIGS = window.FIGS || {};
window.FIGS['fazovaya-diagramma'] = String.raw`
<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Фазовая диаграмма воды: кривые плавления, кипения и возгонки, тройная и критическая точки">
  <!-- оси: T вправо, P вверх -->
  <line x1="44" y1="300" x2="446" y2="300" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 454 300 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="44" y1="300" x2="44" y2="44" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 44 36 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- отсчёты тройной точки и T_кр -->
  <line x1="44" y1="244.5" x2="123.2" y2="244.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.55"/>
  <line x1="123.2" y1="300" x2="123.2" y2="244.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.55"/>
  <line x1="321.2" y1="300" x2="321.2" y2="59.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.55"/>
  <!-- кривая кипения: тройная точка -> критическая точка -->
  <path d="M 123.2 244.5 C 162.8 207.5, 242 189, 321.2 59.5"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <!-- кривая возгонки -->
  <path d="M 123.2 244.5 L 63.8 270.4"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <!-- кривая плавления: вода (сплошная, наклон влево) и большинство веществ (пунктир) -->
  <path d="M 123.2 244.5 L 115.3 96.5"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <path d="M 123.2 244.5 L 131.2 59.5"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2" stroke-dasharray="7 6"/>
  <!-- точки -->
  <circle cx="123.2" cy="244.5" r="4.5" fill="currentColor"/>
  <circle cx="321.2" cy="59.5" r="4.5" fill="currentColor"/>
  <!-- области фаз -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="19" fill="currentColor">
    <text x="56" y="172">тв. тело</text>
    <text x="176" y="120">жидкость</text>
    <text x="230" y="252">пар</text>
  </g>
  <!-- подписи точек -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">
    <text x="132" y="266">тройная точка</text>
    <text x="330" y="56">критическая</text>
    <text x="330" y="74">точка</text>
  </g>
  <!-- подписи ветвей плавления -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="currentColor">
    <text x="52" y="92">&#916;v &lt; 0</text>
    <text x="140" y="52">&#916;v &gt; 0</text>
  </g>
  <!-- оси и отметки -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="26" y="52">P</text>
    <text x="440" y="324">T</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="currentColor">
    <text x="4" y="250">P<tspan font-size="13" dy="4">тр</tspan></text>
    <text x="112" y="320">T<tspan font-size="13" dy="4">тр</tspan></text>
    <text x="310" y="320">T<tspan font-size="13" dy="4">кр</tspan></text>
  </g>
</svg>`;
