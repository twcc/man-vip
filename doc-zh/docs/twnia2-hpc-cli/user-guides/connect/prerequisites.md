---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-prerequisite-for-connection-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-prerequisite-for-connection-zh'
---

# 準備工作

以下教學如何進入台灣杉二號 (命令列介面) 節點：**登入節點**、**資料傳輸節點**。
 
**登入節點可執行下列工作**：
1. 提交/管理 job
2. 有全權存取高速儲存系統上的檔案
3. 編譯 HPC 相關應用程式
4. 運行除錯程式以改善程式碼

**資料傳輸節點可執行下列工作**：
1. 資料從傳入/傳出高速檔案系統 (HFS)
2. 使用 SCP/SFTP 的方式透過此類節點進行資料傳輸

---


連線登入台灣杉二號 (命令列介面) 環境之前，您需要準備以下資訊與工具。

## 註冊帳號

請至 [TWCC](https://www.twcc.ai/) 使用者網站註冊並設定您的 TWCC 使用者網站帳號/密碼、主機帳號/密碼。步驟可參考[註冊 TWCC 帳號](https://www.twcc.ai/doc?page=register_account)。 

:::info
TWCC 使用者網站、TWCC CLI 操作有依使用者身分區分不同使用權限，**台灣杉二號 (命令列介面) 服務則無角色權限之區分**。更多資訊，請參考[<ins>使用者角色權限比較</ins>](/docs/member/concepts/overview.md)。
:::

## 主機帳號、密碼、OTP 認證碼

登入台灣杉二號 (命令列介面) 環境之帳號密碼使用主機帳號、主機密碼與 OTP 認證碼：

- 帳號：註冊時設定的「**主機帳號**」
- 密碼：「**主機密碼**」、「**OTP 認證碼**」

:::info
1. 若忘記**主機帳號**或**主機密碼**，請參考：[<ins>查詢主機帳密與 OTP 認證碼</ins>](/docs/member/user-guides/member-key-quota/hpc-account-password-otp.md)。
2. **OTP (One Time Password) 認證碼**
    - 為一次性密碼，又稱為動態密碼。具高度安全性，30 秒更新一次，保障用戶存取安全性，確保達到 2FA (Two-Factor Authentication)。
    - 查詢方式，請參考：[<ins>查詢主機帳密與 OTP 認證碼</ins>](/docs/member/user-guides/member-key-quota/hpc-account-password-otp.md)。
:::

## 連線工具

您需透過 SSH 連線登入台灣杉二號 (命令列介面)，使用工具建議如下：

- Windows 用戶可下載安裝 SSH client 軟體 (例：[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[MobaXterm](https://mobaxterm.mobatek.net/download-home-edition.html)、[VScode](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)...等工具)。
- macOS 用戶可直接開啟系統內建的終端機連線。

