---
tags: Guide, VCS, TW
title: 連線 Windows：本機為 macOS | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 連線 Windows 個體：本機為 macOS

完成[準備工作、取得連線資訊](https://man.twcc.ai/@TWSC/vcs-guide-connect-prerequisite-zh)後，請參考以下方式連線進入 Windows 個體(本機為 macOS) 。

:::info
{%hackmd @docsharedstyle/note-zh %}
請注意個體建立後，狀態轉為 **`Ready`**，**需等候一些時間才可遠端連線使用**。
:::

:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國若需連線 TWCC Windows 個體，請您與客服聯絡。
2. 若您修改網路卡設定，將會導致無法連線進入虛擬運算個體，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::

## 連線方式

- **Step 1.** 至 Mac App Store 下載 「**Microsoft Remote Desktop**」 應用程式並開啟，點擊「**Add Desktop**」，輸入此個體之公用 IP、Port，接著點擊「**Add**」
    
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 公用 IP 之後需加上 Port 號`: 9833`，例如：203.145.123.1`:9833`
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa227034ee0b79c47cfca35ddce2d099.png)

- **Step 2.** 雙點擊已建立的連結並輸入登入帳號與密碼，便可成功連結個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efdbd4140922207a512b84da8e697024.png)

:::warning

{%hackmd @docsharedstyle/tip-zh %}

帳號：administrator
密碼：使用者自行定義之個體密碼
:::


:::info
{%hackmd @docsharedstyle/note-zh %}

若需進行緊急除錯/系統維護工作，建議您透過 [<ins>Console 連線</ins>](https://man.twcc.ai/@preview-twccdocs/guide-vcs-debug-tool-console-zh)，可加速工作流程。
:::