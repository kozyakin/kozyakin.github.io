# footbibx &mdash; a footbib update tolerant to changes of the LaTeX output routine

Пакет `footbib.sty` (Eric Domenjoud, последняя официальная версия 2.0.7 от 2007/02/20) предоставлял богатые возможности для создания библиографических ссылок в виде подстрочных примечаний. К сожалению, после какого-то из обновлений ядра LaTeX в середине второго десятилетия 2000-х этот пакт перестал работать. Причина этого в том, что в пакет `footbib.sty` были "жестко зашиты" добавления к output routine ядра LaTeX. В Интернете появились рекомендации по замене пакета `footbib.sty` возможностями пакета `biblatex.sty`. Однако, на мой вкус, ни одна из этих рекомендаций не заменяла полностью возможности пакета `footbib.sty`.

В связи с этим мной в пакет footbib.sty сначала были внесены исправления, учитывающие изменения ядра LaTeX на дату 2022/11/11 (версия 2.0.8). Однако, такого рода изменения могли привести к тому, что с изменением в будущем ядра LaTeX эта версия `footbib.sty` также перестала бы работать.

Поэтому была создана версия `footbibx.sty` пакета `footbib.sty`, в которой вместо "жестко зашитых" изменений в ядро LaTeX была реализована динамическая "заплатка" соответствующих мест в ядре LaTeX с помощью механизма `\xpatxhcmd` из пакета `xpatch.sty` (при желании, можно использовать те же команды из пакета `regexpatch.sty`). Надеюсь, что такой метод внесения изменений в ядро LaTeX будет менее чувствительным к потенциальным будущим изменениям LaTeX.

Использование пакета `footbibx` дословно следует документации по пакету `footbib`: [CTAN: Package footbib](https://www.ctan.org/pkg/footbib).

---

The package `footbib.sty` (Eric Domenjoud, last official version 2.0.7 on 2007/02/20) offered extensive possibilities for creating bibliographic references in the form of footnotes. Unfortunately, this package stopped working after an update of the LaTeX core in the middle of the second decade of the 2000s. The reason is that additions to the output routine of the LaTeX core were hardcoded into the `footbib.sty` package. Recommendations surfaced on the Internet to replace the `footbib.sty` package with the capabilities of the `biblatex.sty` package. However, in my opinion, none of these recommendations fully replaced the capabilities of the `footbib.sty` package.

In this regard, I first made corrections to the `footbib.sty` package, taking into account the changes in LaTeX core as of 2022/11/11 (version 2.0.8). However, this type of change could cause future changes to the LaTeX core to cause this version of `footbib.sty` to stop working as well.

Therefore, the modification `footbibx.sty` of the `footbib.sty` package was created in which, instead of hardcoded changes to LaTeX core, a dynamic "patch" of the appropriate locations in LaTeX core was implemented using the `\xpatxhcmd` mechanism from the `xpatch.sty` package (if desired, you can use the same commands from the `regexpatch.sty` package). We hope that this method of making changes to LaTeX core will be less sensitive to possible future changes to LaTeX.

The use of the `footbibx` package follows the documentation for the `footbib` package verbatim:  [CTAN: Package footbib](https://www.ctan.org/pkg/footbib).
