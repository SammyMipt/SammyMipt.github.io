/* Эволюция температурного профиля — собственный рисунок недели
   (в конспекте пустая заготовка figure «Профиль температуры в разные
   моменты времени»). Промежуточные профили — --fig-a, финальный
   линейный — --fig-b, скачок t = 0 и разметка — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['teplovoj-front'] = String.raw`
<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Профили температуры: начальный скачок у горячей стенки, два сглаживающихся промежуточных профиля и финальный линейный">
  <!-- оси -->
  <g stroke="currentColor" stroke-width="1.6" opacity="0.6">
    <line x1="70" y1="280" x2="490" y2="280"/>
    <line x1="70" y1="280" x2="70" y2="46"/>
  </g>
  <g fill="currentColor" opacity="0.6">
    <polygon points="490,280 479,275 479,285"/>
    <polygon points="70,46 65,57 75,57"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor" opacity="0.8">
    <text x="494" y="300">x</text>
    <text x="48" y="58">T</text>
  </g>

  <!-- горячая стенка слева -->
  <rect x="58" y="70" width="12" height="210" fill="var(--fig-b, #c2571a)" opacity="0.25"/>

  <!-- уровни T1 и T0 -->
  <g stroke="currentColor" stroke-width="1.1" opacity="0.4" stroke-dasharray="4 4">
    <line x1="70" y1="90" x2="440" y2="90"/>
    <line x1="70" y1="240" x2="440" y2="240"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18" fill="currentColor" text-anchor="end">
    <text x="62" y="96">T&#8321;</text>
    <text x="62" y="246">T&#8320;</text>
  </g>

  <!-- t = 0: скачок -->
  <polyline points="70,90 72,240 430,240" fill="none" stroke="currentColor" stroke-width="2.2" opacity="0.75"/>
  <text x="105" y="262" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="16" fill="currentColor" opacity="0.75">t = 0</text>

  <!-- промежуточные профили -->
  <path d="M 70.0 90.0 L 78.0 92.5 L 86.0 99.8 L 94.0 111.2 L 102.0 125.6 L 110.0 141.8 L 118.0 158.4 L 126.0 174.6 L 134.0 189.2 L 142.0 201.9 L 150.0 212.4 L 158.0 220.7 L 166.0 226.9 L 174.0 231.4 L 182.0 234.6 L 190.0 236.7 L 198.0 238.0 L 206.0 238.9 L 214.0 239.4 L 222.0 239.7 L 230.0 239.9 L 246.0 240.0 L 430.0 240.0" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <path d="M 70.0 90.0 L 78.0 90.5 L 86.0 91.8 L 94.0 94.0 L 102.0 97.1 L 110.0 100.9 L 118.0 105.5 L 126.0 110.7 L 134.0 116.4 L 142.0 122.6 L 150.0 129.2 L 158.0 136.0 L 166.0 143.0 L 174.0 150.1 L 182.0 157.2 L 190.0 164.1 L 198.0 170.9 L 206.0 177.5 L 214.0 183.8 L 222.0 189.8 L 230.0 195.4 L 238.0 200.6 L 246.0 205.4 L 254.0 209.8 L 262.0 213.8 L 270.0 217.4 L 278.0 220.7 L 286.0 223.5 L 294.0 226.1 L 302.0 228.3 L 310.0 230.2 L 318.0 231.8 L 326.0 233.3 L 334.0 234.5 L 342.0 235.5 L 350.0 236.3 L 358.0 237.0 L 366.0 237.6 L 374.0 238.1 L 382.0 238.5 L 390.0 238.8 L 398.0 239.1 L 406.0 239.3 L 414.0 239.4 L 422.0 239.6 L 430.0 239.7" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4" opacity="0.6"/>

  <!-- финальный линейный профиль -->
  <line x1="70" y1="90" x2="430" y2="240" stroke="var(--fig-b, #c2571a)" stroke-width="2.6" stroke-dasharray="8 6"/>
  <text x="330" y="182" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="16" fill="var(--fig-b, #c2571a)">t &#8594; &#8734;</text>

  <!-- глубина прогрева l(t) для второго профиля -->
  <g stroke="var(--fig-a, #1f8a9d)" stroke-width="1.4">
    <line x1="73" y1="308" x2="257" y2="308"/>
  </g>
  <g fill="var(--fig-a, #1f8a9d)">
    <polygon points="70,308 80,304 80,312"/>
    <polygon points="260,308 250,304 250,312"/>
  </g>
  <line x1="260" y1="240" x2="260" y2="312" stroke="var(--fig-a, #1f8a9d)" stroke-width="1" stroke-dasharray="3 4" opacity="0.7"/>
  <text x="165" y="302" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="16" fill="var(--fig-a, #1f8a9d)" text-anchor="middle">l ~ &#8730;(&#967;t)</text>
</svg>`;
