/* Схема диффузии лёгкой примеси — собственный рисунок недели по
   обязательству WRITING §2.7 (в конспекте на этом месте пустая
   заготовка figure). Профиль концентрации — --fig-a, потоки — --fig-b,
   оси и разметка — currentColor. Символы совпадают с выводом закона
   Фика: n(x), x−λ, x+λ, j₋, j₊. */
window.FIGS = window.FIGS || {};
window.FIGS['diffuziya-primesi'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Спадающий профиль концентрации; в точку x прилетают потоки слева из x минус лямбда и справа из x плюс лямбда, левый поток больше">
  <!-- оси -->
  <g stroke="currentColor" stroke-width="1.6" opacity="0.6">
    <line x1="50" y1="270" x2="496" y2="270"/>
    <line x1="50" y1="270" x2="50" y2="48"/>
  </g>
  <g fill="currentColor" opacity="0.6">
    <polygon points="496,270 485,265 485,275"/>
    <polygon points="50,48 45,59 55,59"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor" opacity="0.8">
    <text x="500" y="290">x</text>
    <text x="30" y="60">n</text>
  </g>

  <!-- профиль концентрации n(x) -->
  <path d="M 60.0 90.0 L 70.0 97.7 L 80.0 105.1 L 90.0 112.1 L 100.0 118.7 L 110.0 125.0 L 120.0 130.9 L 130.0 136.6 L 140.0 142.0 L 150.0 147.1 L 160.0 151.9 L 170.0 156.5 L 180.0 160.8 L 190.0 165.0 L 200.0 168.9 L 210.0 172.6 L 220.0 176.2 L 230.0 179.5 L 240.0 182.7 L 250.0 185.7 L 260.0 188.6 L 270.0 191.3 L 280.0 193.9 L 290.0 196.3 L 300.0 198.6 L 310.0 200.8 L 320.0 202.9 L 330.0 204.9 L 340.0 206.8 L 350.0 208.6 L 360.0 210.3 L 370.0 211.9 L 380.0 213.4 L 390.0 214.9 L 400.0 216.2 L 410.0 217.5 L 420.0 218.8 L 430.0 220.0 L 440.0 221.1 L 450.0 222.1 L 460.0 223.1 L 470.0 224.1 L 480.0 225.0" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <text x="92" y="86" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-a, #1f8a9d)">n(x)</text>

  <!-- вертикали x−λ, x, x+λ -->
  <g stroke="currentColor" stroke-width="1.2" opacity="0.45" stroke-dasharray="4 4">
    <line x1="170" y1="270" x2="170" y2="156"/>
    <line x1="270" y1="270" x2="270" y2="191"/>
    <line x1="370" y1="270" x2="370" y2="212"/>
  </g>
  <circle cx="170" cy="156.5" r="4.5" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="270" cy="191.3" r="4.5" fill="currentColor"/>
  <circle cx="370" cy="211.9" r="4.5" fill="var(--fig-a, #1f8a9d)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor" text-anchor="middle">
    <text x="170" y="294">x&#8722;&#955;</text>
    <text x="270" y="294">x</text>
    <text x="370" y="294">x+&#955;</text>
  </g>

  <!-- потоки к точке x -->
  <line x1="180" y1="243" x2="252" y2="243" stroke="var(--fig-b, #c2571a)" stroke-width="3.2"/>
  <polygon points="258,243 245,237.5 245,248.5" fill="var(--fig-b, #c2571a)"/>
  <line x1="360" y1="243" x2="296" y2="243" stroke="var(--fig-b, #c2571a)" stroke-width="2.2"/>
  <polygon points="290,243 302,238.5 302,247.5" fill="var(--fig-b, #c2571a)"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19" fill="var(--fig-b, #c2571a)" text-anchor="middle">
    <text x="214" y="232">j&#8331;</text>
    <text x="328" y="232">j&#8330;</text>
  </g>

  <!-- расстояние λ между вертикалями -->
  <g stroke="currentColor" stroke-width="1.4" opacity="0.7">
    <line x1="273" y1="312" x2="367" y2="312"/>
  </g>
  <g fill="currentColor" opacity="0.7">
    <polygon points="270,312 280,308 280,316"/>
    <polygon points="370,312 360,308 360,316"/>
  </g>
  <text x="320" y="307" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="currentColor" text-anchor="middle">&#955;</text>
</svg>`;
