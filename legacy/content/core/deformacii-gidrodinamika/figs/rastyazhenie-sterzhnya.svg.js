/* Собран конвейером из sources/physics1_summary/inputs/07/pics/rastyazhenie_sterzhnya.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika rastyazhenie-sterzhnya.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['rastyazhenie-sterzhnya'] = String.raw`<svg class="fig-tikz" width="348" height="174" viewBox="0 0 348 174" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Стержень длины L и сечения S закреплён в стене; сверху он до нагрузки, снизу растянут силой F на ΔL. Отрезок длины dx в сечении x под нагрузкой сместился на u(x) и стал длиной dx + du">
<style>text.rastyazhenie-sterzhnya-f0{font-family:cmmi10;font-size:10.909px}text.rastyazhenie-sterzhnya-f1{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(96.262 90.894) scale(1.375011)">

<g id='page1'>
<path d='m-64.141 47.777l-5.668 5.672m5.668-14.176l-5.668 5.672m5.668-14.176l-5.668 5.668m5.668-14.172l-5.668 5.672m5.668-14.176l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668m5.668-14.172l-5.668 5.668' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-64.141 51.18v-109.984' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-64.141-10.617v-17.008h181.422v17.008z' fill="currentColor" fill-opacity="0.078"/>
<path d='m20.902-10.617v-17.008h18.141v17.008z' fill="currentColor" fill-opacity="0.22"/>
<path d='m20.902-10.617v-17.008m18.141 17.008v-17.008' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-64.141-10.617h181.422m-181.422-17.008h181.422' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m120.684-19.121c0-4.695-1.524-8.504-3.403-8.504s-3.402 3.809-3.402 8.504c0 4.699 1.523 8.504 3.402 8.504s3.403-3.805 3.403-8.504z' fill="currentColor" fill-opacity="0.2"/>
<path d='m120.684-19.121c0-4.695-1.524-8.504-3.403-8.504s-3.402 3.809-3.402 8.504c0 4.699 1.523 8.504 3.402 8.504s3.403-3.805 3.403-8.504z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156' transform='translate(191.189 -51.549)'>S</text>
<path d='m-64.141 36.156v-17.008h208.633v17.008z' fill="var(--fig-a)" fill-opacity="0.14"/>
<path d='m33.656 36.156v-17.008h20.864v17.008z' fill="var(--fig-a)" fill-opacity="0.40"/>
<path d='m33.656 36.156v-17.008m20.864 17.008v-17.008' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-64.141 36.156h208.633m-208.633-17.008h208.633' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m147.895 27.652c0-4.695-1.524-8.504-3.403-8.504s-3.398 3.809-3.398 8.504s1.519 8.504 3.398 8.504s3.403-3.809 3.403-8.504z' fill="var(--fig-a)" fill-opacity="0.30"/>
<path d='m147.895 27.652c0-4.695-1.524-8.504-3.403-8.504s-3.398 3.809-3.398 8.504s1.519 8.504 3.398 8.504s3.403-3.809 3.403-8.504z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m149.598 27.652h27.425' stroke="var(--fig-b)" fill='none' stroke-width='1.196' stroke-miterlimit='10'/>
<path d='m182.761 27.652c-1.699-.32-4.465-1.277-6.375-2.391v4.781c1.91-1.117 4.676-2.07 6.375-2.391' fill="var(--fig-b)"/>
<text class="rastyazhenie-sterzhnya-f0" x='-62.531' y='33.399' transform='translate(227.045 -14.022)' fill="var(--fig-b)"><tspan x='-64.139' y='36.156'>F</tspan>
</text>
<g fill='none' stroke-miterlimit='10'>
<path d='m20.902-10.617v29.766' stroke="currentColor" stroke-opacity="0.451" stroke-width='.399' stroke-dasharray='2.989,1.993'/>
<path d='m117.281-10.617v59.813' stroke="currentColor" stroke-opacity="0.451" stroke-width='.399' stroke-dasharray='2.989,1.993'/>
<path d='m20.902 4.266h8.629' stroke="var(--fig-a)" stroke-width='.598'/>
</g>
<g fill="var(--fig-a)">
<path d='m33.656 4.266c-1.223-.23-3.207-.918-4.582-1.719v3.438c1.375-.801 3.359-1.488 4.582-1.719'/>
<g transform='translate(103.031 -29.163)'>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156'>u</text>
<text class="rastyazhenie-sterzhnya-f1" x='-57.894' y='36.156'>(</text>
<text class="rastyazhenie-sterzhnya-f0" x='-53.652' y='36.156'>x</text>
<text class="rastyazhenie-sterzhnya-f1" x='-47.417' y='36.156'>)</text>
</g>
</g>
<path d='m20.902-29.324v-11.34m18.141 11.34v-11.34m78.238 11.34v-27.496' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-60.551-38.395h77.867' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-64.141-38.395c1.063 .199 2.793 .797 3.988 1.492v-2.988c-1.195 .699-2.926 1.297-3.988 1.496'/>
<path d='m20.902-38.395c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156' transform='translate(39.403 -78.652)'>x</text>
<path d='m24.488-38.395h10.969' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m20.902-38.395c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m39.043-38.395c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156' transform='translate(88.155 -78.652)'>dx</text>
<path d='m-60.551-54.555h174.246' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-64.141-54.555c1.063 .199 2.793 .797 3.988 1.496v-2.988c-1.195 .695-2.926 1.293-3.988 1.492'/>
<path d='m117.281-54.555c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156' transform='translate(86.998 -94.81)'>L</text>
<path d='m33.656 37.855v11.34m20.864-11.34v11.34m89.972-11.34v11.34' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m37.242 46.93h13.692' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m33.656 46.93c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m54.52 46.93c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<g transform='translate(89.643 23.581)'>
<text class="rastyazhenie-sterzhnya-f0" x='-64.139' y='36.156'>dx</text>
<text class="rastyazhenie-sterzhnya-f1" x='-49.802' y='36.156'>+</text>
<text class="rastyazhenie-sterzhnya-f0" x='-38.893' y='36.156'>du</text>
</g>
<path d='m121.406 46.93h18.961' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m117.281 46.93c1.223 .227 3.207 .914 4.582 1.719v-3.438c-1.375 .801-3.359 1.488-4.582 1.719'/>
<path d='m144.492 46.93c-1.223-.23-3.207-.918-4.582-1.719v3.438c1.375-.805 3.359-1.492 4.582-1.719'/>
<text class="rastyazhenie-sterzhnya-f1" x='-64.139' y='36.156' transform='translate(186.768 23.46)'>∆</text>
<text class="rastyazhenie-sterzhnya-f0" x='-55.048' y='36.156' transform='translate(186.768 23.46)'>L</text>
</g>
</g>
</g>
</svg>`;
