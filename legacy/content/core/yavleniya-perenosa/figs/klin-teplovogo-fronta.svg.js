/* Собран конвейером из sources/physics1_summary/inputs/12/pics/klin_teplovogo_fronta.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs yavleniya-perenosa klin-teplovogo-fronta.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['klin-teplovogo-fronta'] = String.raw`<svg class="fig-tikz" width="491" height="218" viewBox="0 0 491 218" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Температура воды T от глубины x через час после того, как стенку нагрели от T₀ до T₁: профиль точного решения и точный клин с тем же запасом тепла, от T₁ у стенки до T₀ на глубине 5,1 см; площади под ними залиты одним цветом. У стенки клин идёт выше профиля, дальше профиль выше клина и тянется хвостом, и тепла в этих двух серпах поровну. Пунктиром клин оценки до 4,5 см: середина его стороны на половине перепада, на глубине √(χt), почти вплотную над точкой профиля. Стрелка j_Q у стенки показывает поток тепла внутрь. На оси x отмечены √(χt) = 2,3 см с точкой на профиле, оценка 2√(χt) = 4,5 см и конец клина 4√(χt/π) = 5,1 см">
<style>text.klin-teplovogo-fronta-f0{font-family:cmex10;font-size:10.909px}text.klin-teplovogo-fronta-f1{font-family:cmsy10;font-size:10.909px}text.klin-teplovogo-fronta-f2{font-family:cmmi9;font-size:8.966px}text.klin-teplovogo-fronta-f3{font-family:cmmi10;font-size:10.909px}text.klin-teplovogo-fronta-f4{font-family:cmr9;font-size:8.966px}text.klin-teplovogo-fronta-f5{font-family:cmr10;font-size:10.909px}text.klin-teplovogo-fronta-f6{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(93.684 90.803) scale(1.375011)">

<g id='page1'>
<path d='m-49.109 59.402v-107.719h9.922v107.719z' fill="currentColor" fill-opacity="0.122"/>
<path d='m-39.188 59.402v-102.051l3.117 2.555l3.117 2.52l3.121 2.523l3.117 2.524l3.117 2.523l3.117 2.496l3.121 2.492l3.117 2.465l3.117 2.441l3.117 2.438l3.121 2.406l3.117 2.383l3.117 2.352l3.117 2.324l3.117 2.27l3.121 2.266l3.117 2.242l3.117 2.18l3.117 2.129l3.121 2.125l3.117 2.07l3.117 2.012l3.117 1.984l3.121 1.957l3.117 1.899l3.117 1.84l3.117 1.816l3.121 1.758l3.117 1.699l3.117 1.672l3.117 1.617l3.121 1.559l3.118 1.531l3.117 1.445l3.117 1.445l3.117 1.359l3.121 1.336l3.117 1.273l3.118 1.246l3.117 1.191l3.121 1.133l3.117 1.105l3.117 1.051l3.118 1.02l3.121 .965l3.117 .934l3.117 .879l3.117 .852l3.121 .82l3.117 .766l3.118 .738l3.117 .707l3.117 .652l3.121 .625l3.117 .625l3.117 .566l3.118 .539l3.121 .508l3.117 .484l3.117 .453l3.117 .426l3.121 .395l3.118 .371l3.117 .367l3.117 .34l3.117 .313l3.121 .313l3.117 .254l3.118 .281l3.117 .23l3.121 .227l3.117 .227l3.117 .195l3.117 .172l3.122 .168l3.117 .172l3.117 .141l3.117 .145l3.121 .113l3.117 .113l3.118 .113l3.117 .113l3.121 .082l3.117 .086l3.117 .086l3.117 .086l3.122 .055l3.117 .059l3.117 .055l3.117 .059v.512z' fill="var(--fig-a)" fill-opacity='.3'/>
<path d='m-39.188 59.402v-102.051l159.649 102.051z' fill="var(--fig-a)" fill-opacity='.3'/>
<path d='m-39.188 59.402h295.469' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m259.867 59.402c-1.063-.203-2.789-.801-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4' transform='translate(303.722 1.288)'>x</text>
<text class="klin-teplovogo-fronta-f6" x='-32.953' y='59.4' transform='translate(303.722 1.288)'>,<tspan x='-26.321'>см</tspan></text>
<path d='m-39.188 59.402v-109.801' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-39.188-53.984c-.199 1.063-.797 2.789-1.496 3.984h2.992c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4' transform='translate(-3.945 -118.053)'>T</text>
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4' transform='translate(-26.919 -99.331)'>T</text>
<text class="klin-teplovogo-fronta-f4" x='-32.813' y='61.421' transform='translate(-26.919 -99.331)'>1</text>
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4' transform='translate(-26.919 2.717)'>T</text>
<text class="klin-teplovogo-fronta-f4" x='-32.813' y='61.421' transform='translate(-26.919 2.717)'>0</text>
<path d='m-49.109-42.649h2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-39.188-42.649l159.649 102.051' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="klin-teplovogo-fronta-f6" x='-39.188' y='59.4' transform='translate(53.637 -73.479)'>точный<tspan x='1.186'>клин</tspan></text>
<path d='m-39.188-42.649l141.504 102.051' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10' stroke-dasharray='3.985 2.491'/>
<path d='m-39.188-42.649l3.117 2.555l3.117 2.52l3.121 2.523l3.117 2.524l3.117 2.523l3.117 2.496l3.121 2.492l3.117 2.465l3.117 2.441l3.117 2.438l3.121 2.406l3.117 2.383l3.117 2.352l3.117 2.324l3.117 2.27l3.121 2.266l3.117 2.242l3.117 2.18l3.117 2.129l3.121 2.125l3.117 2.07l3.117 2.012l3.117 1.984l3.121 1.957l3.117 1.899l3.117 1.84l3.117 1.816l3.121 1.758l3.117 1.699l3.117 1.672l3.117 1.617l3.121 1.559l3.118 1.531l3.117 1.445l3.117 1.445l3.117 1.359l3.121 1.336l3.117 1.273l3.118 1.246l3.117 1.191l3.121 1.133l3.117 1.105l3.117 1.051l3.118 1.02l3.121 .965l3.117 .934l3.117 .879l3.117 .852l3.121 .82l3.117 .766l3.118 .738l3.117 .707l3.117 .652l3.121 .625l3.117 .625l3.117 .566l3.118 .539l3.121 .508l3.117 .484l3.117 .453l3.117 .426l3.121 .395l3.118 .371l3.117 .367l3.117 .34l3.117 .313l3.121 .313l3.117 .254l3.118 .281l3.117 .23l3.121 .227l3.117 .227l3.117 .195l3.117 .172l3.122 .168l3.117 .172l3.117 .141l3.117 .145l3.121 .113l3.117 .113l3.118 .113l3.117 .113l3.121 .082l3.117 .086l3.117 .086l3.117 .086l3.122 .055l3.117 .059l3.117 .055l3.117 .059' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g transform='translate(184.03 -13.101)' fill="var(--fig-a)">
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4'>t</text>
<text class="klin-teplovogo-fronta-f5" x='-32.218' y='59.4'>=<tspan x='-20.703'>1</tspan></text>
<text class="klin-teplovogo-fronta-f6" x='-11.631' y='59.4'>ч</text>
</g>
<text class="klin-teplovogo-fronta-f6" x='-39.188' y='59.4' transform='translate(204.436 -66.567)'>во<tspan x='-28.642'>да</tspan></text>
<path d='m-67.535 28.219h48.121' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m-13.676 28.219c-1.699-.32-4.465-1.273-6.375-2.391v4.781c1.91-1.113 4.676-2.07 6.375-2.391'/>
<text class="klin-teplovogo-fronta-f3" x='-39.188' y='59.4' transform='translate(-24.696 -37.554)'>j</text>
<text class="klin-teplovogo-fronta-f2" x='-34.695' y='61.77' transform='translate(-24.696 -37.554)'>Q</text>
</g>
<path d='m31.566 10.473v48.93' stroke="var(--fig-a)" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<path d='m33.16 10.473c0-.879-.715-1.594-1.594-1.594c-.883 0-1.594 .715-1.594 1.594c0 .883 .711 1.598 1.594 1.598c.879 0 1.594-.715 1.594-1.598z' fill="var(--fig-a)"/>
<path d='m31.566 59.402v2.832m70.75-2.832v2.832m18.145-2.832v2.832' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="klin-teplovogo-fronta-f1" x='-39.188' y='51.597' transform='translate(60.825 13.273)'>√</text>
<rect x='30.728' y='64.434' height='.436' width='10.765'/>
<text class="klin-teplovogo-fronta-f3" x='-30.097' y='59.4' transform='translate(60.825 13.273)'>χt</text>
<text class="klin-teplovogo-fronta-f5" x='-39.188' y='59.4' transform='translate(115.793 13.273)'>2</text>
<text class="klin-teplovogo-fronta-f1" x='-33.733' y='51.597' transform='translate(115.793 13.273)'>√</text>
<rect x='91.151' y='64.434' height='.436' width='10.765'/>
<text class="klin-teplovogo-fronta-f3" x='-24.642' y='59.4' transform='translate(115.793 13.273)'>χt</text>
<text class="klin-teplovogo-fronta-f5" x='-39.188' y='59.4' transform='translate(159.936 14.797)'>4</text>
<text class="klin-teplovogo-fronta-f0" x='-33.733' y='50.073' transform='translate(159.936 14.797)'></text>
<rect x='137.112' y='64.434' height='.436' width='22.83'/>
<text class="klin-teplovogo-fronta-f3" x='-22.824' y='59.4' transform='translate(159.936 14.797)'>χt/π</text>
<g transform='translate(63.783 30.903)'>
<text class="klin-teplovogo-fronta-f5" x='-39.188' y='59.4'>2</text>
<text class="klin-teplovogo-fronta-f3" x='-33.733' y='59.4'>,</text>
<text class="klin-teplovogo-fronta-f5" x='-30.703' y='59.4'>3</text>
</g>
<g transform='translate(127.164 30.903)'>
<text class="klin-teplovogo-fronta-f5" x='-39.188' y='59.4'>4</text>
<text class="klin-teplovogo-fronta-f3" x='-33.733' y='59.4'>,</text>
<text class="klin-teplovogo-fronta-f5" x='-30.703' y='59.4'>5</text>
</g>
<g transform='translate(159.936 30.903)'>
<text class="klin-teplovogo-fronta-f5" x='-39.188' y='59.4'>5</text>
<text class="klin-teplovogo-fronta-f3" x='-33.733' y='59.4'>,</text>
<text class="klin-teplovogo-fronta-f5" x='-30.703' y='59.4'>1</text>
</g>
</g>
</g>
</svg>`;
