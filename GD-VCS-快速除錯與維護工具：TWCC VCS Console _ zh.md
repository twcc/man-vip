---
tags: Guide, VCS, ZH
title: 快速除錯與維護工具：TWCC VCS Console | zh
GA:
---


# 快速除錯與維護工具：TWCC VCS Console

TWCC 虛擬運算服務 (VCS) 提供 Console，讓您無需在本地端安裝 Client 軟體、預先建立公用 IP，即可快速透過瀏覽器連線您的虛擬運算個體，進行除錯、設定與維護工作。連線過程皆以 TLS 1.2 加密，確保連線安全，保護您的機敏資訊。

## 開啟 Console 連線虛擬運算個體

### Step 1. 進入詳細資料頁

建立虛擬運算個體後，點選個體並進入「**虛擬運算個體詳細資料**」頁。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3031fbb3f8ee0e7d47dbcf843597bd4d.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c3291b77a27470e7f7ca6467a97dbb76.png)




### Step 2. 開啟 Console

- 頁面下拉至「**網路與連線**」區塊，點選「**連線**」，即可開啟 Console。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ddb410e35c8747b1da27a795c34f77f.png)



:::info

{%hackmd @docsharedstyle/note-zh %}

為避免資安疑慮，連結有效性設定為 10 分鐘 (已開啟之 Console 不受此限)，連結過期後請點選「**更新連結**」，取得新連結。

:::

### Step 3. 輸入連線資訊，完成連線

- **Linux 個體**：輸入帳號、密碼，即可連線進入個體。
 
:::info

{%hackmd @docsharedstyle/note-zh %}
 
 若未曾建立過登入帳號與密碼，請您先 **[<ins>SSH 連線個體</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh)** > **[<ins>建立帳號密碼</ins>](https://man.twcc.ai/@twccdocs/howto-vcs-create-usr-linux-zh)**，才可透過 Console 連線進入個體。帳密建立完後，若無對外連線需求可移除公用 IP，降低資源成本。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_18b708e6d75bed0f5a4c07976beaa0d1.png)


- **Windows 個體**：輸入登入密碼，即可連線進入個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d89ac98795067d2f8228480c0f689a21.png)



完成 Step 1 ~ Step 3，即可讓您在短時間內連線進入進虛擬運算個體，快速進行問題解決，加速系統維運的工作流程！


:::danger

{%hackmd @docsharedstyle/important-zh %}

在您的工作階段結束後，請務必於 Console 執行登出，以確保個體安全。
:::