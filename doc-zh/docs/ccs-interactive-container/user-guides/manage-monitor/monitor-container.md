---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-monitor-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-monitor-zh' 
---

# 監控容器

TWCC 入口網站共有兩處可檢視容器監控的資訊，可監控 CPU、GPU 使用量、記憶體、GPU 記憶體使用量：

- 「**開發型容器詳細資料**」頁：可觀察一指定容器。
- 「**開發型容器監控**」頁：可快速切換多個容器的監控資訊，並可檢視個人 GPU 資源總數、已使用的時間長度。

<br/>

## 「開發型容器詳細資料」頁

* 在「**開發型容器管理**」頁選擇一指定的容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_134b3485e345e6ee03b9d2da3c14d913.png)


* 並於「**開發型容器詳細資料**」頁內選擇「**監控**」頁籤，即可查看容器監控資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4f7d13951dd33454d0b307c972825cd.png)

- 游標移至任一監控圖上，可點選 <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> 圖示下載監控圖檔 (`.png`) 留存。
- 右側選單則可選擇時間，可觀察特定時長內之容器資源使用變化。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_faf724b6d243627dbfd283c38365cc36.png)

:::info
特定時長可選擇1小時、6小時、12小時、1天、7天、30天。
:::

<br/>

## 「開發型容器監控」頁

* 點選左側選單「**監控**」，並於右側「開發型容器名稱」選擇您欲監控之容器，並可快速切換容器。
* 選擇完成下方即可查看容器服務提供的監控資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d5cb64f9aea20f487a9801640660aa3.png)

- 如同「**開發型容器詳細資料**」頁，可下載監控圖檔、觀察特定時長內之容器資源使用變化。另外，還可以檢視**個人在特定時間內 GPU 累計的使用量、GPU 使用的時間**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_093bf31cdefb02a68af4b9be2fbabaf3.png)

<br/>


:::info
「**租戶使用者**」僅能看到自己資源使用資訊，「**租戶管理員**」則可以看到計畫內所有使用者資源使用情形，以便控管整個專案的資源使用額度。
:::