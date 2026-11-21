/* Публикационная сборка: методичка недели вырезана, её отдаёт LMS
   преподавателю по токену. Источник — content/courses. */
window.WEEK = {
  "id": "2026-osen-fizika1-w10",
  "course": "Физика 1 · осень 2026",
  "n": 10,
  "title": "Второе начало термодинамики. Энтропия",
  "topics": "Классические формулировки второго начала (Клаузиус; Томсон, он же лорд Кельвин) и их эквивалентность; энтропия как функция состояния: равенство Клаузиуса для обратимого цикла и неравенство Клаузиуса для необратимых процессов; тепловые машины: схема «нагреватель — рабочее тело — холодильник», коэффициент полезного действия и его предел; цикл Карно: теоремы Карно, выражение идеального КПД через температуры резервуаров, представление в координатах T–S; обратные циклы: холодильная машина и тепловой насос; коэффициенты охлаждения и теплонасоса; необратимые процессы и рост энтропии: теплопередача между резервуарами, свободное расширение газа, смешение газов; обобщённая формулировка «ΔS ≥ 0» для изолированной системы.",
  "video": {
    "youtube": "MDWdYiDt8Y4",
    "disk": "https://yadi.sk/i/Nc2ZPVecCS-yQA"
  },
  "status": "открыта",
  "area": "vtoroe-nachalo",
  "deck": "decks/fizika1-10/index.html",
  "pdf": "assets/pdf/10-entropiya.pdf",
  "chapter": "site/week10/chapter.html",
  "sections": [
    {
      "h": "Охладим океан",
      "blocks": [
        "formulirovki-vtorogo-nachala",
        "ris-mashiny-narusheniya"
      ]
    },
    {
      "h": "Обойдём запрет на газе",
      "blocks": [
        "tomson-idealnyj-gaz",
        "ris-tomson-gaz",
        "demka-pv-diagramma-10"
      ]
    },
    {
      "h": "Докажем, что запреты равносильны",
      "blocks": [
        "ekvivalentnost-formulirovok",
        "ris-klauzius-iz-tomsona",
        "ris-tomson-iz-klauziusa"
      ]
    },
    {
      "h": "Поставим машине холодильник",
      "blocks": [
        "teplovaya-mashina",
        "ris-teplovaya-mashina",
        "ris-ptichka-pod-kolpakom",
        "demka-pyushchaya-ptica",
        "kpd"
      ]
    },
    {
      "h": "Проведём процесс назад",
      "blocks": [
        "neobratimost-i-entropiya",
        "ris-teploobmen-cherez-stenku",
        "ris-porshen-s-treniem"
      ]
    },
    {
      "h": "Сцепим две машины Карно",
      "blocks": [
        "cikl-karno",
        "ris-cikl-karno",
        "teorema-karno",
        "ris-dokazatelstvo-karno"
      ]
    },
    {
      "h": "Перекачаем тепло к горячему",
      "blocks": [
        "holodilnaya-mashina",
        "ris-obratnaya-mashina",
        "teplovoj-nasos"
      ]
    },
    {
      "h": "Обменяем КПД на мощность",
      "blocks": [
        "ogranicheniya-cikla-karno",
        "ris-mashina-s-perepadami"
      ]
    },
    {
      "h": "Поделим теплоту на температуру",
      "blocks": [
        "termodinamicheskaya-temperatura",
        "ris-shkala-karno",
        "ris-tri-mashiny",
        "ravenstvo-klauziusa",
        "ris-uzkie-cikly-karno"
      ]
    },
    {
      "h": "Пронумеруем адиабаты",
      "blocks": [
        "opredelenie-entropii",
        "ris-serii-adiabat",
        "ris-vspomogatelnyj-rezervuar"
      ]
    },
    {
      "h": "Перерисуем цикл прямоугольником",
      "blocks": [
        "cikl-karno-ts",
        "ris-cikl-ts"
      ]
    },
    {
      "h": "Проследим три необратимых процесса",
      "blocks": [
        "primer-teploperedacha",
        "demka-dva-gaza-10",
        "primer-rasshirenie-v-pustotu",
        "ris-rasshirenie-v-pustotu",
        "demka-porshen-i-molekuly-10",
        "primer-smeshivanie-gazov",
        "ris-polupronicaemye-porshni"
      ]
    },
    {
      "h": "Оставим систему без тепла",
      "blocks": [
        "obobshchenie-nachal",
        "ris-cikl-s-vozvratom",
        "demka-razvorot-skorostej"
      ]
    },
    {
      "h": "Запретим демону вечный двигатель второго рода",
      "blocks": [
        "vechnyj-dvigatel-demona",
        "ris-dvigatel-scilarda",
        "demka-dvigatel-scilarda"
      ]
    },
    {
      "h": "Соберём, что дал один запрет",
      "blocks": [
        "itog-odin-zapret"
      ]
    }
  ],
  "demos": [
    "demka-pv-diagramma-10",
    "demka-pyushchaya-ptica",
    "demka-dva-gaza-10",
    "demka-porshen-i-molekuly-10",
    "demka-razvorot-skorostej",
    "demka-dvigatel-scilarda"
  ],
  "questions": [
    "vopros-en-01",
    "vopros-en-02",
    "vopros-en-03",
    "vopros-en-04",
    "vopros-en-05",
    "vopros-en-06",
    "vopros-en-07",
    "vopros-en-08",
    "vopros-en-09",
    "vopros-en-10"
  ],
  "tasks": [
    "zadacha-en-teplovoj-nasos",
    "zadacha-en-rasshirenie-vodoroda",
    "zadacha-en-cikl-ts",
    "zadacha-td-cikl"
  ],
  "deadlines": [
    {
      "t": "Лекция",
      "d": "четверг 05.11"
    },
    {
      "t": "Домашнее задание",
      "d": "до 23:59 воскресенья 22.11"
    }
  ],
  "methodology": []
};
