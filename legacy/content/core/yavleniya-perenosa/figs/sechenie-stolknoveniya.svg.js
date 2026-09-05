/* Три эквивалентных способа рассмотрения столкновения — перерисовка
   tikz-иллюстрации конспекта (pics/collision_ball). В tikz-исходнике
   вторая и третья панели закомментированы; здесь восстановлены все три
   по подписи конспекта «иллюстрация трёх эквивалентных способов».
   Контуры — currentColor, летящая молекула — --fig-b, мишени — --fig-a.
   Штриховка заметаемой области — SVG-паттерн на currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['sechenie-stolknoveniya'] = String.raw`
<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Три панели: молекула с реальным радиусом заметает полосу среди мишеней; точечная молекула среди раздутых мишеней; раздутая молекула среди точечных мишеней">
  <defs>
    <pattern id="yp-hatch-sech" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" stroke-width="1.2" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- панель А: реальные радиусы -->
  <rect x="70" y="124" width="170" height="52" fill="url(#yp-hatch-sech)"/>
  <line x1="70" y1="124" x2="240" y2="124" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="5 4"/>
  <line x1="70" y1="176" x2="240" y2="176" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="5 4"/>
  <circle cx="70" cy="150" r="26" fill="var(--fig-b, #c2571a)"/>
  <line x1="102" y1="150" x2="146" y2="150" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="146,150 135,145 135,155" fill="var(--fig-b, #c2571a)"/>
  <!-- мишень, задетая полосой -->
  <circle cx="185" cy="187" r="20" fill="var(--fig-a, #1f8a9d)"/>
  <!-- мишень вне полосы -->
  <circle cx="205" cy="72" r="20" fill="var(--fig-a, #1f8a9d)" opacity="0.45"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="19">
    <text x="44" y="118" fill="var(--fig-b, #c2571a)">r&#8321;</text>
    <text x="212" y="210" fill="var(--fig-a, #1f8a9d)">r&#8322;</text>
  </g>

  <text x="258" y="158" font-family="Georgia, 'Times New Roman', serif" font-size="26" fill="currentColor">~</text>

  <!-- панель Б: точечная молекула, раздутые мишени -->
  <line x1="300" y1="150" x2="490" y2="150" stroke="currentColor" stroke-width="1.4" opacity="0.6" stroke-dasharray="5 4"/>
  <circle cx="300" cy="150" r="5" fill="var(--fig-b, #c2571a)"/>
  <line x1="308" y1="150" x2="348" y2="150" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="348,150 337,145 337,155" fill="var(--fig-b, #c2571a)"/>
  <!-- раздутая мишень, которую задевает траектория -->
  <circle cx="425" cy="187" r="46" fill="var(--fig-a, #1f8a9d)" opacity="0.18"/>
  <circle cx="425" cy="187" r="46" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2" stroke-dasharray="6 5"/>
  <circle cx="425" cy="187" r="3.5" fill="var(--fig-a, #1f8a9d)"/>
  <line x1="425" y1="187" x2="459" y2="156" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.6"/>
  <!-- раздутая мишень вне траектории -->
  <circle cx="462" cy="70" r="46" fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="1.6" stroke-dasharray="6 5" opacity="0.5"/>
  <circle cx="462" cy="70" r="3.5" fill="var(--fig-a, #1f8a9d)" opacity="0.5"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18">
    <text x="452" y="146" fill="var(--fig-a, #1f8a9d)">r&#8321;+r&#8322;</text>
  </g>

  <text x="508" y="158" font-family="Georgia, 'Times New Roman', serif" font-size="26" fill="currentColor">~</text>

  <!-- панель В: вся площадь у летящей молекулы, мишени точечные -->
  <rect x="550" y="104" width="190" height="92" fill="url(#yp-hatch-sech)"/>
  <line x1="550" y1="104" x2="740" y2="104" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="5 4"/>
  <line x1="550" y1="196" x2="740" y2="196" stroke="currentColor" stroke-width="1.2" opacity="0.5" stroke-dasharray="5 4"/>
  <circle cx="550" cy="150" r="46" fill="var(--fig-b, #c2571a)" opacity="0.28"/>
  <circle cx="550" cy="150" r="46" fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2" stroke-dasharray="6 5"/>
  <circle cx="550" cy="150" r="5" fill="var(--fig-b, #c2571a)"/>
  <line x1="550" y1="150" x2="583" y2="118" stroke="var(--fig-b, #c2571a)" stroke-width="1.6"/>
  <line x1="604" y1="150" x2="644" y2="150" stroke="var(--fig-b, #c2571a)" stroke-width="3"/>
  <polygon points="644,150 633,145 633,155" fill="var(--fig-b, #c2571a)"/>
  <!-- точечные мишени: в полосе и вне -->
  <circle cx="672" cy="176" r="4.5" fill="var(--fig-a, #1f8a9d)"/>
  <circle cx="700" cy="66" r="4.5" fill="var(--fig-a, #1f8a9d)" opacity="0.5"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="18">
    <text x="578" y="108" fill="var(--fig-b, #c2571a)">r&#8321;+r&#8322;</text>
  </g>

  <!-- подписи панелей -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor" opacity="0.75" text-anchor="middle">
    <text x="150" y="290">реальные радиусы</text>
    <text x="392" y="290">точка среди раздутых мишеней</text>
    <text x="642" y="290">вся площадь у летящей</text>
  </g>
</svg>`;
