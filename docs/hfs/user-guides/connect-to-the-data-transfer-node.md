---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-hfs-connect-to-data-transfer-node-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-hfs-connect-to-data-transfer-node-zh'
---

# 連線檔案傳輸節點

您可以透過以下使用「**金鑰**」或「**主機密碼 + OTP 認證碼**」的方式連線傳輸節點。

連線檔案傳輸節點，進入 HFS 空間後，您可將檔案透過 SFTP 協定上傳至 HFS 空間中，亦可將檔案從 HFS 下載到本地端。

:::info
TWCC 也提供用戶以 `rsync` 指令傳輸檔案，傳輸大量檔案使用體驗佳。但由於系統無提供 `rsync` 之傳輸紀錄，若有資安疑慮恐無法追查。若您同意承擔使用風險並授權 TWCC 開啟 `rsync` 功能，請您向 <ins><a href = "mailto: isupport@twcc.ai">isupport@twcc.ai</a></ins> 提出需求。


:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. 使用金鑰連線
</b></summary>


以下以 Windows 作業系統 + [<ins>FileZilla</ins>](https://filezilla-project.org) 為例 (macOS 也是類似的操作步驟)

<b>Step 1. 連線運算服務</b> 

- TWCC 開發型容器服務的使用者，可透過 Jupyter Notebook 或 SSH 連線容器
- TWCC 任務型容器、高速運算任務、台灣杉二號 (命令列介面)的使用者，可透過 台灣杉二號 (命令列介面) 登入節點

:::info
連線方法參見：
- [<ins>開發型容器</ins>](https://www.twcc.ai/doc?page=container&euqinu=true#%E9%80%A3%E7%B7%9A%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F) - 連線使用方式
- [<ins>台灣杉二號 (命令列介面)</ins>](https://man.twcc.ai/s/B15nJXe-B#2-%E7%99%BB%E5%85%A5%E3%80%8C%E7%99%BB%E5%85%A5%E7%AF%80%E9%BB%9E%E3%80%8D) - 連線「登入節點」
:::

<b>Step 2. 儲存 SSH 私密金鑰至本機</b>

- 登入後，輸入以下指令讀取 SSH 私密金鑰

```bash
cat ~/.ssh/id_dsa
```
- 以登入 TWCC 開發型容器 Jupyter -> Terminal 為例

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ce21b053250616fd41773cfbc967439.png)


- 儲存 SSH 私密金鑰到本機，複製紅色部分全部，開啟記事本貼上 (需包含頭尾資訊)

:::info
macOS：可使用「文字編輯」軟體
:::
   
```bash
-----BEGIN DSA PRIVATE KEY----- (這行也需複製)
...
...
-----END DSA PRIVATE KEY----- (這行也需複製)
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e417c2dcdb8ba67f5e68fdefb344b739.png)


- 將記事本存檔：檔案位置與檔案名稱不限，副檔名需為 **`.ppk`**，存檔類型請改為 **`所有檔案`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_688acdfd3df164086cbc28988fcbfabb.png)



<b>Step 3. 以 FileZilla + 金鑰登入「資料傳輸節點」</b>

- 點選左上角站台管理員、左下方新增站台，跳出如下圖的選單
- 輸入及選擇，參考下圖

```
協定： SFTP
主機： xdata1.twcc.ai

登入型式： 金鑰檔案
使用者 ： 主機帳號
金鑰檔案： 金鑰檔案的路徑
```
- 點選「連線」，即可登入成功


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eefc4f0425480f57ea6e4b0585968cb1.png)



</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>2. 使用主機密碼 + OTP 連線</b></summary>


除上述使用金鑰的登入方式，HFS 也可使用 **密碼 + [OTP <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC)** 之方式登入，請參考下方說明：

<b>Step 1. 下載支援 SFTP 連線並可兩段式驗證的軟體</b>

請下載安裝支援 SFTP 連線並可兩段式驗證的軟體 (例：[Filezilla](https://filezilla-project.org/)、[Cyberduck](https://cyberduck.io/download/)、[WinSCP](https://winscp.net/eng/download.php)...等)。

<b>Step 2. 連線檔案傳輸節點</b>

以下以 [<ins>Filezilla</ins>](https://filezilla-project.org/) 為操作示範，開啟軟體後：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1224ee0b5e7b5ec0f8733c15c8f67bbb.png)


1. 開啟左上「**站台管理員**」
2. 協定：選擇 「**SFTP- SSH File Transfer Protocol**」
3. 主機：輸入 「**xdata1.twcc.ai**」
4. 登入型式： 選擇「**交談式**」
5. 使用者：輸入您的主機帳號 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8785be275b2352339c6959581fc47f07.png)



6. 點選「**傳輸設定**」
7. 勾選「**限制同時連線數**」並設定最大連線數「**1**」：避免每次傳輸檔案，需重新輸入 密碼 與 OTP 之步驟。

:::info
勾選後，當多檔案進行傳輸時，一次僅能傳輸一個檔案，若使用上不便，建議改用金鑰的方式連線。
:::

8. 點選「**連線**」

<b>

Step 3. 輸入主機密碼及 [OTP <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC)

</b>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_92b59625eba5f2dbaff85d5c2c030e19.png)


9. 輸入您的主機密碼
10. 點選「**連線**」 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7aead02c0c6c3a346672cd55f878fe13.png)


11. 輸入「**OTP**」 
12. 點選「**連線**」


:::info
1. [<ins>忘記主機帳號？</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
2. [<ins>忘記密碼？</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
3. [<ins>如何取得 OTP？</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC)
:::


</details>

<div></div>

- 連線成功後，右側「遠端站台」即為 HFS 檔案系統內之資料，左側「本機站台」為您本機的資料。
- 預設目錄即為使用者的 /home 目錄，下方為 /home 目錄底下的資料。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e69ea54b6ed112035eeee732fdda0016.png)

