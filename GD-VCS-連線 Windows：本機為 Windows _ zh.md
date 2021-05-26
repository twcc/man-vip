---
tags: Guide, VCS, TW
title: 連線 Windows：本機為 Windows | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 連線 Windows 個體：本機為 Windows

完成[準備工作、取得連線資訊](https://man.twcc.ai/@TWSC/vcs-guide-connect-prerequisite-zh)後，請參考以下方式連線進入 Windows 個體 (本機為 Windows) 。

:::info
{%hackmd @docsharedstyle/note-zh %}
請注意個體的狀態需為 **`Ready`** 才可連線使用。
:::

:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國若需連線 TWCC Windows 個體，請您與客服聯絡。
2. 若您修改網路卡設定，將會導致無法連線進入虛擬運算個體，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::

## 連線方式


- **Step 1.** 開啟 「**遠端桌面連線**」程式 (Windows 系統已有內建，或至 Microsoft 官方網頁搜尋下載)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_466c89194d84a1226aa9ab41b5eeccda.png)


- **Step 2.** 輸入此個體之公用 IP、Port 與使用者名稱，接著點擊「**連線**」
    
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 公用 IP 之後需加上 Port 號`: 9833`，例如：203.145.123.1`:9833`
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aef2d446246e4303d61002b597569081.png)


- **Step 3.** 輸入密碼即連線成功

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f92a67b5fd65e5ea4b52d6d54fc6d34b.png)

:::info
帳號：administrator
密碼：使用者自行定義之個體密碼
:::