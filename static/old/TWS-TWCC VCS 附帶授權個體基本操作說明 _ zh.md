---
title: VCS 附帶授權個體基本操作說明 | zh
tags: Guide, VCS, ZH
GA:
---

{%hackmd @docsharedstyle/default %}

# TWCC VCS 附帶授權個體基本操作說明：Windows Server / SQL Server

TWS 提供您 TWCC 附帶授權的虛擬運算加值服務，無需自行購買、啟用授權，連線後即可立即使用：

- ### 附帶授權的 Windows Server (2016)
> 提供內含授權的 Windows Server 個體，具多項新功能，包含增強 Nano Server 功能性、更完整的安全防護，以及更簡易及強化的 IT 管理能力。
- ### 附帶授權的 Windows Server (2016) +  Microfost SQL Server (2016)
> 提供內含授權的 Windows Server 並可執行 Microsoft SQL Server 關聯式資料庫。具備易上手的介面操作工具，可智慧整合、管理您的海量資料，並視覺化呈現數據。

## 定價

定價資訊，請參考 [TWS 產品價格](https://man.twcc.ai/@twsdocs/pricing-zh)。

{%hackmd @twccdocs/chunk-before-you-begin-zh %}



## 如何建立附帶授權的虛擬運算個體？

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

建立步驟請參考 [建立 Windows 虛擬運算個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh#%E5%BB%BA%E7%AB%8B-Windows-%E5%80%8B%E9%AB%94)，僅選擇映像檔的步驟需：

- **附帶授權的 Windows Server (2016)**：請選擇 **`Windows Server with License`**

> ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_285968781384c82250b9daa99b8c5bb3.png)


- **附帶授權的 Windows Server +  Microfost SQL Server (2016)**：請選擇 **`SQL Server with License`**

> ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1cdbfe2aa34439828937722b4e1c6c95.png)

依序完成步驟即可快速建立附帶授權的個體。


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI </b>(TBD)</summary>

<br>

目前 TWCC CLI 尚未支援建立 Windows 個體，請使用 TWCC 入口網站建立。

</details>

## 如何遠端連線？

Step 1. 完成 [準備工作](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-prerequisite-zh)，建立公用 IP，並取得連線資訊。

Step 2. 使用 [遠端桌面連線](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-windows-from-windows-zh)，連線進入個體。

## 確認 SQL Server 版本

SQL Server 個體連線進入後，請打開 <i class="fa fa-windows" aria-hidden="true"></i>，即可檢視已為您預載完成的 Microsoft SQL Server 2016。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f33ed3c88ede57b37df1a796479b5517.png)

## 最佳實務案例

進階 SQL Server 資料庫最佳實務案例說明 (資料匯入、備份還原、效能優化)，請敬請期待！