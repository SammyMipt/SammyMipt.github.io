/* Собран конвейером из sources/physics1_summary/inputs/10/pics/kvadrat_potencialov.tex —
   единственного источника этого рисунка. Руками этот файл не правится:
   правка идёт в tikz, потом node platform/app/scripts/tikz-figs.mjs fazovye-perehody kvadrat-potencialov.
   Геометрия, числа и решения по рисунку описаны в самом tikz-исходнике. */
window.FIGS = window.FIGS || {};
window.FIGS['kvadrat-potencialov'] = String.raw`<svg class="fig-tikz" width="502" height="196" viewBox="0 0 502 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Квадрат из четырёх функций U(S,V), H(S,P), F(T,V), G(T,P): стрелки +PV ведут вправо, стрелки −TS вниз; у каждой функции её дифференциал и то, что она считает: теплоту при постоянном объёме, теплоту при постоянном давлении, наибольшую работу в термостате, наибольшую полезную работу под поршнем в термостате">
<style>text.kvadrat-potencialov-f0{font-family:cmsy10;font-size:10.909px}text.kvadrat-potencialov-f1{font-family:cmmi10;font-size:10.909px}text.kvadrat-potencialov-f2{font-family:cmr9;font-size:8.966px}text.kvadrat-potencialov-f3{font-family:cmr10;font-size:10.909px}text.kvadrat-potencialov-f4{font-family:larm1095;font-size:10.909px}</style>
<g fill="currentColor" transform="translate(92.996 93.755) scale(1.375011)">

<g id='page1'>
<g transform='translate(-52.044 -71.932)'>
<text class="kvadrat-potencialov-f4" x='10.675' y='8.613'>внутренняя<tspan x='71.539'>энергия</tspan></text>
<text class="kvadrat-potencialov-f1" x='41.579' y='22.162'>U</text>
<text class="kvadrat-potencialov-f3" x='50.217' y='22.162'>(</text>
<text class="kvadrat-potencialov-f1" x='54.46' y='22.162'>S<tspan x='61.172'>,</tspan><tspan x='66.02'>V</tspan></text>
<text class="kvadrat-potencialov-f3" x='74.808' y='22.162'>)</text>
<text class="kvadrat-potencialov-f1" x='15.464' y='35.711'>dU</text>
<text class="kvadrat-potencialov-f3" x='32.81' y='35.711'>=</text>
<text class="kvadrat-potencialov-f1" x='44.325' y='35.711'>T<tspan x='54.034'>dS</tspan></text>
<text class="kvadrat-potencialov-f0" x='69.454' y='35.711'>−</text>
<text class="kvadrat-potencialov-f1" x='80.363' y='35.711'>P<tspan x='90.7'>dV</tspan><tspan x='8.271' y='49.261'>Q</tspan></text>
<text class="kvadrat-potencialov-f3" x='19.925' y='49.261'>=<tspan x='31.44'>∆</tspan></text>
<text class="kvadrat-potencialov-f1" x='40.531' y='49.261'>U</text>
<text class="kvadrat-potencialov-f4" x='52.786' y='49.261'>при</text>
<text class="kvadrat-potencialov-f3" x='74.481' y='49.261'>∆</text>
<text class="kvadrat-potencialov-f1" x='83.571' y='49.261'>V</text>
<text class="kvadrat-potencialov-f3" x='95.39' y='49.261'>=<tspan x='106.905'>0</tspan></text>
</g>
<g transform='translate(164.083 -71.932)'>
<text class="kvadrat-potencialov-f4" x='34.236' y='8.613'>энт<tspan x='50.206'>альпия</tspan></text>
<text class="kvadrat-potencialov-f1" x='40.361' y='22.162'>H</text>
<text class="kvadrat-potencialov-f3" x='50.316' y='22.162'>(</text>
<text class="kvadrat-potencialov-f1" x='54.558' y='22.162'>S<tspan x='61.271'>,</tspan><tspan x='66.119'>P</tspan></text>
<text class="kvadrat-potencialov-f3" x='74.638' y='22.162'>)</text>
<text class="kvadrat-potencialov-f1" x='14.112' y='35.711'>dH</text>
<text class="kvadrat-potencialov-f3" x='32.774' y='35.711'>=</text>
<text class="kvadrat-potencialov-f1" x='44.29' y='35.711'>T<tspan x='53.998'>dS</tspan></text>
<text class="kvadrat-potencialov-f3" x='69.418' y='35.711'>+</text>
<text class="kvadrat-potencialov-f1" x='80.327' y='35.711'>V<tspan x='90.933'>dP</tspan><tspan x='8.271' y='49.261'>Q</tspan></text>
<text class="kvadrat-potencialov-f3" x='19.925' y='49.261'>=<tspan x='31.44'>∆</tspan></text>
<text class="kvadrat-potencialov-f1" x='40.531' y='49.261'>H</text>
<text class="kvadrat-potencialov-f4" x='54.103' y='49.261'>при</text>
<text class="kvadrat-potencialov-f1" x='75.797' y='49.261'>P</text>
<text class="kvadrat-potencialov-f3" x='87.346' y='49.261'>=</text>
<text class="kvadrat-potencialov-f1" x='98.862' y='49.261'>P</text>
<text class="kvadrat-potencialov-f2" x='105.865' y='51.281'>0</text>
</g>
<g transform='translate(-76.286 23.02)'>
<text class="kvadrat-potencialov-f4" x='38.757' y='8.613'>свобо<tspan x='64.972'>дная</tspan><tspan x='91.939'>энергия</tspan></text>
<text class="kvadrat-potencialov-f1" x='65.589' y='22.162'>F</text>
<text class="kvadrat-potencialov-f3" x='74.119' y='22.162'>(</text>
<text class="kvadrat-potencialov-f1" x='78.361' y='22.162'>T<tspan x='85.646'>,</tspan><tspan x='90.494'>V</tspan></text>
<text class="kvadrat-potencialov-f3" x='99.282' y='22.162'>)</text>
<text class="kvadrat-potencialov-f1" x='35.517' y='35.711'>dF</text>
<text class="kvadrat-potencialov-f3" x='52.755' y='35.711'>=</text>
<text class="kvadrat-potencialov-f0" x='64.271' y='35.711'>−</text>
<text class="kvadrat-potencialov-f1" x='72.755' y='35.711'>S<tspan x='81.892'>dT</tspan></text>
<text class="kvadrat-potencialov-f0" x='97.884' y='35.711'>−</text>
<text class="kvadrat-potencialov-f1" x='108.793' y='35.711'>P<tspan x='119.13'>dV</tspan><tspan x='8.271' y='49.261'>A</tspan></text>
<text class="kvadrat-potencialov-f0" x='19.483' y='49.261'>≤<tspan x='30.998'>−</tspan></text>
<text class="kvadrat-potencialov-f3" x='39.483' y='49.261'>∆</text>
<text class="kvadrat-potencialov-f1" x='48.574' y='49.261'>F</text>
<text class="kvadrat-potencialov-f4" x='60.721' y='49.261'>при</text>
<text class="kvadrat-potencialov-f1" x='82.415' y='49.261'>T</text>
<text class="kvadrat-potencialov-f3" x='93.336' y='49.261'>=</text>
<text class="kvadrat-potencialov-f1" x='104.851' y='49.261'>T</text>
<text class="kvadrat-potencialov-f2" x='111.226' y='51.281'>0</text>
<text class="kvadrat-potencialov-f4" x='116.332' y='49.261'>,</text>
<text class="kvadrat-potencialov-f3" x='122.964' y='49.261'>∆</text>
<text class="kvadrat-potencialov-f1" x='132.055' y='49.261'>V</text>
<text class="kvadrat-potencialov-f3" x='143.873' y='49.261'>=<tspan x='155.388'>0</tspan></text>
</g>
<g transform='translate(140.476 23.02)'>
<text class="kvadrat-potencialov-f4" x='45.263' y='8.613'>энергия<tspan x='87.297'>Гиббса</tspan></text>
<text class="kvadrat-potencialov-f1" x='64.371' y='22.162'>G</text>
<text class="kvadrat-potencialov-f3" x='72.948' y='22.162'>(</text>
<text class="kvadrat-potencialov-f1" x='77.19' y='22.162'>T<tspan x='84.475'>,</tspan><tspan x='89.323'>P</tspan></text>
<text class="kvadrat-potencialov-f3" x='97.842' y='22.162'>)</text>
<text class="kvadrat-potencialov-f1" x='34.164' y='35.711'>dG</text>
<text class="kvadrat-potencialov-f3" x='51.45' y='35.711'>=</text>
<text class="kvadrat-potencialov-f0" x='62.965' y='35.711'>−</text>
<text class="kvadrat-potencialov-f1" x='71.45' y='35.711'>S<tspan x='80.586'>dT</tspan></text>
<text class="kvadrat-potencialov-f3" x='96.579' y='35.711'>+</text>
<text class="kvadrat-potencialov-f1" x='107.488' y='35.711'>V<tspan x='118.094'>dP</tspan><tspan x='8.271' y='49.261'>A</tspan></text>
<text class="kvadrat-potencialov-f0" x='19.483' y='49.261'>≤<tspan x='30.998'>−</tspan></text>
<text class="kvadrat-potencialov-f3" x='39.483' y='49.261'>∆</text>
<text class="kvadrat-potencialov-f1" x='48.574' y='49.261'>G</text>
<text class="kvadrat-potencialov-f4" x='60.768' y='49.261'>при</text>
<text class="kvadrat-potencialov-f1" x='82.462' y='49.261'>T</text>
<text class="kvadrat-potencialov-f3" x='93.383' y='49.261'>=</text>
<text class="kvadrat-potencialov-f1" x='104.898' y='49.261'>T</text>
<text class="kvadrat-potencialov-f2" x='111.273' y='51.281'>0</text>
<text class="kvadrat-potencialov-f4" x='116.379' y='49.261'>,</text>
<text class="kvadrat-potencialov-f1" x='123.011' y='49.261'>P</text>
<text class="kvadrat-potencialov-f3" x='134.56' y='49.261'>=</text>
<text class="kvadrat-potencialov-f1" x='146.075' y='49.261'>P</text>
<text class="kvadrat-potencialov-f2" x='153.079' y='51.281'>0</text>
</g>
<path d='m91.894-44.281h44.941' stroke="var(--fig-b)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m141.5-44.281c-1.383-.262-3.629-1.039-5.18-1.945v3.887c1.551-.906 3.797-1.684 5.18-1.941'/>
<text class="kvadrat-potencialov-f3" x='8.271' y='49.261' transform='translate(95.529 -98.752)'>+</text>
<text class="kvadrat-potencialov-f1" x='16.756' y='49.261' transform='translate(95.529 -98.752)'>P<tspan x='25.275'>V</tspan></text>
</g>
<path d='m91.894 49.262h44.941' stroke="var(--fig-b)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g fill="var(--fig-b)">
<path d='m141.5 49.262c-1.383-.262-3.629-1.039-5.18-1.945v3.887c1.551-.906 3.797-1.684 5.18-1.941'/>
<text class="kvadrat-potencialov-f3" x='8.271' y='49.261' transform='translate(95.529 -5.208)'>+</text>
<text class="kvadrat-potencialov-f1" x='16.756' y='49.261' transform='translate(95.529 -5.208)'>P<tspan x='25.275'>V</tspan></text>
</g>
<path d='m8.27-18.359v35.625' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m8.27 21.93c.262-1.383 1.039-3.629 1.945-5.184h-3.887c.906 1.555 1.684 3.801 1.941 5.184'/>
<text class="kvadrat-potencialov-f0" x='8.271' y='49.261' transform='translate(4.299 -44.203)'>−</text>
<text class="kvadrat-potencialov-f1" x='16.756' y='49.261' transform='translate(4.299 -44.203)'>T<tspan x='24.646'>S</tspan></text>
</g>
<path d='m223.703-18.359v35.625' stroke="var(--fig-a)" fill='none' stroke-width='.797' stroke-miterlimit='10'/>
<g fill="var(--fig-a)">
<path d='m223.703 21.93c.262-1.383 1.035-3.629 1.945-5.184h-3.887c.906 1.555 1.684 3.801 1.941 5.184'/>
<text class="kvadrat-potencialov-f0" x='8.271' y='49.261' transform='translate(219.732 -44.203)'>−</text>
<text class="kvadrat-potencialov-f1" x='16.756' y='49.261' transform='translate(219.732 -44.203)'>T<tspan x='24.646'>S</tspan></text>
</g>
</g>
</g>
</svg>`;
