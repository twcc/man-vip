---
sidebar_position: 1
title: '虛擬運算個體'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立虛擬運算個體

您可以系統預設資訊以簡單步驟完成建立虛擬運算個體，或是依需求選擇適合的個體型號。完整虛擬運算個體型號 (含資源數量與其他資源大小)，請參考[價目表](/docs/pricing.mdx#虛擬運算服務-virtual-compute-service-vcs)。


<details>

<summary>TWCC 提供下列映像檔</summary>

<br/>

<font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font>

- **Linux**：
    - Ubuntu：16.04、18.04、20.04、22.04
    - Centos：7.9、8.2、8.5
    - Rocky Linux：8.5、8.6
- **Windows**：
    - Windows 10 (BYOL)：Pro、Enterprise LTSC
    - Windows Server (BYOL)：
        - 2016 (中、英版)
        - 2019 (中、英版)

- 個體規格請參考 [TWCC 價目表 (國網用戶)](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS)

<br/>

<font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font>

<br/><br/>

除 Windows 10 (BYOL) 未提供、Windows Server 提供附帶授權版本，上述映像檔皆有提供之外，另提供 SQL Server Web。

- 個體規格請參考 [TWCC 價目表 (TWS 用戶)](/docs/pricing.mdx#虛擬運算服務-virtual-compute-service-vcs)

</details>

<br/>


## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWS / TWCC 帳號](/docs/member/user-guides/member-key-quota/sign-up-for-twcc)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://www.twcc.ai/)。
- 若選擇使用 TWCC CLI 操作，請先[安裝 TWCC CLI](https://github.com/twcc/TWCC-CLI)、並[登入](https://github.com/twcc/TWCC-CLI)。

<br/>


### 建立 <i class="fa fa-linux" aria-hidden="true"></i> Linux 個體

<!-- 1 start -->

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5491a3fa25058a188c04c8adacde0f79.png)


:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a2a9e6eb83b42ab497c13e97412d38e.png)


* 選擇映像檔類型，TWCC 提供常用的 Linux、Windows 作業系統映像檔，方便個體建立後可以立即使用。您可瀏覽再選擇，或直接於左上方搜尋欲使用的映像檔名稱 (例：Ubuntu, Windows 10...等)。

![](https://i.imgur.com/cMrtu8H.png)



:::tip
首次選用後，映像檔會記錄儲存於「**最近使用**」區塊，加快您下次選用的速度。(清除瀏覽器歷史紀錄將會重新記錄)
:::


* 在基本資訊頁面填寫虛擬運算個體的名稱及描述，選擇映像檔的版本及所需的硬體規格，包含 CPU 數量、記憶體容量、儲存容量及額度的不同組合，並選擇「**開啟**」或「**關閉**」刪除保護機制。完成後，接著點擊 **「下一步：網路>」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f8340eb76381f2ca2c9a66c199f22fc8.png)


:::info
開啟刪除保護機制，在您刪除資源之前，需先關閉保護機制後才能繼續進行刪除步驟，可防止資源誤刪，導致務中斷。
:::


* 在網路設定頁面，可使用系統預設的 default_network 或自訂的虛擬網路。
* **預設為不配置公用 IP**。若需從虛擬網路外部連線個體，請您點選「**自動配置浮動 IP**」或 「**配置靜態 IP**」，並建議使用[安全性群組](../security/security-group.md)保護個體安全與降低資安風險。使用細節請參考[彈性 IP](../networking/elastic-ip.md)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a578c6a3945fc9b14c72cc33dc30d387.png)


:::info
1. 首次使用請先建立預設虛擬網路 (default network)，操作步驟請參考：[<ins>建立預設虛擬網路</ins>](../../tutorials/create-default-network.md)。若有自訂虛擬網路之需求，請參考：[<ins>建立自訂虛擬網路</ins>](../networking/virtual-network.md#建立自訂虛擬網路)。
2. 建立虛擬網路僅限由「**租戶管理者**」操作，因此若您身份為「**租戶使用者**」，請您聯繫所屬計畫之「**租戶管理者**」協助操作。
:::

* 在儲存資訊頁面，設定外掛資料磁碟 大小（GB）及類型（提供 4 種磁碟類型：HDD、SSD、HDD 加密、SSD 加密）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9dafe55ac87c92b4b0c06678699c836.png)

