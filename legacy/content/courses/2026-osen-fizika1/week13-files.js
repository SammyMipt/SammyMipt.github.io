/* Манифест файлов недели 13: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/yavleniya-perenosa/sechenie-stolknoveniya.md.js',
    'content/core/yavleniya-perenosa/ris-sechenie-stolknoveniya.md.js',
    'content/core/yavleniya-perenosa/dlina-svobodnogo-probega.md.js',
    'content/core/yavleniya-perenosa/raspredelenie-probegov.md.js',
    'content/core/yavleniya-perenosa/sechenie-realnye-sistemy.md.js',
    'content/core/yavleniya-perenosa/klassifikaciya-perenosa.md.js',
    'content/core/yavleniya-perenosa/zakon-fika.md.js',
    'content/core/yavleniya-perenosa/ris-diffuziya-primesi.md.js',
    'content/core/yavleniya-perenosa/zakon-furye.md.js',
    'content/core/yavleniya-perenosa/uravnenie-diffuzii.md.js',
    'content/core/yavleniya-perenosa/ris-balans-potokov.md.js',
    'content/core/yavleniya-perenosa/teplovoj-front.md.js',
    'content/core/yavleniya-perenosa/ris-teplovoj-front.md.js',
    'content/core/yavleniya-perenosa/reshenie-diffuzii.md.js',
    'content/core/yavleniya-perenosa/ris-rasplyvanie-gaussa.md.js',
    'content/core/yavleniya-perenosa/sluchajnye-bluzhdaniya.md.js',
    'content/core/yavleniya-perenosa/ris-sluchajnoe-bluzhdanie.md.js',
    'content/core/yavleniya-perenosa/strogij-vyvod-diffuzii.md.js',
    'content/core/yavleniya-perenosa/zakon-ejnshtejna-smoluhovskogo.md.js',
    'content/core/yavleniya-perenosa/brounovskoe-dvizhenie.md.js',
    'content/core/yavleniya-perenosa/ris-brounovskaya-traektoriya.md.js',
    'content/core/yavleniya-perenosa/sootnoshenie-ejnshtejna.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-01.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-02.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-03.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-04.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-05.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-06.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-07.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-08.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-09.md.js',
    'content/core/yavleniya-perenosa/vopros-yp-10.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-vyazkost-azota.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-steklopaket.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-legkie.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-tuman.md.js',
    'content/core/yavleniya-perenosa/figs/sechenie-stolknoveniya.svg.js',
    'content/core/yavleniya-perenosa/figs/diffuziya-primesi.svg.js',
    'content/core/yavleniya-perenosa/figs/balans-potokov.svg.js',
    'content/core/yavleniya-perenosa/figs/teplovoj-front.svg.js',
    'content/core/yavleniya-perenosa/figs/rasplyvanie-gaussa.svg.js',
    'content/core/yavleniya-perenosa/figs/sluchajnoe-bluzhdanie.svg.js',
    'content/core/yavleniya-perenosa/figs/brounovskaya-traektoriya.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/kolebaniya/zatuhayushchie-kolebaniya.md.js',
    'content/core/deformacii-gidrodinamika/vyazkoe-techenie.md.js',
    'content/core/deformacii-gidrodinamika/chislo-rejnoldsa.md.js',
    'content/core/razmernosti/razmernaya-zavisimost.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
