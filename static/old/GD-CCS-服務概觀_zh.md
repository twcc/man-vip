---
tags: Guide, CCS, ZH
title: 服務概觀 | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

<style>
</style>

# <img class="icon" src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0b81080da8a39866cd1e0aa0471e9552.png" width="25" height="25"> 服務概觀 


## 容器運算服務 (CCS) 可快速部署 GPU 處理器的工作環境，提高工作效率！

開發容器服務能快速佈建開發環境，使用者可依需求選擇不同的人工智慧框架，透過內建的 Jupyter Notebook 快速編輯程式。容器服務會自動掛載 HFS 高速儲存系統，使用者亦可自行在容器內使用雲端物件儲存服務，以存放訓練資料與模型。


### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9031b03afa1291f2d95f9dbc60cf2948.png" width="35" height="25"> 輕鬆使用服務 


透過 TWCC 入口網站、API、CLI (Command Line Interface)，皆可建立容器運算服務。有別於傳統使用超級電腦資源時僅能藉由 CLI 操作運算，TWCC 供您自由選擇熟悉的介面，輕鬆堆疊應用。


### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_afd344f9a1b3d0567f83a250da8b8d26.png" width="35" height="25"> 快速部署工作環境

採用 Kubernetes 架構，並導入 Nvidia 優化 AI 軟體堆疊，串接與世界接軌的虛擬化技術，短時間內便能快速部署開發工作環境，相較於傳統的方式可節省 3 倍的時間，並能彈性地轉換平台。

### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d404fdf4e28033ae3c6185c87888ab51.png" width="35" heigh="25"> 多樣化的 AI 框架

提供 Nvidia 優化之 TensorFlow、Caffe、CUDA、Torch、PyTorch、TensorRT 、Triton Inference Server、CNTK、MXNet、Theano、DIGITS、RAPIDS 等等的 AI 框架，無需費心安裝，並能滿足不同模型訓練與推論的需求。

### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cb712cc256270388197b36fdb9757d68.png" width="35" heigh="25"> 不同的容器選擇

- 開發型容器可搭配 Jupyter Notebook 編寫程式，線上除錯、運算，行動裝置也能完成工作，隨時掌握進度。
- 任務型容器能指定運算的開始執行時間，適當排程規劃批次任務使用的資源量，提升工作效率。運算完即回收運算資源，有效節省開發成本。


### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22d79d4fc2df0425c3f9c9e1e0591396.png" width="35" heigh="25"> 安全、快速的儲存系統

提供高吞吐量的高速檔案系統加速運算，亦可使用雲端物件儲存系統，資料能安全儲存，無需擔心資料遺失。

### <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5b69c51d21e91a714e4152465fed59e.png" width="35" heigh="25"> 多項底層優勢


- 租戶隔離的網路架構，安全使用。
- Kubernetes 經常性的滾動升級容器，功能不斷優化。
- Kubernetes 與 HPC 超融合架構，GPU 容器開發程式，並能大量佈署至 HPC 進行跨節點運算。