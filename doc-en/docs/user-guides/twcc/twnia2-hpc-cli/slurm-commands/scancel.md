---
sidebar_position: 6
sidebar_label: 'scancel'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-scancel'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-scancel-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-scancel-zh'
---

:::caution Under Construction

The English version of this document is under construction and will be available soon.

:::

用於取消正在等待中，或運行中的任務或任務集，也可發出任意訊號給運行的任務或任務集相關的所有進程。scancel 用於發出信號或取消特定的任務、任務陣列，或者任務步驟。一組任意數量的任務或任務步驟可以被指定的特徵過濾出來，或者透過空白鍵來區分一整串的任務或任務步驟的ID。如果任務陣列有定義任務ID的話，就僅有該任務以及子任務被刪除，反之沒有定義的話，則所有有相關的任務都會被刪除。

當一個異質的任務處在等待狀態(pending)，僅能夠刪除整個任務，當中的子任務不能單獨被取消。若有單獨刪除請求，系統將回報錯誤。當任務開始執行時，單獨的子任務才能被取消。任務或任務步驟講能被該任務的擁有者或是最高權限管理者(root)刪除，若有未認證的使用者想要傳送信號，將會產生錯誤訊息。scancel範例如下，僅刪除特定任務步驟：


```
sbatch test.sh 
```
![image](https://user-images.githubusercontent.com/109254397/184574850-4a9d99f4-356e-4e2a-af18-cc30ae7485dc.png)
```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184574868-bbd14510-f46a-45dc-b60b-4db7633c7e4b.png)
```
scancel 3141.2
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184574922-197444a8-f091-4a18-94d2-6f0cc3e7f0e3.png)

