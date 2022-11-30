---
sidebar_position: 2
slug: '/user-guides/twcc/ccs-interactive-container/create-image'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立容器映像檔

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入開發型容器詳細資料「**配置**」頁面，點擊上方「**複本**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_796e7a60a805efb02daad9392ec4f376.png)

* 輸入容器複本的標籤後按下確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3c61142cd535ad3ae8c6261ba6e24446.png)

* 容器複本建立後，會出現在開發型容器複本管理的列表中，建立容器複本需要幾分鐘的時間，此時複本狀態顯示為 **`Requested`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f36cf3e5cf63128e325e43ae57b0c9a2.png)

* 數分鐘後，當複本狀態變成 **`Resolved`** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3b5a1784935473261003c4e9f7f117d.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 提出申請保留容器 ID 為 `934336` 的容器，image tag 自訂為 *dup1*

```bash
twccli mk ccs -s 934336 -dup -tag dup1 
```

- 檢視已提出的申請狀態

```bash
twccli ls ccs -dup
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b392366c438096c660347681dd81ca7.png)

</TabItem>
</Tabs>

:::info
容器複本建立後不可刪除。
:::

<br/>