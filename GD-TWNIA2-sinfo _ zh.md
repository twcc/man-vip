---
title: sinfo | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# sinfo

sinfo 資訊包含 Slurm 管理的分區和節點的狀態，sinfo 具有多種的過濾、排序，以及格式選項。也很常用於測試 slurm 指令是否可以被正常使用，例如可透過「sinfo -V」來確認Slurm版本資訊。

<div style="background-color:black;color:white;padding:20px;">
$ sinfo -V
slurm 17.11.7

</div>