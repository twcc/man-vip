---
tags: Guide, VCS, VPN, TW
title: VPN (Beta) | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/beta-testing-zh %}

:arrow_backward:  [回到進入方式說明](https://man.twcc.ai/@preview-twccdocs/vpnentry)

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9bf6c4925efee137a33e4218349c813.png)  TWCC VPN<sup>`Beta`</sup>


TWCC VPN 虛擬私有網路服務支援 IPsec/IKE 安全通訊協議，讓租戶建立 Site-to-Site VPN，以確保兩個站點之間安全地傳輸數據。

:::info
{%hackmd @docsharedstyle/note-zh %}

- 此功能需租戶管理員權限才可使用，建立 VPN 連線之前需先建立 IKE 規則 和 IPSec 規則。
- 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh)。
- TWCC CLI 目前不支援此服務。
:::


## 建立 IKE 規則 

* 點選左側「**IKE 規則**」，在「**IKE Policy 規則**」管理頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c96299a1047cabcdde3b7735e389a9d.png)


* 在「**建立 IKE 規則** 」頁面，系統會產生一組預設的設定，請依實際需求修改參數值。設定好後點擊「**下一步：檢閱＋建立**」。
    * 名稱：規則的名稱。
    * 認證演算法：選擇 SHA-1、SHA-256、SHA-384、SHA-512 認證方式。
    * 加密演算法：選擇 3DES、AES-128、AES-192、AES-256加密方式。
    * IKE 版本：選擇 IKE 版本為 v1 或 v2。
    * 金鑰使用時間 (秒)：輸入金鑰有效時間，單位為秒數。
    * 完全正向保密 (PFS)：完全正向保密 (Perfect Forward Secrecy, PFS）可選擇 Group 2、Group 5、Group 14。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9f572fc078dc67a250121539040c1968.png)


* 檢視欲建立的 IKE 規則 資訊並點擊「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_392319d5e6f52ae97527a6bd4f004c4b.png)


* 新建立的 IKE 規則 會出現在列表的最上方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7bbfa4b167de59035d1203b419c2284e.png)


## 建立 IPSec 規則 

* 點選左側「**IPSec 規則**」，在「IPSec 規則管理」頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_704417d79d7d5c8a804069556fa51947.png)



* 在「**建立 IPSec 規則** 」頁面，系統會產生一組預設的設定，請依實際需求修改參數值。設定好後點擊「**下一步：檢閱＋建立**」。
    * 名稱：Policy 的名稱。
    * 認證演算法：選擇 SHA-1、SHA-256、SHA-384、SHA-512 認證方式。
    * 加密演算法：加密方式，選擇 3DES、AES-128、AES-192、AES-256 演算法。
    * IP 安全協定：傳輸模式，選擇 ESP、AH、AH-ESP。
    * 封裝傳送模式：選擇 Tunnel 隧道模式 或 Transport 傳輸模式。  
    * 金鑰使用時間 (秒)：金鑰的有效時間，單位為秒數。
    * 完全正向保密 (PFS)：完全正向保密 (Perfect Forward Secrecy, PFS）可選擇 Group 2、Group 5、Group 14 加強安全性。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc9d44d891f6e680baae600a2895e91b.png)




* 檢視欲建立的 IPSec 規則 資訊並點擊「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0e2ff89f43b8c05e7838c58b16254e8b.png)



* 新建立的 IPSec 規則 會出現在列表的最上方。



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af04eed4cd9b7a16d6bb5bf714930744.png)



* 建立好 IKE 規則 及 IPSec 規則 後，請至 VPN 管理頁建立服務。

## 建立 VPN 連線

* 進入「**VPN**」服務，在「**VPN 管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bd0e23ad73cf391e1cf8eeac1e5b9b89.png)


* 在「建立 VPN」頁面設定 VPN 名稱、私有網路並選擇 IKE 規則 和 IPSec 規則。選擇好後點擊「**下一步：檢閱 + 建立>**」。

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 建立 VPN 之前需先建立 IKE 規則 和 IPSec 規則。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8bcebf2d7aed3d26240596503d74e8d5.png)

* 檢視欲建立的 VPN 後點擊「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_543c4db1b5abe5b617b7b874c842926b.png)


* 建立後的 VPN 會出現在列表的最上方，此時的狀態會顯示「**PENDDING_CREATE**」，點擊該列表進入「**VPN 詳細資料**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa5f0a77f53131a10274232e41ccfede.png)


## 建立連線設定

* 進入「VPN 詳細資料」頁面後，再按一下左上方「連線」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f045a4c637b716ac131057536eb4999.png)



* 在建立連線頁面，輸入端點互連位址、遠端互連網段及預先共用金鑰後，點擊「**連線**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4c680f91334a8078cbb96892be1fa4a6.png)



* VPN 服務連線設定好後，狀態顯示成「**ACTIVE**」，VPN 連線即建立完成，您可以開始透過此連線與遠端進行訊息保密的安全數據傳輸。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d1582024f163b7752684de14d428034.png)