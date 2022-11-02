---
sidebar_position: 5
title: 'Console-除錯與維護工具'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-debug-tool-console-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-debug-tool-console-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 快速除錯與維護工具：TWCC VCS Console

TWCC 虛擬運算服務 (VCS) 提供 Console，讓您無需在本地端安裝 Client 軟體、預先建立公用 IP，即可快速透過瀏覽器連線您的虛擬運算個體，進行除錯、設定與維護工作。連線過程皆以 TLS 1.2 加密，確保連線安全，保護您的機敏資訊。

<br/>

## 開啟 Console 連線虛擬運算個體

### Step 1. 進入詳細資料頁

建立虛擬運算個體後，點選個體並進入「**虛擬運算個體詳細資料**」頁。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_37df4073ab3ab26c8eaadc791e4dc73a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_536acdd31b059748dd7befc1f6f62dac.png)

:::info
首次使用 Console，請您先使用金鑰透過 **[<ins>SSH 連線個體</ins>](../connecting/linux/from-windows.md)** 並使用以下指令設定登入密碼，後續才可使用帳密，透過 Console 連線進入個體。


```bash
sudo passwd ubuntu  # 以 Ububtu 為範例設定登入密碼
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8dc2923f95519849ab536fc51f9a3e7.png)

帳密建立完後，若無對外連線需求可移除公用 IP，降低資源成本。
:::

:::caution
為保護您的虛擬運算個體安全，Ubuntu、CentOS 的登入密碼請設定至少包含 12 個字元，並混合英文大小寫字母、數字及特殊符號。
:::

<br/>


### Step 2. 開啟 Console

- 頁面下拉至「**網路與連線**」區塊，點選「**連線**」，即可開啟 Console。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe847f6778f1f07596398fb7a49539fc.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_295728cc363de313ba4fdd476a2d03d8.png)




:::caution
- 請務必於工作階段結束後、關閉 Console 之前，登出作業系統，以確保個體安全。
- 為避免資安疑慮，連線有效性設定為 10 分鐘 (已開啟之 Console 不受此限)，連線過期後請點選「**更新連結**」，取得新連線。
:::

<br/>


### Step 3. 輸入連線資訊，完成連線

- **Linux 個體**：輸入帳號 (`ubuntu` 或 `centos`)、密碼，即可連線進入個體。
 
:::info
若 Console 視窗無法輸入內容，請先點擊視窗標題列，再點擊指令列，即可輸入。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad36eed070250abf714112818f6bcea0.gif)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8522546062af0abbc44e3a9aa49caf90.png)



- **Windows 個體**：輸入登入密碼，即可連線進入個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d89ac98795067d2f8228480c0f689a21.png)



完成 Step 1 ~ Step 3，即可讓您在短時間內連線進入進虛擬運算個體，快速進行問題解決，加速系統維運的工作流程！

<br/>


:::caution
再次提醒您請務必於工作階段結束後、關閉 Console 之前，登出作業系統，以確保個體安全。
:::