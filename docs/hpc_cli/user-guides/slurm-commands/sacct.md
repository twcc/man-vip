---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-sacct-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-sacct-zh'
---

# sacct

此指令用於列出帳號的相關任務或任務集之狀態，例如運行中、已終止或是已完成，是最基本的檢視任務指令。

使用 Slurm 調度任務的相關紀錄在本系統中是儲存在Log以及資料庫中，透過 sacct指令預設可顯示任務、任務步驟、相關狀態，以及退出碼(exitcodes)。也可以透過「--format」選項指定要輸出的內容。需注意，Slurm 資料庫的資訊預設只以小寫英文字母保存與維護，建議使用者在指定任務名稱以及相關參數時使用小寫輸入。範例如下：

```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184573996-b37b7632-fc28-4d93-b873-4425751aabba.png)
