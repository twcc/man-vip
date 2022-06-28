---
title: sacct | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# sacct

此指令用於列出帳號的相關任務或任務集之狀態，例如運行中、已終止或是已完成，是最基本的檢視任務指令。

使用 Slurm 調度任務的相關紀錄在本系統中是儲存在Log以及資料庫中，透過 sacct指令預設可顯示任務、任務步驟、相關狀態，以及退出碼(exitcodes)。也可以透過「--format」選項指定要輸出的內容。需注意，Slurm 資料庫的資訊預設只以小寫英文字母保存與維護，建議使用者在指定任務名稱以及相關參數時使用小寫輸入。範例如下：

<div style="background-color:black;color:white;padding:20px;">

$ sacct
JobID   JobName  Partition    Account  AllocCPUS  State        ExitCode 
----------  ----------   -------------   ----------  ---------------  ----------------   -------- 
3121      bash   SlurmDefa+    root           2  COMPLETED     0:0

</div>