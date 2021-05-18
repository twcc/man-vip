---
title: Slurm 基本說明 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# Slurm 基本說明

### Slurm 架構簡介

Slurm 在每一個計算節點上面都有運行一個 Slurm daemon程式，簡稱slurmd。slurmd 用於管理計算節點，包含監控該節點上運行的任務，接受來自控制器(Controller)的任務，以及將該任務分派到計算節點上。如果控制器發出請求，slurmd 也可以停止進行該任務，如下圖。

Slurmd 提供可容錯的分層通信機制，相關命令包含：sacct、salloc、sattach、sbatch、sbcast、scancel、scontrol、sinfo、smap、squeue、srun、strigger和sview。所有命令可以在群集中的任何節點運行。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9403f959f7a927d90d3270c287929533.png)



此架構內的群集並不僅僅是計算節點的隨機組合，這些節點可以設定分區(partition)，且單一節點可重複設置，來實現平行運算的最高效益，讓控制器可分派工作到分區中，以分區為單位進行列隊管理。每個分區都有專屬之管理方針(policy)，例如限制特定用戶、任務資源大小限制、任務運行時間限制等。任務也可在分區內依照優先序執行，依序配置分區內的資源，直至資源耗盡。當控制器替任務分配運算節點後，用戶就能夠在該節點上運行單一任務，或將許多的任務組成任務集，來執行批次任務。Slurm 分區的概念可基於實體機器與網路的分配調整，來確保計算結點的低延遲性。

### 系統登入節點與資料傳輸節點

使用者會連線到一台共用節點，共用節點的目的是讓使用者透過這台機器提交任務、編輯程式、監控任務狀態等。本系統的登入節點為「ln01.twcc.ai」，使用者可以進行登入，並進行任務提交。

在檔案傳輸節點上，分別將HFS掛載到/home (為/fs02之softlink)，/work (為/fs01之softlink)之下，使用者可在這兩個目錄下以自己的主機帳號建立目錄，並於該目錄下進行檔案管理。HFS會同時掛載到所有GPU節點的相同目錄上，因此當使用者透過檔案傳輸節點將檔案上傳至HFS後，使用者即可透過上述之HPC服務，或 www.twcc.ai 上之 容器、HPC 高速運算服務存取HFS中的內容。

磁碟空間限制。目前規劃，個人及公用磁碟空間核定如下：
/home/username 目錄：每個帳號之家目錄，免費提供100 GB
/work/username目錄：每個帳號之公用目錄，免費提供100 GB

### 系統運算節點

本服務提供最多252個運算節點，這些運算節點主要進行繁重的運算工作，系統將會透過上述的登入節點提交任務，並由Slurm Master 進行任務派送，將任務配送到可用的運算節點上。使用者可直接透過登入節點使用 Slurm 相關指令查看任務狀況，不會直接接觸這些運算節點。