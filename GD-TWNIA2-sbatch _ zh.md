---
title: sbatch | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# sbatch

用於提交作業腳本以供以後執行。該腳本通常包含一個或多個用於啟動並行任務的srun指令，是最基本的任務運行指令之一。sbatch會交付一個批次執行腳本給Slurm，批次腳本可以透過指令中的檔案名稱來指定，如果沒有定義檔案名稱，sbatch將會直接從standard input接收指令。批次腳本內可能會透過前置為「#SBATCH」的方式，在執行指令之前來指定參數。

sbatch會在腳本成功傳給Slurm控制器後，被指定一個Slurm 任務ID，並馬上退出。此時批次腳本並不會馬上獲得資源，通常會在任務佇列中等待所需資源。使用sbatch執行的批次腳本，預設的standard output跟standard error預設皆會導入格式為「slurm-<job_id>.out」的檔名中，當中<job_id>為該任務的ID數字，該檔案會在與此任務相關的第一個節點產生，以本服務來說，會直接產生在登入節點上執行指令的路徑中。範例如下：


<div style="background-color:black;color:white;padding:20px;">
    
$ sbatch test.sh 
Submitted batch job 3139
$ ls
slurm-3139.out  test.sh

</div>