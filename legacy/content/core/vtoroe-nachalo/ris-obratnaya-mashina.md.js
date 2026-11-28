/* НОВЫЙ РИСУНОК 30.10, гейт главы, круг 1, К1-М-М11: у обратной машины
   (блоки holodilnaya-mashina и teplovoj-nasos) не было схемы, а бриф
   briefs/proizvodstvo10.md требует рисунка у установки. Одна схема на оба
   блока. Исходник sources/physics1_summary/inputs/09/pics/
   obratnaya_mashina.tex: геометрия та же, что у teplovaya_mashina.tex,
   стрелки наоборот. Буквы как в блоках: T_H, T_X, Q_H, Q_X, A. Чисел нет. */
window.BLOCK(String.raw`
---
id: ris-obratnaya-mashina
type: рисунок
title: Схема обратной машины
links: [holodilnaya-mashina, teplovoj-nasos, ris-teplovaya-mashina]
fig: obratnaya-mashina
---

Рабочее тело берёт теплоту $Q_X$ у холодного тела с температурой $T_X$, над ним совершают работу $A$, и горячему телу с температурой $T_H$ оно отдаёт теплоту $Q_H = Q_X + A$. Резервуары стоят там же, где у тепловой машины ([[ris-teplovaya-mashina]]), а стрелки повёрнуты. У холодильной машины полезна теплота $Q_X$, у теплового насоса $Q_H$.
`);
