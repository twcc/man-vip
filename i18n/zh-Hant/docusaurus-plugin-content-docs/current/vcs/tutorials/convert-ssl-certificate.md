---
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howo-lb-convert-cert-zh' 
---

# 轉換 SSL 憑證格式


TWCC 負載平衡 (HTTPs with SSL) 服務的 SSL 憑證採用 Base64 編碼格式，此篇文章將幫助使用者將 SSL 憑證檔組合成 PKCS #12 及 Base64 編碼格式。

<br/>

## 準備工作

1. 請先準備好您組織所提供或購買的 SSL 憑證檔，例如：`server.key` (私密金鑰 Private Key)、`server.crt` (憑證檔)、`ca-chain.crt` (中繼憑證 Intermediate CA)
2. 在您本機端的作業系統中先安裝好 [OpenSSL](https://www.openssl.org/)，Windows 作業系統可至[此網站](https://slproweb.com/products/Win32OpenSSL.html)下載 Win64 OpenSSL。

<br/>


## 轉換憑證格式

### Linux 作業系統
1. 開啟終端機視窗 (Terminal)，輸入以下指令，將取得的 3 個憑證檔案組合成 PKCS #12 格式
    ```
    openssl pkcs12 -export -out server.p12 -inkey server.key -in server.crt -certfile ca.crt
    ```
    以下內容可按 `Enter` 鍵略過。

    ```
    Enter Export Password:
    Verifying - Enter Export Password:
    ```
    
2. 再將組合成的 `.p12` 檔案轉成 Base64 編碼
    ```
    base64 server.p12 | tr -d \\n 
    ```
3. 複製 Base64 編碼後的結果
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d2645cf8c4d128ffb9a4b5938adf56ef.png)

<br/>


### Windows 作業系統
1. 開啟 **Win64 OpenSSL Command Prompt**，輸入以下指令，將取得的 3 個憑證檔案組合成 PKCS #12 格式。

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b10eb699cd14e6c0a54080d74b428d4.png)

    ```
    openssl pkcs12 -export -out server.p12 -inkey server.key -in server.crt -certfile ca.crt
    ```
    以下內容可按 `Enter` 鍵略過。

    ```
    Enter Export Password:
    Verifying - Enter Export Password:
    ```

    
2. 將組合成的 `.p12` 檔案轉成 Base64 編碼。
    ```
    openssl base64 -in server.p12 -out server.txt
    ```
  
3. 開啟 Base64 編碼後的輸出檔案，複製`server.txt`文件內容
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_63a0eeb1b5ca73dcda4a085afd55581d.png)