/* Собран конвейером из sources/physics1_summary/inputs/07/pics/kubik_v_potoke.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika kubik-v-potoke.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['kubik-v-potoke'] = String.raw`<svg class="fig-tikz" width="280" height="149" viewBox="0 0 280 149" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кубик жидкости размером Δx на Δy едет со скоростью v; слева давит P(x), справа P(x+Δx), сверху вперёд тянет вязкое напряжение τ(y+Δy), снизу назад τ(y)">
<style>text.kubik-v-potoke-f0{font-family:cmmi10;font-size:10.909px}text.kubik-v-potoke-f1{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.898 90.899) scale(1.375011)">

<g id='page1'>
<path d='m-17.883 1.344v-45.356h68.031v45.356z' fill="currentColor" fill-opacity="0.078"/>
<path d='m-17.883 1.344v-45.356h68.031v45.356z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m3.379-18.5h19.773' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m28.891-18.5c-1.703-.316-4.465-1.273-6.379-2.391v4.781c1.914-1.113 4.676-2.07 6.379-2.391' fill="var(--fig-a)"/>
<text class="kubik-v-potoke-f0" x='-18.306' y='1.343' transform='translate(31.176 -25.36)' fill="var(--fig-a)"><tspan x='-17.882'>v</tspan>
</text>
<path d='m-47.078-21.336h22.605' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m-18.734-21.336c-1.699-.316-4.461-1.273-6.375-2.391v4.785c1.914-1.117 4.676-2.074 6.375-2.395'/>
<g transform='translate(-27.21 -30.922)'>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343'>P</text>
<text class="kubik-v-potoke-f1" x='-9.363' y='1.343'>(</text>
<text class="kubik-v-potoke-f0" x='-5.121' y='1.343'>x</text>
<text class="kubik-v-potoke-f1" x='1.114' y='1.343'>)</text>
</g>
</g>
<path d='m73.676-21.336h-16.938' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m51-21.336c1.699 .32 4.465 1.277 6.375 2.395v-4.785c-1.91 1.117-4.676 2.074-6.375 2.391'/>
<g transform='translate(76.384 -30.922)'>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343'>P</text>
<text class="kubik-v-potoke-f1" x='-9.363' y='1.343'>(</text>
<text class="kubik-v-potoke-f0" x='-5.121' y='1.343'>x</text>
<text class="kubik-v-potoke-f1" x='3.538' y='1.343'>+<tspan x='14.447'>∆</tspan>
</text>
<text class="kubik-v-potoke-f0" x='23.538' y='1.343'>x</text>
<text class="kubik-v-potoke-f1" x='29.773' y='1.343'>)</text>
</g>
</g>
<path d='m-.875-49.68h28.277' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m33.141-49.68c-1.699-.32-4.461-1.277-6.375-2.391v4.781c1.914-1.117 4.676-2.074 6.375-2.391'/>
<g transform='translate(9.819 -59.269)'>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343'>τ</text>
<text class="kubik-v-potoke-f1" x='-11.879' y='1.343'>(</text>
<text class="kubik-v-potoke-f0" x='-7.636' y='1.343'>y</text>
<text class="kubik-v-potoke-f1" x='.528' y='1.343'>+<tspan x='11.437'>∆</tspan>
</text>
<text class="kubik-v-potoke-f0" x='20.528' y='1.343'>y</text>
<text class="kubik-v-potoke-f1" x='26.268' y='1.343'>)</text>
</g>
</g>
<path d='m27.473 7.012h-16.938' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m4.797 7.012c1.699 .32 4.461 1.277 6.375 2.391v-4.781c-1.914 1.117-4.676 2.074-6.375 2.391'/>
<g transform='translate(23.902 19.369)'>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343'>τ</text>
<text class="kubik-v-potoke-f1" x='-11.879' y='1.343'>(</text>
<text class="kubik-v-potoke-f0" x='-7.636' y='1.343'>y</text>
<text class="kubik-v-potoke-f1" x='-1.896' y='1.343'>)</text>
</g>
</g>
<path d='m52.418 1.344h69.164m-69.164-45.356h69.164' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m118.184-2.242v-38.184' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m118.183 1.344c.199-1.063 .797-2.789 1.492-3.984h-2.988c.699 1.195 1.297 2.922 1.496 3.984'/>
<path d='m118.183-44.012c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="kubik-v-potoke-f1" x='-17.882' y='1.343' transform='translate(141.298 -20.011)'>∆</text>
<text class="kubik-v-potoke-f0" x='-8.791' y='1.343' transform='translate(141.298 -20.011)'>y</text>
<path d='m-17.883 3.609v29.48m68.031-29.48v29.48' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-14.297 29.691h60.859' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-17.883 29.691c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m50.148 29.691c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="kubik-v-potoke-f1" x='-17.882' y='1.343' transform='translate(26.353 41.035)'>∆</text>
<text class="kubik-v-potoke-f0" x='-8.791' y='1.343' transform='translate(26.353 41.035)'>x</text>
<path d='m-63.238 29.691h16.258' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-43.395 29.691c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<path d='m-63.238 29.691v-16.258' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-63.238 9.848c-.199 1.063-.797 2.789-1.492 3.984h2.988c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343' transform='translate(-21.412 30.695)'>x</text>
<text class="kubik-v-potoke-f0" x='-17.882' y='1.343' transform='translate(-48.225 2.283)'>y</text>
</g>
</g>
</svg>`;
