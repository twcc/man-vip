---
title: 設定容器 DNS 伺服器 | zh
tags: Guide, CCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 設定容器 DNS 伺服器

為周全保護容器安全，TWCC 容器僅提供使用此預設的內部 DNS 伺服器：**10.96.0.10**
系統會再將 10.96.0.10 導向至以下三個外部上游 DNS 伺服器 (upstream DNS servers) 執行解析工作： 

- 101.101.101.101 (TWNIC)
- 1.1.1.1 (Cloudflare)
- 8.8.8.8 (Google)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 如有導向其它上游 DNS 伺服器的需求，請洽技術支援服務： isupport@twcc.ai
:::