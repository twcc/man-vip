---
sidebar_position: 2
title: '高速檔案系統 (HFS)'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-hfs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-hfs-zh'
---

# TWCC FAQs | 高速檔案系統 (HFS)

<details>

<summary> Q1. 高速檔案系統空間已滿，將部分資料刪除，為何容量還是一樣沒變化？</summary>

- 在容器或台灣杉二號環境中，執行以下指令，即可檢視是哪些檔案佔據了空間：
    ```
    du –sh 資料夾名稱
    ```
 
- 計算過程產生的暫存檔，也有可能是造成您空間佔滿的原因。暫存檔會存放在以下兩個隱藏目錄：
    - /home/主機帳號/.cache/  
    - /home/主機帳號/.local/ 
  
    可切換至以上兩個目錄，並執行以下指令查看目錄下之檔案：  
    ```
    ls -la
    ```  
    
</details>

<details>

<summary> Q2. 我使用 SFTP 的方式連入 xdata1.twcc.ai 資料傳輸節點，為何無法登入？</summary>

請先確認您登入憑證使用的是 SSH 私密金鑰，而非您的主機密碼。若確認登入憑證無誤但登入仍有問題，請洽詢客服人員。 

</details>

<details>

<summary> Q3. 如何將檔案上傳到高速檔案系統？</summary>

請先利用容器環境取得金鑰，再利用 SFTP 軟體 (例：Filezilla) 連線到資料傳輸節點(xdata1.twcc.ai)，請參考[此文件](/docs/hfs/user-guides/connect-data-transfer-node.md)。

</details>

<details>

<summary> Q4. 如何將檔案分享給其他用戶？</summary>

請參考[此文件](/docs/hfs/tutorials/share-files-between-user-accounts.md)，透過上傳至 TWCC COS 或開放 HFS 檔案權限的方式分享。

</details>

<details>

<summary> Q5. 如何增購高速檔案系統空間？</summary>

請參考[此文件](/docs/hfs/overview.md)中「**查看容量**」及「**HFS空間管理政策**」兩個段落，即可得知價格以及增購空間的方法。

</details>

<details>

<summary> Q6. 請問高速檔案系統的 IP 位置為何？</summary>

203.145.219.101

</details>

<details>

<summary> Q7. 高速檔案系統畫面顯示快用滿，要如何知道是哪些檔案佔據儲存空間？</summary>

- 在容器或台灣杉二號環境中，執行以下指令，即可檢視是哪些檔案佔據了空間：
    ```
    du –sh 資料夾名稱
    ```
 
- 計算過程產生的暫存檔，也有可能是造成您空間佔滿的原因。暫存檔會存放在以下兩個隱藏目錄：
    - /home/主機帳號/.cache/  
    - /home/主機帳號/.local/ 
  
    可切換至以上兩個目錄，並執行以下指令查看目錄下之檔案：  
    ```
    ls -la
    ```  

</details>

<details>

<summary> Q8. 增購高速檔案系統空間後多久生效？</summary>

- 在[會員中心 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](/docs/member/user-guides/member-key-quota/go-to-member-center.md) 完成增購空間步驟後，稍等 15 分鐘後即可使用。

</details>

<details>

<summary> Q9. 已刪除高速檔案系統內資料，為何在儲存與資源用量頁面中的已使用容量並未減少？</summary>

頁面中所顯示的已使用容量需一段時間進行更新，請您在刪除檔案約 1-2 小時後，再至頁面查看。

</details>

<details>

<summary> Q10. Jupyter Notebook 刪除檔案後沒有立即釋放空間？</summary>

- 在 Jupyter Notebook UI 介面上刪除檔案，檔案不會立即刪除，而會移至 `/home/<主機帳號>/.local/share/Trash` 下。
- 若需立即刪除檔案並釋放空間，則需在 Jupyter Terminal 執行 `rm -r /home/<主機帳號>/.local/share/Trash`，或是透過[其他方式](/docs/hfs/user-guides/connect-data-transfer-node.md)連線 HFS 並刪除檔案，即可立即釋放空間。

</details>