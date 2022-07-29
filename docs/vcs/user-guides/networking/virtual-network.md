---
sidebar_position: 2
title: '虛擬網路'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ecced96f77b12664677d4cef97a3cc.png) 虛擬網路

虛擬網路服務主要是為虛擬運算個體提供可自訂的虛擬網路功能。本功能完整存取權限提供給租戶管理員使用，租戶使用者僅具讀取權限。

:::info
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::

## 建立預設虛擬網路

首次使用 TWCC 所提供的虛擬運算服務，必須先在虛擬網路服務先建立**預設虛擬網路 (Default network)**，才可以開始使用虛擬運算服務。建立步驟請參考：[<ins>HowTo：建立預設虛擬網路</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-zh)。後續若有使用其它網段的需求，可參考下方[<ins>建立自訂虛擬網路</ins>](#建立自訂虛擬網路)。

## 建立自訂虛擬網路

:::caution
1. CIDR 不可與其他虛擬網段重複。
2. CIDR 請使用 RFC1918 定義的 private network 網段範圍，避免產生連線錯誤：
    - 10.0.0.0/8
    - 172.16.0.0/12
<!-- - 192.168.0.0/16 -->
3. 192.168.1.0/24 目前系統保留中，請勿使用。
:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 由服務列表點選進入「**虛擬網路**」服務，在「**虛擬網路管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e953e190a41610e858a396e2f8431f7b.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f2bdcd4f74eb97be693e89979651c399.png)


* 輸入虛擬網路設定的資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * 名稱：即網路名稱，不可重覆，名稱建立後不可再更改。
    * CIDR：無類別域間路由 (Classless Inter-Domain Routing, CIDR)，指定虛擬網路的位址範圍。
    * 閘道：給定一個預設閘道。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ba2740597d609be0e577f2844f91134.png)


* 檢視虛擬網路的設定及計畫額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ffcca6dd6ebe84f2576b5b8ce0c8f9.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br/>


- 以網段 `172.16.0.0/24` 及閘道 `172.16.0.254` 建立虛擬網路
```bash
twccli mk vnet -cidr 172.16.0.0/24 -gw 172.16.0.254
```

</details>



## 管理虛擬網路

- ### 檢視虛擬網路

:::caution
1. 為周全保護虛擬運算個體安全，虛擬網路僅限使用下列預設的三個域名伺服器 (DNS)，如有使用其它 DNS 伺服器的需求，請洽技術諮詢服務(isupport@twcc.ai)：
    - 101.101.101.101 (TWNIC)
    - 1.1.1.1 (Cloudflare)
    - 8.8.8.8 (Google)
2. 虛擬運算個體網路卡設定經修改後，將會導致無法連線，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 最新建立虛擬網路會出現在虛擬網路管理頁面的最上方，等待狀態變成 「**ACTIVE**」 後即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_981b402f473e4f54ec791c45fc9b9b48.png)


* 點選列表上的虛擬網路則可檢視其詳細資訊

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ca00fdeabd4b31f089d50f8ac9764ec.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br/>


- 檢視所有虛擬網路
```bash
twccli ls vnet
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22c4fb8cc6f57701ebd4ea204cf24dd3.png)

- 檢視特定虛擬網路 ID 為 **`261894`** 的詳細資訊
```bash
twccli ls vnet -id 261894
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e50cd7936738b7be4055b0212adf4d21.png)

</details>



- ### 刪除虛擬網路

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 在「**虛擬網路管理**」頁面 > 勾選虛擬網路 > 點擊上方「**刪除**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f8d17969e2b9e4677e39667dd4f6ff68.png)


- 或點選虛擬網路旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**刪除**」。
- 或進入「**虛擬網路詳細資料**」頁 > 點選上方「**刪除**」。


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br/>


- 刪除 ID 為 **`261894`** 的虛擬網路
```bash
twccli rm vnet -id 261894
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c4cfd1922b2c8d9e112138bd119b29d.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f0d90990195ff56580020b195dd744be.png)

</details>
