---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-sattach-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-sattach-zh'
---

# sattach

可將標準輸入、輸出，和錯誤訊息等多次掛載與卸載在當前運行的任務或任務集中。sattach 會附加到一個執行中的slurm 任務集中的特定任務步驟，透過attaching將會使Slurm任務中所有步驟的IO Streams變為可使用狀態，也適用於平行運算除錯工具使用，例如TotalView。例如我們將一個腳本內容改為直行多個srun，即為多個任務步驟，運行之後，可使用sattach 瀏覽步驟狀態。


```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184574419-d93e364d-cf72-4a2b-9869-64f1d5205641.png)



由上可看到任務3139有多個步驟編號，可以透過sacct 指令查看運行中編號的狀況。這邊直接輸入「sacct 3139.2」，但因為此步驟只是sleep，因此沒有任何資料吐回為正常狀態。

```   
sacct 3139.2
```