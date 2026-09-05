/* Перерисовка pics/klauzius_to_tompson.tex: если бы машина Томпсона
   существовала (пунктирная рамка: резервуар T и рабочее тело), её работу
   A = Q можно было бы передать более горячему резервуару T2 — получилась
   бы машина Клаузиуса. Холодный резервуар — var(--fig-a), горячий —
   var(--fig-b), рабочее тело и стрелки — currentColor. */
window.FIGS = window.FIGS || {};
window.FIGS['klauzius-iz-tomsona'] = String.raw`
<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Машина Томпсона в пунктирной рамке забирает тепло Q у резервуара T и передаёт работу A равную Q горячему резервуару T2">
  <!-- рамка гипотетической машины Томпсона -->
  <rect x="14" y="40" width="356" height="150" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 7"/>
  <!-- резервуары и рабочее тело -->
  <rect x="30" y="75" width="110" height="70" rx="4" fill="var(--fig-a, #1f8a9d)" fill-opacity=".14" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.4"/>
  <circle cx="280" cy="110" r="34" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <rect x="470" y="75" width="140" height="70" rx="4" fill="var(--fig-b, #c2571a)" fill-opacity=".14" stroke="var(--fig-b, #c2571a)" stroke-width="2.4"/>
  <!-- потоки -->
  <line x1="140" y1="110" x2="235" y2="110" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 246 110 l -11 -4.5 v 9 z" fill="currentColor"/>
  <line x1="314" y1="110" x2="459" y2="110" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 470 110 l -11 -4.5 v 9 z" fill="currentColor"/>
  <!-- подписи -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="22" fill="currentColor">
    <text x="85" y="117" text-anchor="middle">T</text>
    <text x="540" y="117" text-anchor="middle">T<tspan font-size="15" dy="5">2</tspan><tspan dy="-5"> &gt; T</tspan></text>
    <text x="193" y="94" text-anchor="middle">Q</text>
    <text x="390" y="94" text-anchor="middle">A = Q</text>
  </g>
  <text x="280" y="117" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="currentColor">РТ</text>
  <text x="192" y="178" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor" opacity=".72">машина Томпсона</text>
</svg>`;
