---
sidebar_position: 2
---

# 提交第一個 Slurm 任務

要正確理解 Slurm 的工作流程，需要了解一些基本概念：

- 節點（Node）：在每一台節點安裝並且正確配置 slurmd就是一個運算節點，安裝slurmctld稱之為Slurm Master 節點。

- 分區（Partition）：分區即是將一組節點組成一個集合，可透過分區進行任務的列隊（Queue）。

- 任務（Job）：傳統意義上任務是指運行某個腳本或程式，但以Slurm 來說，任務是指特定時間替用戶進行一次的資源申請與分配，讓用戶運行運算任務。

- 任務步驟（Job Step）：Slrum 有任務步驟的概念，可以理解為子任務，這個概念可以讓使用者在某個任務內拆分運算資源給不同子任務。

## 分區概念

上面已經介紹了節點、分區、任務、任務步驟等基本概念，在提交任務之前，先進一步了解分區的用途。

不同的節點，由於網路特性以及硬體配置不同，透過分區可以幫助使用者更方便地確定了解節點的特性，來選擇最適合自己的節點進行運算。此外，如果群集中有部分機器是私有的，透過分區也可以讓部分用戶只能夠在專屬的分區提交任務。

目前本系統只有設置一個共有的分區，名稱為SlurmDefault，也是用戶提交任務所在的預設分區，若沒有特別指定的任務，將會在此分區運行。未來本中心將依據不同用戶的需求，區分出不同的分區以供用戶使用。

## 使用分區提交任務

Slurm 中有多種任務提交方式，分別是sbatch、srun與salloc，其中sbatch為本文主要使用方式，將於以下章節中用到，而srun與salloc 將另闢於2.6互動行任務章節說明。

以sbatch為例提交任務前，使用者需要將要運行的內容編輯為腳本，然後再透過sbatch指令指定參數和腳本，以下先以最簡單的 bash校本為例，名為 test.sh。

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
#! /bin/bash
echo “Hello World”
date
hostname
sleep 60
echo “Bye”
    
</div>


該腳本會依次輸出「Hello World」、目前時間、節點名稱，並在休眠60秒之後輸出「Bye」，可用以下指令來指定特定分區，並提交此任務腳本。下面範例中，使用「-p」為指定分區（partition），再直接指定 test.sh，SlurmDefault 為分區的名稱，由於SlurmDefault 為預設分區，因此不指定也會在此分區運行。


<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ sbatch –p SlurmDefault test.sh
Submitted batch job 2910

</div>


任務提交之後，將會得到一個 Job ID，以上述範例得到的 Job ID 為2910，可在提交Job所在的目錄看到slurm-2910.out的檔案，裡面即有相關的Log資訊，如下：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
Hello World
Wed Dec  5 10:40:46 CST 2018
gn1201.twcc.ai
Bye

</div>
