---
sidebar_position: 1
sidebar_label: '服務概觀'
slug: '/user-guides/twcc/twnia2-hpc-cli/overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/twnia2-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/twnia2-overview-zh'
---


# 服務概觀

## 台灣杉二號 - AI 超級電腦主機

台灣杉二號為 AI 超級電腦主機，共運用 2,016 個 NVIDIA® Tesla® V100 GPU，以 9 PFLOPS（每秒執行 9 千兆次浮點運算) 的優異效能，在 2018 年底公布的[全球 500 大高速計算主機 (TOP500) 中排名第 20 名](https://www.top500.org/system/179590/)，[能源效率（Green500）排名第 10 名](https://www.top500.org/lists/green500/2018/11/)。


![](https://twcc-wordpress-file.cos.twcc.ai/wp-content/uploads/2019/09/19130553/1-2.png)


為提供多元服務類型，台灣杉二號主機上提供[開發型容器服務](/user-guides/twcc/ccs-interactive-container)、[任務型容器服務](/user-guides/twcc/ccs-scheduled-container.md)及 [HPC 高速運算任務](/user-guides/twcc/hpc-job)、台灣杉二號(命令列介面) (本服務)。


## 台灣杉二號 (命令列介面) - 運算服務


本運算服務資源由**計算節點**、**高速檔案系統節點**、**登入與資料傳輸節點**組成，服務以 「**Slurm**」 作為資源調度系統，並支援 MPI 功能，為容錯度高、高可擴展性叢集管理系統，適用於大、小型的 Linux 群集，為超級計算機所使用的資源管理器，排程各個使用者工作的優先順序權。
- 可在一段時間內替用戶分配計算資源的獨佔或非獨占使用
- 提供管理框架，於計算節點上進行資源的分配、執行與監控
- 可透過排程管理的工作佇列 (Queueing) 來仲裁資源分配

並搭配 「**Singularity**」容器解決方案來運行容器，用戶可使用本服務提供的 Docker 映像檔來進行相關 AI 運算，並能快速複製、改寫容器映像檔，工作環境維護成本低，並能執行效能卓越的大規模平行運算。

台灣杉二號 (命令列介面) 整體服務特點：

- **跨節點調度 GPU，實現高速分散式平行運算**
    透過 Slurm 資源調度軟體，操作強大的超級電腦 (HPC)，搭配 MPI 程式，能實現跨結點的分散式平行運算，將高負載的工作量平均分派，提升處理效率！
- **大頻寬網路串連節點，資料傳輸快速**
    採用100 Gb/s 超高速網路串連GPU主機群，有極高的吞吐量與極低的延遲，解決傳統技術的瓶頸，巨量資料傳輸效率不妥協！
- **GPU Direct 與 RDMA 架構，極致加速**
    透過 NVLink 與超高速網路計算 (InfiniBand) 架構的整合，使 RDMA (Remote Direct Memory Access) 技術可大幅提升跨節點的大數據資料傳輸效率，並顯著提高整體運算效率。

