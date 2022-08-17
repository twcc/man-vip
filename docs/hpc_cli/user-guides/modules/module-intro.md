---
displayed_sidebar: hpc_cli_module
sidebar_label: 'Module 與可用軟體套件'
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-overview-zh' 
---

# Module 概觀


## 環境變數管理工具

在 HPC 使用情境中，當編譯 (compile) 或是執行應用程式時，常會有複雜的工具或函式庫 (library) 之間的相依性，因此常使用 Module 作為管理環境變數 (environment variable) 的工具，方便您在不同的工具間轉換環境變數。

使用 Module 後，您可輕鬆切換，無需再使用 `export` 指令切換環境變數以使用特定軟體套件、工具函式庫，且不需要再透過 `unset` 移除環境變數，只要使用 `module purge` 以一個指令即可完全清除。
 
:::info
HPC 管理環境變數的工具，最常見是使用 `modules` 的方式管理，傳統如台灣杉一號使用的 [<ins>Environment Modules</ins>](http://modules.sourceforge.net)。而在台灣杉二號使用 [<ins>Lmod</ins>](https://lmod.readthedocs.io)。兩者的使用方法雷同，僅背後實踐的程式語言有差異。
:::

<br/>


## Module 基本指令

- 列出可使用的 modules
 `module avail`
- 列出已套用的 modules
  `module list`
- 查看 modules 的說明
  `module whatis package1 package2 ...`
- 套用指定的
 `module load package1 package2 ...`
- 移除指定的 modules
  `module unload package1 package2 ...`
- 移除全部的 modules
  `module purge`

:::tip

您可以使用 **`ml`** 取代上述 `module` 的指令，以下列舉幾項簡短的使用方式：

- 列出可使用的 modules
 `ml av`
- 套用指定的 modules
 `ml package1 package2 ...`
- 移除指定的 modules
  `ml -package1 -package2 ...`

:::

<br/>


## Module 基本觀念

- 採用階層式的設計，要先 load 一個 module 後，才能看到下一層相依的 module，避免搭配錯相依套件 
- 舉例來說，要先 `ml cuda/11.3` 後，才能看到和 `cuda/11.3` 編譯相依的 `openmpi4/4.1.1`；載入 `openmpi4/4.1.1`後，才能看到和 `openmpi4/4.1.1` 編譯相依的 `fftw3/3.3.9`
- 上述例子可以如下使用：
```bash
# 卸載全部 module
ml purge
# 載入指定 module
ml cuda/11.3 openmpi4/4.1.1 fftw3/3.3.9 
```