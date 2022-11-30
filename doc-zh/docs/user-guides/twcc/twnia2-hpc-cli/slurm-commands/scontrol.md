---
sidebar_position: 7
sidebar_label: 'scontrol'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-scontrol'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-scontrol-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-scontrol-zh'
---

# scontrol

scontrol是用於查看和/或修改Slurm狀態的管理工具。請注意，許多scontrol命令只能以root用戶身份執行，因此只有管理人員可使用。scontrol使用來檢視和編輯Slurm 的設定，包含任務、任務步驟、節點、分區以及保留資源和系統設定等。大部分的指令只能透過最高權限管理者root來執行，如果有未認證的使用者使用此指令，將會產生錯誤訊息。

如果沒有在命令列上定義執行的指令，將會進入互動模式等待輸入直到退出，所有的指令都不區分大小寫，但節點名稱、分區名稱、以及保留名稱有區分大小寫。修改後的Slurm設定檔可以使用「scontrol write config」指令來寫入檔案，檔名將會是與slurm.conf同目錄下的「slurm.conf.(datetime)」，當中datetime 表示寫入時間，且該目錄必須要事先設定為可寫入的權限。通常一般使用者會使用「show (ENTITY) (ID)」的方式來查看特定項目的狀態，例如下面範例，使用scontrol顯示特定任務的狀態：


```
sbatch test.sh
``` 
![image](https://user-images.githubusercontent.com/109254397/184575046-1d00936f-2fd8-4880-8200-c2563c440185.png)
```
scontrol show job 3144
```
![image](https://user-images.githubusercontent.com/109254397/184575064-b7fca8df-b50b-4508-86d0-fd78c3142ab7.png)

