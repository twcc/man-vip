---
sidebar_position: 3
sidebar_label: 'Job parameters'
slug: '/user-guides/twcc/twnia2-hpc-cli/job-parameters'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-job-parameter-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-job-parameter-zh'
---

# Job parameters

:::caution Under Construction

The English version of this document is under construction and will be available soon.

:::

### 透過指令指定參數

上一節中介紹了最簡單的任務提交方法，將腳本編輯好之後，交由Slurm調度，然後該腳本會運行在合適的分區上，並得到輸出結果。Slurm本身提供不同的參數，可供使用者指定其任務要運行在特定的節點、分區，甚至資源大小等，以下透過範例說明，如何透過指定參數的方式來運行指定的任務。

假設某個任務需要三個節點同時運算，且每個節點的記憶體不低於8G，可以用以下方式。當中「--node」可指定要運行的節點數量，「--mem」可指定運行的記憶體大小，「--partition」跟「-p」是一樣的意思，也就是指定運行分區的名稱，最後指定要運行的腳本即可。


```
sbatch --nodes=3 --mem=8192 --partition=SlurmDefault test.sh
```



以下可以看一個更複雜的例子，指定透過「--node」運行三台機器，「--mem」指定使用8GB記憶體，「--nodelist」指定使用 gn1201.twcc.ai、gn1204.twcc.ai、gn1205.twcc.ai這三台機器，且透過「--cpus-per-task」可指定每個處理程序使用兩核CPU。


```
sbatch --nodes=3 --mem=8192 --nodelist=gn1201.twcc.ai,gn1204.twcc.ai,gn1205.twcc.ai --cpus-per-task=2 test.sh
```


除了上面的範例，sbatch也可指定更多不同的參數，可直接透過以下指令「sbatch --help」來進行了解。


### 透過腳本註釋指定參數

透過指令指定參數的方式很簡單，但不方便重複使用，因此Slurm提供了另一種方式，即是透過腳本註釋的方式來指定參數，Slurm 會自動解析這些參數。我們可用上述的 test.sh進行更改，將上述範例的內容直接填寫到腳本內。


```
=======

#! /bin/bash

#Batch Job Paremeters
#SBATCH --nodes=3 
#SBATCH --mem=8192
#SBATCH --nodelist=gn1201.twcc.ai,gn1204.twcc.ai,gn1205.twcc.ai
#SBATCH --cpus-per-task=2

#Operations
echo “Hello World”
date
hostname
sleep 60
echo “Bye”

```



在腳本內，可直接透過上面範例的「#SBATCH」來設定參數，最後直接透過「sbatch test.sh」即可直接派送腳本，並帶有這些參數。

### 常見問題

本系統中每台運算節點使用32 CPU核心數，假設使用者要提交一個 36核的運算任務，作業將永遠不會運行，持續顯示為Pending狀態，為什麼呢？這是很多人對於資源調度系統的錯誤認知，因為計算資源並不會自動融合，調度系統也不會自動將任務拆分出來運行。即使本系統可透過分區的方式將運算節點當作一個目標進行任務派送，但單一分區並不能夠當作單一運算節點來使用。

若使用者欲運行單一任務超過一台運算節點的資源量，需要請使用者將單一任務的資源使用量縮小，並改為多個平行運算作業，即可達到使用多運算資源的需求。