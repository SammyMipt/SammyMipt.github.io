/* Векторная диаграмма рассеяния — перерисовка tikz-иллюстрации конспекта
   (pics/vector_diagramm): скорость центра масс V_C, окружность радиуса
   v_1c возможных скоростей в СЦМ, один из вариантов после удара (--fig-a)
   и предельный случай касания с углом theta_max (--fig-b). */
window.FIGS = window.FIGS || {};
window.FIGS['vektornaya-diagramma'] = String.raw`
<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Векторная диаграмма: скорость центра масс, окружность возможных скоростей в системе центра масс и предельный угол отклонения при касании">
  <!-- окружность возможных концов вектора v1c' -->
  <circle cx="340" cy="130" r="120" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 7" opacity="0.7"/>
  <!-- V_C и v_1c вдоль оси -->
  <line x1="40" y1="130" x2="330" y2="130" stroke="currentColor" stroke-width="2.8"/>
  <polygon points="336,130 324,124.5 324,135.5" fill="currentColor"/>
  <line x1="344" y1="130" x2="452" y2="130" stroke="currentColor" stroke-width="2.8"/>
  <polygon points="458,130 446,124.5 446,135.5" fill="currentColor"/>
  <!-- произвольный поворот после удара -->
  <line x1="340" y1="130" x2="396" y2="34.2" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.8"/>
  <polygon points="400,27.4 389.2,32.4 397.1,39.1" fill="var(--fig-a, #1f8a9d)"/>
  <line x1="40" y1="130" x2="393" y2="29.4" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.8"/>
  <polygon points="400,27.4 388.9,31.9 396.4,39.4" fill="var(--fig-a, #1f8a9d)"/>
  <!-- предельный случай: касательная -->
  <line x1="340" y1="130" x2="292" y2="240" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <line x1="40" y1="130" x2="292" y2="240" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <path d="M 100 130 A 60 60 0 0 1 94.4 155.4" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2"/>
  <!-- сумма даёт v: отметка длины под осью -->
  <g stroke="currentColor" stroke-width="1.4" opacity="0.6">
    <line x1="40" y1="266" x2="460" y2="266"/>
    <line x1="40" y1="260" x2="40" y2="272"/>
    <line x1="460" y1="260" x2="460" y2="272"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20">
    <text x="185" y="120" text-anchor="middle" fill="currentColor">V<tspan dy="5" font-size="14">C</tspan></text>
    <text x="398" y="120" text-anchor="middle" fill="currentColor">v<tspan dy="5" font-size="14">1c</tspan></text>
    <text x="380" y="84" fill="var(--fig-a, #1f8a9d)">v<tspan dy="5" font-size="14">1c</tspan><tspan dy="-5" font-size="20">&#8242;</tspan></text>
    <text x="200" y="62" text-anchor="middle" fill="var(--fig-a, #1f8a9d)">v<tspan dy="5" font-size="14">1</tspan><tspan dy="-5" font-size="20">&#8242;</tspan></text>
    <text x="326" y="196" fill="var(--fig-b, #c2571a)">v<tspan dy="5" font-size="14">1c</tspan><tspan dy="-5" font-size="20">&#8242;</tspan></text>
    <text x="158" y="208" text-anchor="middle" fill="var(--fig-b, #c2571a)">v<tspan dy="5" font-size="14">1</tspan><tspan dy="-5" font-size="20">&#8242;</tspan></text>
    <text x="112" y="156" fill="var(--fig-b, #c2571a)">&#952;<tspan dy="5" font-size="14">max</tspan></text>
    <text x="250" y="290" text-anchor="middle" fill="currentColor">v</text>
  </g>
</svg>`;
