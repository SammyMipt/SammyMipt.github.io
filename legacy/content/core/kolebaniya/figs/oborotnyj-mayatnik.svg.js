/* Собран конвейером из sources/physics1_summary/inputs/06/pics/oborotnyj_mayatnik.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs kolebaniya oborotnyj-mayatnik.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['oborotnyj-mayatnik'] = String.raw`<svg class="fig-tikz" width="131" height="188" viewBox="0 0 131 188" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Оборотный маятник: вертикальный стержень с тяжёлым грузом у нижнего конца и подвижным грузом между опорами висит на опорной призме A у верхнего конца; вторая призма B ниже центра масс C смотрит остриём навстречу первой. Расстояния a от A до C и b от C до B не равны, расстояние между призмами l_AB равно эффективной длине">
<style>text.oborotnyj-mayatnik-f0{font-family:cmmi9;font-size:8.966px}text.oborotnyj-mayatnik-f1{font-family:cmmi10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.898 96.259) scale(1.375011)">

<g id='page1'>
<path d='m-47.516-69.707v136.062h6.805v-136.062z' fill="currentColor" fill-opacity="0.059"/>
<path d='m-47.516-69.707v136.062h6.805v-136.062z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-52.051-26.621v-6.805h15.875v6.805z' fill="var(--fig-back)"/>
<path d='m-52.051-26.621v-6.805h15.875v6.805z' fill="currentColor" fill-opacity="0.22"/>
<path d='m-52.051-26.621v-6.805h15.875v6.805z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-56.586 65.222v-11.34h24.945v11.34z' fill="var(--fig-back)"/>
<path d='m-56.586 65.222v-11.34h24.945v11.34z' fill="currentColor" fill-opacity="0.22"/>
<path d='m-56.586 65.222v-11.34h24.945v11.34z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-58.856-36.074v12.102' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-58.855-39.66c-.199 1.063-.797 2.789-1.492 3.984h2.988c-.699-1.195-1.297-2.922-1.496-3.984'/>
<path d='m-58.855-20.387c.199-1.063 .797-2.789 1.496-3.984h-2.988c.695 1.195 1.293 2.922 1.492 3.984'/>
<path d='m-44.113-54.969l-6.805-9.07h13.605z' fill="var(--fig-back)"/>
<path d='m-44.113-54.969l-6.805-9.07h13.605z' fill="currentColor" fill-opacity="0.4"/>
<path d='m-44.113-54.969l-6.805-9.07h13.605z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-44.113 41.41l-6.805 9.07h13.605z' fill="var(--fig-back)"/>
<path d='m-44.113 41.41l-6.805 9.07h13.605z' fill="currentColor" fill-opacity="0.4"/>
<path d='m-44.113 41.41l-6.805 9.07h13.605z' stroke="currentColor" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<path d='m-42.422 13.18c0-.938-.758-1.695-1.691-1.695c-.937 0-1.695 .758-1.695 1.695c0 .934 .758 1.691 1.695 1.691c.934 0 1.691-.758 1.691-1.691z'/>
<g stroke="currentColor" stroke-opacity="0.498" fill='none' stroke-width='.199' stroke-miterlimit='10'>
<path d='m-36.176-54.969h47.621'/>
<path d='m-38.445 13.18h27.215'/>
<path d='m-36.176 41.41h47.621'/>
</g>
<path d='m-16.898-51.383v60.973' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-16.898-54.969c-.199 1.063-.801 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<path d='m-16.898 13.18c.199-1.066 .797-2.793 1.492-3.988h-2.988c.695 1.195 1.297 2.922 1.496 3.988'/>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(33.58 51.218)'>a</text>
<path d='m-16.898 16.766v21.059' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-16.898 13.18c-.199 1.063-.801 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<path d='m-16.898 41.41c.199-1.063 .797-2.789 1.492-3.984h-2.988c.695 1.195 1.297 2.922 1.496 3.984'/>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(33.58 100.734)'>b</text>
<path d='m5.777-50.844v88.129' stroke="var(--fig-const)" fill='none' stroke-width='.598' stroke-miterlimit='10'/>
<g fill="var(--fig-const)">
<path d='m5.777-54.969c-.23 1.223-.918 3.211-1.719 4.582h3.438c-.805-1.371-1.488-3.359-1.719-4.582'/>
<path d='m5.777 41.41c.23-1.223 .914-3.207 1.719-4.582h-3.438c.801 1.375 1.488 3.359 1.719 4.582'/>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(56.259 65.532)'>l</text>
<text class="oborotnyj-mayatnik-f0" x='-40.859' y='-67.339' transform='translate(56.259 65.532)'>AB</text>
</g>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(-21.353 18.468)'>A</text>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(-19.48 86.614)'>C</text>
<text class="oborotnyj-mayatnik-f1" x='-44.114' y='-69.709' transform='translate(-21.993 114.846)'>B</text>
</g>
</g>
</svg>`;
