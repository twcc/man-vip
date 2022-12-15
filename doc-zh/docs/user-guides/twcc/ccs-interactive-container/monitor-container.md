---
sidebar_position: 5
sidebar_label: '監控'
slug: '/user-guides/twcc/ccs-interactive-container/monitor-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-monitor-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-monitor-zh' 
---

# 監控容器

TWCC 入口網站共有兩處可檢視容器監控的資訊，可監控 CPU、GPU 使用量、記憶體、GPU 記憶體使用量：

1. 「**開發型容器詳細資料**」頁：可觀察一指定容器。
2. 「**開發型容器監控**」頁：可快速切換多個容器的監控資訊，並可檢視個人 GPU 資源總數、已使用的時間長度。

本篇說明第二種監控方式，第一種監控方式，請參考[監控容器](/docs/user-guides/twcc/ccs-interactive-container/containers/details/details-monitor-container.md)了解更多。

## 監控資訊

* 點選左側選單「**監控**」，並於右側「開發型容器名稱」選擇您欲監控之容器，並可快速切換容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_46e8d736c0eeee6c466075afe8e15fcf.png)

* 選擇完成下方即可查看容器服務提供的監控資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7098d0cc6182bc7b07efa4813e0c4c9f.png)

- 如同「**[開發型容器詳細資料](/docs/user-guides/twcc/ccs-interactive-container/containers/details/details-monitor-container.md)**」頁，可下載監控圖檔、觀察特定時長內之容器資源使用變化。
- 另外，還可以檢視**個人在特定時間內 GPU 累計的使用量、GPU 使用的時間**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fd2fc35427dc9a5918e0f501e4d3f2ae.png)

<br/>


:::info
「**租戶使用者**」僅能看到自己資源使用資訊，「**租戶管理員**」則可以看到計畫內所有使用者資源使用情形，以便控管整個專案的資源使用額度。
:::