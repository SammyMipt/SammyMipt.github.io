/* Манифест файлов недели 12: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения.

   Блоки недели 10 (opredelenie-entropii, primer-rasshirenie-v-pustotu,
   obobshchenie-nachal) и задача недели 01 (zadacha-entropiya) грузятся
   отсюда же, чтобы [[...]]-связи из блоков о формуле Больцмана
   разворачивались в заголовки, а не в голые id. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/raspredeleniya/ponyatie-veroyatnosti.md.js',
    'content/core/raspredeleniya/srednie-znacheniya.md.js',
    'content/core/raspredeleniya/srednekvadratichnoe-otklonenie.md.js',
    'content/core/raspredeleniya/binomialnoe-raspredelenie.md.js',
    'content/core/raspredeleniya/raspredelenie-puassona.md.js',
    'content/core/raspredeleniya/raspredelenie-gaussa.md.js',
    'content/core/raspredeleniya/mikro-i-makrosostoyaniya.md.js',
    'content/core/raspredeleniya/ris-tri-sharika.md.js',
    'content/core/raspredeleniya/statisticheskij-ves.md.js',
    'content/core/raspredeleniya/ris-chetyre-sharika.md.js',
    'content/core/raspredeleniya/fazovye-yachejki.md.js',
    'content/core/raspredeleniya/veroyatnost-makrosostoyaniya.md.js',
    'content/core/raspredeleniya/formula-bolcmana.md.js',
    'content/core/raspredeleniya/raspredelenie-gibbsa.md.js',
    'content/core/raspredeleniya/statisticheskaya-summa.md.js',
    'content/core/raspredeleniya/statisticheskij-integral.md.js',
    'content/core/raspredeleniya/barometricheskaya-formula.md.js',
    'content/core/raspredeleniya/ris-barometricheskaya.md.js',
    'content/core/raspredeleniya/ris-simulator-bolcmana.md.js',
    'content/core/raspredeleniya/raspredelenie-bolcmana.md.js',
    'content/core/raspredeleniya/raspredelenie-maksvella.md.js',
    'content/core/raspredeleniya/ris-elementarnyj-obem.md.js',
    'content/core/raspredeleniya/raspredelenie-po-modulyu.md.js',
    'content/core/raspredeleniya/harakternye-skorosti.md.js',
    'content/core/raspredeleniya/ris-krivaya-maksvella.md.js',
    'content/core/raspredeleniya/vopros-rb-01.md.js',
    'content/core/raspredeleniya/vopros-rb-02.md.js',
    'content/core/raspredeleniya/vopros-rb-03.md.js',
    'content/core/raspredeleniya/vopros-rb-04.md.js',
    'content/core/raspredeleniya/vopros-rb-05.md.js',
    'content/core/raspredeleniya/vopros-rb-06.md.js',
    'content/core/raspredeleniya/vopros-rb-07.md.js',
    'content/core/raspredeleniya/vopros-rb-08.md.js',
    'content/core/raspredeleniya/vopros-rb-09.md.js',
    'content/core/raspredeleniya/vopros-rb-10.md.js',
    'content/core/raspredeleniya/zadacha-rb-ravnomernoe.md.js',
    'content/core/raspredeleniya/zadacha-rb-skorosti-azota.md.js',
    'content/core/raspredeleniya/zadacha-rb-atmosfera.md.js',
    'content/core/raspredeleniya/zadacha-rb-dva-urovnya.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js',
    'content/core/vtoroe-nachalo/primer-rasshirenie-v-pustotu.md.js',
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/razmernosti/zadacha-entropiya.md.js',
    'content/core/raspredeleniya/figs/tri-sharika.svg.js',
    'content/core/raspredeleniya/figs/chetyre-sharika.svg.js',
    'content/core/raspredeleniya/figs/barometricheskaya.svg.js',
    'content/core/raspredeleniya/figs/elementarnyj-obem.svg.js',
    'content/core/raspredeleniya/figs/krivaya-maksvella.svg.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
