---
tags: Guide, VCS, ZH
title: 快速除錯與維護工具：TWCC VCS Console | zh
GA:
---


# 快速除錯與維護工具：TWCC VCS Console

TWCC 虛擬運算服務 (VCS) 提供 Console，讓您無需在本地端安裝 client 軟體、預先建立公用 IP，即可快速透過瀏覽器連線您的虛擬運算個體，進行除錯、設定與維護工作。連線過程皆以 TLS 1.2 加密，確保連線安全，保護您的機敏資訊。

## 開啟 Console 連線虛擬運算個體

### Step 1. 進入詳細資料頁

建立虛擬運算個體後，點選個體並進入「**虛擬運算個體詳細資料**」頁。

![](https://i.imgur.com/GSy9zRx.png)



### Step 2. 開啟 Console

- 頁面下拉至「**網路與連線**」區塊，點選「**連線**」，即可開啟 Console。

![](https://i.imgur.com/J1JVrt3.png)


:::info

為避免資安疑慮，連結有效性設定為 10 分鐘 (已開啟之 Console 不受此限)，連結過期後請點選「**更新連結**」，取得新連結。

:::

### Step 3. 輸入密碼即可成功連線

- **Linux 個體**：輸入帳號、密碼，即可連線進入個體。
 
:::info
 
若未曾建立過帳號密碼，需請您先 [<ins>建立帳號密碼</ins>](https://man.twcc.ai/@twccdocs/howto-vcs-create-usr-linux-zh)，才可透過 Console 連線進入個體。
:::

![](https://i.imgur.com/xgDrsF0.png)

- **Windows 個體**：點選右上角「**Send CtrlAltDel**」> 輸入帳密，即可連線進入個體。

![](https://i.imgur.com/xGoxQF7.jpg)






