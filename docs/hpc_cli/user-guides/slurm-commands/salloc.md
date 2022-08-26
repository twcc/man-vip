---
sidebar_position: 2
---

# salloc

用於即時分配資源分配，通常會用於分配資源並且產生一個 shell，然後使用 shell 執行 srun 的命令來啟動並執行任務。

使用salloc 來指派一個Slurm任務，也就是一組資源（運算節點），通常包含一些限制條件的定義，例如每台機器多少個處理程序等。當salloc成功取得資源配置後，會立即執行使用者定義的指令，當指令執行完成之後，會自動釋放該任務的資源，或者在shell內使用exit退出來釋放資源。

使用者定義的指令可以是任何要執行的程式，一些常用的指令像是xterm，或是含有srun指令的腳本等。若沒有指定要執行的指令，本服務預設會進入shell狀態。範例如下，指定使用兩個運算節點，使用srun顯示主機名稱後，確實輸出所在節點為兩個不同的節點名稱，退出後顯示正確退出當前任務ID：


<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
$ salloc -N2
salloc: Granted job allocation 3135
$ srun hostname
gn1229.twcc.ai
gn1230.twcc.ai
$ exit
exit
salloc: Relinquishing job allocation 3135

</div>