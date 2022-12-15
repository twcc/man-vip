---
sidebar_position: 2
sidebar_label: '本機為 Linux / macOS'
slug: '/user-guides/twcc/vcs/connect-to-linux-instance-from-linux-macos'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-linux-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-linux-from-linux-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 連線 Linux 個體：本機為 Linux / macOS

完成[準備工作、取得連線資訊](/user-guides/twcc/vcs/instances/details/connect-to-instance/prerequisites.md)後，以下提供 2 種連線 Linux 個體 (本機為 Linux/macOS) 的方法，您可選擇任一工具操作。

:::info
請注意個體的狀態需為 **`Ready`** 才可連線使用。
:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. 內建命令提示字元</b></summary>

開啟本機終端機視窗，依照[<ins>取得的連線資訊</ins>](/user-guides/twcc/vcs/prerequisites-connect-to-instance.md#step-2-取得連線資訊)，依序輸入指令，變更鑰匙對權限、連線至虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab7f8e76a452f95ea2f1e004e10f4e89.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>2. 第三方軟體：VScode</b></summary>


若已有在使用 VScode 開發您的程式，也可以直接使用此軟體連線您的虛擬運算個體。VScode 支援多種平台，並有許多外掛軟體套件可使用，安裝方便，也相當適合新手。以下為 Windows 操作畫面，Linux 或 macOS 步驟雷同。完整操作說明請參考[<ins>官方說明文件</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)。

<br/>

**Step 1. 下載安裝 VScode**

請至 [<ins>VScode</ins>](https://code.visualstudio.com/Download) 下載，完成後開啟程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_010a76dabe0d66c94562e776fe3b3a6a.png)

<br/>

**Step 2. 安裝 SSH 套件**

點選 「**Extensions**」 > 搜尋 *remote ssh* > 選擇 「**Remote- SSH**」 並點選 「**Install**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c0c0011b900d9a5547a5f4487f4fce.png)

<br/>

**Step 3. 建立 Config 檔**

- 安裝完成後，點選視窗左下角圖示，開啟遠端連線指令列表

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecaaf1c1f4a790161660b2a45020b607.png)

- 點選 「**Remote-SSH: Open Configuration File**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2efbf5090bc128487b714ffe122ba037.png)

- 點選 「**C:\Users\User\.ssh\config**」 建立連線設定檔

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9e954c2165abc59b5be91f8d314112c.png)

- 請將鑰匙對 pem 檔案放置於`~/.ssh/` 資料夾之下

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_237f5babfff7d1265879f96d3262a60f.png)

- 打開 config 檔後，複製並貼上以下格式，填入一[<ins>虛擬運算個體的資訊</ins>](/user-guides/twcc/vcs/prerequisites-connect-to-instance.md#step-2-取得連線資訊)；若有多個個體，也可以複製貼上數份修改。輸入完成後請存檔。

```bash
Host <INSTANCE_NAME>            # 輸入虛擬運算個體的名稱
    HostName <PUBLIC_IP>        # 輸入公用 IP
    User <IMAGE_TYPE>           # 輸入 ubuntu 或 centos
    IdentityFile ~/.ssh/<.pem>  # 輸入.pem 檔鑰匙對名稱
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_871749523146661c11306b59bea27ce0.png)

<br/>

**Step 4. 連線虛擬運算個體**

- 再次開啟 VScode 左下角圖示 > 選擇 「**Remote-SSH: Connect to Host...**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ce4b6b932674950fe3732f35fd2627a3.png)

- 開啟後會顯示已建立資訊的個體，點選後即開始連線

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab2ee3bcc20dfba930e9666ea38e4911.png)

- 接著點選 「**Linux**」  

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03d9ef5fc7818f3893301eced215414f.png)

- 點選 「**Continue**」 繼續

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7647f858a45535cdeeb41552fd27d52f.png)

- 連線完成後視窗左下角會出現 **`SSH: <Host Name>`**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_90ad691923b321838ea46f8e0304719c.png)

- 再開啟 「**Terminal**」 > 「**New Terminal**」 就可以開始操作虛擬運算個體囉！ 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_719594c2f99eeca61a261800d4e0c511.png)
</details>

<br/>

:::info
若需進行緊急除錯/系統維護工作，建議您透過 [<ins>Console 連線</ins>](/user-guides/twcc/vcs/instances/details/console.md)，可加速工作流程。
:::

:::caution
連線進入 Linux 個體後：

- 若您在 `/etc/fstab` 檔案有設定自動掛載資料磁碟 (例：`/dev/vdb  /mnt ext4 defaults`)，我們建議您在設定後方加上`nofail`選項 (例：`/dev/vdb  /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`)，以確保您的個體可以正常啟動與連線。
- 網路卡設定經修改後，將會導致無法連線進入虛擬運算個體，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::