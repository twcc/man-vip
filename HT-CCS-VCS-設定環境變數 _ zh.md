---
title: HowTo：設定環境變數 | zh
tags: HowTo, CCS, ZH
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# HowTo：設定環境變數

本文說明如何透過 TWCC 使用者網站、TWCC CLI，在建立[<ins>開發型容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh) / [<ins>虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh)時，指定您所需的環境變數，動態調整應用程式的設定，以符合您對環境的需求。

:::info
{%hackmd @docsharedstyle/note-zh %}

此功能僅適用特定映像檔：
- 開發型容器：TensorFlow、PyTorch
- 虛擬運算個體：Ubuntu、CentOS
:::


例如：若選用 [TensorFlow 映像檔](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-zh/%2F%40twccdocs%2Fccs-concept-image-tensorflow-zh)建立容器，您在建立容器時，即可設定 [`TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH`](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-user-guide/index.html#tf_disable_cudnn_rnn_tensor_op_math)環境變數來開啟/關閉 Tensor Core math。


TensorFlow 映像檔預設開啟 Tensor Core math：

```
環境變數預設值 (Key=Value)：TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH=0
```

若需設定為關閉，您可在建立容器時指定 value 為 `1`：

### Step 1. 建立容器 / 虛擬運算個體、指定環境變數

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

:::info
{%hackmd @docsharedstyle/note-zh %}
以下以開發型容器為範例，虛擬運算個體也是相同的設定方式，在[<ins>建立個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)時指定環境變數。
:::





在 [<ins>建立容器</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-zh) 時，在「**環境變數**」頁指定環境變數，並建立容器，即部署完成。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1248dbb9deb8a4b57a4f8c8eddb5c36.png)

:::info
{%hackmd @docsharedstyle/note-zh %}

環境變數 Key 與 Value，設定格式如下 (JSON)，可一次設定多筆變數：

    ```
    {
    "Key1":"Value-a",
    "Key2":"Value-b",
    "Key3":100,
    }
    ```

:::

<br>


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

```
$ twccli mk ccs -envk TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH -envv 1  
```

</details>


### Step 2. 確認環境變數

[連線容器](https://man.twcc.ai/@twccdocs/guide-ccs-connect-zh)，並使用以下指令，可確認環境變數已寫入容器。

```bash
$ echo $BUFFER
```

:::info
{%hackmd @docsharedstyle/note-zh %}
[<ins>連線虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-zh)，並使用以下指令確認環境變數已寫入個體。

<br>

```bash
$ echo $Key

# Enter your key, e.g., $TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH
```

:::