/* ПЕРЕРИСОВАН 23.10 и переведён на конвейер TikZ (бриф
   briefs/proizvodstvo09.md, «Рисунки»; рамка briefs/lekciya09_ramka.md, §6).
   Исходник sources/physics1_summary/inputs/08/pics/izoterma.tex (вместо
   isothermal_pic.tex). По мелочи 10 аудита (briefs/lekciya09_audit_yadra.md):
   прежний svg был нарисован руками, PV вдоль кривой гулял на 29 %, в V1
   был излом. Теперь кривая одной формулой P = 4/V листа, площадь закрашена
   (не заштрихована, подпись поправлена). Формула работы из рамки, §4:
   A = νRT ln(V2/V1). Геометрия: briefs/lekciya09_skripty/risunki09.py, §1. */
window.BLOCK(String.raw`
---
id: ris-izoterma
type: рисунок
title: Изотермический процесс на диаграмме
links: [izotermicheskij-process]
fig: izoterma
---

При постоянной температуре $P = \nu RT/V$, и изотерма идеального газа есть гипербола. Работа газа при расширении от $V_1$ до $V_2$ равна закрашенной площади под ней, $A = \nu RT\ln(V_2/V_1)$.
`);