:::caution
- [<ins>Auto Scaling</ins>](../networking/auto-scaling.md) 會依據所連結虛擬運算個體建立時的設定而新增個體，因此：
    - 若 Auto Scaling 自動新增的個體<ins>**需要**</ins>自動連結新資料磁碟，請您在 **[<ins>建立個體</ins>](./create-instances.md) 時**，一併建立資料磁碟。
    - 反之，若 Auto Scaling 自動新增個體<ins>**不需要**</ins>自動連結新資料磁碟，則請您在 **[<ins>建立個體</ins>](./create-instances.md) 後**，[<ins>另建資料磁碟</ins>](../storage/create-data-disks.md)，再[<ins>連結至個體</ins>](../storage/view-attach-delete-disks.md#連結至虛擬運算個體)。
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->

- 接著點擊「**下一步：鑰匙對>**」

* 鑰匙對是登入 Linux 虛擬運算個體的憑證，必須透過鑰匙對，才能連線使用虛擬運算個體功能。可選擇已建立的鑰匙對，若第一次使用請按「**＋建立鑰匙對**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_76b85e1d767f1024086a2e69d0793241.png)



* 輸入鑰匙對的名稱後點擊確認。

:::info
公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_57a261c1f9903c2753530ce5e16bfa85.png)



* 鑰匙對建立後，請務必立即按「**下載**」並妥善保存此鑰匙對，若沒有此鑰匙對，將無法連線該虛擬運算個體，下載後即可關閉此對話視窗。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d64cb97650700d44ec73f9bc5c5ba46.png)


:::caution
TWCC 不負責紀錄及管理您的鑰匙對，請務必下載並妥善保存此鑰匙對 `pem` 檔案，若沒有此鑰匙對，您將無法[<ins>連線虛擬運算個體</ins>](../connecting/linux/from-windows.md)。
:::


* 接著點擊「**下一步：環境變數>**」，可設定符合您需求的環境變數，詳細說明與設定範例請參考[設定環境變數](../../tutorials/set-environment-variables.md)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2ffe89808b9c161fabc71302d825392a.png)



* 接著點擊「**下一步：檢閱 + 建立>**」，檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，幾分鐘後 等個體狀態變成 **`Ready`** 後即可開始[連線](../connecting/linux/from-windows.md)使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b35befff1c8ee37bdf68d147362453a.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0627e4962946edeb20fa029eb2b7c4e7.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

**Step 1.** 請先[建立鑰匙對](../keypairs.md#建立鑰匙對)

**Step 2.** 建立虛擬運算個體個體

```bash
twccli mk vcs -key      # 鑰匙對名稱
              [-n]      # 虛擬運算個體名稱
```

:::info
1. **[ ]** 中括號內為選擇性參數，其餘為必要參數。
2. 若不帶選擇性參數，則以預設資訊建立個體：

| 映像檔類型、映像檔 | 型號 |網路資訊|規格|
| -------- | -------- | -------- | -------- |
| Ubuntu 16.04    | v.2xsuper  | default_network  | 0 GPU + 8 CPU + 064GB memory |
:::

<br/>

**範例**

- 使用鑰匙對 **`key1`** 建立名稱為 **`vcscli`** 的虛擬運算個體。

```bash
twccli mk vcs -key key1 -n vcscli
```

:::caution
- 虛擬運算個體名稱命名字元條件：需為**小寫字母或數字**，**首字元需為小寫字母**，**長度 6-16 個字元**。
-  若設定不符合以上條件，將出現以下錯誤訊息：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)
:::

:::tip
其他相關 TWCC CLI 指令：

```bash
twccli ls vcs -img      # 檢視所有映像檔規格
twccli ls vcs -ptype    # 檢視所有產品型號與規格
```
:::


</TabItem>
</Tabs>

<br/>


### 建立 <i class="fa fa-windows" aria-hidden="true"></i> Windows 個體

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5491a3fa25058a188c04c8adacde0f79.png)


:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a2a9e6eb83b42ab497c13e97412d38e.png)


