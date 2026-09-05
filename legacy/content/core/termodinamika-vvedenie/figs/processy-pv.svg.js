/* Семейство процессов идеального газа на PV-диаграмме — новый рисунок
   волны (в tex его нет; обязательство WRITING §2.7: у сравнения крутизны
   адиабаты и изотермы смысл геометрический). Через общую точку проведены
   изохора (вертикаль), изобара (горизонталь), изотерма PV = const
   (токен --fig-a) и адиабата PV^γ = const при γ = 1.4 (токен --fig-b).
   Контуры и подписи — currentColor: тема красит рисунок сама. */
window.FIGS = window.FIGS || {};
window.FIGS['processy-pv'] = String.raw`
<svg viewBox="0 0 470 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Изохора, изобара, изотерма и адиабата, проведённые через одну точку PV-диаграммы; адиабата круче изотермы">
  <!-- оси P, V -->
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="60" y1="270" x2="440" y2="270"/>
    <line x1="60" y1="270" x2="60" y2="41"/>
  </g>
  <g fill="currentColor">
    <path d="M 446 270 l -10 -4 v 8 z"/>
    <path d="M 60 35 l -4 10 h 8 z"/>
  </g>
  <!-- изохора и изобара -->
  <g fill="none" stroke="currentColor" stroke-width="2">
    <line x1="200" y1="55" x2="200" y2="252"/>
    <line x1="88" y1="150" x2="420" y2="150"/>
  </g>
  <!-- изотерма PV = const -->
  <path d="M 140 60 C 146 78 152 90 160 102 C 174 124 186 138 200 150 C 213 161 226 170 240 177 C 262 187 280 194 300 200 C 321 206 340 210 360 214 C 383 218 407 222 430 225"
        fill="none" stroke="var(--fig-a, #1f8a9d)" stroke-width="2.6"/>
  <!-- адиабата PV^γ = const -->
  <path d="M 150 48 C 153 59 156 68 160 78 C 165 90 170 101 175 112 C 183 126 191 138 200 150 C 213 163 226 175 240 186 C 261 200 280 208 300 214 C 321 220 340 225 360 229 C 383 233 407 236 430 239"
        fill="none" stroke="var(--fig-b, #c2571a)" stroke-width="2.6"/>
  <!-- общая точка -->
  <circle cx="200" cy="150" r="4.2" fill="currentColor"/>
  <!-- подписи осей -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="21" fill="currentColor">
    <text x="447" y="277">V</text>
    <text x="68" y="51">P</text>
  </g>
  <!-- подписи кривых -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">
    <text x="206" y="60">изохора</text>
    <text x="348" y="140">изобара</text>
    <text x="250" y="188" fill="var(--fig-a, #1f8a9d)">изотерма</text>
    <text x="78" y="92" fill="var(--fig-b, #c2571a)">адиабата</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="16">
    <text x="330" y="188" fill="var(--fig-a, #1f8a9d)">n = 1</text>
    <text x="152" y="92" fill="var(--fig-b, #c2571a)">n = &#947;</text>
  </g>
</svg>`;
