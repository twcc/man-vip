---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-compute-capability-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-compute-capability-zh'
---

# 可用計算資源

如服務概觀所述，台灣杉二號 (命令列介面) 與部分 TWCC 運算服務共享 **252 個計算節點** 及 **2,016 個 NVIDIA® Tesla® V100 GPU**，共可提供 **9 PFLOPS**（每秒執行 9 千兆次浮點運算) 的優異效能，並透過 NVLINK 支援最高 300 GB/s GPU 之間的通訊，亦提供高頻寬、低延遲的節點溝通網路。

單節點規格如下：

| 項目 | 描述 | 數量 |
| -------- | -------- | -------- |
| CPU    | Intel Xeon Gold 6154 18 Cores 3.0GHz   |  2    |
| Memory    | 32GB DDR4-2666 RDIMM   |  24     |
| 系統硬碟    | 2.5” 240GB SATAIII   |  2 (RAID 1)     |
| 資料暫存硬碟    | 4TB NVMe   |  1     |
| GPU    | [NVIDIA® Tesla® V100 SXM2](https://www.nvidia.com/en-us/data-center/v100/)   |  8     |
| 網路卡    | Mellanox InfiniBand EDR 100Gb  |  4     |