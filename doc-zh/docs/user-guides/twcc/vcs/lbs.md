---
sidebar_position: 9
title: '負載平衡'
sidebar_label: '負載平衡'
slug: '/user-guides/twcc/vcs/lbs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-lbs-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-lbs-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5eaf2d8a3b112a4b8c49a853eaab60d8.png) 負載平衡

TWCC 所提供的負載平衡服務支援**應用程式負載平衡器 (HTTP 與 HTTPs with SSL) **和**網路負載平衡器 (TCP)**，當流量變大時，可以將流量分配到不同的虛擬運算個體上，以維持服務的靈活性、擴充能力及高可用性。


:::info
- 租戶管理員、租戶使用者對於負載平衡器使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twsdocs/role-main-zh)。
:::

<br/>


## 建立負載平衡器

* 由服務列表點選「**負載平衡**」進入「負載平衡器管理」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5491a3fa25058a188c04c8adacde0f79.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6434a60c23bf7870903b5c5315460041.png)


* 輸入負載平衡器設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * **名稱**：輸入負載平衡器的名稱。
    * **描述 (非必填)**：輸入負載平衡器的描述。
    * **類型**：選擇負載平衡器的類型為應用程式負載平衡器或網路負載平衡器。
    * **監聽器**
        * **協定**：
            * 應用程式負載平衡器可選擇處理 **HTTP** 或 **HTTPs with SSL** 協定的流量<sup>*</sup>。
            * 網路負載平衡器可處理 **TCP** 傳輸控制協定的流量。
        * **連接埠**：輸入負載平衡器要轉送的服務埠號。
        * **SSL 憑證**：選擇您已建立的 [SSL 憑證](#建立-ssl-憑證)，為您的負載平衡器建立加密的安全連線。
        * 點擊「**新增**」可設定多組協定或連接埠的監聽器。
    * **平衡方法**：選擇平衡流量至後端伺服器 (虛擬運算個體) 的方式，提供 **ROUND_ROBIN** (循環模式)、**LEAST_CONNECTION** (最少連線優先模式) 及 **SOURCE_IP** (依來源位址分配模式) 三種選項。
    * **虛擬網路**：選擇虛擬網路 (請選擇與後端伺服器 (虛擬運算個體) 相同之虛擬網路，才可組織分散負載之架構)。
    * **配置公用 IP**：可選擇不配置、自動配置浮動 IP，或配置靜態 IP<sup>**</sup>。使用細節請參考[彈性 IP](./elastic-ip.md)。

:::info
<sup>*</sup>如需使用 <b>HTTPS with SSL</b> 協定的監聽器，請先<a href="#建立-ssl-憑證"><ins>建立 SSL 憑證</ins></a>。<br/>
<sup>**</sup>建立完成後，皆可在「負載平衡詳細資料」頁，調整 IP 選擇。若有配置 IP，需先移除才可選擇其他 IP。
:::

![](https://i.imgur.com/i1HA3yY.png)



* 檢視負載平衡器的設定資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d84d97c603859f4f9ca3d11d3065e33d.png)

* 建立完成後，會回到負載平衡器列表，最新建立負載平衡器會出現在最上方，按一下該列表進入負載平衡器內容頁面，等到狀態變成 「**ACTIVE**」 後，才可繼續編輯。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ea35b095d53eea05bcf32ebaab32654.png)

:::info
負載平衡器建立好後，需將[<ins>虛擬運算個體連結至負載平衡器</ins>](#連結虛擬運算個體)，才能為您的服務發揮平衡流量的作用。
:::

<br/>


## 負載平衡器管理
* 在負載平衡器管理頁面，點選負載平衡器列表，進入負載平衡器詳細資料頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ea35b095d53eea05bcf32ebaab32654.png)

* 進入負載平衡器內容頁面可檢視基本資訊及網路的連接設定，或執行「**編輯**」、「**删除**」、「**重新整理**」、「**配置/移除**」 公用 IP 等功能。
* IP 相關欄位說明：
    * 公用 IP：將會依照您的選擇，配置浮動 IP 或靜態 IP，以供您對外服務使用。或選擇不配置 IP，您也可以重新配置浮動或靜態 IP。
    * 私有 IP：將會依照您所選擇的虛擬網路，自動配置一組同網段下的私有 IP。

:::info
若您的服務不需對外服務，僅供內部使用，建議您可以透過建立負載平衡器的私有 IP 來提供服務 (無需配置公用 IP) 並建立後端虛擬運算個體。因此，當您調整後端虛擬運算個體或監聽器時，無需擔心後端個體 IP 異動，而影響服務提供的問題。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6eac0db1cc9b7b456aed94d4c0a03963.png)

<br/>


### 更新負載平衡器憑證


:::info
目前僅提供更新 SSL 憑證，不提供移除 SSL 憑證功能。若需移除憑證，請您刪除負載平衡器，並重新建立。
:::

