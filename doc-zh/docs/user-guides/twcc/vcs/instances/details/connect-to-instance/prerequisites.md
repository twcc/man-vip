---
sidebar_position: 1
sidebar_label: '準備工作'
slug: '/user-guides/twcc/vcs/prerequisites-connect-to-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-prerequisite-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 連線虛擬運算個體：準備工作


## Step 1. 建立公用 IP

若需從虛擬網路外部連線登入虛擬運算個體，請先建立公用 IP，並建議使用[安全性群組](/user-guides/twcc/vcs/security-group.md)保護個體安全與降低資安風險。

:::info
更多公用 IP 使用資訊，請參考[<ins>彈性 IP</ins>](/user-guides/twcc/vcs/eip.md)。
:::

<!-- Portal start -->

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 進入欲連線的虛擬運算個體詳細資料頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c065f020c08007cad3c40a0d17c32444.png)

- 至「網路與連線」區域，點選「**配置**」。

![](https://i.imgur.com/hXpkLqY.png)


- 選擇「**自動配置浮動 IP**」 或 「**配置靜態 IP**」。

![](https://i.imgur.com/oF4CrE8.png)



- 建立完成後，將顯示所使用的虛擬網路名稱、所取得的公用 IP 位址。

![](https://i.imgur.com/tS0RGPU.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

```bash
twccli net vcs -s       # 虛擬運算個體 ID
               -fip
```

:::info
**[ ]** 中括號內為選擇性參數，其餘為必要參數。
:::

<br/>


**範例**

為 ID **`937648`** 的虛擬運算個體，建立公用 IP，並檢視是否建立成功

```bash
twccli net vcs -s 937648 -fip
twccli ls vcs
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_565a7f89f09a26306182a00123a02929.png)


</TabItem>

</Tabs>

<br/>


## Step 2. 取得連線資訊

<!-- Portal start -->

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

**Linux 個體**

* 進入欲連線的虛擬運算個體詳細資料頁面

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c065f020c08007cad3c40a0d17c32444.png)

* 點擊「**連線**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8343bbc37911ad21d03d7f320e033e77.png)

* Linux 個體點擊「**連線**」按鈕後，系統會出現使用 SSH 連線到您的虛擬運算個體的資訊及步驟，每台個體的資訊不同。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6a67ed29fee947c94562327049f2ca61.png)

:::info
此範例以 Ubuntu 為例，不同作業系統的虛擬運算個體，系統提示資訊將有所不同。
:::

<br/>

**Windows 個體**

* 進入欲連線的虛擬運算個體詳細資料頁面，點擊「**連線**」按鈕後，系統將提供連線提示 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3a723f629d377148c6c599c6a3f51378.png)

- 登入帳密：

    **帳號：administrator**<br/>
    **密碼：使用者自行定義之個體密碼**

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>