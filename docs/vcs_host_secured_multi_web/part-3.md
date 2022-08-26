---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-host-secure-multi-web-one-instance-3-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-host-secure-multi-web-one-instance-3-zh'
---
import TOCInline from '@theme/TOCInline';

# 第三部分：驗證網域 & 安全連線

驗證建立的 2 個網站服務屬於同網域，並確認網站可開啟並使用安全加密連線。

### Step 1. 驗證兩網站屬於同網域

- 開啟本機端的命令提示字元，並且分別 ping 兩個網域名稱確認是否屬於同一個網域 (IP 位址相同)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b9d2db87d47d04ee1f1cc55f8a719da1.png)

- 由上圖得知，ping 的兩個網域名稱 (紅線處)，確認屬於同一個網域 (橘框處)

### Step 2. 驗證 SSL 安全連線
- 開啟瀏覽器輸入網域名稱：**`https://<Domain_Name>/`** 或是 **`<Domain_Name>`**
   
  1. 輸入 Service1 網域名稱，左上角會有 <i class="fa fa-lock" aria-hidden="true"></i> 顯示為安全加密的連線。
   
   ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2117155564ebcaaec4f84388f118e303.png)


  2.  輸入 Service2 網域名稱，左上角會有 <i class="fa fa-lock" aria-hidden="true"></i> 顯示為安全加密的連線。
   
   ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_71a27bbe14fd33fcb544704f3b7d0307.png)

:::caution
<i class="fa fa-envelope" aria-hidden="true"></i> 教學結束！若有任何疑問或建議，歡迎您來信 isupport@twcc.ai，謝謝！
:::