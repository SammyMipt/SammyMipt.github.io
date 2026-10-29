/* Собран конвейером из sources/physics1_summary/inputs/07/pics/cepochka_i_sterzhen.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs deformacii-gidrodinamika cepochka-i-sterzhen.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['cepochka-i-sterzhen'] = String.raw`<svg class="fig-tikz" width="404" height="135" viewBox="0 0 404 135" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Цепочка грузов массы m на пружинках жёсткости k со смещениями u n−1, u n, u n+1 от положений равновесия; под ней стержень, разрезанный на ломтики длины a, ломтик под грузом n выделен">
<style>text.cepochka-i-sterzhen-f0{font-family:cmsy9;font-size:8.966px}text.cepochka-i-sterzhen-f1{font-family:cmsy10;font-size:10.909px}text.cepochka-i-sterzhen-f2{font-family:cmmi9;font-size:8.966px}text.cepochka-i-sterzhen-f3{font-family:cmmi10;font-size:10.909px}text.cepochka-i-sterzhen-f4{font-family:cmr9;font-size:8.966px}</style>
<g fill="currentColor" transform="translate(90.901 90.891) scale(1.375011)">

<g id='page1'>
<g stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'>
<path d='m-24.82-48.762h3.402c.508-2.047 1.84-3.684 3.371-3.684s2.859 1.637 3.371 3.684c.508 2.047 .199 3.684-.316 3.684c-.512 0-.82-1.637-.313-3.684c.512-2.047 1.84-3.684 3.371-3.684s2.863 1.637 3.371 3.684c.512 2.047 .199 3.684-.313 3.684c-.516 0-.824-1.637-.316-3.684c.512-2.047 1.84-3.684 3.371-3.684c1.535 0 2.863 1.637 3.371 3.684c.512 2.047 .199 3.684-.313 3.684s-.824-1.637-.313-3.684c.508-2.047 1.84-3.684 3.371-3.684s2.859 1.637 3.371 3.684c.508 2.047 .199 3.684-.316 3.684c-.512 0-.824-1.637-.313-3.684c.508-2.047 1.84-3.684 3.371-3.684s2.863 1.637 3.371 3.684s.199 3.684-.313 3.684c-.516 0-.824-1.637-.317-3.684c.512-2.047 1.84-3.684 3.371-3.684c1.535 0 2.863 1.637 3.371 3.684h8.895'/>
<path d='m38.961-48.762h3.402c.523-2.047 1.871-3.684 3.422-3.684c1.547 0 2.895 1.637 3.422 3.684s.231 3.684-.266 3.684s-.789-1.637-.262-3.684s1.875-3.684 3.422-3.684c1.551 0 2.898 1.637 3.422 3.684c.527 2.047 .234 3.684-.262 3.684s-.789-1.637-.262-3.684s1.871-3.684 3.422-3.684c1.547 0 2.895 1.637 3.422 3.684s.234 3.684-.262 3.684s-.793-1.637-.266-3.684s1.875-3.684 3.422-3.684c1.551 0 2.898 1.637 3.422 3.684c.527 2.047 .234 3.684-.262 3.684s-.789-1.637-.262-3.684s1.871-3.684 3.422-3.684c1.547 0 2.895 1.637 3.422 3.684s.234 3.684-.262 3.684s-.793-1.637-.266-3.684s1.875-3.684 3.422-3.684c1.551 0 2.898 1.637 3.422 3.684h.004h9.184'/>
<path d='m104.16-48.762h3.398c.359-2.047 1.535-3.684 2.918-3.684c1.379 0 2.555 1.637 2.914 3.684s-.105 3.684-.77 3.684s-1.129-1.637-.77-3.684s1.535-3.684 2.914-3.684c1.383 0 2.559 1.637 2.918 3.684c.356 2.047-.106 3.684-.77 3.684c-.668 0-1.129-1.637-.77-3.684c.356-2.047 1.535-3.684 2.914-3.684s2.559 1.637 2.914 3.684c.359 2.047-.102 3.684-.77 3.684c-.664 0-1.125-1.637-.77-3.684c.359-2.047 1.535-3.684 2.918-3.684c1.379 0 2.555 1.637 2.914 3.684s-.105 3.684-.77 3.684s-1.129-1.637-.77-3.684c.355-2.047 1.535-3.684 2.914-3.684c1.383 0 2.559 1.637 2.918 3.684c.356 2.047-.106 3.684-.77 3.684c-.668 0-1.129-1.637-.77-3.684c.356-2.047 1.535-3.684 2.914-3.684s2.559 1.637 2.914 3.684h6.16'/>
<path d='m155.184-48.762h3.402c.32-2.047 1.465-3.684 2.813-3.684s2.488 1.637 2.813 3.684s-.172 3.684-.871 3.684s-1.195-1.637-.871-3.684s1.469-3.684 2.816-3.684s2.488 1.637 2.813 3.684s-.172 3.684-.871 3.684s-1.195-1.637-.871-3.684s1.469-3.684 2.816-3.684c1.344 0 2.488 1.637 2.813 3.684s-.172 3.684-.871 3.684s-1.195-1.637-.871-3.684s1.469-3.684 2.816-3.684c1.344 0 2.488 1.637 2.813 3.684s-.172 3.684-.871 3.684s-1.195-1.637-.871-3.684s1.469-3.684 2.816-3.684c1.344 0 2.489 1.637 2.813 3.684s-.172 3.684-.871 3.684s-1.195-1.637-.871-3.684s1.468-3.684 2.812-3.684c1.348 0 2.492 1.637 2.817 3.684h5.554'/>
<path d='m-38.992-48.762h-9.922'/>
<path d='m203.371-48.762h9.922'/>
</g>
<text class="cepochka-i-sterzhen-f1" x='77.229' y='-48.762' transform='translate(-143.338 2.424)'>·<tspan x='82.077'>·</tspan>
<tspan x='86.926'>·</tspan>
</text>
<text class="cepochka-i-sterzhen-f1" x='77.229' y='-48.762' transform='translate(138.713 2.424)'>·<tspan x='82.077'>·</tspan>
<tspan x='86.926'>·</tspan>
</text>
<path d='m-38.992-41.676v-14.172h14.172v14.172z' fill="currentColor" fill-opacity="0.078"/>
<path d='m-38.992-41.676v-14.172h14.172v14.172z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m24.789-41.676v-14.172h14.172v14.172z' fill="currentColor" fill-opacity="0.078"/>
<path d='m24.789-41.676v-14.172h14.172v14.172z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m141.008-41.676v-14.172h14.176v14.172z' fill="currentColor" fill-opacity="0.078"/>
<path d='m141.008-41.676v-14.172h14.176v14.172z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m189.199-41.676v-14.172h14.172v14.172z' fill="currentColor" fill-opacity="0.078"/>
<path d='m189.199-41.676v-14.172h14.172v14.172z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m89.984-41.676v-14.172h14.176v14.172z' fill="var(--fig-a)" fill-opacity="0.22"/>
<path d='m89.984-41.676v-14.172h14.176v14.172z' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762' transform='translate(15.053 -11.754)' fill="var(--fig-a)">m</text>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762' transform='translate(42.344 -9.769)'>k</text>
<g stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989,1.993'>
<path d='m20.535-40.258v12.758'/>
<path d='m77.23-40.258v12.758'/>
<path d='m133.922-40.258v12.758'/>
<path d='m77.23-27.5v24.094'/>
</g>
<path d='m20.535-33.172h7.215' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m31.875-33.172c-1.223-.227-3.211-.914-4.582-1.719v3.438c1.371-.801 3.359-1.488 4.582-1.719' fill="var(--fig-a)"/>
<path d='m77.23-33.172h15.715' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m97.07-33.172c-1.223-.227-3.207-.914-4.582-1.719v3.438c1.375-.801 3.359-1.488 4.582-1.719' fill="var(--fig-a)"/>
<path d='m133.922-33.172h10.051' stroke="var(--fig-a)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m148.097-33.172c-1.223-.227-3.211-.914-4.586-1.719v3.438c1.375-.801 3.363-1.488 4.586-1.719'/>
<g transform='translate(-63.063 31.475)'>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762'>u</text>
<text class="cepochka-i-sterzhen-f2" x='83.474' y='-46.741'>n</text>
<text class="cepochka-i-sterzhen-f0" x='89.033' y='-46.741'>−</text>
<text class="cepochka-i-sterzhen-f4" x='96.2' y='-46.741'>1</text>
</g>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762' transform='translate(3.77 31.475)'>u</text>
<text class="cepochka-i-sterzhen-f2" x='83.474' y='-47.126' transform='translate(3.77 31.475)'>n</text>
<g transform='translate(51.741 31.475)'>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762'>u</text>
<text class="cepochka-i-sterzhen-f2" x='83.474' y='-46.741'>n</text>
<text class="cepochka-i-sterzhen-f4" x='89.033' y='-46.741'>+1</text>
</g>
</g>
<path d='m-64.504 13.602v-17.008h283.469v17.008z' fill="currentColor" fill-opacity="0.078"/>
<path d='m48.883 13.602v-17.008h56.691v17.008z' fill="var(--fig-a)" fill-opacity="0.22"/>
<g fill='none' stroke-miterlimit='10'>
<path d='m-64.504 13.602v-17.008h283.469v17.008z' stroke="currentColor" stroke-width='.598'/>
<g stroke="currentColor" stroke-opacity="0.451" stroke-width='.399' stroke-dasharray='2.989,1.993'>
<path d='m-7.813 13.602v-17.008'/>
<path d='m48.883 13.602v-17.008'/>
<path d='m105.574 13.602v-17.008'/>
<path d='m162.27 13.602v-17.008'/>
</g>
<path d='m52.469 22.106h49.52' stroke="currentColor" stroke-width='.399'/>
</g>
<path d='m48.883 22.105c1.063 .199 2.789 .797 3.984 1.492v-2.988c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m105.574 22.105c-1.063-.199-2.789-.797-3.984-1.496v2.988c1.195-.695 2.922-1.293 3.984-1.492'/>
<text class="cepochka-i-sterzhen-f3" x='77.229' y='-48.762' transform='translate(-2.883 80.798)'>a</text>
</g>
</g>
</svg>`;
