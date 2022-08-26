---
sidebar_position: 1
title: '本機為 Windows'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-linux-from-windows-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 連線 Linux 個體：本機為 Windows

完成[準備工作、取得連線資訊](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-zh)後，以下提供 4 種連線 Linux 個體 (本機為 Windows) 的方法，您可選擇任一工具操作。

:::info
請注意個體的狀態需為 **`Ready`** 才可連線使用。
:::

<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. 內建命令提示字元</b></summary>

**Step 1. 確認 SSH 程式已安裝**

開啟您本機的命令提示字元，輸入`ssh -V` 檢查本機端是否已具備 SSH 用戶端程式。若有，將會顯示程式的版本，若無請[<ins>參考 Microsoft 官方文件</ins>](https://docs.microsoft.com/zh-tw/windows-server/administration/openssh/openssh_install_firstuse#installing-openssh-from-the-settings-ui-on-windows-server-2019-or-windows-10-1809)，快速安裝 OpenSSH Client，或參考其他連線方式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1452929755721f4bf64645dbf93c5389.png)

<br/>


**Step 2. 變更鑰匙對存取權限**
    
依照[<ins>準備工作</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-zh)取得的連線資訊，依序輸入指令，變更鑰匙對權限。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8c1e0e1469023aa30e6b049b00b251c.png)

<br/>


**Step 3. 連線虛擬運算個體**

同樣依照[<ins>準備工作</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-zh)取得的連線資訊，使用 SSH 指令連線。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c18eb4e0d432f15f82dd4d661f658acc.png)

<!--
<div style="background-color:black;color:white;padding:20px;">

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /reset</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /GRANT:R "%USERNAME%:`(`R`)`"</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /inheritance:r</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">ssh -i d:\key\janicekey01.pem centos@203.145.220.231</span>
The authenticity of host '203.145.220.231 (203.145.220.231)' can't be established.
ECDSA key fingerprint is SHA256:vZ5EWM1ZbnYWkF52T6fxQROphd2PqiaGYvpBAuSahFQ.
Are you sure you want to continue connecting (yes/no)? <span style="background-color:#fcf8e3; color: #000; padding:3.2px">yes</span>
Warning: Permanently added '203.145.220.231' (ECDSA) to the list of known hosts.
Last login: Tue May 14 14:14:37 2019 from 220-141-25-168.dynamic-ip.hinet.net
[centos@vm01-252546-iaas ~]$ 
</div> 
-->

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary><b>2. 第三方軟體：MobaXterm</b></summary>

MobaXterm 圖形化的使用者介面，直覺好用，鑰匙對不需經轉檔即可直接使用。

<br/>

**Step 1. 下載 MobaXterm**

請由 [<ins>MobaXterm Home Edition (Portable edition)</ins>](https://mobaxterm.mobatek.net/download-home-edition.html)下載軟體，解壓縮之後，執行**MobaXterm_Personal_[版本]**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a1e876714cd048e9886c992af469497.png)

<br/>

**Step 2. 建立連線**

點擊左上角的 「**Session**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14193d66d4e18c0a81402307bd08b841.png)

<br/>

並依照下圖與步驟，完成設定，建立連線：

1. 點選 「**SSH**」
2. 在`Remote host`輸入 *公用 IP*
3. 在`Specify username`輸入 *ubuntu* 或是 *centos*
4. 點選 「**Advanced SSH settings**」 
5. 勾選 `Use private key`
6. 點開資料夾並選取您的鑰匙對 `.pem` 檔案
7. 點選 「**OK**」 建立連線

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d4cc9231359e438890e83bb3b3d550e9.png)

連線完成！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6eb2f5ac0a37b94f360b5cc7e72b955d.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary><b>3. 第三方軟體：PuTTY</b></summary>

PuTTY 使用的鑰匙對格式為`.ppk`，需先將鑰匙對 `.pem` 檔經由 PuTTYgen 轉檔至 `.ppk`。

<br/>

**Step 1. 下載安裝 PuTTY**

請由 [<ins>PuTTY</ins>](https://www.putty.org/) 下載軟體並完成安裝。

<br/>

**Step 2. 將鑰匙對轉檔 (`.pem` > `.ppk`)**

- 開啟 「**PuTTYgen**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a06473c2b182bdc8ff67d09fdb621526.png)

    
- 點選 「**Load**」並選取您已建立、下載之 `.pem` 檔鑰匙對 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a8b788d86f9c3dffe7a618aea53c4a5.png)


- 點選 「**確定**」 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26f4e37c54b667cabc7790b9a9663898.png)


- 點選 「**Save private key**」、輸入檔名並確認類型為 `.ppk`，存檔後即完成轉檔步驟

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11268348b7997861d1288a4d1cd7a5ba.png)

<br/>


**Step 3. **使用 PuTTY 連線至個體****

- 開啟 「**PuTTY**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a0782c28ef264664f3e37c4dcc7f3fa.png)

- 左側點選「**Session**」、輸入 Host Name (可於配置頁點選「連線」查看) 與 Port (22) 
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5606b28d2fde6f531baf9fb3d7544c8.png)

    
- 接著點選左側 「**SSH**」 > 「**Auth**」，並點選「**Browse**」載入 `.ppk` 鑰匙對

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0aba860e6cb2b8bf4b45c7e87e9a730c.png)


- 最後再點選「**Open**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a4e7e190ab323c4558f56cf751cffe3.png)


- 視窗開啟即成功連線至虛擬運算個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b9c27c33213c7c21b69299cbe33eddf.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary><b>4. 第三方軟體：VScode</b></summary>

若已有在使用 VScode 開發您的程式，也可以直接使用此軟體連線您的虛擬運算個體。VScode 支援多種平台，並有許多外掛軟體套件可使用，安裝方便，也相當適合新手。完整操作說明請參考[<ins>官方說明文件</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)。

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

- 打開 config 檔後，複製並貼上以下格式，填入一虛擬運算個體的資訊；若有多個個體，也可以複製貼上數份修改。輸入完成後請存檔。

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
若需進行緊急除錯/系統維護工作，建議您透過 [<ins>Console 連線</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-debug-tool-console-zh)，可加速工作流程。
:::

:::caution
連線進入 Linux 個體後：

- 若您在 `/etc/fstab` 檔案有設定自動掛載資料磁碟 (例：`/dev/vdb  /mnt ext4 defaults`)，我們建議您在設定後方加上`nofail`選項 (例：`/dev/vdb  /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`)，以確保您的個體可以正常啟動與連線。
- 網路卡設定經修改後，將會導致無法連線進入虛擬運算個體，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::