* 選擇映像檔類型，TWCC 提供常用的 Linux、Windows 作業系統映像檔，方便個體建立後可以立即使用。您可瀏覽再選擇，或直接於左上方搜尋欲使用的映像檔名稱 (例：Ubuntu, Windows 10...等)。

![](https://i.imgur.com/cMrtu8H.png)

:::tip
首次選用後，映像檔會記錄儲存於「**最近使用**」區塊，加快您下次選用的速度。(清除瀏覽器歷史紀錄將會重新記錄)
:::

* 在基本資訊頁面填寫虛擬運算個體的名稱及描述，選擇映像檔的版本及所需的硬體規格，包含 CPU 數量、記憶體容量、儲存容量及額度的不同組合，並選擇「**開啟**」或「**關閉**」刪除保護機制。完成後，接著點擊 **「下一步：網路>」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_216c514eea0c60727feeaf582124d7b4.png)

:::info
開啟刪除保護機制，在您刪除資源之前，需先關閉保護機制後才能繼續進行刪除步驟，可防止資源誤刪，導致務中斷。
:::

* 在網路設定頁面，可使用系統預設的 default_network 或自訂的虛擬網路。
* **預設為不配置公用 IP**。若需從虛擬網路外部連線個體，請您點選「**自動配置浮動 IP**」或 「**配置靜態 IP**」，並建議使用[安全性群組](../security/security-group.md)保護個體安全與降低資安風險。使用細節請參考[彈性 IP](../networking/elastic-ip.md)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_08a7761f2c23a738ba28b5169ea7d781.png)


:::info
1. 首次使用請先建立預設虛擬網路 (default network)，操作步驟請參考：[建立預設虛擬網路](../../tutorials/create-default-network.md)。若有自訂虛擬網路之需求，請參考：[建立自訂虛擬網路](../networking/virtual-network.md#建立自訂虛擬網路)。
2. 建立虛擬網路僅限由「**租戶管理者**」操作，因此若您身份為「**租戶使用者**」，請您聯繫所屬計畫之「**租戶管理者**」協助操作。
:::

* 在儲存資訊頁面，設定外掛資料磁碟 大小（GB）及類型（提供 4 種磁碟類型：HDD、SSD、HDD 加密、SSD 加密）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_184b6aaa90135456196d14a9d016539f.png)

:::caution
- [<ins>Auto Scaling</ins>](../networking/auto-scaling.md) 會依據所連結虛擬運算個體建立時的設定而新增個體，因此：
    - 若 Auto Scaling 自動新增的個體<ins>**需要**</ins>自動連結新資料磁碟，請您在 **[<ins>建立個體</ins>](./create-instances.md) 時**，一併建立資料磁碟。
    - 反之，若 Auto Scaling 自動新增個體<ins>**不需要**</ins>自動連結新資料磁碟，則請您在 **[<ins>建立個體</ins>](./create-instances.md) 後**，[<ins>另建資料磁碟</ins>](../storage/create-data-disks.md)，再[<ins>連結至個體</ins>](../storage/view-attach-delete-disks.md#連結至虛擬運算個體)。
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->


- 建立 Windows 登入密碼。接著點擊「**下一步：檢閱 + 建立>**」


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_008b4f0c17e1c516c26bbee22ed9224a.png)


:::caution
1. 為保護您的虛擬運算個體安全，密碼設定建議至少包含 **17 個字元**。
2. 此密碼為私人使用，TWCC 將不負責紀錄及管理。請務必妥善保存，若沒有密碼，將無法連線虛擬運算個體。
:::


* 檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，幾分鐘後，等個體狀態變成 **`Ready`** 後，再等候一些時間即可開始[連線](../connecting/windows/from-windows.md)使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a18e03678c8f5b6aab82049ae19cb021.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_16b71ba4b7fafa65b9a4d60f56bf975c.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

---

:::info
- 虛擬運算個體建立後，外掛**資料磁碟**需經初始化才能使用，步驟請參考：
    - [<ins>初始化磁碟 - Linux 個體</ins>](../../tutorials/data-disk-init-linux.md)
    - [<ins>初始化磁碟 - Windows 個體</ins>](../../tutorials/data-disk-init-windows.md)
- 同一用戶一分鐘內僅能執行各 10 次建立、刪除虛擬運算個體。
:::