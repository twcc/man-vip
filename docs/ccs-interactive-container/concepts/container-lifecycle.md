---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-ccs-lifecycle-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-ccs-lifecycle-zh'
---

# 容器生命週期

使用者對開發型容器的執行動作—建立、刪除，所產生的容器生命狀態，與資源、資料、計費息息相關，本文將詳細說明容器從建立到刪除之間，所有的生命週期狀態、意義與計費之間的關係。

執行動作與容器狀態之間的轉換：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ad549e6ae909c6ce1fb9ab949cd51ee.png)

- 個體狀態與描述、用量計費的關係如下表所示：

| 容器狀態 | 狀態描述 |容器用量計費 | 
| -------- | -------- | -------- |
| `Initializing`     |準備進入 `Ready` 狀態。<div></div> 建立容器：系統正在分配資源並初始化容器中<div></div>| 不計費     | 
| `Ready`     | 初始化已完成，個體已可正常連線使用|計費     | 
| `Deleting`     | 刪除容器中，容器將被永久刪除|不計費    | 


## 建立容器

建立容器後，系統將分配資源並初始化執行容器，容器狀態將呈現 **`Initializing`**，此時尚未能連線使用，但不久後即進入 **`Ready`** 狀態。在 **`Ready`** 狀態下，可操作內容如下：

- <i class="fa fa-check" aria-hidden="true"></i> 連線登入
- <i class="fa fa-check" aria-hidden="true"></i> 建立容器複本
- <i class="fa fa-check" aria-hidden="true"></i> 關聯、分離服務埠...等其他一般操作

:::info
建立步驟請參考[<ins>建立容器</ins>](/@twccdocs/guide-ccs-create-zh)
:::


## 刪除容器

若要將容器永久刪除，不再使用，在點選刪除後，個體狀態將呈現 **`Deleting`** ，<ins>**即不再計費**</ins>，刪除完成後，容器將從列表上消失。

其他刪除的注意事項：
- 容器系統目錄下的資料將永久刪除，若需保留可建立[容器複本](https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-zh)。
- /home、/work 資料 (高速檔案系統儲存空間) 將會留存，不會隨容器刪除而清除。

:::info
個體刪除步驟請參考[<ins>建立容器</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-manage-zh)
:::
