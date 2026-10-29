/* Собран конвейером из sources/physics1_summary/inputs/07/pics/gradient_davleniya.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika gradient-davleniya.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['gradient-davleniya'] = String.raw`<svg class="fig-tikz" width="240" height="169" viewBox="0 0 240 169" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кубик жидкости с гранями площадью ΔS на расстоянии Δx: слева давит P(x), справа большее P(x + Δx); их разность ΔS[P(x) − P(x + Δx)] направлена против градиента давления ∇P, к меньшему давлению, а внешняя сила F_x по градиенту её уравновешивает">
<style>text.gradient-davleniya-f0{font-family:cmex10;font-size:10.909px}text.gradient-davleniya-f1{font-family:cmsy10;font-size:10.909px}text.gradient-davleniya-f2{font-family:cmmi9;font-size:8.966px}text.gradient-davleniya-f3{font-family:cmmi10;font-size:10.909px}text.gradient-davleniya-f4{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.899 91.389) scale(1.375011)">

<g id='page1'>
<path d='m-33.727 25.953h51.027v-51.027h-51.027z' fill="var(--fig-back)"/>
<path d='m-33.727 25.953h51.027v-51.027h-51.027z' fill="currentColor" fill-opacity="0.071"/>
<path d='m-33.727 25.953h51.027v-51.027h-51.027z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<path d='m-33.727-25.074h51.027l28.063-20.406h-51.023z' fill="var(--fig-back)"/>
<path d='m-33.727-25.074h51.027l28.063-20.406h-51.023z' fill="currentColor" fill-opacity="0.039"/>
<path d='m-33.727-25.074h51.027l28.063-20.406h-51.023z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<path d='m17.301 25.953l28.063-20.41v-51.023l-28.063 20.406z' fill="var(--fig-back)"/>
<path d='m17.301 25.953l28.063-20.41v-51.023l-28.063 20.406z' fill="currentColor" fill-opacity="0.141"/>
<path d='m17.301 25.953l28.063-20.41v-51.023l-28.063 20.406z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<text class="gradient-davleniya-f4" x='-5.662' y='5.542' transform='translate(28.788 -12.147)'>∆</text>
<text class="gradient-davleniya-f3" x='3.429' y='5.542' transform='translate(28.788 -12.147)'>S</text>
<path d='m-63.207-9.766h22.609' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m-34.859-9.766c-1.699-.316-4.465-1.273-6.375-2.391v4.781c1.91-1.113 4.676-2.07 6.375-2.391'/>
<g transform='translate(-54.99 -23.268)'>
<text class="gradient-davleniya-f3" x='-5.662' y='5.542'>P</text>
<text class="gradient-davleniya-f4" x='2.857' y='5.542'>(</text>
<text class="gradient-davleniya-f3" x='7.1' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='13.334' y='5.542'>)</text>
</g>
</g>
<path d='m94.687-9.766h-42.453' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m46.496-9.766c1.699 .32 4.465 1.277 6.375 2.391v-4.781c-1.91 1.117-4.676 2.074-6.375 2.391'/>
<g transform='translate(58.526 -23.268)'>
<text class="gradient-davleniya-f3" x='-5.662' y='5.542'>P</text>
<text class="gradient-davleniya-f4" x='2.857' y='5.542'>(</text>
<text class="gradient-davleniya-f3" x='7.1' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='15.759' y='5.542'>+<tspan x='26.668'>∆</tspan>
</text>
<text class="gradient-davleniya-f3" x='35.759' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='41.993' y='5.542'>)</text>
</g>
</g>
<path d='m-8.215 .441h14.106' stroke="currentColor" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m11.629 .441c-1.699-.32-4.461-1.277-6.375-2.395v4.785c1.914-1.117 4.676-2.074 6.375-2.391'/>
<text class="gradient-davleniya-f3" x='-5.662' y='5.542' transform='translate(1.002 -11.973)'>F</text>
<text class="gradient-davleniya-f2" x='1.353' y='7.178' transform='translate(1.002 -11.973)'>x</text>
<path d='m1.707 37.855h-14.102' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m-18.133 37.856c1.699 .32 4.461 1.277 6.375 2.395v-4.785c-1.914 1.117-4.676 2.074-6.375 2.391'/>
<g transform='translate(-60.446 47.389)'>
<text class="gradient-davleniya-f4" x='-5.662' y='5.542'>∆</text>
<text class="gradient-davleniya-f3" x='3.429' y='5.542'>S</text>
<text class="gradient-davleniya-f0" x='12.565' y='-3.294'></text>
<text class="gradient-davleniya-f3" x='17.111' y='5.542'>P</text>
<text class="gradient-davleniya-f4" x='25.63' y='5.542'>(</text>
<text class="gradient-davleniya-f3" x='29.872' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='36.107' y='5.542'>)</text>
<text class="gradient-davleniya-f1" x='42.774' y='5.542'>−</text>
<text class="gradient-davleniya-f3" x='53.683' y='5.542'>P</text>
<text class="gradient-davleniya-f4" x='62.202' y='5.542'>(</text>
<text class="gradient-davleniya-f3" x='66.444' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='75.103' y='5.542'>+<tspan x='86.012'>∆</tspan>
</text>
<text class="gradient-davleniya-f3" x='95.103' y='5.542'>x</text>
<text class="gradient-davleniya-f4" x='101.338' y='5.542'>)</text>
<text class="gradient-davleniya-f0" x='105.581' y='-3.294'></text>
</g>
</g>
<path d='m60.953-41.23h21.926' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m86.465-41.23c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="gradient-davleniya-f1" x='-5.662' y='5.542' transform='translate(96.794 -43.045)'>∇</text>
<text class="gradient-davleniya-f3" x='3.429' y='5.542' transform='translate(96.794 -43.045)'>P</text>
<path d='m-5.66-47.184v-9.637m51.023 9.637v-9.637' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-2.074-54.555h43.852' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-5.66-54.555c1.063 .199 2.789 .797 3.984 1.496v-2.988c-1.195 .695-2.922 1.293-3.984 1.492'/>
<path d='m45.363-54.555c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="gradient-davleniya-f4" x='-5.662' y='5.542' transform='translate(17.849 -64.195)'>∆</text>
<text class="gradient-davleniya-f3" x='3.429' y='5.542' transform='translate(17.849 -64.195)'>x</text>
</g>
</g>
</svg>`;
