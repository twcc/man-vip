---
sidebar_position: 6
---

# scancel

用於取消正在等待中，或運行中的任務或任務集，也可發出任意訊號給運行的任務或任務集相關的所有進程。scancel 用於發出信號或取消特定的任務、任務陣列，或者任務步驟。一組任意數量的任務或任務步驟可以被指定的特徵過濾出來，或者透過空白鍵來區分一整串的任務或任務步驟的ID。如果任務陣列有定義任務ID的話，就僅有該任務以及子任務被刪除，反之沒有定義的話，則所有有相關的任務都會被刪除。

當一個異質的任務處在等待狀態(pending)，僅能夠刪除整個任務，當中的子任務不能單獨被取消。若有單獨刪除請求，系統將回報錯誤。當任務開始執行時，單獨的子任務才能被取消。任務或任務步驟講能被該任務的擁有者或是最高權限管理者(root)刪除，若有未認證的使用者想要傳送信號，將會產生錯誤訊息。scancel範例如下，僅刪除特定任務步驟：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ sbatch test.sh 
Submitted batch job 3141
$ sacct
JobID   JobName  Partition   Account  AllocCPUS  State        ExitCode 
----------  ----------  -------------  ----------  ---------------  -------------   -------- 
3141    test.sh     SlurmDefa+   root       1    RUNNING    0:0 
3141.0   date                   root       1   COMPLETED   0:0 
3141.1   nvidia-smi              root       1    FAILED       6:0 
3141.2   sleep                  root       1    RUNNING    0:0
$ scancel 3141.2
$ sacct
JobID   JobName  Partition   Account  AllocCPUS  State        ExitCode 
----------  ----------  -------------   ----------  ---------------  -------------   -------- 
3141       test.sh   SlurmDefa+  root        1    COMPLETED   0:0 
3141.batch  batch                root        1    COMPLETED   0:0 
3141.0     date                 root        1    COMPLETED   0:0 
3141.1     nvidia-smi            root        1      FAILED      6:0 
3141.2     sleep                root         1   CANCELLED+   0:9 
3141.3     hostname             root        1    COMPLETED   0:0

</div>