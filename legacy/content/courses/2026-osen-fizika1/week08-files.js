/* Манифест файлов недели 08: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/deformacii-gidrodinamika/ot-tverdogo-tela-k-sploshnoj-srede.md.js',
    'content/core/deformacii-gidrodinamika/tipy-deformacij.md.js',
    'content/core/deformacii-gidrodinamika/ris-krivaya-deformacii.md.js',
    'content/core/deformacii-gidrodinamika/zakon-guka-lokalnyj.md.js',
    'content/core/deformacii-gidrodinamika/ris-rastyazhenie-sterzhnya.md.js',
    'content/core/deformacii-gidrodinamika/energiya-deformacii.md.js',
    'content/core/deformacii-gidrodinamika/koefficient-puassona.md.js',
    'content/core/deformacii-gidrodinamika/trehosnye-napryazheniya.md.js',
    'content/core/deformacii-gidrodinamika/ris-kub-napryazhenij.md.js',
    'content/core/deformacii-gidrodinamika/vsestoronnee-szhatie.md.js',
    'content/core/deformacii-gidrodinamika/sdvig-i-kruchenie.md.js',
    'content/core/deformacii-gidrodinamika/sploshnaya-sreda.md.js',
    'content/core/deformacii-gidrodinamika/zakon-paskalya.md.js',
    'content/core/deformacii-gidrodinamika/sila-arhimeda.md.js',
    'content/core/deformacii-gidrodinamika/svobodnaya-poverhnost.md.js',
    'content/core/deformacii-gidrodinamika/idealnaya-zhidkost.md.js',
    'content/core/deformacii-gidrodinamika/ris-laminarnoe-techenie.md.js',
    'content/core/deformacii-gidrodinamika/ris-turbulentnoe-techenie.md.js',
    'content/core/deformacii-gidrodinamika/uravnenie-nerazryvnosti.md.js',
    'content/core/deformacii-gidrodinamika/zakon-bernulli.md.js',
    'content/core/deformacii-gidrodinamika/primer-vytekanie.md.js',
    'content/core/deformacii-gidrodinamika/primer-shpric.md.js',
    'content/core/deformacii-gidrodinamika/vyazkoe-techenie.md.js',
    'content/core/deformacii-gidrodinamika/techenie-puazejlya.md.js',
    'content/core/deformacii-gidrodinamika/chislo-rejnoldsa.md.js',
    'content/core/deformacii-gidrodinamika/demka-vyazkost.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-01.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-02.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-03.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-04.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-05.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-06.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-07.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-08.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-09.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-10.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-11.md.js',
    'content/core/deformacii-gidrodinamika/vopros-dg-12.md.js',
    'content/core/deformacii-gidrodinamika/zadacha-dg-trosy.md.js',
    'content/core/deformacii-gidrodinamika/zadacha-dg-struya.md.js',
    'content/core/deformacii-gidrodinamika/zadacha-dg-vodoprovod.md.js',
    'content/core/deformacii-gidrodinamika/zadacha-dg-zamerzanie.md.js',
    'content/core/deformacii-gidrodinamika/figs/krivaya-deformacii.svg.js',
    'content/core/deformacii-gidrodinamika/figs/rastyazhenie-sterzhnya.svg.js',
    'content/core/deformacii-gidrodinamika/figs/kub-napryazhenij.svg.js',
    'content/core/deformacii-gidrodinamika/figs/struya-iz-sosuda.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js',
    'content/core/rabota-energiya/zadacha-pruzhina.md.js',
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/moment-impulsa/moment-impulsa.md.js',
    'content/core/razmernosti/primer-vyazkoe-trenie.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
