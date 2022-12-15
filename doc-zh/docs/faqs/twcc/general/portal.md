---
sidebar_position: 2
title: 'TWCC 入口網站'
slug: '/faqs/twcc/general/portal'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-portal-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-portal-zh'
---

# FAQs | TWCC 入口網站

<details>

<summary> Q1. TWCC 支援哪些瀏覽器？</summary>

建議使用下列支援的瀏覽器，可享有最佳使用者體驗：

|  | Windows7 | Windows10+ | Mac OS 10+ |Ubuntu 16.04+(Linux) |
| -------- | -------- | -------- | -------- |-------- |
| Chrome 70+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     |
|Firefox 62+    | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    |
| Safari 12+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     |
| Edge 62+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | -     | -     |
| IE9/IE10     | <i class="fa fa-times" aria-hidden="true"></i>     | <i class="fa fa-times" aria-hidden="true"></i>     |  -    |  -      |

</details>

<details>

<summary> Q2. 為何登入後畫面空白？</summary>

在 TWCC 使用者網站更版後，若您的瀏覽器有紀錄快取，登入後將會呈現空白畫面，清除快取後即可正常登入。
</details>

<details>

<summary> Q3. 登入密碼連續輸入錯誤會有甚麼情況？</summary>

若密碼輸入錯誤連續達 3 次，將會有 15 分鐘無法進行登入，請您稍後再試。
</details>

<details>

<summary> Q4. 租戶管理員與一般租戶使用者身分，在使用 TWCC 各服務上有什麼區別？</summary>

兩種身分有功能使用權限的差別，各功能權限差異請參考[<ins>此文件</ins>](https://man.twcc.ai/@twsdocs/role-main-zh)。

</details>

<details>

<summary> Q5. 如何查詢計畫的 GPU 使用上限？ </summary>

請參考[<ins>此文件</ins>](/user-guides/twcc/general/manage-quota.md)中的「資源配額管理」。  

</details>

<details>

<summary> 

Q6. 為什麼創建資源時出現錯誤訊息:`[i-service] no quota to request resource.user`？

</summary>

當您在使用網站操作資源時 (例：創建或啟動虛擬運算個體、卸載磁碟或是使用容器服務...等)，出現以下錯誤訊息：

- `錯誤代碼：401(Unauthorized)`
- `錯誤訊息：[i-service] no quota to request resource.user`

表示您的計畫的使用額度不足，請先確認您的計畫母錢包與使用者的子錢包是否有足夠的額度進行使用。

</details>