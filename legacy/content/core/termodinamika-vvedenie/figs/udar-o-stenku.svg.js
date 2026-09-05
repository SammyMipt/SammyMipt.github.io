/* Молекулы у стенки сосуда: перерисовка tikz-иллюстрации конспекта
   (ideal_gas_pic.tex). Стенка со штриховкой справа, ось x к ней,
   слой толщиной v_x Δt отмечен штриховой границей. Добавлены против tikz:
   граница слоя, подпись S у стенки и пара стрелок удара (падение --fig-a,
   отражение --fig-b) — символы согласованы с текстом вывода давления.
   Контуры — currentColor: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['udar-o-stenku'] = String.raw`
<svg viewBox="0 0 470 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Молекулы газа у стенки: слой толщиной v x дельта t, из которого частицы долетают до стенки за время дельта t">
  <!-- стенка со штриховкой -->
  <line x1="390" y1="35" x2="390" y2="245" stroke="currentColor" stroke-width="2.6"/>
  <g stroke="currentColor" stroke-width="1.2" opacity=".75">
    <line x1="390" y1="49" x2="404" y2="35"/>
    <line x1="390" y1="70" x2="404" y2="56"/>
    <line x1="390" y1="91" x2="404" y2="77"/>
    <line x1="390" y1="112" x2="404" y2="98"/>
    <line x1="390" y1="133" x2="404" y2="119"/>
    <line x1="390" y1="154" x2="404" y2="140"/>
    <line x1="390" y1="175" x2="404" y2="161"/>
    <line x1="390" y1="196" x2="404" y2="182"/>
    <line x1="390" y1="217" x2="404" y2="203"/>
    <line x1="390" y1="238" x2="404" y2="224"/>
  </g>
  <!-- ось x -->
  <line x1="40" y1="245" x2="440" y2="245" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 446 245 l -10 -4 v 8 z" fill="currentColor"/>
  <!-- граница слоя v_x Δt -->
  <line x1="240" y1="35" x2="240" y2="245" stroke="currentColor" stroke-width="1.3"
        stroke-dasharray="6 6" opacity=".65"/>
  <!-- размер слоя под осью -->
  <g stroke="currentColor" stroke-width="1.3" fill="currentColor">
    <line x1="240" y1="268" x2="390" y2="268"/>
    <path d="M 246 268 l 9 -3.5 v 7 z" transform="rotate(180 250.5 268)"/>
    <path d="M 384 268 l -9 -3.5 v 7 z" transform="rotate(180 379.5 268)"/>
  </g>
  <!-- молекулы -->
  <g fill="currentColor">
    <circle cx="95" cy="105" r="4"/>
    <circle cx="150" cy="185" r="4"/>
    <circle cx="120" cy="222" r="4"/>
    <circle cx="205" cy="75" r="4"/>
    <circle cx="262" cy="150" r="4"/>
    <circle cx="300" cy="60" r="4"/>
    <circle cx="322" cy="205" r="4"/>
    <circle cx="278" cy="105" r="4"/>
  </g>
  <!-- скорости молекул -->
  <g stroke="currentColor" stroke-width="1.8" fill="currentColor">
    <line x1="95" y1="105" x2="128" y2="83"/>
    <path d="M 134 79 l -11 1.5 5 8 z"/>
    <line x1="150" y1="185" x2="185" y2="172"/>
    <path d="M 192 169.5 l -11 -2 1.5 9.2 z"/>
    <line x1="205" y1="75" x2="236" y2="94"/>
    <path d="M 242 97.7 l -8 -8 -3.5 8.6 z"/>
    <line x1="262" y1="150" x2="288" y2="168"/>
    <path d="M 294 172.2 l -7.4 -8.6 -4.2 8.4 z"/>
    <line x1="322" y1="205" x2="352" y2="188"/>
    <path d="M 358 184.6 l -11 0.4 4 8.4 z"/>
  </g>
  <!-- удар о стенку: падение и отражение -->
  <circle cx="368" cy="130" r="4" fill="currentColor"/>
  <g stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6" fill="var(--fig-a, #1f8a9d)">
    <line x1="330" y1="130" x2="362" y2="130"/>
    <path d="M 368 130 l -10 -4 v 8 z" stroke="none"/>
  </g>
  <g stroke="var(--fig-b, #c2571a)" stroke-width="2.6" fill="var(--fig-b, #c2571a)">
    <line x1="368" y1="118" x2="336" y2="118"/>
    <path d="M 330 118 l 10 -4 v 8 z" stroke="none"/>
  </g>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="449" y="252">x</text>
    <text x="286" y="291">v</text>
    <text x="297" y="296" font-size="14">x</text>
    <text x="306" y="291">&#916;t</text>
    <text x="408" y="52">S</text>
    <text x="322" y="152" fill="var(--fig-a, #1f8a9d)">+v</text>
    <text x="347" y="157" font-size="14" fill="var(--fig-a, #1f8a9d)">x</text>
    <text x="304" y="108" fill="var(--fig-b, #c2571a)">&#8722;v</text>
    <text x="330" y="113" font-size="14" fill="var(--fig-b, #c2571a)">x</text>
  </g>
</svg>`;
