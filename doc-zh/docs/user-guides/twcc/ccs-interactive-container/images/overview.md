---
sidebar_position: 1
sidebar_label: '映像檔概觀'
slug: '/user-guides/twcc/ccs-interactive-container/image-overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/ccs-concept-image-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/ccs-concept-image-overview-zh' 
---


# 容器映像檔概觀


容器映像檔分為系統預設提供的 TWCC 映像檔，以及基於 TWCC 映像檔建立之自訂映像檔，分別說明如下：

## TWCC 映像檔

與 [NGC](https://www.nvidia.com/zh-tw/gpu-cloud/) 合作，TWCC 映像檔提供用戶以下多種立即可用的 AI 運算適用的最佳化容器映像檔，具有多樣化的 AI 訓練框架，搭配 TWCC 底層 GPU 資源，容器可展現極佳運算效能：

TensorFlow、PyTorch、CUDA、Matlab (BYOL)、Caffe、CNTK、MXNet、Caffe2、TensorRT、Triton Inference Server、Theano、Torch、DIGITS、NeMo、Clara Train SDK、RAPIDS、Merlin Training、Merlin Inference。

請參考[映像檔概念詳解](xxx)，了解各 TWCC 映像檔之 AI 訓練框架與套件版本資訊。

- ### 映像檔名稱說明
    - 範例：`tensorflow-20.11-tf2-py3:latest`
    - 說明：**`AI訓練框架`**-**`NGC發行日期 (年.月)`**-**`NGC定義之次版本`**-**`Python版本`**:**`TWCC最新調適之版本`**。

:::info
- 大部分映像檔皆適用以上名稱說明，少數映像檔則會另外加註適用之套件名稱，例 `digits-19.08-tensorflow:latest`；或使用該映像檔原版本名稱，例：`matlab-r2019b:latest`。
- `v1` 表 TWCC 調整最佳化之版本。
- 自訂映像檔 (Custom Image) 可自訂識別標籤 (tag)，取代 `latest` 呈現於映像檔名稱。
:::


- ### 版本與功能
    - [容器映像檔](/docs/ccs-interactive-container/user-guides/duplicate-backup/duplicates.md)：19.08 (含)後之版本才有支援此功能。
    - SSL 加密：20.xx 後之版本才有支援此功能。
    - Jupyter Notebook：20.xx 後之版本才有支援此功能。
    - 指令操作紀錄：21.08 (含) 後之版本，可使用 `history` 指令檢視紀錄。

## 自訂映像檔 (Custom Image)

TWCC 開發型容器映像檔提供您保存自行部署完成的容器映像檔，使用上述 TWCC 映像檔建立容器後，您可以部署所需套件，並建立[容器映像檔](/docs/ccs-interactive-container/user-guides/duplicate-backup/duplicates.md)將環境打包成自訂映像檔 (Custom Image)，即可重複建立相同環境。同專案內的成員皆可以共享使用，所有軟體僅需安裝一次，提供您快速複製及部署相同工作環境的便利性。
    
此外，因容器建立後即持續計費，您也可使用映像檔保存容器設定，刪除原容器，待下回工作時再建立新的容器續用，節省開發成本。或是使用映像檔作為容器損壞的災難救援方案。



