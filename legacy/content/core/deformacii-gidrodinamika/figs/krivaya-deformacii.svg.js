/* Собран конвейером из sources/physics1_summary/inputs/07/pics/krivaya_deformacii.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika krivaya-deformacii.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['krivaya-deformacii'] = String.raw`<svg class="fig-tikz" width="480" height="235" viewBox="0 0 480 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Кривая растяжения в осях относительное удлинение ε и напряжение σ: прямая до предела пропорциональности, дальше дуга, уходящая под штриховое продолжение прямой, на ней предел упругости, площадка текучести, подъём упрочнения к вершине, пределу прочности, и спад до точки разрыва">
<style>text.krivaya-deformacii-f0{font-family:cmmi10;font-size:10.909px}text.krivaya-deformacii-f1{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.898 90.908) scale(1.375011)">

<g id='page1'>
<path d='m-62.793 101.996h319.567' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m260.36 101.996c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="krivaya-deformacii-f0" x='-62.794' y='101.997' transform='translate(327.82 2.349)'>ε</text>
<path d='m-62.793 101.996v-155.156' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-62.793-56.746c-.199 1.063-.797 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="krivaya-deformacii-f0" x='-62.794' y='101.997' transform='translate(-3.313 -163.409)'>σ</text>
<path d='m-34.449 33.965l22.113-53.067' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989,1.993'/>
<path d='m-62.793 101.996l28.344-68.031c6.012-14.402 26.93-29.766 51.027-29.766h79.372c18.14-21.769 51.023-39.683 96.378-39.683c18.426 0 40.082 12.472 45.356 24.093' stroke="var(--fig-a)" fill='none' stroke-width='1.196' stroke-miterlimit='10' stroke-linejoin='bevel'/>
<g fill="var(--fig-a)">
<path d='m-32.652 33.965c0-.992-.805-1.793-1.797-1.793c-.988 0-1.793 .801-1.793 1.793s.805 1.793 1.793 1.793c.992 0 1.797-.801 1.797-1.793z'/>
<path d='m-18.652 16.957c0-.992-.801-1.793-1.793-1.793c-.988 0-1.793 .801-1.793 1.793c0 .988 .805 1.793 1.793 1.793c.992 0 1.793-.805 1.793-1.793z'/>
<path d='m18.371 4.199c0-.988-.805-1.793-1.793-1.793c-.992 0-1.793 .805-1.793 1.793c0 .992 .801 1.793 1.793 1.793c.988 0 1.793-.801 1.793-1.793z'/>
<path d='m194.121-35.484c0-.993-.804-1.793-1.793-1.793c-.992 0-1.793 .8-1.793 1.793c0 .988 .801 1.793 1.793 1.793c.989 0 1.793-.805 1.793-1.793z'/>
</g>
<text class="krivaya-deformacii-f1" x='-62.794' y='101.997' transform='translate(38.683 -63.91)'>предел<tspan x='-25.431'>пропорциональности</tspan>
</text>
<text class="krivaya-deformacii-f1" x='-62.794' y='101.997' transform='translate(57.789 -81.485)'>предел<tspan x='-25.431'>упругости</tspan>
</text>
<text class="krivaya-deformacii-f1" x='-62.794' y='101.997' transform='translate(66.463 -106.285)'>предел<tspan x='-25.431'>текучести</tspan>
</text>
<text class="krivaya-deformacii-f1" x='-62.794' y='101.997' transform='translate(210.828 -146.537)'>предел<tspan x='-25.431'>прочности</tspan>
</text>
<path d='m234.282-7.988l6.8-6.805m-6.8 0l6.8 6.805' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<text class="krivaya-deformacii-f1" x='-62.794' y='101.997' transform='translate(310.245 -112.1)'>разрыв</text>
</g>
</g>
</svg>`;
