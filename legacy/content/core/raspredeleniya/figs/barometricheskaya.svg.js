/* Перерисовка pics/barometic_formula.tex: вертикальный столб воздуха,
   выделенный слой толщиной dz, ось z, силы давления P(z)S снизу
   и P(z+dz)S сверху, вес слоя. Подпись веса приведена к символам
   вывода: dM·g (в tikz «mg» при m — массе всех молекул слоя).
   Слой — var(--fig-b), столб — var(--fig-a), остальное currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['barometricheskaya'] = String.raw`
<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Вертикальный цилиндр воздуха с выделенным слоем толщиной dz. Снизу к слою направлена сила P(z)S, сверху вниз сила P(z+dz)S, вниз действует вес слоя dM g. Слева ось z, справа отмечена площадь сечения S">
  <!-- столб -->
  <g stroke="var(--fig-a, #1f8a9d)" stroke-width="2.2">
    <path d="M 185 52 V 268" fill="none"/>
    <path d="M 315 52 V 268" fill="none"/>
    <ellipse cx="250" cy="268" rx="65" ry="14" fill="var(--fig-a, #1f8a9d)" fill-opacity=".07"/>
    <ellipse cx="250" cy="52" rx="65" ry="14" fill="var(--fig-a, #1f8a9d)" fill-opacity=".12"/>
  </g>
  <!-- выделенный слой dz -->
  <g stroke="var(--fig-b, #c2571a)" stroke-width="2">
    <path d="M 185 148 A 65 14 0 0 0 315 148" fill="none"/>
    <path d="M 185 148 V 176" fill="none"/>
    <path d="M 315 148 V 176" fill="none"/>
    <path d="M 185 176 A 65 14 0 0 0 315 176" fill="var(--fig-b, #c2571a)" fill-opacity=".16"/>
    <path d="M 185 148 A 65 14 0 0 0 315 148 V 176 A 65 14 0 0 1 185 176 Z" fill="var(--fig-b, #c2571a)" fill-opacity=".12" stroke="none"/>
  </g>
  <!-- ось z -->
  <line x1="90" y1="300" x2="90" y2="36" stroke="currentColor" stroke-width="2"/>
  <path d="M 90 25 l -4.5 11 h 9 z" fill="currentColor"/>
  <!-- скобка dz -->
  <g stroke="currentColor" stroke-width="1.6">
    <line x1="148" y1="148" x2="148" y2="176"/>
    <path d="M 148 148 l -3.5 6 h 7 z" fill="currentColor" stroke="none"/>
    <path d="M 148 176 l -3.5 -6 h 7 z" fill="currentColor" stroke="none"/>
    <line x1="141" y1="148" x2="155" y2="148"/>
    <line x1="141" y1="176" x2="155" y2="176"/>
  </g>
  <!-- силы -->
  <g stroke="currentColor" stroke-width="2.4">
    <line x1="250" y1="168" x2="250" y2="200"/>
    <line x1="250" y1="262" x2="250" y2="224"/>
    <line x1="250" y1="66" x2="250" y2="114"/>
  </g>
  <path d="M 250 208 l -4.5 -11 h 9 z" fill="currentColor"/>
  <path d="M 250 216 l -4.5 11 h 9 z" fill="currentColor"/>
  <path d="M 250 122 l -4.5 -11 h 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="currentColor">
    <text x="74" y="42" text-anchor="end">z</text>
    <text x="132" y="168" text-anchor="end">dz</text>
    <text x="260" y="196">dM&#183;g</text>
    <text x="242" y="250" text-anchor="end">P(z)S</text>
    <text x="242" y="98" text-anchor="end">P(z+dz)S</text>
    <text x="342" y="80">S</text>
  </g>
  <line x1="336" y1="72" x2="306" y2="58" stroke="currentColor" stroke-width="1.2" opacity=".6"/>
</svg>`;
