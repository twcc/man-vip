---
sidebar_position: 3
sidebar_label: '容器 DNS'
slug: '/user-guides/twcc/ccs-interactive-container/dns'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-dns-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-dns-zh' 
---

# 設定容器 DNS 伺服器

為周全保護容器安全，TWCC 容器僅提供使用此預設的內部 DNS 伺服器：**10.96.0.10**
系統會再將 10.96.0.10 導向至以下三個外部上游 DNS 伺服器 (upstream DNS servers) 執行解析工作：

- 101.101.101.101 (TWNIC)
- 1.1.1.1 (Cloudflare)
- 8.8.8.8 (Google)

<br/>

:::info
如有導向其它上游 DNS 伺服器的需求，請洽技術支援服務： isupport@twcc.ai
:::