---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 管理容器

容器建立後，您可透過以下方式檢視容器資料或刪除容器。

:::info
租戶管理員、租戶使用者對於開發型容器使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A8)。
:::


## 檢視資訊

檢視容器 ID、名稱、公用 IP、狀態、建立時間、建立者、映像檔版本、資源比例、日誌、網路連線、儲存...等資訊。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 於「**開發型容器管理**」頁可檢視基本資訊。
- 也可以點選特定容器，進入「**開發型容器詳細資料**」頁檢視更多容器資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66e8d42357ff675c82a5f267559461c0.png)


- 進入開發型容器詳細資料「**配置**」頁面，可以檢視容器的基本資訊、網路、儲存等資訊，連線登入使用該容器
- 或執行「**複本**」、「**删除**」、「**重新整理**」、查看「**容器日誌**」、啟用或關閉「**刪除保護機制**」等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cf118734826fcdd287da97a30865c0d5.png)

:::danger
- 「容器日誌」功能無法確保您的所有紀錄在容器結束運行後，仍可保存及取得，建議您將日誌轉存至 [TWCC HFS](https://man.twcc.ai/@preview-twccdocs/doc-hfs-main-zh) 或 上傳到 [TWCC COS](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh) 中，以確保紀錄可用性。
- 若希望由 TWCC 維運人員協助您取得完整紀錄，請您來信授權處理 (isupport@twcc.io)，並請勿存放機敏資料。
:::

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


## 刪除容器

若容器已無使用，建議您刪除容器以節省成本。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 於「**開發型容器管理**」頁可於容器右側點選 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> ，再點選「**刪除**」刪除容器。
- 或一次勾選單個或多個容器，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d1182756e5313f7ce9a9d286d19b87a.png)


- 另外也可於「**開發型容器詳細資料**」頁，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2881ea99d7be4882eab6634184a14f8d.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 刪除 ID 為 **`934369`** 的容器

```bash
twccli rm ccs -s 934369
```

</TabItem>
</Tabs>


:::info
若已開啟「[刪除保護機制](https://man.twcc.ai/@twccdocs/guide-ccs-manage-zh#%E6%AA%A2%E8%A6%96%E8%B3%87%E8%A8%8A)」，將無法直接刪除資源，請您先關閉後再執行刪除。
:::