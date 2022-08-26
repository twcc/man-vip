---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-host-secure-multi-web-one-instance-2-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-host-secure-multi-web-one-instance-2-zh'
---
import TOCInline from '@theme/TOCInline';

# 第二部分：為網站加裝 SSL 憑證

為避免網站在傳輸資料時被有心人士竊取，建議您參考以下步驟，為您的網站服務加裝 SSL 憑證，所有的資料都會在加密的狀態下進行安全傳輸。

### Step 1. 申請 Domain Name

:::info
如果您已申請 Domain name，可以略過此步驟。
:::

透過申請網站 Domain Name，使用者在網址列輸入好記的 Domain Name (而非生硬的 IP 位址)，就可以快速開始使用您的網頁服務！

您可以依需求選擇付費或免費網站申請 Domain Name，範例採用 [No-IP](https://www.noip.com/) 做為範例網站，申請免費 Domain Name：
1. 註冊 [No-IP](https://www.noip.com/) 帳號
2. 登入後，左側選單 「**My Services**」 > 「**DNS Records**」 > 上方選單 「**Create HostName**」
3. 設定 Hostname (Domain Name)：<span>twccservice1.ddns.net</span>
4. 設定 IP Address：輸入**虛擬運算個體公用IP**
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96ab3d56d9eaf55adcc742eea7b63a3e.png)
5. 點選下方 「**Add Hostname**」即完成申請
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26834d5ad31dcb5ced2506d7b26d047b.png)



- 可使用 [NsLookup 工具](https://centralops.net/co/NsLookup.aspx)確認可查詢到該主機 (負載平衡器)
    1. 輸入 *Domain Name*
    2. 點選 「**go**」
    3. 確認可查詢，下方將顯示查詢資訊；Domain Name之 IP 位址

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41a439753547e7ef14f9eba29c34da65.png)



- **重複以上步驟，並且設定 Hostname (Domain Name)：**<span>```twccservice2.ddns.net```</span>

### Step 2. 建立網站的 SSL 憑證
- 請安裝 [Certbot](https://certbot.eff.org/)，作為建立網站 SSL 憑證的工具。
```
apt install certbot python3-certbot-nginx
```
- 設定 service1 網域名稱 
```
certbot --nginx -d <Domain_Name>
```
:::info
1. ```<Domain_Name>```的部分請填入剛剛所申請的網域名稱

2. 以下輸入 e-mail 接收緊急或安全性通知<div style={{height:5+'px'}}></div>
![image](https://user-images.githubusercontent.com/109254397/184550510-5e320000-861b-47a2-966c-9f3f5a9d95d5.png)
![image](https://user-images.githubusercontent.com/109254397/184550522-4dfcfbd6-9930-4b29-8f00-12578ac5de85.png)

3. 以下內容請選 `2`，直接將 HTTP 連線導向 HTTPS 並刪除 HTTP 連線：<div style={{height:5+'px'}}></div>
![image](https://user-images.githubusercontent.com/109254397/184550531-495f390d-17a2-4e6b-92a3-9557a2c47e61.png)

:::
- 進入 Nginx 設定檔，編輯 service2 網站對應的根目錄位置
```
vim /etc/nginx/sites-available/default 
```

- 按下 <kbd>i</kbd> 進入編輯模式，並將程式碼中的``` root /var/www/html/service1 ``` 修改為``` root /var/www/html/service2 ```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e3675fd327645441a60917d853f6388f.png)


- 更改完成後，再按下鍵盤 <kbd>Esc</kbd> 跳離編輯模式，並輸入 `:wq!` 與按下 <kbd>Enter</kbd>，存檔離開。
- **請重複 Step 2 的步驟，為 service2 網站建立 SSL 憑證**
:::info
請忽略安裝 certbot，直接從設定網域名稱開始進行設定。
:::