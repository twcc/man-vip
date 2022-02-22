---
tags: Concept, CCS, ZH
title: CCS Image-Overview | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# TWCC 容器映像檔概觀

<style>
.ccsimglist {color:#27A5BD; font-weight: bold;
}

.fa-sticky-note {color:#6C8592;}
</style>

TWCC 提供多種 [NGC](https://www.nvidia.com/zh-tw/gpu-cloud/containers/) AI 運算適用的最佳化容器映像檔，提供多樣化的 AI 訓練框架，搭配 TWCC 底層 GPU 資源，容器可展現極佳運算效能。

容器映像檔類型、映像檔名稱說明如下，您可選擇左側映像檔類型，了解各項 TWCC 映像檔之 AI 訓練框架與套件版本資訊。

## 映像檔類型

- **TWCC 映像檔**

    TWCC 與 [NGC](https://www.nvidia.com/zh-tw/gpu-cloud/) 合作，提供用戶以下立即可用之容器映像檔類型：

    TensorFlow, PyTorch, CUDA, Matlab, Caffe, CNTK, MXNet,  Caffe2, TensorRT, TensorRT_Server, Theano, Torch, DIGITS, RAPIDS、Clara Train SDK。

- **自訂映像檔 (Custom Image)**

    使用上述 TWCC 映像檔建立容器後，您可以部署所需套件，並建立[容器複本](https://www.twcc.ai/doc?page=container)將環境打包成自訂映像檔 (Custom Image)，即可重複建立相同環境。

## 映像檔名稱說明

- 範例：`tensorflow-20.11-tf2-py3:latest`
- 說明：**`AI訓練框架`**-**`NGC發行日期 (年.月)`**-**`NGC定義之次版本`**-**`Python版本`**:**`TWCC最新調適之版本`**。

:::info
{%hackmd @docsharedstyle/note-zh %}
- 大部分映像檔皆適用以上名稱說明，少數映像檔則會另外加註適用之套件名稱，例 `digits-19.08-tensorflow:latest`；或使用該映像檔原版本名稱，例：`matlab-r2019b:latest`。
- `v1` 表 TWCC 調整最佳化之版本。
- 自訂映像檔 (Custom Image) 可自訂識別標籤 (tag)，取代 `latest` 呈現於映像檔名稱。
:::



