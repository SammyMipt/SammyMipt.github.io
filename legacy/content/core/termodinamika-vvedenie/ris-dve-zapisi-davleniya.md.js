/* НОВЫЙ РИСУНОК 23.10 по рамке (briefs/lekciya09_ramka.md, §4, второй акт,
   шаг «Встреча»; §5, temperatura-i-energiya-molekuly: «Две записи давления
   на одном рисунке»; §6, «Рисунки») и решениям автора, §3. Обозначения по
   решению рамки Р2: ⟨ε_пост⟩ в выводе давления и во встрече. Исходник
   sources/physics1_summary/inputs/08/pics/dve_zapisi_davleniya.tex.
   Левая запись дана как P = νRT/V (газовый термометр, без молекул); если
   блок автора B пишет её nkT, правится один узел исходника и эта подпись.
   Колонки «без молекул» и «удары молекул» названы, как в таблице финала
   (рамка, §6). */
window.BLOCK(String.raw`
---
id: ris-dve-zapisi-davleniya
type: рисунок
title: Одно давление в двух записях
links: [temperatura-i-energiya-molekuly, davlenie-idealnogo-gaza]
fig: dve-zapisi-davleniya
---

Давление газа на стенку записывают двумя способами. Без молекул его даёт газовый термометр, $P = \nu RT/V$; удары молекул дают $P = \tfrac23 n\langle\varepsilon_\text{пост}\rangle$. Давление одно, и, приравняв записи при $n = \nu N_A/V$, получаем $\langle\varepsilon_\text{пост}\rangle = \tfrac32 kT$ с $k = R/N_A$: температура газа получает смысл средней энергии поступательного движения молекулы.
`);
