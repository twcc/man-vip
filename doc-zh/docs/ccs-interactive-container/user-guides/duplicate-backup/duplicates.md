---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-image-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-image-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 開發型容器映像檔

TWCC 提供多種 NGC AI 運算適用的最佳化容器映像檔，也提供您保存自行部署完成的自訂映像檔 (Custom Image)，同計畫內的成員皆可以共享使用，所有軟體僅需安裝一次，提供您快速複製及部署相同工作環境的便利性。

此外，因開發型容器建立後即持續計費，您也可使用映像檔保存容器設定，刪除原容器，待下回工作時再建立新的容器續用，節省開發成本。或是使用映像檔作為容器損壞的災難救援方案。

:::info
詳細說明請參考 [<ins>TWCC 容器映像檔概觀</ins>](../../../ccs-interactive-container-concepts-images/overview.md)。
:::

:::caution
1. 自訂映像檔範圍不包含容器預設目錄 /home 與 /work 之資料，製作映像檔前請您留意套件安裝位置。Python 套件安裝注意事項請參考：[<ins>TWCC 開發型容器 - Python 套件安裝指南</ins>](../../tutorials/python-package-installation.md)。
2. 當您存放超過 10 GB 資料在容器系統目錄 (非[<ins>高速檔案系統 (HFS) 服務</ins>](/docs/hfs/overview.md)之 /home 或 /work 目錄)，進行容器映像檔時可能會有無法建立的情況。<br/>
您可以輸入 `df -h` 指令檢視容器系統目錄 `/` 已使用容量：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
如有任何問題請與我們的技術支援團隊或客服人員連絡，謝謝！
:::

<br/>


## 建立映像檔

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入開發型容器詳細資料「**配置**」頁面，點擊上方「**映像檔**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a7923ba9f07c380b15dd5bce935a024c.png)

* 輸入容器映像檔的標籤後按下確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1bc9b6571dedf8062bb764d5302024fd.png)

:::info
同一映像檔，若標籤名稱重複，將會覆蓋取代原已製作完成的映像檔，並更新映像檔管理頁的最後更新時間。
:::

* 容器映像檔建立後，會出現在映像檔申請紀錄的列表中，建立容器映像檔需要幾分鐘的時間，此時申請狀態顯示為 **`Requested`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7d9df0bc54e0a7a38f2d56c4c3f1d27e.png)

* 數分鐘後，當申請狀態變成 **`Resolved`** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6af43c87f1117cb2e304c863bcad2b71.png)

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
映像檔申請紀錄頁僅能檢視本人的映像檔申請紀錄。
:::

<br/>

## 管理映像檔

自訂映像檔建立完成後，您可以進入映像檔管理頁，檢視映像檔資訊或刪除不再使用的映像檔。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

**檢視資訊**

* 由服務列表點選「**開發型容器**」，並點選左側「**映像檔**」，進入「**映像檔管理**」頁。
* 您可以於此頁面檢視映像檔資訊，包含名稱、標籤、大小、最後更新時間、最後取用時間 。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2450432707f13611a571d4fc1de2e52c.png)

**刪除映像檔**
    
* 於「**映像檔管理**」頁可於映像檔右側點選 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> ，再點選「**刪除**」刪除容器。
* 或一次勾選單個或多個容器，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a53986b8479d385569553534df485e28.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

</TabItem>
</Tabs>

:::info

- 最後更新時間：同一容器，若標籤名稱重複建立映像檔，將會覆蓋取代原已製作完成的映像檔，並更新此時間。
- 最後取用時間：取用映像檔建立容器之時間。

:::

<br/>

## 以映像檔建立客製化容器

自訂映像檔建立完成後，您即可在需要時使用映像檔建立新的容器。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 由服務列表點選「**開發型容器**」，在「**開發型容器管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b37bee938bd721730915748172a65af5.png)

* 在選擇映像檔類型頁面，點選「**Custom Image**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b4d16146fd711ad59295daf16fc1451.png)

* 填寫容器基本資訊與硬體規格配置，並選擇自訂的映像檔，接著點擊「**下一步：儲存資訊>**」，其他步驟同建立開發型容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_279027f39a467170fd2fa7b1ea2c4526.png)

:::info
同計畫內的成員皆可以共享使用映像檔，在映像檔下拉清單內可見計畫下所有的容器映像檔。
:::

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 建立映像檔類型`Custom Image`中，映像檔規格與 tag 為 `tensorrt-19.08-py3:dup1`的容器，並將映像檔命名為 `dupcli`。

```bash
twccli ls ccs -img "Custom Image"
twccli mk ccs -itype "Custom Image" -img "tensorrt-19.08-py3:dup1" -n dupcli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3310c270ae57370c22704b470cccbe60.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b2071ecdbafd5db2f98fbbf11b3e2ea.png)

</TabItem>
</Tabs>