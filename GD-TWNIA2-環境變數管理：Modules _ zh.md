---
title: 環境變數管理：Module | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

# 環境變數管理：Module

在 HPC 使用情境中，當編譯 (compile) 或是執行應用程式時，常會有複雜的工具或函式庫 (library) 之間的相依性，因此常使用 Module 作為管理環境變數 (environment variable) 的工具，方便您在不同的工具間轉換環境變數。

使用 Module 後，您可輕鬆切換，無需再使用 `export` 指令切換環境變數以使用特定工具函式庫，且不需再登出 TWNIA2 以還原環境變數，只要使用 `module purge` 以一個指令即可完全清除。
 
:::info

{%hackmd @docsharedstyle/note-zh %}

HPC 管理環境變數的工具，最常見是使用 `modules` 的方式管理，傳統如台灣杉一號使用的 [<ins>Environment Modules</ins>](http://modules.sourceforge.net)。而在台灣杉二號使用 [<ins>Lmod</ins>](https://lmod.readthedocs.io)。兩者的使用方法雷同，僅背後實踐的程式語言有差異。

::: 
 
## 基本操作 

- 列出可使用的 modules
 `module avail`
- 列出已套用的 modules
  `module list`
- 查看 modules 的說明
  `module whatis package1 package2 ...`
- 套用指定的 modules
 `module load package1 package2 ...`
- 移除指定的 modules
  `module unload package1 package2 ...`
- 移除全部的 modules
  `module purge`

:::warning

{%hackmd @docsharedstyle/tip-zh %}

您可以使用 **`ml`** 取代上述 `module` 的指令，以下列舉幾項簡短的使用方式：

- 列出可使用的 modules
 `ml av`
- 套用指定的 modules
 `ml package1 package2 ...`
- 移除指定的 modules
  `ml -package1 -package2 ...`

:::