SSL 憑證有固定效期，您可以在憑證到期時，建立新憑證以更換過期的憑證：

* 進入負載平衡器詳細資訊頁面，點擊「**編輯**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c918132617bef4caa665199195d26def.png)


* 為已建立的 HTTPS with SSL 監聽器選取新建的憑證名稱，再點擊「**確認**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ea0f00d8bf254d326a0638c3ef8cf44.png)




:::info
- 若負載平衡器已安裝憑證，僅憑證擁有者可檢視該憑證名稱。
- 若您為租戶管理員或該負載平衡器建立者，則可點選 SSL 憑證下拉選單，選取並更換為您已建立好的憑證。若下拉選單顯示 `沒有資料`，則表示您無建立 SSL 憑證，請您先<ins>[建立 SSL 憑證](#SSL-憑證)</ins>。

:::



* 更新後返回負載平衡器詳細資訊頁面，即可看到 SSL 憑證名稱，生效後狀態會變成 「**Active**」，即代表已成功更新 SSL 憑證。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fbf16e97e47eacd0436f3b61977efc74.png)

<br/>

### 管理安全性群組

請參考[安全性群組](/user-guides/twcc/vcs/security-group.md)了解如何管理負載平衡器的安全性群組規則 (檢視、建立與刪除)。


## 連結虛擬運算個體

* 進入負載平衡器管理頁面，點選欲連接的負載平衡器，點擊 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**編輯**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f1da10111b8e5edba97741e3289c7a3.png)


:::tip
當項目列表太多時，可善用搜尋欄，輸入關鍵字後即可快速找到所欲設定的負載平衡器。
:::

* 亦可從負載平衡器內容頁面，點擊「**編輯**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d6d989100cf030c4fa5d6ced98ff9261.png)




* 在編輯負載平衡器視窗，按一下「**新增伺服器**」，新增虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87350e9d536973d9941fd9262dea46d8.png)




* 輸入欲連接的虛擬運算個體**私有 IP** 及**連接埠**，例如：`192.xxx.xxx.xx:80`。
  再按一下「**新增伺服器**」繼續設定第二台虛擬運算個體的私有 IP 及連接埠。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_43008c707a2be6009ebfb65d3b23d8d7.png)



* 所有的伺服器都加入後，再點擊「**確認**」按鈕即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3193e67d59e971e317f8ec9fe20a3d62.png)




* 回到負載平衡器內容頁面，網路區塊中會出現已連結的個體 IP 位址，等到狀態變成 「**ACTIVE**」 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bda331274fdaf5296290f21f2ac5cf0b.png)

<br/>


## SSL 憑證

負載平衡器部署 SSL 憑證服務，可建立網頁伺服器、網頁瀏覽器之間的安全加密連線，防止資料在傳輸過程中遭駭客竊取、竄改，幫助您建立與用戶之間的信任。

:::info
為符合資安要求，僅提供 TLS 1.2 傳輸層安全性協定。
:::

<br/>

### 建立 SSL 憑證

* 點選左側「**SSL 憑證**」，在「**SSL 憑證管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2b06046e5e360cf9c6b7aae828874e7c.png)


* 輸入 SSL 憑證的名稱、描述及 Base64 編碼資訊 (PKCS#12 格式)，完成後點擊「**下一步：檢閱 + 建立>**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94c16cf15abbd26e42e7ff6869f55dac.png)


:::info
目前 TWCC 僅支援建立 PKCS#12 格式的 SSL 憑證，請參考[<ins>轉換 SSL 憑證格式</ins>](../../tutorials/convert-ssl-certificate.md)。
:::

* 檢視 SSL 憑證的建立資訊，確定後點選「**建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ade1caffa03554d8eb14f031a453dfa5.png)


* 憑證建立後會出現在 SSL 憑證管理的列表中，當狀態顯示為「**Active**」即可在 HTTPS with SSL 的監聽器中選用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f77e7e47a585410d2df100933954846.png)

<br/>


### 管理 SSL 憑證

參考[建立 SSL 憑證](#建立-ssl-憑證)將憑證建立好後，即可在建立應用程式負載平衡器時選用，亦可用將新建的憑證新增或更新到既有的應用程式負載平衡器中。

:::info
目前 TWCC 僅支援建立 PKCS#12 格式的 SSL 憑證，請參考[<ins>轉換 SSL 憑證格式</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-zh)。
:::

<br/>


### 删除 SSL 憑證

* 進入 SSL 憑證管理頁面，勾選欲删除的 SSL 憑證列表，再點擊上方的  「**删除**」按鈕即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2fbf0b28ee7acdc4ac63c10fffe58438.png)

<br/>

:::info
為確保 SSL 憑證的安全性，僅建立者本人可以檢視與使用自己建立的 SSL 憑證。
:::