---
title: 連線容器 | zh
tags: Guide, CCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 連線容器

當容器服務狀態呈現 **`Ready`** 後即可開始使用，開發型容器服務預設提供 Jupyter Notebook 網頁開發環境及 SSH 兩種連線登入方式，操作步驟請參考以下說明。

{%hackmd @preview-twccdocs/prerequisite-ccs-id-zh %}

## 連線容器

您可透過 Jupyter Notebook 或是 SSH 連線容器。

### Jupyter Notebook

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- **Step 1.** 點選 Jupyter 右方之「**開啟**」，即可開啟內建的 Jupyter Notebook 操作網頁。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_536d3b7c1e7631fc0a40616396953b3e.png)

- **Step 2.** 再點選 「**New**」 > 「**Terminal**」，即可連線進入容器環境，開始在容器內進行人工智慧運算工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- **Step 1.** 取得容器 ID 為 `1249374` 的容器 Jupyter Notebook 網址。


```bash
$ twccli ls ccs -s 1249374 -gjpnb
```


- **Step 2.** 點選 「**網址**」 (CLI)，即可開啟 Jupyter Notebook。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_619c5fad19ccb469b5368895935ae48b.png)


- **Step 3.** 再點選 「**New**」 > 「**Terminal**」，即可連線進入容器環境。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)


</details>


### SSH

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>


- **Step 1.** 點擊 SSH 右方之「**複製圖示**」，即可快速複製主機登人帳號及 IP 位址，

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_843ed64309398c217dc4e8c5f4644785.png)

- **Step 2.** 在本地端電腦中，開啟 Terminal 並且填入 SSH 登入之相關資訊即可完成，登入的帳號及密碼為 iService 中所設定之主機帳號與密碼，另可使用其他第三方軟體如 Putty 等工具進行連線。

<div style="background-color:black;color:white;padding:20px;">

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">ssh twcctest1234@203.145.219.134 -p 58794</span>
The authenticity of host '[203.145.219.134]:58794 ([203.145.219.134]:58794)' can't be established.
ECDSA key fingerprint is SHA256:ynH3b3yiP74bI6OD54FyA34OfiPT/7bAS07V/9gsceY.
Are you sure you want to continue connecting (yes/no)? <span style="background-color:#fcf8e3; color: #000; padding:3.2px">yes</span>
Warning: Permanently added ‘[203.145.219.129]:51606’ (ED25519) to the list of known hosts.
janice2019@203.145.219.129’s password:
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 3.10.0-862.el7.x86_64 x86_64)

Documentation: https://help.ubuntu.com

Management: https://landscape.canonical.com

Support: https://ubuntu.com/advantage

Note: Read and write permission with superuser access in '/home/'
and ‘/work’ directories has been disabled in this environment.
Please avoid running such commands using ‘sudo’ under those directories directly.
If possible, use ‘sudo -s -H [command]’ instead of ‘sudo’ to avoid them.
init: Setting environment variables
twcctest1234@t36g6ptest03-ndg8f:~$

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- **Step 1.** 取得 SSH 容器 ID 為 **`1249380`** 的容器 SSH 連線資訊

```bash
$ twccli ls ccs -s 1249374 -gssh
```
- **Step 2.** 在本地端電腦中，開啟 Terminal，複製貼上指令 > 輸入「**主機密碼**」，即可連線進入容器。

</details>

<br>

- 離開容器
    輸入 **`exit`**，即可離開容器 SSH 環境。

---

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** [<ins>忘記主機密碼？</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
:::