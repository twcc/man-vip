---
sidebar_position: 1
sidebar_label: '連線容器'
slug: '/user-guides/twcc/ccs-interactive-container/connect-to-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-connect-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-connect-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 連線容器

當容器服務狀態呈現 **`Ready`** 後即可開始使用，開發型容器服務預設提供 Jupyter Notebook 網頁開發環境及 SSH 兩種連線登入方式，操作步驟請參考以下說明。

<br/>

## 準備工作

- [建立開發型容器](/user-guides/twcc/ccs-interactive-container/containers/create/create-container.md)。
- 若選擇使用 TWCC 入口網站操作，容器建立後，請於「**開發型容器管理**」頁點選欲連線的容器，進入「**開發型容器詳細資料**」頁。
- 若選擇使用 TWCC CLI 操作，請先取得 容器 ID。

<br/>

## 連線容器方式

您可透過 Jupyter Notebook 或是 SSH 連線容器。

<br/>

### Jupyter Notebook

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- **Step 1.** 點選 Jupyter 右方之「**開啟**」，即可開啟內建的 Jupyter Notebook 操作網頁。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_536d3b7c1e7631fc0a40616396953b3e.png)

- **Step 2.** 再點選 「**New**」 > 「**Terminal**」，即可連線進入容器環境，開始在容器內進行人工智慧運算工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** 取得容器 ID 為 `1249374` 的容器 Jupyter Notebook 網址。

```bash
twccli ls ccs -s 1249374 -gjpnb
```

- **Step 2.** 點選 「**網址**」 (CLI)，即可開啟 Jupyter Notebook。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_619c5fad19ccb469b5368895935ae48b.png)

- **Step 3.** 再點選 「**New**」 > 「**Terminal**」，即可連線進入容器環境。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
</Tabs>

<br/>

### SSH

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- **Step 1.** 點擊 SSH 右方之「**複製圖示**」，即可快速複製主機登人帳號及 IP 位址，

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_843ed64309398c217dc4e8c5f4644785.png)

- **Step 2.** 在本地端電腦中，開啟 Terminal 並且填入 SSH 登入之相關資訊即可完成，登入的帳號及密碼為 iService 中所設定之主機帳號與密碼，另可使用其他第三方軟體如 Putty 等工具進行連線。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_178bd3a081c3e9af4de944d2130d1b7f.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** 取得 SSH 容器 ID 為 **`1249380`** 的容器 SSH 連線資訊

```bash
twccli ls ccs -s 1249374 -gssh
```

- **Step 2.** 在本地端電腦中，開啟 Terminal，複製貼上指令 > 輸入「**主機密碼**」，即可連線進入容器。

</TabItem>
</Tabs>

- 離開容器
    - 輸入 **`exit`**，即可離開容器 SSH 環境。

---

:::info
[<ins>忘記主機密碼？</ins>](/user-guides/tws-member-center/manage-member-accounts/system-account-password-otp.md)
:::