/* Манифест файлов недели 05: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/moment-impulsa/ot-energii-k-momentu.md.js',
    'content/core/moment-impulsa/moment-impulsa.md.js',
    'content/core/moment-impulsa/ris-moment-impulsa.md.js',
    'content/core/moment-impulsa/moment-sily.md.js',
    'content/core/moment-impulsa/moment-vnutrennih-sil.md.js',
    'content/core/moment-impulsa/ris-vnutrennie-momenty.md.js',
    'content/core/moment-impulsa/sektorialnaya-skorost.md.js',
    'content/core/moment-impulsa/ris-sektorialnaya-skorost.md.js',
    'content/core/moment-impulsa/zakony-keplera.md.js',
    'content/core/moment-impulsa/ris-ellips.md.js',
    'content/core/moment-impulsa/zakon-tyagoteniya.md.js',
    'content/core/moment-impulsa/ris-cavendish.md.js',
    'content/core/moment-impulsa/gravitacionnoe-pole.md.js',
    'content/core/moment-impulsa/potencialnaya-energiya-tyagoteniya.md.js',
    'content/core/moment-impulsa/zakony-sohraneniya-orbity.md.js',
    'content/core/moment-impulsa/effektivnyj-potencial.md.js',
    'content/core/moment-impulsa/ris-effektivnyj-potencial.md.js',
    'content/core/moment-impulsa/kosmicheskie-skorosti.md.js',
    'content/core/moment-impulsa/parametry-orbity.md.js',
    'content/core/moment-impulsa/ris-ellips-orbita.md.js',
    'content/core/moment-impulsa/tretij-zakon-keplera.md.js',
    'content/core/moment-impulsa/vopros-mi-01.md.js',
    'content/core/moment-impulsa/vopros-mi-02.md.js',
    'content/core/moment-impulsa/vopros-mi-03.md.js',
    'content/core/moment-impulsa/vopros-mi-04.md.js',
    'content/core/moment-impulsa/vopros-mi-05.md.js',
    'content/core/moment-impulsa/vopros-mi-06.md.js',
    'content/core/moment-impulsa/vopros-mi-07.md.js',
    'content/core/moment-impulsa/vopros-mi-08.md.js',
    'content/core/moment-impulsa/vopros-mi-09.md.js',
    'content/core/moment-impulsa/vopros-mi-10.md.js',
    'content/core/moment-impulsa/zadacha-geostacionar.md.js',
    'content/core/moment-impulsa/zadacha-dvojnaya-zvezda.md.js',
    'content/core/moment-impulsa/zadacha-uhod-s-orbity.md.js',
    'content/core/moment-impulsa/figs/moment-l-def.svg.js',
    'content/core/moment-impulsa/figs/vnutrennie-momenty.svg.js',
    'content/core/moment-impulsa/figs/sektorialnaya-skorost.svg.js',
    'content/core/moment-impulsa/figs/ellips-fokusy.svg.js',
    'content/core/moment-impulsa/figs/ellips-orbita.svg.js',
    'content/core/moment-impulsa/figs/effektivnyj-potencial.svg.js',
    'content/core/moment-impulsa/figs/geostacionar.svg.js',
    'content/core/moment-impulsa/figs/dvojnaya-zvezda.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/zakony-nyutona/tretij-zakon.md.js',
    'content/core/zakony-nyutona/centr-mass.md.js',
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js',
    'content/core/rabota-energiya/potencialnaya-energiya.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
