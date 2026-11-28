/* Собран конвейером из sources/physics1_summary/inputs/12/pics/teplovoj_front.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs yavleniya-perenosa teplovoj-front.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['teplovoj-front'] = String.raw`<svg class="fig-tikz" width="533" height="228" viewBox="0 0 533 228" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Температура воды в зависимости от расстояния до стенки, которую держат при T1: начальный ровный уровень T0 и три профиля через 15 минут, 1 час и 4 часа. Профили круче всего у стенки и уходят вглубь. Точки почти на половине перепада стоят на глубине 1,1, 2,3 и 4,5 см, глубина за час подписана: корень из хи t равен 2,3 см">
<style>text.teplovoj-front-f0{font-family:cmsy10;font-size:10.909px}text.teplovoj-front-f1{font-family:cmmi10;font-size:10.909px}text.teplovoj-front-f2{font-family:cmr9;font-size:8.966px}text.teplovoj-front-f3{font-family:cmr10;font-size:10.909px}text.teplovoj-front-f4{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.538 90.803) scale(1.375011)">

<g id='page1'>
<path d='m-49.109 80.66v-124.723h9.922v124.723z' fill="currentColor" fill-opacity="0.122"/>
<path d='m-39.188 80.66h328.067' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m292.465 80.66c-1.063-.199-2.789-.797-3.984-1.496v2.992c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="teplovoj-front-f1" x='-39.188' y='80.66' transform='translate(336.321 1.288)'>x</text>
<text class="teplovoj-front-f4" x='-32.953' y='80.66' transform='translate(336.321 1.288)'>,<tspan x='-26.321'>см</tspan></text>
<path d='m-39.188 80.66v-131.059' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-39.188-53.984c-.199 1.063-.797 2.789-1.496 3.984h2.992c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="teplovoj-front-f1" x='-39.188' y='80.66' transform='translate(-3.945 -139.313)'>T</text>
<path d='m-39.188 80.66v2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(-2.727 14.532)'>0</text>
<path d='m74.199 80.66v2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(110.659 14.532)'>5</text>
<path d='m187.582 80.66v2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(221.317 14.532)'>10</text>
<text class="teplovoj-front-f1" x='-39.188' y='80.66' transform='translate(-26.919 -110.669)'>T</text>
<text class="teplovoj-front-f2" x='-32.813' y='82.681' transform='translate(-26.919 -110.669)'>1</text>
<text class="teplovoj-front-f1" x='-39.188' y='80.66' transform='translate(-26.919 -14.291)'>T</text>
<text class="teplovoj-front-f2" x='-32.813' y='82.681' transform='translate(-26.919 -14.291)'>0</text>
<path d='m-49.109-32.727h2.836m-2.836 96.379h2.836' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-39.188 63.652h317.481' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="teplovoj-front-f1" x='-39.188' y='80.66' transform='translate(289.441 -5.311)'>t</text>
<text class="teplovoj-front-f3" x='-32.218' y='80.66' transform='translate(289.441 -5.311)'>=<tspan x='-20.703'>0</tspan></text>
<text class="teplovoj-front-f4" x='-39.188' y='80.66' transform='translate(261.129 -92.079)'>во<tspan x='-28.642'>да</tspan></text>
<g stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'>
<path d='m-39.188-32.727l4.535 9.555l4.535 9.41l4.535 9.129l4.535 8.699l4.535 8.195l4.535 7.566l4.535 6.918l4.539 6.18l4.535 5.469l4.535 4.762l4.535 4.055l4.535 3.457l4.535 2.836l4.535 2.324l4.535 1.899l4.535 1.477l4.535 1.16l4.535 .879l4.535 .68l4.535 .512l4.535 .367l4.539 .258l4.536 .195l4.535 .145l4.535 .082l4.535 .059'/>
<path d='m-39.188-32.727l4.535 4.793l4.535 4.762l4.535 4.734l4.535 4.676l4.535 4.621l4.535 4.508l4.535 4.422l4.539 4.277l4.535 4.168l4.535 4.027l4.535 3.856l4.535 3.711l4.535 3.543l4.535 3.375l4.535 3.176l4.535 3.004l4.535 2.832l4.535 2.637l4.535 2.469l4.535 2.293l4.535 2.129l4.539 1.926l4.536 1.816l4.535 1.641l4.535 1.477l4.535 1.359l4.535 1.219l4.535 1.105l4.536 .992l4.535 .906l4.535 .766l4.535 .711l4.535 .621l4.535 .539l4.535 .484l4.536 .395l4.539 .371l4.535 .309l4.535 .285l4.535 .227l4.535 .199l4.535 .168l4.536 .145l4.535 .113l4.535 .113l4.535 .082l4.535 .059l4.535 .086l4.536 .027l4.535 .055l4.539 .031l4.535 .027'/>
<path d='m-39.188-32.727l4.535 2.383l4.535 2.41l4.535 2.379l4.535 2.383l4.535 2.379l4.535 2.355l4.535 2.352l4.539 2.324l4.535 2.324l4.535 2.297l4.535 2.266l4.535 2.242l4.535 2.211l4.535 2.211l4.535 2.152l4.535 2.125l4.535 2.098l4.535 2.07l4.535 2.043l4.535 1.984l4.535 1.953l4.539 1.902l4.536 1.898l4.535 1.813l4.535 1.785l4.535 1.758l4.535 1.703l4.535 1.672l4.536 1.613l4.535 1.563l4.535 1.527l4.535 1.477l4.535 1.445l4.535 1.387l4.535 1.332l4.536 1.305l4.539 1.25l4.535 1.219l4.535 1.16l4.535 1.133l4.535 1.078l4.535 1.051l4.536 .992l4.535 .934l4.535 .938l4.535 .879l4.535 .82l4.535 .82l4.536 .766l4.535 .711l4.539 .707l4.535 .652l4.535 .625l4.535 .594l4.535 .566l4.536 .539l4.535 .512l4.535 .481l4.535 .453l4.535 .453l4.535 .398l4.535 .367l4.536 .371l4.535 .34l4.535 .313l4.539 .309l4.535 .285l4.535 .254l4.535 .258l4.536 .227'/>
</g>
<g fill="var(--fig-a)">
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(13.753 -20.471)'>15</text>
<text class="teplovoj-front-f4" x='-24.662' y='80.66' transform='translate(13.753 -20.471)'>мин</text>
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(116.282 -30.676)'>1</text>
<text class="teplovoj-front-f4" x='-30.116' y='80.66' transform='translate(116.282 -30.676)'>ч</text>
<text class="teplovoj-front-f3" x='-39.188' y='80.66' transform='translate(229.385 -30.676)'>4</text>
<text class="teplovoj-front-f4" x='-30.116' y='80.66' transform='translate(229.385 -30.676)'>ч</text>
<path d='m-11.856 17.449c0-.883-.715-1.594-1.594-1.594s-1.594 .711-1.594 1.594c0 .879 .715 1.594 1.594 1.594s1.594-.715 1.594-1.594zm25.738 0c0-.883-.715-1.594-1.594-1.594s-1.594 .711-1.594 1.594c0 .879 .715 1.594 1.594 1.594s1.594-.715 1.594-1.594zm51.477 0c0-.883-.711-1.594-1.594-1.594c-.879 0-1.593 .711-1.593 1.594c0 .879 .714 1.594 1.593 1.594c.883 0 1.594-.715 1.594-1.594z'/>
</g>
<path d='m12.289 17.449v63.211' stroke="var(--fig-a)" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<g fill="var(--fig-a)">
<text class="teplovoj-front-f0" x='-39.188' y='72.857' transform='translate(23.271 16.178)'>√</text>
<rect x='-6.826' y='88.598' height='.436' width='10.765'/>
<g transform='translate(23.271 16.178)'>
<text class="teplovoj-front-f1" x='-30.097' y='80.66'>χt</text>
<text class="teplovoj-front-f3" x='-16.301' y='80.66'>=<tspan x='-4.786'>2</tspan></text>
<text class="teplovoj-front-f1" x='.668' y='80.66'>,</text>
<text class="teplovoj-front-f3" x='3.699' y='80.66'>3</text>
<text class="teplovoj-front-f4" x='12.77' y='80.66'>см</text>
</g>
</g>
</g>
</g>
</svg>`;
