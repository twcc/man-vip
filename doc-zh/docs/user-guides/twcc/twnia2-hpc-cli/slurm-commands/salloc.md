---
sidebar_position: 2
sidebar_label: 'salloc'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-salloc'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-salloc-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-salloc-zh'
---

# salloc

用於即時分配資源分配，通常會用於分配資源並且產生一個 shell，然後使用 shell 執行 srun 的命令來啟動並執行任務。

使用salloc 來指派一個Slurm任務，也就是一組資源（運算節點），通常包含一些限制條件的定義，例如每台機器多少個處理程序等。當salloc成功取得資源配置後，會立即執行使用者定義的指令，當指令執行完成之後，會自動釋放該任務的資源，或者在shell內使用exit退出來釋放資源。

使用者定義的指令可以是任何要執行的程式，一些常用的指令像是xterm，或是含有srun指令的腳本等。若沒有指定要執行的指令，本服務預設會進入shell狀態。範例如下，指定使用兩個運算節點，使用srun顯示主機名稱後，確實輸出所在節點為兩個不同的節點名稱，退出後顯示正確退出當前任務ID：



```
salloc -N2
```
![image](https://user-images.githubusercontent.com/109254397/184574219-17a93371-d904-4c34-ab3d-42dd6c3d73ac.png)

```
srun hostname
```
![image](https://user-images.githubusercontent.com/109254397/184574236-49206b21-caed-48f3-8f6c-e7f7df4dcb60.png)

```
exit
```
![image](https://user-images.githubusercontent.com/109254397/184574273-7014c3a1-8dc5-4107-8ce7-36ab0ce9ba1e.png)

