---
sidebar_position: 14
slug: '/concepts-tutorials/twcc/ccs/tutorials/migrate-from-v1-to-v2'
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-migrate-container-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-migrate-container-zh' 
---

# TWCC CCS 新容器平台 (v2)

## 容器平台更新說明

TWCC 已完成 CCS 容器運算平台更新與整合作業 (平台版本由 v1 升級至 v2)，升級作業系統以及必要套件，同時也修正平台漏洞，提供用戶更穩健的容器平台。未來 TWCC 將滾動式升級平台，並提供用戶更多便利的容器功能，請您敬請期待。


## 敬請評估 v1 容器是否續用？

由於 v2 新平台已上線提供用戶容器服務，TWCC 將汰除 v1 容器平台，敬請用戶協助評估您使用中並建立於 v1 平台的容器，是否需續用並進行刪除或遷移作業，協助我們加速汰除 v1 平台：

- **v1 容器 - 無續用需求**：敬請您刪除容器，節省您的成本並協助我們加速 v1 舊平台汰除作業。
- **v1 容器 - 有續用需求**：由於特定容器功能僅適用於 v2 平台 (請參考 [TWCC 入口網站 (VIP) 功能調整說明](#twcc-入口網站-vip-功能調整說明)，敬請您參考[如何將 v1 容器遷移至 v2 平台？](#如何將-v1-容器遷移至-v2-平台)，將容器遷移至 v2 平台，以獲得更完整的使用體驗。


<!-- ## 如何判斷容器是舊是新？

您可以透過建立時間或是 TWCC 入口網站判斷容器建立於 v1 版或是 v2 版平台：

- **建立時間**：
    - v1 舊容器：2022/9/x 前建立之容器<sup>[1]</sup>
    - v2 新容器：2022/9/x 後建立之容器<sup>[1]</sup>

:::info
<sup>[1]</sup> 對於已先行遷移容器之 VIP 用戶：2022/9/xx 為新舊容器分隔時間。
:::

- **入口網站 - 容器詳細資料頁**：
    - v1 舊容器：顯示 (v1) 版本
    > ![](https://i.imgur.com/sVQR9w4.png)
    
    > ![](https://i.imgur.com/DQQ4mY3.png)

    - v2 新容器：無顯示版本
 -->
 
 
## 如何將 v1 容器遷移至 v2 平台？

TWCC 提供 VIP 用戶優先透過 https://vip.twcc.ai 進行 v1 容器遷移，請使用您的帳號，按一般流程登入 VIP 網站。

### 開發型容器

請為您的 v1 容器建立複本，並參考 v1 容器設定，使用複本建立 v2 容器。

#### Step 1. 建立 v1 容器的複本

- 於服務列表選擇「開發型容器」。 
- 進入開發型容器管理頁後，點選 v1 容器，進入詳細資料頁。
- 請點選「複本」，為您的 v1 容器建立複本，以進行 Step 2. 遷移作業。

![](https://i.imgur.com/s7kB8vY.png)

:::info
更多複本說明，請參考[容器複本](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-duplicate-zh)。
:::


#### Step 2. 遷移作業：以複本建立 v2 容器

- 回到開發容器管理頁，並[以複本新建容器](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-duplicate-zh#%E4%BB%A5%E8%A4%87%E6%9C%AC%E5%BB%BA%E7%AB%8B%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%AE%B9%E5%99%A8)，即可將您的 v1 容器遷移至 v2 平台。

:::info
您可以參考 v1 容器詳細資料頁，選擇與 v1 容器相同的映像檔類型、映像檔、規格...等設定。
:::

#### Step 3. 刪除 v1 容器

- 確認容器已使用複本建立完成後 (狀態轉為 **`Ready`**)，再回到開發型容器管理頁，**請您盡快刪除 v1 容器**，避免產生過多額外費用。

### 任務型容器

#### Step 1. 參考 v1 容器設定

- 於服務列表選擇「任務型容器」，並點選左側「任務型容器 v1」，進入`任務型容器管理 (v1)` 頁。
- 選擇您的 v1 容器，並參考 v1 容器設定 (映像檔、型號、排程、指令...等)。

![](https://i.imgur.com/OXIwMN5.png)


#### Step 2. 遷移作業：建立 v2 容器

- 點選左側「任務型容器」，進入`任務型容器管理` 頁，並點選 「+建立」，建立 v2 容器。 

![](https://i.imgur.com/tTzD02M.png)


- 選擇同 v1 容器的設定 (映像檔、基本設定、指令、排程...等)
- 建立完成，即可保留您的 v1 容器指令，並遷移至 v2 平台。

#### Step 3. 刪除 v1 容器

- 確認 v2 容器已建立完成後，再回到任務型容器 (v1) 管理頁 ，並**請您盡快刪除 v1 容器**，避免產生過多額外費用。

![](https://i.imgur.com/t1Bah0s.png)


## TWCC 入口網站 (VIP) 功能調整說明

TWCC 提供 VIP 用戶優先透過 https://vip.twcc.ai 進行 v1 容器遷移。此 VIP 網站針對容器平台更新作業進行的容器相關頁面調整，詳細說明如下：

### 開發型容器

- **管理頁**：
    - 點選管理頁之「+建立」，容器皆建立於 v2 平台。
    - v1 與 v2 容器並存於管理頁列表。 
    ![](https://i.imgur.com/H5QQ60B.png)
- **詳細資料頁**：
    - **v1 容器**：
        - 標題標示為 v1 容器。
        - **不提供關聯服務埠、關閉刪除保護機制**。因此敬請您[遷移至 v2 容器](#開發型容器)，以取得完整的使用體驗。 
![](https://i.imgur.com/G4Pwqkb.png)
    - **v2 容器**：所有功能皆正常開放。
- **左側監控頁**：
    - 僅顯示 v2 容器監控資料，無顯示 v1 容器監控資料。
![](https://i.imgur.com/y5SVgtM.png)

### 任務型容器

- **管理頁**：
    - **v1 容器**：
        - 僅顯示 v1 容器。
        - **不提供建立、啟動功能**。因此敬請您[遷移至 v2 容器](#任務型容器)，以取得完整的使用體驗。
        ![](https://i.imgur.com/Uzq7nch.png)

    - **v2 容器**：
        - 僅顯示 v2 容器。
        ![](https://i.imgur.com/lGuwgML.png)
- **詳細資料頁**：
    - **v1 容器**：
        - 標示為 v1 容器。
        - **不提供啟動功能**。因此敬請您[遷移至 v2 容器](#任務型容器)，以取得完整的使用體驗。
        ![](https://i.imgur.com/On7xO1v.png)
    - **v2 容器**：所有功能皆正常開放。
- **左側監控頁**：
    - 僅顯示 v2 容器監控資料，無顯示 v1 容器監控資料。
    ![](https://i.imgur.com/AEDtH6k.png)