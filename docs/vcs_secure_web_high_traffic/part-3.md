---
sidebar_position: 4
---
import TOCInline from '@theme/TOCInline';

# 第三部分：測試與移除非必要資源

<TOCInline toc={toc} />

### Step 1. 測試負載平衡與安全連線

- 等待負載平衡狀態更新 ACTIVE 後，請於您的本機開啟瀏覽器，在網址列輸入 **`https://<Domain_Name>`**
- 首次呈現個體 `lbssl01` 架設之網頁資訊 `(This is VCS lbssl01!)`，左上角會有 <i class="fa fa-lock" aria-hidden="true"></i> 顯示為安全加密的連線。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14d79598143f614ce40470553515a404.png)

- 再次將網頁重新整理，則呈現個體 `lbssl02` 架設之網頁資訊 `(This is VCS lbssl02!)`，負載平衡功能正常，將使用者循環導入不同的網頁伺服器，分散使用流量。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f4c62306dc712346ffce336d89bea329.png)

### Step 2. 移除非必要資源：公用 IP 

- 網站架構與內容架設完後，可移除虛擬運算個體非必要的公用 IP，待需執行網站維運時，再開啟即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_004c258576ac1ca3048313546e0bb339.png)

:::caution
教學結束！若有任何疑問或建議，歡迎您來信 <ins><a href = "isupport@twcc.ai">isupport@twcc.ai</a></ins>，謝謝！
:::
