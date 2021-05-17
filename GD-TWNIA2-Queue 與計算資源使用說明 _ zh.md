---
title: Queue 與計算資源使用說明 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# Queue 與計算資源使用說明

台灣杉二號 (命令列介面) 提交 Job 時，可使用的 Queue 如下：

| Queue 名稱 | 最長執行時間(小時) | 高優先權 | 每位用戶最多 可提交計算工作數量限制 | 適用計畫       | 節點類型     |
| ---------- | ------------------ | -------- | ---------------- | -------------- | ------------ |
| gp1d       | 24                 |          | 20               | 各式計畫       | GPU 計算節點 |
| gp2d       | 48                 |          | 20               | 各式計畫       | GPU 計算節點 |
| gp4d       | 96                 |          | 20               | 各式計畫       | GPU 計算節點 |
| gtest      | 0.5                |          | 5                | 各式計畫       | GPU 計算節點 |
| express    | 96                 | v        | 20               | 企業與個人計畫 | GPU 計算節點 |

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**

- 台灣杉二號皆為 GPU 計算節點，每一節點有 8 GPUs 和 36 CPUs，型號分別為 NVIDIA Tesla V100-SXM2-32GB，及 Intel(R) Xeon(R) Gold 6154 處理器。
- 用戶最多提交 20 個計算工作，所有計算工作加總最多使用 40 張 GPUs。各 Queue 亦有限制各用戶最多提交計算工作數目的上限。
- 每個計算工作至少指定 1 張 GPU，且不能超過  1 GPU : 4 CPU : 90 GB Memory 比例
- gtest 為測試用 queue，用戶最多提交 5 個計算工作到 gtest 。
- **當用戶在登入節點運行超過 5 分鐘的 GPU process，將會<ins>自動清除該用戶所有 process</ins>**。
- **當用戶在登入節點運行超過 400% CPU usage 的 process，該 process 將會自動被清除。**
- Queue 與節點數量會定期檢討與調整。
- 管理員將會不定期清理登入節點與檔案傳輸節點的 /tmp 目錄以維持系統正常運作，請避免於 /tmp 存放重要資料。
- 若需延長單個 job 的執行時間 (walltime)，請洽詢客服人員。
:::