/* Манифест файлов недели 12: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения.

   Сведён 13.11 с производством главы по правилу восьмой–одиннадцатой:
   свои блоки в порядке спеки week12.js (разделы, вопросы, задачи), рисунки
   svg по алфавиту, цели межнедельных [[...]]-ссылок в порядке первого
   появления в телах блоков. Генератор
   briefs/lekciya12_skripty/proizvodstvo/speka12_manifest.py. Пересобран 13.11 сводчиком
   рисунков (бриф briefs/risunki_konspekt12.md): семь новых рисунков
   встали в спеку, их блоки и svg вошли сюда тем же правилом. Строка
   ris-simulator-bolcmana, которую держала старая колода, снята итоговым
   аудитом 13.11 вместе с блоком. */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/raspredeleniya/pochemu-molekuly-ne-padayut.md.js',
    'content/core/raspredeleniya/demka-stolb-gaza.md.js',
    'content/core/raspredeleniya/ponyatie-veroyatnosti.md.js',
    'content/core/raspredeleniya/srednie-znacheniya.md.js',
    'content/core/raspredeleniya/srednekvadratichnoe-otklonenie.md.js',
    'content/core/raspredeleniya/binomialnoe-raspredelenie.md.js',
    'content/core/raspredeleniya/raspredelenie-puassona.md.js',
    'content/core/raspredeleniya/raspredelenie-gaussa.md.js',
    'content/core/raspredeleniya/demka-doska-galtona.md.js',
    'content/core/raspredeleniya/mikro-i-makrosostoyaniya.md.js',
    'content/core/raspredeleniya/ris-tri-sharika.md.js',
    'content/core/raspredeleniya/statisticheskij-ves.md.js',
    'content/core/raspredeleniya/ris-chetyre-sharika.md.js',
    'content/core/raspredeleniya/fazovye-yachejki.md.js',
    'content/core/raspredeleniya/ris-fazovaya-yachejka.md.js',
    'content/core/raspredeleniya/veroyatnost-makrosostoyaniya.md.js',
    'content/core/raspredeleniya/ris-pik-vesa.md.js',
    'content/core/raspredeleniya/demka-vse-v-polovine.md.js',
    'content/core/raspredeleniya/formula-bolcmana.md.js',
    'content/core/raspredeleniya/raspredelenie-gibbsa.md.js',
    'content/core/raspredeleniya/statisticheskaya-summa.md.js',
    'content/core/raspredeleniya/ris-teploemkost-rotatora.md.js',
    'content/core/raspredeleniya/demka-urovni-energii.md.js',
    'content/core/raspredeleniya/temperatura-vyborki.md.js',
    'content/core/raspredeleniya/ris-softmax-temperatura.md.js',
    'content/core/raspredeleniya/statisticheskij-integral.md.js',
    'content/core/raspredeleniya/barometricheskaya-formula.md.js',
    'content/core/raspredeleniya/ris-barometricheskaya.md.js',
    'content/core/raspredeleniya/ris-stolb-dva-puti.md.js',
    'content/core/raspredeleniya/raspredelenie-bolcmana.md.js',
    'content/core/raspredeleniya/ris-perren.md.js',
    'content/core/raspredeleniya/raspredelenie-maksvella.md.js',
    'content/core/raspredeleniya/ris-elementarnyj-obem.md.js',
    'content/core/raspredeleniya/demka-plastina.md.js',
    'content/core/raspredeleniya/raspredelenie-po-modulyu.md.js',
    'content/core/raspredeleniya/ris-raspredelenie-po-energii.md.js',
    'content/core/raspredeleniya/ris-selektor-puchka.md.js',
    'content/core/raspredeleniya/harakternye-skorosti.md.js',
    'content/core/raspredeleniya/ris-krivaya-maksvella.md.js',
    'content/core/raspredeleniya/demka-gaz-k-maksvellu.md.js',
    'content/core/raspredeleniya/itog-mnozhitel-bolcmana.md.js',
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
    'content/core/raspredeleniya/vopros-rb-11.md.js',
    'content/core/raspredeleniya/vopros-rb-12.md.js',
    'content/core/raspredeleniya/zadacha-rb-ravnomernoe.md.js',
    'content/core/raspredeleniya/zadacha-rb-skorosti-azota.md.js',
    'content/core/raspredeleniya/zadacha-rb-atmosfera.md.js',
    'content/core/raspredeleniya/zadacha-rb-dva-urovnya.md.js',
    'content/core/raspredeleniya/zadacha-rb-perren.md.js',
    'content/core/raspredeleniya/figs/barometricheskaya.svg.js',
    'content/core/raspredeleniya/figs/chetyre-sharika.svg.js',
    'content/core/raspredeleniya/figs/elementarnyj-obem.svg.js',
    'content/core/raspredeleniya/figs/fazovaya-yachejka.svg.js',
    'content/core/raspredeleniya/figs/krivaya-maksvella.svg.js',
    'content/core/raspredeleniya/figs/perren.svg.js',
    'content/core/raspredeleniya/figs/pik-vesa.svg.js',
    'content/core/raspredeleniya/figs/raspredelenie-po-energii.svg.js',
    'content/core/raspredeleniya/figs/selektor-puchka.svg.js',
    'content/core/raspredeleniya/figs/softmax-temperatura.svg.js',
    'content/core/raspredeleniya/figs/stolb-dva-puti.svg.js',
    'content/core/raspredeleniya/figs/teploemkost-rotatora.svg.js',
    'content/core/raspredeleniya/figs/tri-sharika.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/deformacii-gidrodinamika/zakon-paskalya.md.js',
    'content/core/termodinamika-vvedenie/temperatura-i-energiya-molekuly.md.js',
    'content/core/termodinamika-vvedenie/davlenie-idealnogo-gaza.md.js',
    'content/core/termodinamika-vvedenie/demka-gaz-iz-molekul.md.js',
    'content/core/termodinamika-vvedenie/termodinamicheskaya-sistema.md.js',
    'content/core/fazovye-perehody/himicheskij-potencial.md.js',
    'content/core/termodinamika-vvedenie/vymorazhivanie-stepenej-svobody.md.js',
    'content/core/termodinamika-vvedenie/minus-pervoe-nachalo.md.js',
    'content/core/vtoroe-nachalo/formulirovki-vtorogo-nachala.md.js',
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/vtoroe-nachalo/demka-razvorot-skorostej.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js',
    'content/core/vtoroe-nachalo/primer-rasshirenie-v-pustotu.md.js',
    'content/core/vtoroe-nachalo/primer-smeshivanie-gazov.md.js',
    'content/core/vtoroe-nachalo/vechnyj-dvigatel-demona.md.js',
    'content/core/termodinamika-vvedenie/gazovyj-termometr.md.js',
    'content/core/vtoroe-nachalo/termodinamicheskaya-temperatura.md.js',
    'content/core/termodinamika-vvedenie/nulevoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/vnutrennyaya-energiya-gaza.md.js',
    'content/core/fazovye-perehody/maksimalnaya-rabota.md.js',
    'content/core/fazovye-perehody/estestvennye-peremennye.md.js',
    'content/core/rabota-energiya/spusk-i-trenie.md.js',
    'content/core/fazovye-perehody/fazovoe-ravnovesie.md.js',
    'content/core/fazovye-perehody/itog-tri-ravenstva.md.js',
    'content/core/fazovye-perehody/ravnovesie-zhidkost-par.md.js',
    'content/core/deformacii-gidrodinamika/sila-arhimeda.md.js',
    'content/core/yavleniya-perenosa/sootnoshenie-ejnshtejna.md.js',
    'content/core/termodinamika-vvedenie/demka-dva-gaza.md.js',
    'content/core/termodinamika-vvedenie/zvuk-v-gaze.md.js',
    'content/core/rabota-energiya/itog-dve-velichiny.md.js',
    'content/core/moment-impulsa/itog-tri-mnozhitelya.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-vyazkost-azota.md.js',
    'content/core/yavleniya-perenosa/reshenie-diffuzii.md.js',
    'content/core/yavleniya-perenosa/klassifikaciya-perenosa.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
