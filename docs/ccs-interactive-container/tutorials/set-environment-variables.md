---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-vcs-setup-env-variable-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 設定環境變數


本文說明如何透過 TWCC 使用者網站、TWCC CLI，在建立[<ins>開發型容器</ins>](../user-guides/create-connect/create-container.md) / [<ins>虛擬運算個體</ins>](../../vcs/user-guides/create/create-instances.md)時，指定您所需的環境變數，動態調整應用程式的設定，以符合您對環境的需求。

:::info
此功能僅適用特定映像檔：
- 開發型容器：多數皆可使用 (Matlab (公開預覽版)、Custom Image 若需使用此功能，請洽<ins> <a href = "mailto:isupport@twcc.ai">技術支援服務</a> </ins>)。
- 虛擬運算個體：Linux 映像檔
:::


例如：若選用 [TensorFlow 映像檔](../../ccs-interactive-container-concepts-images/tensorflow.md)建立容器，您在建立容器時，即可設定 [`TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH`](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-user-guide/index.html#tf_disable_cudnn_rnn_tensor_op_math)環境變數來開啟/關閉 Tensor Core math。


TensorFlow 映像檔預設開啟 Tensor Core math：

```
環境變數預設值 (Key=Value)：TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH=0
```

若需設定為關閉，您可在建立容器時指定 value 為 `1`：

### Step 1. 建立容器 / 虛擬運算個體、指定環境變數

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>
    

:::info
以下以開發型容器為範例，虛擬運算個體也是相同的設定方式，在[<ins>建立個體</ins>](../../vcs/user-guides/create/create-instances.md)時指定環境變數。
:::





在 [<ins>建立容器</ins>](../user-guides/create-connect/create-container.md) 時，在「**環境變數**」頁指定環境變數，並建立容器，即部署完成。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1248dbb9deb8a4b57a4f8c8eddb5c36.png)

:::info
環境變數 Key 與 Value，設定格式如下 (JSON)，可一次設定多筆變數：

```
    {
    "Key1":"Value-a",
    "Key2":"Value-b",
    "Key3":100
    }
```

:::



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

```
twccli mk ccs -envk TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH -envv 1  
```


  </TabItem>
</Tabs>

### Step 2. 確認環境變數

[連線容器](../user-guides/create-connect/connect-container.md)，並使用以下指令，可確認環境變數已寫入容器。

```bash
echo $BUFFER
```

:::info
[<ins>連線虛擬運算個體</ins>](../../vcs/user-guides/connecting/linux/from-windows.md)，並使用以下指令確認環境變數已寫入個體。
<div></div>

```bash
echo $Key

# Enter your key, e.g., $TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH
```

:::