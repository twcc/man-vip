---
sidebar_position: 2
title: '登入/登出主機'
sidebar_label: '登入/登出主機'
slug: '/user-guides/twcc/twnia2-hpc-cli/login-logout'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-login-and-logout-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-login-and-logout-zh'
---

# 登入主機

準備工作完成後，請依您的作業系統選擇登入工具。

Windows 用戶請下載 SSH client 軟體 (例：[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)) ；macOS 用戶可直接開啟內建終端機連線

## 本機為 Windows 系統

<!-- 1 start -->

<details class="docspoiler">

<summary><b>使用第三方軟體：MobaXterm</b></summary>

### Step 1. 開啟 MobaXterm

下載 [MobaXterm](https://mobaxterm.mobatek.net/download-home-edition.html)、解壓縮之後，執行 **MobaXterm_Personal_[版本]**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a1e876714cd048e9886c992af469497.png)

### Step 2. 建立連線

點擊左上角的 「**Session**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14193d66d4e18c0a81402307bd08b841.png)
<br/>

並依照下圖與步驟，完成設定，建立連線：

1. 點選 「**SSH**」
2. 在`Remote host`輸入*登入節點網域名稱：ln01.twcc.ai*
3. 在`Specify username`輸入*主機帳號*
4. 點選 「**OK**」 建立連線

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_513dfb5381969fff75d9b6f192a0bfd2.png)


5. 分別輸入*主機密碼* 與 *OTP*

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3603c9cb64f35b513296bcb0f3100e4.png)


6. 登入成功！可參考系統提供概略的操作注意事項、提交 job 使用說明。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22e1a06c5a1547c3a09f4247e3eca50e.png)

</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>使用第三方軟體：PuTTY</b></summary>

<br/>

### Step 1. 開啟 PuTTY

- 開啟後：
1. 輸入「ln01.twcc.ai」
2. 點選 「Open」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d779ddfc20133ba056e34b80365299df.png)


### Step 2. 輸入主機密碼與 OTP

- 完成後，便會透過 PuTTY 將 Terminal 打開並登入 TWCC 中的 HPC Service：
1. 輸入主機帳號
2. 輸入主機密碼
3. 輸入 OTP，即完成登入！


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d5943b5d0078544b13320d5e304a14d.png)



</details>

## 本機為 Linux 或 macOS 系統

<!-- 2. start -->

<details class="docspoiler">

<summary><b>使用內建終端機</b></summary>

<br/>

### Step 1. 開啟電腦內建終端機，輸入資訊

1. 輸入指令`ssh [主機帳號]@ln01.twcc.ai`
2. 輸入主機密碼
3. 輸入 OTP，即完成登入！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04190c45d49a75d1dac66ee61b2a4855.png)

</details>

<br/>

:::info
1. [<ins>忘記主機帳號？</ins>](/docs/user-guides/tws-member-center/system-account-password-otp#查詢主機帳號)
2. [<ins>忘記密碼？</ins>](/docs/user-guides/tws-member-center/system-account-password-otp#重置主機密碼)
3. [<ins>如何取得 OTP？</ins>](/docs/user-guides/tws-member-center/system-account-password-otp#取得-otp-認證碼)
:::


:::caution
連續登入失敗 3 次，將鎖住用戶 15 分鐘，等時間過後用戶才能再次嘗試登入驗證。
:::



## 登出主機

執行以下指令即可登出主機：

```bash
exit
```