/* Собран конвейером из sources/physics1_summary/inputs/09/pics/cikl_ts.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs vtoroe-nachalo cikl-ts.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['cikl-ts'] = String.raw`<svg class="fig-tikz" width="430" height="170" viewBox="0 0 430 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Две диаграммы T–S: слева цикл Карно прямоугольником между T H и T X с работой A внутри, справа овальный цикл между линиями T max и T min, вписанный в прямоугольник шириной дельта S">
<style>text.cikl-ts-f0{font-family:larm0900;font-size:8.966px}text.cikl-ts-f1{font-family:cmmi9;font-size:8.966px}text.cikl-ts-f2{font-family:cmmi10;font-size:10.909px}text.cikl-ts-f3{font-family:cmr10;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(90.538 90.803) scale(1.375011)">

<g id='page1'>
<path d='m-16.75 16.879v-51.023h68.031v51.023z' fill="currentColor" fill-opacity="0.078"/>
<path d='m-45.098 53.73h118.305' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m76.793 53.73c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(126.557 3.727)'>S</text>
<path d='m-45.098 53.73v-104.129' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m-45.098-53.984c-.199 1.063-.797 2.789-1.496 3.984h2.992c-.699-1.195-1.297-2.922-1.496-3.984'/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(-3.945 -112.384)'>T</text>
<path d='m-45.098-34.145h28.348m-28.348 51.023h28.348' stroke="currentColor" stroke-opacity="0.451" fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'/>
<path d='m-16.75-34.145h68.031' stroke="var(--fig-b)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m20.668-34.145c-1.383-.258-3.629-1.035-5.184-1.941v3.887c1.555-.906 3.801-1.684 5.184-1.945' fill="var(--fig-b)"/>
<path d='m51.281-34.145v51.023' stroke="var(--fig-const)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m51.281-6.078c.258-1.383 1.035-3.629 1.941-5.184h-3.887c.906 1.555 1.684 3.801 1.945 5.184' fill="var(--fig-const)"/>
<path d='m51.281 16.879h-68.031' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m13.863 16.879c1.379 .262 3.625 1.039 5.18 1.945v-3.887c-1.555 .906-3.801 1.684-5.18 1.941' fill="var(--fig-a)"/>
<path d='m-16.75 16.879v-51.023' stroke="var(--fig-const)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m-16.75-11.184c-.262 1.383-1.039 3.629-1.945 5.184h3.887c-.906-1.555-1.684-3.801-1.941-5.184' fill="var(--fig-const)"/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(-21.009 -85.332)' fill="var(--fig-b)">T</text>
<text class="cikl-ts-f1" x='-38.723' y='56.101' transform='translate(-21.009 -85.332)' fill="var(--fig-b)">H</text>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(-20.988 -34.308)' fill="var(--fig-a)">T</text>
<text class="cikl-ts-f1" x='-38.723' y='56.101' transform='translate(-20.988 -34.308)' fill="var(--fig-a)">X</text>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(58.271 -58.635)'>A</text>
<path d='m113.644 53.73h118.301' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m235.531 53.73c-1.063-.199-2.789-.797-3.984-1.492v2.988c1.195-.699 2.922-1.297 3.984-1.496'/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(285.297 3.727)'>S</text>
<path d='m113.644 53.73v-104.129' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m113.645-53.984c-.199 1.063-.801 2.789-1.496 3.984h2.988c-.695-1.195-1.293-2.922-1.492-3.984'/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(154.796 -112.384)'>T</text>
<g fill='none' stroke-width='.399' stroke-miterlimit='10' stroke-dasharray='2.989 1.993'>
<path d='m113.644-34.145h102.047' stroke="var(--fig-b)"/>
<path d='m113.644 16.879h102.047' stroke="var(--fig-a)"/>
<path d='m141.988 53.73v-87.875m73.703 87.875v-87.875' stroke="currentColor" stroke-opacity="0.451"/>
</g>
<path d='m215.691-8.633l-.055 1.348l-.152 1.344l-.258 1.332l-.355 1.328l-.461 1.305l-.555 1.293l-.656 1.266l-.75 1.246l-.844 1.211l-.933 1.184l-1.028 1.145l-1.109 1.106l-1.192 1.063l-1.273 1.02l-1.348 .973l-1.422 .918l-1.488 .867l-1.551 .813l-1.613 .754l-1.668 .695l-1.715 .629l-1.765 .57l-1.805 .504l-1.84 .438l-1.871 .367l-1.898 .297l-1.914 .231l-1.934 .16l-1.941 .09l-1.946 .02l-1.941-.055l-1.938-.125l-1.925-.195l-1.907-.266l-1.886-.332l-1.856-.402l-1.824-.469l-1.781-.539l-1.743-.598l-1.695-.664l-1.64-.723l-1.582-.785l-1.52-.84l-1.457-.895l-1.383-.945l-1.312-.996l-1.231-1.043l-1.152-1.082l-1.067-1.129l-.98-1.16l-.891-1.199l-.797-1.231l-.703-1.254l-.605-1.281l-.508-1.301l-.41-1.316l-.305-1.328l-.207-1.34l-.101-1.344v-1.348l.101-1.344l.207-1.34l.305-1.328l.41-1.316l.508-1.301l.605-1.281l.703-1.254l.797-1.23l.891-1.199l.98-1.16l1.067-1.129l1.152-1.082l1.231-1.043l1.312-.996l1.383-.945l1.457-.895l1.52-.84l1.582-.785l1.64-.723l1.695-.664l1.739-.598l1.789-.539l1.82-.469l1.86-.402l1.882-.332l1.907-.266l1.925-.195l1.938-.125l1.941-.055l1.946 .02l1.941 .09l1.934 .16l1.914 .231l1.898 .297l1.871 .367l1.84 .438l1.805 .504l1.761 .57l1.719 .629l1.668 .695l1.613 .754l1.551 .813l1.488 .867l1.422 .918l1.348 .973l1.273 1.02l1.192 1.063l1.109 1.106l1.024 1.145l.937 1.184l.844 1.211l.75 1.242l.656 1.27l.559 1.289l.457 1.313l.355 1.32l.258 1.336l.152 1.344l.051 1.344' fill="currentColor" fill-opacity="0.078"/>
<path d='m215.691-8.633l-.055 1.348l-.152 1.344l-.258 1.332l-.355 1.328l-.461 1.305l-.555 1.293l-.656 1.266l-.75 1.246l-.844 1.211l-.933 1.184l-1.028 1.145l-1.109 1.106l-1.192 1.063l-1.273 1.02l-1.348 .973l-1.422 .918l-1.488 .867l-1.551 .813l-1.613 .754l-1.668 .695l-1.715 .629l-1.765 .57l-1.805 .504l-1.84 .438l-1.871 .367l-1.898 .297l-1.914 .231l-1.934 .16l-1.941 .09l-1.946 .02l-1.941-.055l-1.938-.125l-1.925-.195l-1.907-.266l-1.886-.332l-1.856-.402l-1.824-.469l-1.781-.539l-1.743-.598l-1.695-.664l-1.64-.723l-1.582-.785l-1.52-.84l-1.457-.895l-1.383-.945l-1.312-.996l-1.231-1.043l-1.152-1.082l-1.067-1.129l-.98-1.16l-.891-1.199l-.797-1.231l-.703-1.254l-.605-1.281l-.508-1.301l-.41-1.316l-.305-1.328l-.207-1.34l-.101-1.344v-1.348l.101-1.344l.207-1.34l.305-1.328l.41-1.316l.508-1.301l.605-1.281l.703-1.254l.797-1.23l.891-1.199l.98-1.16l1.067-1.129l1.152-1.082l1.231-1.043l1.312-.996l1.383-.945l1.457-.895l1.52-.84l1.582-.785l1.64-.723l1.695-.664l1.739-.598l1.789-.539l1.82-.469l1.86-.402l1.882-.332l1.907-.266l1.925-.195l1.938-.125l1.941-.055l1.946 .02l1.941 .09l1.934 .16l1.914 .231l1.898 .297l1.871 .367l1.84 .438l1.805 .504l1.761 .57l1.719 .629l1.668 .695l1.613 .754l1.551 .813l1.488 .867l1.422 .918l1.348 .973l1.273 1.02l1.192 1.063l1.109 1.106l1.024 1.145l.937 1.184l.844 1.211l.75 1.242l.656 1.27l.559 1.289l.457 1.313l.355 1.32l.258 1.336l.152 1.344l.051 1.344' stroke="currentColor" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<path d='m206.589 8.141c1.238-.664 3.477-1.461 5.258-1.723l-2.43-3.031c-.645 1.676-1.91 3.688-2.828 4.754'/>
<path d='m206.589 8.141c1.238-.664 3.477-1.461 5.258-1.723l-2.43-3.031c-.645 1.676-1.91 3.688-2.828 4.754'/>
<path d='m151.086-25.406c-1.258 .629-3.516 1.367-5.301 1.586l2.348 3.094c.691-1.664 2.008-3.641 2.953-4.68'/>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(219.847 -58.635)'>A</text>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(128.92 -84.965)' fill="var(--fig-b)">T</text>
<text class="cikl-ts-f0" x='-38.723' y='55.368' transform='translate(128.92 -84.965)' fill="var(--fig-b)">max</text>
<text class="cikl-ts-f2" x='-45.098' y='53.731' transform='translate(130.711 -34.243)' fill="var(--fig-a)">T</text>
<text class="cikl-ts-f0" x='-38.723' y='55.972' transform='translate(130.711 -34.243)' fill="var(--fig-a)">min</text>
<path d='m145.574 38.141h66.527' stroke="currentColor" fill='none' stroke-width='.399' stroke-miterlimit='10'/>
<path d='m141.989 38.141c1.063 .199 2.789 .797 3.984 1.496v-2.992c-1.195 .699-2.922 1.297-3.984 1.496'/>
<path d='m215.692 38.141c-1.063-.199-2.789-.797-3.988-1.496v2.992c1.199-.699 2.926-1.297 3.988-1.496'/>
<text class="cikl-ts-f3" x='-45.098' y='53.731' transform='translate(215.733 -20.258)'>∆</text>
<text class="cikl-ts-f2" x='-36.007' y='53.731' transform='translate(215.733 -20.258)'>S</text>
</g>
</g>
</svg>`;
