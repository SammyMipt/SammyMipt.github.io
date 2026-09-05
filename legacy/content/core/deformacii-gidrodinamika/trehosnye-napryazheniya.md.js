window.BLOCK(String.raw`
---
id: trehosnye-napryazheniya
type: вывод
title: Деформация под действием трёх напряжений
links: [koefficient-puassona, ris-kub-napryazhenij, vsestoronnee-szhatie]
---

Как деформируется тело, нагруженное сразу по трём направлениям? Рассмотрим кубик под действием трёх взаимоперпендикулярных напряжений $\sigma_x$, $\sigma_y$ и $\sigma_z$ ([[ris-kub-napryazhenij]]). Для баланса сил каждое напряжение действует с обеих сторон кубика: иначе кубик пришёл бы в движение.

Деформация вдоль оси $x$ вызвана не только напряжением $\sigma_x$: поперечные деформации от $\sigma_y$ и $\sigma_z$ тоже меняют размер вдоль $x$. Результирующее удлинение вдоль оси $x$ складывается из трёх вкладов:

$$#summa-deformacij
\Delta x = \Delta x_{\sigma_x} + \Delta x_{\sigma_y} + \Delta x_{\sigma_z}
$$

Каждый вклад выражается через модуль Юнга $E$ и коэффициент Пуассона $\mu$: продольный — по закону Гука, поперечные — через коэффициент Пуассона, с минусом, потому что растяжение поперёк сжимает тело вдоль $x$:

$$#vklady
\frac{\Delta x_{\sigma_x}}{x} = \frac{\sigma_x}{E}, \quad \frac{\Delta x_{\sigma_y}}{x} = -\mu \frac{\sigma_y}{E}, \quad \frac{\Delta x_{\sigma_z}}{x} = -\mu \frac{\sigma_z}{E}
$$

Общее относительное удлинение вдоль оси $x$:

$$#polnoe-udlinenie
\frac{\Delta x}{x} = \frac{\sigma_x}{E} - \mu \frac{\sigma_y}{E} - \mu \frac{\sigma_z}{E}
$$

Вдоль осей $y$ и $z$ выражения такие же с точностью до перестановки индексов.

Теперь плотность энергии $w$. Вклад каждого направления равен половине произведения напряжения на итоговое относительное удлинение, $\frac{1}{2}\sigma\varepsilon$: сила нарастает линейно вместе с деформацией, как в выводе об энергии деформации, где в одноосном случае $\frac{1}{2}\sigma\varepsilon = \frac{1}{2}E\varepsilon^2$. Суммируем вклад всех трёх направлений:

$$#plotnost-energii-summa
w = w_x + w_y + w_z = \frac{1}{2} \sigma_x \left( \frac{\sigma_x}{E} - \mu \frac{\sigma_y}{E} - \mu \frac{\sigma_z}{E} \right) + \frac{1}{2} \sigma_y \left( \frac{\sigma_y}{E} - \mu \frac{\sigma_x}{E} - \mu \frac{\sigma_z}{E} \right) + \frac{1}{2} \sigma_z \left( \frac{\sigma_z}{E} - \mu \frac{\sigma_y}{E} - \mu \frac{\sigma_x}{E} \right)
$$

Раскрыв скобки и собрав попарные произведения, получаем:

$$#plotnost-energii-itog
w = \frac{1}{2E} \left( \sigma_x^2 + \sigma_y^2 + \sigma_z^2 - 2\mu(\sigma_x \sigma_y + \sigma_x \sigma_z + \sigma_y \sigma_z) \right)
$$

Плотность энергии деформации зависит не только от квадратов напряжений, но и от перекрёстных членов, связанных через коэффициент Пуассона. Предельный случай для проверки: если нагрузка одноосная, $\sigma_y = \sigma_z = 0$, остаётся $w = \sigma_x^2/2E$, то же самое, что $\frac{1}{2}E\varepsilon^2$ при $\sigma_x = E\varepsilon$.
`);
