---
sidebar_position: 2
sidebar_label: '建立容器映像檔'
slug: '/user-guides/twcc/ccs-interactive-container/create-image'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立容器映像檔


:::caution
1. 容器映像檔範圍不包含容器預設目錄 /home 與 /work 之資料，製作映像檔前請您留意套件安裝位置。Python 套件安裝注意事項請參考：[<ins>TWCC 開發型容器 - Python 套件安裝指南</ins>](https://man.twcc.ai/@twccdocs/ccs-intactv-howto-zh)。
2. 當您存放超過 10 GB 資料在容器系統目錄 (非[<ins>高速檔案系統 (HFS) 服務</ins>](/docs/user-guides/twcc/hfs)之 /home 或 /work 目錄)，進行容器映像檔時可能會有無法建立的情況。<br/>
您可以輸入 `df -h` 指令檢視容器系統目錄 `/` 已使用容量：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
如有任何問題請與我們的技術支援團隊或客服人員連絡，謝謝！
:::

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入開發型容器詳細資料「**配置**」頁面，點擊上方「**映像檔**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_796e7a60a805efb02daad9392ec4f376.png)

* 輸入容器映像檔的標籤後按下確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3c61142cd535ad3ae8c6261ba6e24446.png)

* 容器映像檔建立後，會出現在開發型容器映像檔管理的列表中，建立容器映像檔需要幾分鐘的時間，此時映像檔狀態顯示為 **`Requested`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f36cf3e5cf63128e325e43ae57b0c9a2.png)

* 數分鐘後，當映像檔狀態變成 **`Resolved`** 即可開始使用。

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

<br/>