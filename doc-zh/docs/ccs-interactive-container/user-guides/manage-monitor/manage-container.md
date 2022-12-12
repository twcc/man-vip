---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-manage-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-manage-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 管理容器

容器建立後，您可透過以下方式檢視容器資料或刪除容器。

:::info
租戶管理員、租戶使用者對於開發型容器使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/compute.md#開發型容器)。
:::

<br/>

## 檢視資訊

檢視容器 ID、名稱、公用 IP、狀態、建立時間、建立者、映像檔版本、資源比例、日誌、網路連線、儲存...等資訊。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 於「**開發型容器管理**」頁可檢視基本資訊。
- 也可以點選特定容器，進入「**開發型容器詳細資料**」頁檢視更多容器資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c026f7985e9529fb766b8089aafec03.png)


- 進入開發型容器詳細資料「**配置**」頁面，可以檢視容器的基本資訊、網路、儲存等資訊，連線登入使用該容器
- 或執行「**映像檔**」、「**删除**」、「**重新整理**」、查看「**容器日誌**」、啟用或關閉「**刪除保護機制**」等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cf118734826fcdd287da97a30865c0d5.png)

:::caution
- 「容器日誌」功能無法確保您的所有紀錄在容器結束運行後，仍可保存及取得，建議您將日誌轉存至 [<ins>TWCC HFS</ins>](/docs/hfs/overview.md) 或 上傳到 [<ins>TWCC COS</ins>](/docs/cos/overview.md) 中，以確保紀錄可用性。
- 若希望由 TWCC 維運人員協助您取得完整紀錄，請您來信授權處理 (<a href = "mailto: isupport@twsc.io">isupport@twsc.io</a>)，並請勿存放機敏資料。
:::

<br/>

:::info
啟用「刪除保護機制」，在您刪除資源之前，需先關閉保護機制後才能繼續進行刪除步驟，可防止資源誤刪，導致中斷。
![](https://i.imgur.com/vfuSZhT.gif)
:::

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 檢視容器 ID、名稱、建立時間、狀態。

```bash
twccli ls ccs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c56a8a4bafb8fd5ee6b4913dc5d9c86.png)

- 檢視計畫下的所有容器 **(僅限租戶管理員使用)**
    
```bash
twccli ls ccs -all
```

</TabItem>
</Tabs>

<br/>

## 刪除容器

若容器已無使用，建議您刪除容器以節省成本。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 於「**開發型容器管理**」頁可於容器右側點選 &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; ，再點選「**刪除**」刪除容器。
- 或一次勾選單個或多個容器，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d1182756e5313f7ce9a9d286d19b87a.png)


- 另外也可於「**開發型容器詳細資料**」頁，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b202031cfadf8615087e2c6ba23e084.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 刪除 ID 為 **`934369`** 的容器

```bash
twccli rm ccs -s 934369
```

</TabItem>
</Tabs>

<br/>

:::info
若已開啟「[<ins>刪除保護機制</ins>](#檢視資訊)」，將無法直接刪除資源，請您先關閉後再執行刪除。
:::