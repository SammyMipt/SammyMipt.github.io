/* Манифест файлов недели 11: какие блоки ядра грузить страницам.

   document.write со <script> работает синхронно во время парсинга и
   не требует ни сборки, ни fetch — единственный способ держать список
   блоков в одном месте при работе с file://. Страница обязана задать
   window.PLATFORM_BASE (путь до корня платформы) до подключения.

   Сведён 06.11 с производством драфта по правилу восьмой–десятой: свои
   блоки в порядке спеки week11.js (разделы, вопросы, задачи), рисунки
   svg по алфавиту, цели межнедельных [[...]]-ссылок в порядке первого
   появления в телах блоков. Пересобран 06.11 генератором
   briefs/lekciya11_skripty/proizvodstvo/manifest11.py после того, как
   в спеку встали одиннадцать новых рисунков (бриф
   briefs/risunki_konspekt11.md). */

(function () {
  'use strict';
  var base = window.PLATFORM_BASE || '';
  [
    'content/core/fazovye-perehody/mezhmolekulyarnoe-vzaimodejstvie.md.js',
    'content/core/fazovye-perehody/ris-potencial-vzaimodejstviya.md.js',
    'content/core/fazovye-perehody/demka-gaz-s-prityazheniem.md.js',
    'content/core/fazovye-perehody/polnyj-differencial.md.js',
    'content/core/fazovye-perehody/estestvennye-peremennye.md.js',
    'content/core/fazovye-perehody/ris-kvadrat-potencialov.md.js',
    'content/core/fazovye-perehody/entalpiya.md.js',
    'content/core/fazovye-perehody/ris-potok-i-drossel.md.js',
    'content/core/fazovye-perehody/maksimalnaya-rabota.md.js',
    'content/core/fazovye-perehody/ris-telo-v-srede.md.js',
    'content/core/fazovye-perehody/minimum-gibbsa.md.js',
    'content/core/fazovye-perehody/ekstensivnye-intensivnye.md.js',
    'content/core/fazovye-perehody/himicheskij-potencial.md.js',
    'content/core/fazovye-perehody/fazovoe-ravnovesie.md.js',
    'content/core/fazovye-perehody/ris-mu-ot-t.md.js',
    'content/core/fazovye-perehody/uravnenie-klapejrona.md.js',
    'content/core/fazovye-perehody/demka-kipenie-pod-porshnem.md.js',
    'content/core/fazovye-perehody/ravnovesie-zhidkost-par.md.js',
    'content/core/fazovye-perehody/ravnovesie-zhidkost-tverdoe.md.js',
    'content/core/fazovye-perehody/fazovaya-diagramma.md.js',
    'content/core/fazovye-perehody/demka-potencialy-faz.md.js',
    'content/core/fazovye-perehody/ris-fazovaya-diagramma.md.js',
    'content/core/fazovye-perehody/osobennosti-fazovyh-perehodov.md.js',
    'content/core/fazovye-perehody/ris-zarodysh.md.js',
    'content/core/fazovye-perehody/sverhkriticheskij-flyuid.md.js',
    'content/core/fazovye-perehody/ris-obhod-kriticheskoj-tochki.md.js',
    'content/core/fazovye-perehody/demka-tri-ampuly.md.js',
    'content/core/fazovye-perehody/ris-tri-ampuly.md.js',
    'content/core/fazovye-perehody/uravnenie-van-der-vaalsa.md.js',
    'content/core/fazovye-perehody/ris-dve-popravki.md.js',
    'content/core/fazovye-perehody/izotermy-van-der-vaalsa.md.js',
    'content/core/fazovye-perehody/ris-izotermy-vdv.md.js',
    'content/core/fazovye-perehody/ris-pravilo-maksvella.md.js',
    'content/core/fazovye-perehody/demka-izoterma-vdv.md.js',
    'content/core/fazovye-perehody/nitka-pod-krivoj.md.js',
    'content/core/fazovye-perehody/ris-nitka-pod-krivoj.md.js',
    'content/core/fazovye-perehody/kriticheskie-parametry.md.js',
    'content/core/fazovye-perehody/ris-model-i-veshchestvo.md.js',
    'content/core/fazovye-perehody/itog-tri-ravenstva.md.js',
    'content/core/fazovye-perehody/vopros-fp-01.md.js',
    'content/core/fazovye-perehody/vopros-fp-02.md.js',
    'content/core/fazovye-perehody/vopros-fp-03.md.js',
    'content/core/fazovye-perehody/vopros-fp-04.md.js',
    'content/core/fazovye-perehody/vopros-fp-05.md.js',
    'content/core/fazovye-perehody/vopros-fp-06.md.js',
    'content/core/fazovye-perehody/vopros-fp-07.md.js',
    'content/core/fazovye-perehody/vopros-fp-08.md.js',
    'content/core/fazovye-perehody/vopros-fp-09.md.js',
    'content/core/fazovye-perehody/vopros-fp-10.md.js',
    'content/core/fazovye-perehody/vopros-fp-11.md.js',
    'content/core/fazovye-perehody/vopros-fp-12.md.js',
    'content/core/fazovye-perehody/zadacha-fp-vnutrennyaya-energiya.md.js',
    'content/core/fazovye-perehody/zadacha-fp-everest.md.js',
    'content/core/fazovye-perehody/zadacha-fp-privedennoe-davlenie.md.js',
    'content/core/fazovye-perehody/figs/dve-popravki.svg.js',
    'content/core/fazovye-perehody/figs/fazovaya-diagramma.svg.js',
    'content/core/fazovye-perehody/figs/izotermy-vdv.svg.js',
    'content/core/fazovye-perehody/figs/kvadrat-potencialov.svg.js',
    'content/core/fazovye-perehody/figs/model-i-veshchestvo.svg.js',
    'content/core/fazovye-perehody/figs/mu-ot-t.svg.js',
    'content/core/fazovye-perehody/figs/nitka-pod-krivoj.svg.js',
    'content/core/fazovye-perehody/figs/obhod-kriticheskoj-tochki.svg.js',
    'content/core/fazovye-perehody/figs/potencial-vzaimodejstviya.svg.js',
    'content/core/fazovye-perehody/figs/potok-i-drossel.svg.js',
    'content/core/fazovye-perehody/figs/pravilo-maksvella.svg.js',
    'content/core/fazovye-perehody/figs/telo-v-srede.svg.js',
    'content/core/fazovye-perehody/figs/tri-ampuly.svg.js',
    'content/core/fazovye-perehody/figs/zarodysh.svg.js',
    /* цели межнедельных [[...]]-ссылок — чужие блоки, только чтение */
    'content/core/termodinamika-vvedenie/itog-dva-opisaniya-gaza.md.js',
    'content/core/termodinamika-vvedenie/model-idealnogo-gaza.md.js',
    'content/core/termodinamika-vvedenie/uravnenie-sostoyaniya.md.js',
    'content/core/rabota-energiya/zadacha-lennard-dzhons.md.js',
    'content/core/termodinamika-vvedenie/izohornyj-i-izobarnyj.md.js',
    'content/core/termodinamika-vvedenie/pervoe-nachalo.md.js',
    'content/core/termodinamika-vvedenie/rabota-zavisit-ot-puti.md.js',
    'content/core/vtoroe-nachalo/opredelenie-entropii.md.js',
    'content/core/termodinamika-vvedenie/ravnovesnye-processy.md.js',
    'content/core/vtoroe-nachalo/obobshchenie-nachal.md.js',
    'content/core/termodinamika-vvedenie/vnutrennyaya-energiya-gaza.md.js',
    'content/core/rabota-energiya/potencialnaya-energiya.md.js',
    'content/core/deformacii-gidrodinamika/zakon-bernulli.md.js',
    'content/core/vtoroe-nachalo/formulirovki-vtorogo-nachala.md.js',
    'content/core/vtoroe-nachalo/itog-odin-zapret.md.js',
    'content/core/termodinamika-vvedenie/izotermicheskij-process.md.js',
    'content/core/vtoroe-nachalo/primer-rasshirenie-v-pustotu.md.js',
    'content/core/termodinamika-vvedenie/minus-pervoe-nachalo.md.js',
    'content/core/raspredeleniya/raspredelenie-gibbsa.md.js',
    'content/core/termodinamika-vvedenie/nulevoe-nachalo.md.js',
    'content/core/vtoroe-nachalo/teplovaya-mashina.md.js',
    'content/core/raspredeleniya/raspredelenie-bolcmana.md.js',
    'content/core/deformacii-gidrodinamika/zadacha-dg-zamerzanie.md.js',
    'content/core/vtoroe-nachalo/termodinamicheskaya-temperatura.md.js',
    'content/core/vtoroe-nachalo/ogranicheniya-cikla-karno.md.js',
    'content/core/yavleniya-perenosa/zadacha-yp-vyazkost-azota.md.js',
    'content/core/termodinamika-vvedenie/gazovyj-termometr.md.js',
    'content/core/deformacii-gidrodinamika/vsestoronnee-szhatie.md.js',
    'content/core/rabota-energiya/spusk-i-trenie.md.js',
    'content/core/razmernosti/obezrazmerivanie-priznakov.md.js',
    'content/core/vtoroe-nachalo/ris-ptichka-pod-kolpakom.md.js'
  ].forEach(function (p) {
    document.write('<script src="' + base + p + '"><\/script>');
  });
})();
