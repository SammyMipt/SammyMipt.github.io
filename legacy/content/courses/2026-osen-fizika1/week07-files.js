/* Манифест файлов недели 07: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/kolebaniya/chto-takoe-kolebaniya.md.js',
    'content/core/kolebaniya/pruzhinnyj-mayatnik.md.js',
    'content/core/kolebaniya/ris-pruzhinnyj-mayatnik.md.js',
    'content/core/kolebaniya/matematicheskij-mayatnik.md.js',
    'content/core/kolebaniya/ris-matematicheskij-mayatnik.md.js',
    'content/core/kolebaniya/elektromagnitnye-kolebaniya.md.js',
    'content/core/kolebaniya/ris-lc-kontur.md.js',
    'content/core/kolebaniya/metody-opredeleniya-chastoty.md.js',
    'content/core/kolebaniya/fazovyj-portret.md.js',
    'content/core/kolebaniya/ris-fazovyj-portret.md.js',
    'content/core/kolebaniya/fizicheskij-mayatnik.md.js',
    'content/core/kolebaniya/ris-fizicheskij-mayatnik.md.js',
    'content/core/kolebaniya/zatuhayushchie-kolebaniya.md.js',
    'content/core/kolebaniya/rezhimy-zatuhaniya.md.js',
    'content/core/kolebaniya/ris-zatuhanie.md.js',
    'content/core/kolebaniya/dekrement-i-dobrotnost.md.js',
    'content/core/kolebaniya/demka-mayatnik-period.md.js',
    'content/core/kolebaniya/vopros-kol-01.md.js',
    'content/core/kolebaniya/vopros-kol-02.md.js',
    'content/core/kolebaniya/vopros-kol-03.md.js',
    'content/core/kolebaniya/vopros-kol-04.md.js',
    'content/core/kolebaniya/vopros-kol-05.md.js',
    'content/core/kolebaniya/vopros-kol-06.md.js',
    'content/core/kolebaniya/vopros-kol-07.md.js',
    'content/core/kolebaniya/vopros-kol-08.md.js',
    'content/core/kolebaniya/vopros-kol-09.md.js',
    'content/core/kolebaniya/vopros-kol-10.md.js',
    'content/core/kolebaniya/vopros-kol-11.md.js',
    'content/core/kolebaniya/zadacha-kol-setka.md.js',
    'content/core/kolebaniya/zadacha-kol-plastinki.md.js',
    'content/core/kolebaniya/zadacha-kol-sterzhen.md.js',
    'content/core/kolebaniya/zadacha-kol-dva-gruza.md.js',
    'content/core/kolebaniya/figs/pruzhinnyj-mayatnik.svg.js',
    'content/core/kolebaniya/figs/matematicheskij-mayatnik.svg.js',
    'content/core/kolebaniya/figs/lc-kontur.svg.js',
    'content/core/kolebaniya/figs/fazovyj-portret.svg.js',
    'content/core/kolebaniya/figs/fizicheskij-mayatnik.svg.js',
    'content/core/kolebaniya/figs/zatuhanie.svg.js',
    'content/core/kolebaniya/figs/plastinki-podvesy.svg.js',
    'content/core/kolebaniya/figs/sterzhen-podves.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/zakony-nyutona/vtoroj-zakon.md.js',
    'content/core/moment-impulsa/moment-sily.md.js',
    'content/core/tverdoe-telo/teorema-gyujgensa-shtejnera.md.js',
    'content/core/rabota-energiya/zakon-sohraneniya-energii.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
