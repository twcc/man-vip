---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-create-usr-linux-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-create-usr-linux-zh' 
---

# 使用帳密 SSH 連線 Linux 個體

:::tip **適用情境：鑰匙對常忘記存在何處？是否可以多人共用一台虛擬運算個體？**

*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::


除了透過「**鑰匙對**」做為 SSH 連線 Linux 個體之憑證外，本篇文章教學如何**使用「帳號密碼」 SSH 連線虛擬運算服務 Linux 個體**，*可預防遺失鑰匙對、鑰匙對檔案毀損，或是適用多人一起共用虛擬運算個體之情境*。


### Step 1. 新增使用者帳號密碼

- 使用鑰匙對[連線進入虛擬運算個體](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh)
- 使用以下指令新增 1 個使用者帳號 (您可依需求新增更多使用者)，並輸入密碼及相關個人資訊

```bash
sudo adduser <USER_ID>
```

:::caution
為保護您的虛擬運算個體安全，Ubuntu、CentOS 的登入密碼請設定至少包含 12 個字元，並混合英文大小寫字母、數字及特殊符號。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c07b26965922b473cc5ea6d8adda121.png)


### Step 2. 開啟帳密連線功能

- 輸入以下指令開啟 sshd 中的帳密連線功能

```bash
sudo sed -i 's/PasswordAuthentication\ no/PasswordAuthentication\ yes/g' /etc/ssh/sshd_config
```


### Step 3. 重啟 sshd 服務

- 輸入以下指令重啟 sshd 服務

```bash
sudo systemctl restart sshd
```

### Step 4. 確認可用帳號密碼登入

- 使用 MobaXterm 做為連線工具，點選 「**SSH**」 > 輸入 「*公用 IP*」 > 輸入 「*使用者帳號*」 > 點選  「**OK**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6e8b4c94c4b6537e5c57d23062335baa.png)

- 跳出以下畫面，再輸入您設定的密碼即可登入！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9711b273491092fd4016073a2d89be75.png)