---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 容器連接埠（服務埠）

TWCC 開發型容器開放 22、8888、5000、5001、5002，5 個**目標埠**供容器對外服務使用。

容器已預設將 SSH 設置在 22 埠、Jupyter Notebook 設置在 8888 埠，並自動完成關聯，因此容器建立完成後，您即可立即使用這兩種方式連線操作容器。

您可以自行運用的**目標埠**為：5000、5001、5002。將架設於容器內服務的 daemon 設置在其中一個目標埠，並關聯對外埠，完成後，系統將配置一個對應的**對外埠 (50000 ~ 60000)**，您即可於透過公用 IP 和對外埠，對外提供該服務 (例：[AI 推論服務](../../tutorials/tensorflow-inception-v3-image-recognition.md)或是[網站服務](../../tutorials/configure-service-ports.md))。

<br/>


## 準備工作

- [建立開發型容器](../create-connect/create-container.md)。
- 若選擇使用 TWCC 入口網站操作，容器建立後，請於「**開發型容器管理頁**」點選欲連線的容器，進入「**開發型容器詳細資料頁**」。
- 若選擇使用 TWCC CLI 操作，請先取得[容器 ID](../manage-monitor/manage-container.md#檢視資訊)。

<br/>


## 檢視服務埠資訊

容器預設將 SSH 目標埠設置在 22 埠、Jupyter Notebook 目標埠設置在 8888 埠 (對外埠皆由系統配置)。

可使用以下方式，檢視目前容器已關聯的對外服務埠資訊。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

將頁面下拉至「**網路與連線**」區塊 > 「**連接埠**」，已關聯的服務埠資訊顯示於左下方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3db2368926911e1dc903a10389c49811.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

檢視 ID **`886330`** 容器已關聯的服務埠資訊。

```bash
twccli ls ccs -p -s 886330
```

</TabItem>
</Tabs>

<br/>


## 關聯服務埠

您可以將容器關聯 5000、5001、5002 **目標埠**，完成後系統將配置相對應的**對外埠**。您可以透過此機制，對外提供容器服務 (例：[AI 推論服務](../../tutorials/tensorflow-inception-v3-image-recognition.md)或是[網站服務](../../tutorials/configure-service-ports.md))。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 點選「**關聯**」服務埠 :arrow_right: 勾選服務 daemon 的所在埠號 `5002` :arrow_right: 點選「**確認**」
        
![](https://i.imgur.com/d6O2sWE.png)
        
- 完成後，系統將分配一個「**對外埠**」(`53055`)，對應至目標埠 (`5002`)
        
![](https://i.imgur.com/a9wXd1e.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 為 ID `886330` 容器，關聯 `5000` 的對外服務埠
```bash
twccli net ccs -p 5000 -open -s 886330
```

- 完成後，可使用[檢視](#檢視服務埠資訊)的指令，檢視系統配置的目標埠號。

</TabItem>
</Tabs>

<br/>


## 解除關聯服務埠

若容器服務不再對外提供，您可將服務埠解除關聯。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

於容器管理頁面，點選「<b>分離</b>」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a709233f197d7a361443acbd4d7ea99e.png)

再勾選欲分離的埠號，點選「**確認**」，即可成功分離。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c8781033f4b4f8b1bb475d388d4a724f.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

將 ID `886330` 的容器，解除 `5000` 對外服務埠關聯
```bash
twccli net ccs -p 5000 -close -s 886330
```

</TabItem>
</Tabs>