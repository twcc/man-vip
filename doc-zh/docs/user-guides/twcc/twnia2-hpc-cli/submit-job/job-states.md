---
sidebar_position: 4
sidebar_label: '任務狀態'
slug: '/user-guides/twcc/twnia2-hpc-cli/job-states'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-job-state-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-job-state-zh'
---

# 任務狀態

前面介紹了如何提交任務，以及設定任務的相關參數，這一節將介紹如何查看任務的狀態。Slurm提供多種指令幫助使用者查看任務狀態，包含scontrol、squeue，下面將介紹如何使用。

### 相關指令

#### scontrol

透過 scontrol show job可查看任務狀態狀態，若使用 scontrol show job [job_id] 可查看特定任務的詳細狀態。如下：


```
scontrol show job 2977
```
![image](https://user-images.githubusercontent.com/109254397/184576022-71197a68-cef4-4d78-b6bb-1826358e0751.png)




這邊可以看到輸出很多訊息，包含運行此任務的使用者資訊、此任務的相關時間資訊、運行節點資訊、運行的資源大小、執行的指令、運行指令的位置、輸出指令的位置等。


#### squeue

雖然scontrol 輸出的訊息非常完整，但如果系統中存在大量的任務時，回應的速度會變慢，使用效率較低，且不一定都需要這麼詳盡的訊息，此時 squeue 會是更好的選擇。使用 squeue 的方式如下：

```
squeue
```
![image](https://user-images.githubusercontent.com/109254397/184576050-95d3cca4-19bc-4966-9019-eaa11b6da7d9.png)




可從 squeue 裡面看到正在運行以及正在排隊的任務，可從「ST」的欄位看到「R」，表示正在運行中，看到「PT」表示正在排隊中。若任務已結束，透過 squeue 則無法看到資訊，必須使用下面介紹的 sacct 來瀏覽。


#### sacct

sacct 可顯示相關任務的狀態，包含已經結束的歷史資訊，


```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184576062-34f10665-f60f-4a72-98c9-16c80c9e2b84.png)


可直接從狀態看到此任務是 COMPLETE、PENDING或是FAILED，以及此任務所使用的 CPU 核心數。若ExitCode的開頭不為「0」，則表示此任務是錯誤狀態。


### 任務生命週期

對於一個任務來說，從提交到結束，有一個狀態轉換的過程，也可以稱之為生命週期，將任務送出後，會先進入一個等待（Pending）的過程，若控制器有找到合適的運算節點，將直接進入運行狀態（Running）。若在等待的過程中手動刪除此任務，該週期就結束。

任務在運行的過程中，可以手動暫停（Suspend）與恢復（Resume）任務，也可直接刪除（Cancel）任務。若運行的任務已經完成所運行的內容，狀態將會改為完成（Completed）。另外，在提交任務之前，若有針對該任務限制運行的時間，假設該任務運行的時間超過限制的時間，狀態將會改為超時（Timeout），此任務就會直接結束。

相關生命週期可參考以下 Slurm生命週期轉換圖，當中「其他狀態」的訊息，可參考下一小節的任務狀態對照表。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94d008d03efb7758316fd4c619ee8dbe.png)



### 任務狀態對照表

下面是 Slurm 可能出現的任務狀態編碼，以及其含義解釋：



| 編碼縮寫 | 狀態名 | 含義解釋 |
| -------- | -------- | -------- |
| BF     | BOOT_FAIL     | 任務因啟動失敗而中止，通常是因為硬體故障     |
| CA     | CANCELLED     | 任務被用戶或系統管理員終止，該任務可能已經運行或還沒運行    |
| CD     | COMPLETED     | 任務的每個處理程序在計算節點都已執行完成，且沒有出現問題     |
| CF     | CONFIGURING     | 任務已被分配資源，正在等待所有資源準備就緒，通常這個狀態僅出現一瞬間    |
| CG     | COMPLETING    | 任務正在完成中，若同時有多個節點在處理此程序，某些節點可能還在運行     |
| F     | FAILED    | 若ExitCode不為「0」，則表示有其他錯誤讓此任務中止     |
| NF     | NODE_FAIL     | 任務因在一個或多個節點的硬體故障而中止     |
| PD     | PENDING     | 任務正在等待資源被分配     |
| PR     | PREEMPTED     | 任務由於資源被強佔而中止     |
| RV     | REVOKED     | 任務已轉移到其他運算群集上     |
| R     | RUNNING     | 任務正在運行中     |
| SE     | SPECIAL_EXIT     | 特殊狀態下重新排隊     |
| ST     | STOPPED     | 任務已被分配資源後運行，但執行過程中接收到 SIGSTOP 而停止，該任務將繼續保有原本的資源配置     |
| S     | SUSPENDED     | 任務在執行的過程中被暫停，所使用的資源釋放給其他任務使用     |
| TO     | TIMEOUT     | 任務運行的時間超過設置的限制     |