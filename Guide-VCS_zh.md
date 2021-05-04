---
title: 虛擬運算服務
tags: Guide, VCS, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# 虛擬運算服務

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 點選左側「**全部展開**」可檢視所有目錄 <i class="fa fa-hand-o-left fa-10" aria-hidden="true"></i>
:::

 
虛擬運算個體是 TWCC 提供的傳統一般型主機租用服務，可以透過自動化工具及流程進行快速部署及回收。並可同時掛載多個虛擬磁碟，建立附加 Volume，自由彈性調配個體的儲存空間，為智算兼備、節省成本的最佳選擇。

## 建立虛擬運算個體


 * 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d01d3f3ce8149085f0247b35f5775c71.png)


* 選擇映像檔類型，TWCC 提供常用的 Linux 與 Windows 作業系統映像檔，方便個體建立後可以立即使用。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 

TWCC 作業系統映像檔版本：
- Linux
    - Ubuntu：20.04、18.04、16.04
    - CentOS：8.2、7.9
- Windows
    - Windows 10 Pro、Windows 10 Enterprise LTSC、Windows Server 2016 
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_58e5af26a86ab3ba77329e54f09ffe07.png)


* 在基本資訊頁面填寫虛擬運算個體的名稱及描述，選擇映像檔的版本及所需的硬體規格，包含 CPU 數量、記憶體容量、儲存容量及額度的不同組合，接著點擊「**下一步：網路>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9c38be5845bb4e9dfe9fa7b67f25b40.png)


* 在網路設定頁面選擇網路及開啟自動分配公用 IP 設定，可使用系統預設的預設虛擬網路( Default network) 或自訂的虛擬網路。
* **預設為關閉自動分配公用 IP**。若需從虛擬網路外部連線個體，請您點選「**開啟**」以開啟自動分配公用 IP，並建議使用[<ins>安全性群組</ins>](#安全性群組)保護個體安全與降低資安風險。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a66054a77ebd706c1e63489871895c8.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
1. 首次使用請先建立預設虛擬網路 (Default network)，操作步驟請參考：[<ins>HowTo：建立預設虛擬網路</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-zh)。若有自訂虛擬網路之需求，請參考：[<ins>建立自訂虛擬網路</ins>](#建立自訂虛擬網路)。
2. 建立虛擬網路僅限由「租戶管理者」操作，因此若您身份為「租戶使用者」，請您聯繫所屬計畫之「租戶管理者」協助操作。
:::


* 在儲存資訊頁面，設定外掛儲存空間 Volume 大小（GB）及類型（提供 HDD Volume）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecbac0771afa689f98a5f6b31dbc221c.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 虛擬運算個體建立後，外掛 Volume 需經初始化才能使用，步驟請參考：

- [<ins>HowTo：初始化磁碟- Linux 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)
- [<ins>HowTo：初始化磁碟- Windows 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)
:::


<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->

- 以上建立步驟 Linux 個體與 Windows 個體皆相同，而以下建立兩種作業系統不同的登入憑證：

#### **建立 Linux 個體請接著點擊「下一步：鑰匙對>」(若建立 Windows 個體請跳至下方)**

* 鑰匙對是登入 Linux 虛擬運算個體的憑證，建立虛擬運算個體之前，必須先取得或建立鑰匙對才能使用虛擬運算個體功能。第一次使用請按「**＋建立鑰匙對**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b07e58c36056e7bf120a6e35a70bc70c.png)


* 輸入鑰匙對的名稱後點擊確認。
* 公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_57a261c1f9903c2753530ce5e16bfa85.png)


* 鑰匙對建立後，請務必立即按「**下載**」並妥善保存此鑰匙對，若沒有此鑰匙對，將無法連線該虛擬運算個體，下載後即可關閉此對話視窗，接著點擊「**下一步：檢閱 + 建立>**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d64cb97650700d44ec73f9bc5c5ba46.png)


:::danger
<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> **重要**：TWCC 不負責紀錄及管理您的鑰匙對，請務必下載並妥善保存此鑰匙對 `pem` 檔案，若沒有此鑰匙對，您將無法連線虛擬運算個體。
:::

* 檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，幾分鐘後 等個體狀態由 **`Starting`** 變成 **`Ready`** 後即可開始連線使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0cf0278e435ce3fbaa96a8631e3f3ec7.png)


#### **Window 個體請接著點擊「下一步：密碼>」**

- 建立 Windows 登入密碼。接著點擊「**下一步：檢閱 + 建立>**」


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f16ac8f01c7141e7f5fd22120e120c2.png)


:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 
1. 為保護您的虛擬運算個體安全，密碼設定建議至少包含 **17 個字元**。
2. 此密碼為私人使用，TWCC 將不負責紀錄及管理。請務必妥善保存，若沒有密碼，將無法連線虛擬運算個體。
:::


* 檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，待個體狀態由 **`Starting`** 變成 **`Ready`** 後，再請稍等一段時間，即可開始連線使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f062b7368287f59d3a7ffc77cb4140c2.png)

:::danger

{%hackmd @docsharedstyle/important-zh %}

虛擬運算個體建立中 (**`Starting`**)，請勿刪除個體，否則將影響系統處理工作，導致個體錯誤 (**`Error`**)。
:::


## 虛擬運算個體管理

### 檢視個體資訊

* 進入虛擬運算個體管理頁面，可檢視所有建立個體的列表資訊：**ID**、**名稱**、**對外 IP**、**個體狀態**、**建立時間**及**建立者**。
* 在「**搜尋**」列輸入關鍵字可篩選出列表的欄位中符合該特定條件的結果。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b0bec73d32cdc3370baf274bf28b8f9.png)


:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 最後創建的個體列在最上方，點選上方的欄位名稱，可改變排列順序。
:::

- 進入詳細資料配置頁面，可檢視更詳細的個體資訊：**基本資訊**、**詳細規格**、**網路與連線**、**儲存資訊**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4b5b513960169c831bdc6ba0d8613e8a.png)


### 管理個體

執行建立、啟動、停止、刪除、快照、重新整理頁面等功能：

* 於管理頁面，上方功能列提供建立、啟動、停止、重新整理頁面的功能。
* 點擊 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，可針對該個體執行「**啟動**」、「**停止**」 及 「**刪除**」 等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aea803ee48d326a121ac5e11c4d44aae.png)

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 勾選虛擬運算個體左邊的複選框，即可同時對多項個體進行啟動、停止。
:::


* 進入詳細資料配置頁面，除了可對個體進行**啟動**、**停止**、**删除** 功能之外，還可以製作「**快照**」、「**重新整理**」頁面、編輯個體的描述。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f2781cedb5a762458df5a25711b11b7.png)

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**

- 「**停止**」個體的影響：
    - 個體將從實體主機上移除並釋放資源— CPU、vCPU、記憶體、作業系統磁碟。
    - 除記憶體資料將被清除，作業系統磁碟與附加磁碟之資料皆會完整保存。
    - 個體的狀態轉換過程： `Ready` >`Stopping` >`Stopped`。<br>
    ※ <ins>虛擬運算個體停止中 (**`Stopping`**)，請勿刪除個體，否則將影響系統處理工作，導致虛擬運算個體錯誤 (**`Error`**)。</ins>
      
- 「**啟動**」個體的影響：
    - 多數情況下，個體將移至新的實體主機。
    - 個體的狀態轉換過程：`Stopped` > `Queueing`>`Starting` >`Ready`。
    
- 「**刪除**」個體的影響：
   - 開機磁碟 (100 GB) 資料將會隨之消失，若需保存此空間的資料，請參考建立虛擬運算個體[<ins>快照</ins>](#快照)的步驟。
   - 已與個體連結的附加磁碟，將會與個體自動分離並保存。
   - 個體的狀態轉換過程：`Deleting` > 從管理列表上消失。

- 更多虛擬運算個體狀態、服務操作影響、計費與否之資訊，請參考[<ins>虛擬運算個體生命週期</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-zh)。
:::


### 連結其他服務

* 進入詳細資料配置頁面，可連結相關服務：
    * **建立/移除**公用 IP
    * **掛載/移除** Auto Scaling 與 負載平衡
    * **分離** Volume，並可進入 Volume 詳細資料頁面

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8e17516c8e7b7881aa3928cec176f759.png)

### 監控個體

TWCC 入口網站可檢視虛擬運算個體監控的資訊，可監控 CPU 使用量、記憶體、硬碟讀取/寫入速度及網路輸出/輸入速率：

- 進入「**虛擬運算個體詳細資料**」頁，並選擇一指定的個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b0545265979b88c8271e1c659431c343.png)

- 於「**虛擬運算個體詳細資料**」頁內選擇「**監控**」頁籤，即可查看個體監控資訊：
    - **CPU 用量 (%)**：CPU 的使用率，若顯示為 2 (200%)，則表示用滿 2 CPU 的資源。 
    - **記憶體用量 (MB)**：記憶體使用量，單位為 Megabytes (MB)。
    - **硬碟讀取/寫入 (B/s)**：可檢視各個磁碟讀取/寫入之速率，單位為 Bytes/second (B/s)。
    - **網路輸出/輸入 (B)**：虛擬運算個體輸入/輸出之網路流量，綜合東西流量 (跨虛擬運算個體間的水平傳輸) 與南北流量 (用戶端與個體之間的流量)，單位為 Bytes (B)。

:::info
{%hackmd @docsharedstyle/note-zh %}
TWCC 入口網站之網路流量包含東西流量與南北流量的總和，而 [<ins>Service 會員服務系統 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) 之額度用量、資源用量紀錄則僅顯示南北流量。
:::
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_957d7ec85ac72b6c1b45de401f246fcf.png)


- 游標移至綠色圓點，可取得用量實際數值。
- 游標移至任一監控圖上，可點選 <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> 圖示下載監控圖檔 (`.png`) 留存。
- 右側選單則可選擇時間，可觀察特定時長內之容器資源使用變化。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_70386adb0dd68bae1b6a18c63e2f854a.png)

:::info
{%hackmd @docsharedstyle/note-zh %}
特定時長可選擇1小時、6小時、12小時、1天、7天、30天。
:::


### 調整個體規格

若選用的規格在建立後不符使用需求，需調整至較小規格或更大規格的個體，請參考：[HowTo：調整虛擬運算個體規格](https://man.twcc.ai/@twccdocs/howto-vcs-resize-instance-zh)。

:::info 
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 完整型號、規格與價格之比較，請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS-%E2%80%BB-%E5%8D%B3%E5%B0%87%E7%99%BC%E5%94%AE%EF%BC%8C%E8%AB%8B%E6%B4%BD%E5%AE%A2%E6%9C%8D%E4%BA%BA%E5%93%A1%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%E3%80%82)。
:::

## 連線虛擬運算個體

若需從虛擬網路外部連線登入虛擬運算個體，請先至虛擬運算個體詳細資料頁建立公用 IP，並建議使用[安全性群組](#安全性群組)保護個體安全與降低資安風險。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5799d666346614de5d3f8d7d0cc85770.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 虛擬運算個體的狀態必須為 **`Ready`** ，才可以建立 / 移除公用 IP。
:::

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**

- 藉由下列方式連線個體後，若您在 `/etc/fstab` 檔案有設定自動掛載 Volume (例：`/dev/vdb  /mnt ext4 defaults`)，我們建議您在設定後方加上`nofail`選項 (例：`/dev/vdb  /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`)，以確保您的個體可以正常啟動與連線。
- 網路卡設定經修改後，將會導致無法連線進入虛擬運算個體，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::

### 連線至 Linux 個體 (本機為 Windows)

* 進入欲連線的虛擬運算個體詳細資料頁面，點擊「**連線**」按鈕。請注意個體的狀態需為 **`Ready`** 才可連線使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_217682606d5868b5df670f8305ec5d75.png)


* 點擊「**連線**」按鈕後，系統會出現使用 SSH 連線到您的虛擬運算個體的資訊及步驟，每台個體的資訊不同。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_10fc84856418521027fc8575ecc61e61.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 此範例以 Ubuntu 為例，不同作業系統的虛擬運算個體，系統提示資訊將有所不同。
:::

:::spoiler **1. 使用內建命令提示字元 (適用本機為 Windows 10 或 Windows Server 2019 用戶)**
:::info
#### Step 1. 確認 SSH 程式已安裝

開啟您本機的命令提示字元，輸入`ssh -V` 檢查本機端是否已具備 SSH 用戶端程式。若有將會顯示程式的版本，若無請[<ins>參考 Microsoft 官方文件</ins>](https://docs.microsoft.com/zh-tw/windows-server/administration/openssh/openssh_install_firstuse#installing-openssh-from-the-settings-ui-on-windows-server-2019-or-windows-10-1809)，快速安裝 OpenSSH Client，或參考其他連線方式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1452929755721f4bf64645dbf93c5389.png)


#### Step 2. 變更鑰匙對存取權限
    
依照點擊使用者網站點選「**連線**」顯示的提示，依序輸入指令，變更鑰匙對權限。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8c1e0e1469023aa30e6b049b00b251c.png)


#### Step 3. 連線虛擬運算個體

同樣依照點擊使用者網站點選「**連線**」顯示的提示，使用 SSH 指令連線。

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
:::

:::spoiler **2. 使用第三方軟體：MobaXterm**
:::info
MobaXterm 圖形化的使用者介面，直覺好用，鑰匙對不需經轉檔即可直接使用。

#### Step 1. 下載 MobaXterm

請由 [MobaXterm Home Edition (Portable edition)](https://mobaxterm.mobatek.net/download-home-edition.html)下載軟體，解壓縮之後，執行**MobaXterm_Personal_[版本]**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a1e876714cd048e9886c992af469497.png)

#### Step 2. 建立連線

點擊左上角的 「**Session**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14193d66d4e18c0a81402307bd08b841.png)
<br>

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
:::
    
:::spoiler **3. 使用第三方軟體：PuTTY**
:::info

PuTTY 使用的鑰匙對格式為`.ppk`，需先將鑰匙對 `.pem` 檔經由 PuTTYgen 轉檔至 `.ppk`。

#### Step 1. 下載安裝 PuTTY

請由 [<ins>PuTTY</ins>](https://www.putty.org/) 下載軟體並完成安裝。

#### Step 2. 將鑰匙對轉檔 (`.pem` > `.ppk`)

- 開啟 「**PuTTYgen**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a06473c2b182bdc8ff67d09fdb621526.png)

    
- 點選 「**Load**」並選取您已建立、下載之 `.pem` 檔鑰匙對 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a8b788d86f9c3dffe7a618aea53c4a5.png)


- 點選 「**確定**」 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26f4e37c54b667cabc7790b9a9663898.png)


- 點選 「**Save private key**」、輸入檔名並確認類型為 `.ppk`，存檔後即完成轉檔步驟

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11268348b7997861d1288a4d1cd7a5ba.png)


#### Step 3. **使用 PuTTY 連線至個體**

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
:::

:::spoiler **4. 使用第三方軟體：VScode**
:::info
若已有在使用 VScode 開發您的程式，也可以直接使用此軟體連線您的虛擬運算個體。VScode 支援多種平台，並有許多外掛軟體套件可使用，安裝方便，也相當適合新手。完整操作說明請參考[<ins>官方說明文件</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)。

#### Step 1. 下載安裝 VScode

請至 [VScode](https://code.visualstudio.com/Download) 下載，完成後開啟程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_010a76dabe0d66c94562e776fe3b3a6a.png)

#### Step 2. 安裝 SSH 套件

點選 「**Extensions**」 > 搜尋 *remote ssh* > 選擇 「**Remote- SSH**」 並點選 「**Install**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c0c0011b900d9a5547a5f4487f4fce.png)

#### Step 3. 建立 Config 檔

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
Host <INSTANCE_NAME>           #輸入虛擬運算個體的名稱
    HostName <PUBLIC_IP>       #輸入公用 IP
    User <IMAGE_TYPE>          #輸入 ubuntu 或 centos
    IdentityFile ~/.ssh/<.pem> #輸入.pem 檔鑰匙對名稱
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_871749523146661c11306b59bea27ce0.png)



#### Step 4. 連線虛擬運算個體

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
:::


### 連線至 Linux 個體 (本機為 Linux 或 macOS)
:::spoiler **1. 使用內建命令提示字元**
:::info
開啟本機終端機視窗，依照點擊「連線」顯示的提示，依序輸入指令，變更鑰匙對權限、連線至虛擬運算個體。

 <div style="background-color:black;color:white;padding:20px;">
 jc@jc-VirtualBox:~$ <span style="background-color:#fcf8e3; color: #000; padding:3.2px">chmod 400 janicekey01.pem</span><br><br>
 
 jc@jc-VirtualBox:~$ <span style="background-color:#fcf8e3; color: #000; padding:3.2px">ssh -i janicekey01.pem centos@203.145.220.231 </span><br>
The authenticity of host '203.145.220.231 (203.145.220.231)' can't be established.
ECDSA key fingerprint is SHA256:vZ5EWM1ZbnYWkF52T6fxQROphd2PqiaGYvpBAuSahFQ.
Are you sure you want to continue connecting (yes/no)? <span style="background-color:#fcf8e3; color: #000 ; padding:3.2px">yes</span><br>
Warning: Permanently added '203.145.220.231' (ECDSA) to the list of known hosts.
Last login: Wed May 15 01:02:37 2019 from 59-124-220-27.hinet-ip.hinet.net <br>
[centos@vm01-252546-iaas ~]$
</div>
:::

:::spoiler **2. 使用第三方軟體：VScode**
:::info
若已有在使用 VScode 開發您的程式，也可以直接使用此軟體連線您的虛擬運算個體。VScode 支援多種平台，並有許多外掛軟體套件可使用，安裝方便，也相當適合新手。以下為 Windows 操作畫面，Linux 或 macOS 步驟雷同。完整操作說明請參考[<ins>官方說明文件</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)。

#### Step 1. 下載安裝 VScode

請至 [VScode](https://code.visualstudio.com/Download) 下載，完成後開啟程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_010a76dabe0d66c94562e776fe3b3a6a.png)

#### Step 2. 安裝 SSH 套件

點選 「**Extensions**」 > 搜尋 *remote ssh* > 選擇 「**Remote- SSH**」 並點選 「**Install**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c0c0011b900d9a5547a5f4487f4fce.png)

#### Step 3. 建立 Config 檔

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
Host <INSTANCE_NAME>           #輸入虛擬運算個體的名稱
    HostName <PUBLIC_IP>       #輸入公用 IP
    User <IMAGE_TYPE>          #輸入 ubuntu 或 centos
    IdentityFile ~/.ssh/<.pem> #輸入.pem 檔鑰匙對名稱
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_871749523146661c11306b59bea27ce0.png)



#### Step 4. 連線虛擬運算個體

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
:::

### 連線至 Windows 個體 (本機為 Windows)

- 請注意 Windows 個體的狀態轉為 **`Ready`** 後，再稍等一段時間才可遠端連線使用。

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 
因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國

若需連線 TWCC Windows 個體，請您與客服聯絡。
:::

#### Step 1. 登入資訊

- 取得個體連線資訊：進入個體詳細資料頁，點擊「**連線**」，系統將提供連線提示

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1799d2dee05b2fddda0996c666f813fb.png)


- 登入帳密：

    **帳號：Administrator**
    **密碼：使用者自行定義之個體密碼**
    
#### Step 2. 開啟內建連線程式

- 開啟 「**遠端桌面連線**」程式 (Windows 系統已有內建，或至 Microsoft 官方網頁搜尋下載)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_466c89194d84a1226aa9ab41b5eeccda.png)

#### Step 3. 連線虛擬運算個體

- 輸入此個體之公用 IP、Port 與使用者名稱，接著點擊「**連線**」
    
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 公用 IP 之後需加上 Port 號`: 9833`，例如：203.145.123.1`:9833`
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aef2d446246e4303d61002b597569081.png)


- 輸入密碼即連線成功

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f92a67b5fd65e5ea4b52d6d54fc6d34b.png)


### 連線至 Windows 個體 (本機為 macOS)

- 請注意 Windows 個體的狀態轉為 **`Ready`** 後，再稍等一段時間才可遠端連線使用。

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 
因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國

若需連線 TWCC Windows 個體，請您與客服聯絡。
:::

#### Step 1. 登入資訊


- 取得個體連線資訊：進入個體詳細資料頁，點擊「**連線**」，系統將提供連線提示

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a72b5e9c8f406c81b9e542cee82b75dd.png)



- 登入帳密：

    **帳號：Administrator**
    **密碼：使用者自行定義之個體密碼**
    
#### Step 2. 下載安裝「**Microsoft Remote Desktop**」 

- 至 Mac App Store 下載 「**Microsoft Remote Desktop**」 應用程式並開啟，點擊「**Add Desktop**」，輸入此個體之公用 IP、Port，接著點擊「**Add**」
    
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 公用 IP 之後需加上 Port 號`: 9833`，例如：203.145.123.1`:9833`
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa227034ee0b79c47cfca35ddce2d099.png)

#### Step 3. 連線虛擬運算個體 


- 雙點擊已建立的連結並輸入登入帳號與密碼，便可成功連結個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efdbd4140922207a512b84da8e697024.png)

# 快照


虛擬運算個體快照功能可以保留某一時間點個體的狀態、作業系統內建的硬碟的檔案與資料，通常在進行重要的系統更新或特殊軟體安裝前會先製作快照，以便需要時可以回復到該時間點的狀態。

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 虛擬運算個體刪除後，系統內建 100 GB 的硬碟儲存空間資料將會隨之消失，若您需保存此空間的資料，請參考以下步驟為個體製作快照，再刪除個體。
:::

## 建立虛擬運算個體快照

* 製作快照前，請先參考[製作虛擬運算個體快照的最佳做法](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh)。
* 進入虛擬運算個體管理頁面，點選欲進行快照的個體列表，進入該個體的詳細資料頁面，並點擊「**快照**」。
:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 
1. 虛擬運算個體的狀態必須為 **`Ready`** 或 **`Shutdown`** ，皆可建立快照，但請您[<ins>關機 (Shutdown)</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh#%E5%A6%82%E4%BD%95%E9%97%9C%E6%A9%9F-shutdown%EF%BC%9F) 後再製作快照，若個體狀態為 Ready 且仍有 I/O，快照所需時間較長。
2. 若個體已設定自動掛載 Volume，請在指令 [<ins>加上"nofail" 選項</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh#%E5%A6%82%E4%BD%95%E5%8A%A0%E4%B8%8A-nofail-%E9%81%B8%E9%A0%85%EF%BC%9F)後再製作快照，以確保使用快照回復之個體，可以正常啟動與連線。
3. 更多虛擬運算個體狀態、服務操作影響、計費與否之資訊，請參考[<ins>虛擬運算個體生命週期</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-zh)。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_74ac25bf3bec4901a166a78cf4bdfd5e.png)


* 確認視窗提示的資訊，並輸入快照的名稱、描述後按「**確定**」。
* 建立快照需數分鐘，等待「**系統需求處理中...**」提示消失後，即可繼續進行其他工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4ea887ff96b727c3130ecf948ef7bbce.png)

* 頁面跳轉至虛擬運算個體快照管理頁，並等快照狀態由 **`QUEUED`** > **`SAVING`**  > 最後變為 **`ACTIVE`** 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26c2da5a2ee7cf2e327795b35b07e2ca.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 若快照狀態停止於 **`QUEUED`** 且久未轉為 **`ACTIVE`**，請洽詢技術支援團隊：<a href="mailto:isupport@twcc.ai">isupport@twcc.ai</a>，我們將協助您解決。
:::


## 虛擬運算個體快照管理 

* 進入虛擬運算個體快照管理頁面，會看到所有快照的列表資訊，最後創建的快照會列在最上面，等到狀態變成 **`ACTIVE`** 後才可以使用。
* 不需使用的快照，可以點選該快照列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再選擇「**刪除**」即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4ba238656c93c11c3a03958aee7c4a00.png)



## 以快照建立虛擬運算個體

建立好的快照會被儲存成映像檔，在創建新的虛擬運算個體時選擇所要回復的快照映像檔版本 (private)，再依照建立虛擬運算個體的流程創建個體即可。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e725b08b3cecf100723115f8f630eb2.png)

:::danger

{%hackmd @docsharedstyle/important-zh %}

選用快照建立虛擬運算個體，當狀態為建立中 (**`Starting`**) 時，為確保個體可完整建立，請勿刪除快照。
:::


# 鑰匙對
鑰匙對是登入 Linux 虛擬運算個體的憑證，建立個體之前，必須先取得或建立鑰匙對才能使用個體功能。

## 建立鑰匙對
* 點擊左側「**鑰匙對**」進入「鑰匙對管理」頁面，在此會顯示已建立的鑰匙對，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34ee6ac25d60558644b998ba3497fe56.png)


* 輸入鑰匙對的名稱後點擊確認。
* 公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad7c3fbb8755a66c3826b8c610d40fc0.png)



鑰匙對建立後，**請務必立即按「下載」並妥善保存此鑰匙對**，若沒有此鑰匙對，將無法連線到該虛擬運算個體，下載後即可關閉此對話視窗。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0cdcfc942c9d1bb34462b038a6d6e5f3.png)


## 鑰匙對管理

* 進入鑰匙對管理頁面，剛建立好的 鑰匙對項目會列在最上方。點選鑰匙對列表，可檢視鑰匙對的詳細資訊，或執行「**删除**」、「**重新整理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_93b36ff65235512eb8ed97ef88137769.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_63c8977730fdada9230b88428abe1690.png)


# 儲存

## 虛擬磁碟服務

虛擬磁碟服務可為虛擬運算個體擴充儲存空間（Volume），隨用隨付，可自行設定容量大小，彈性方便。

### 建立 Volume

* 由服務列表點選進入「**虛擬磁碟**」服務，在「Volume 管理」頁面，點擊「**＋建立**」。
* 填寫 Volume 名稱、描述、此 Volume 是要重新建立或從還原快照、容量及磁碟類型 (提供 HDD Volume)，接著點擊「**下一步：檢閱+建立>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_49b173771f65430385f1c1bbb7a16341.png)



<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->


* 檢視 Volume 的設定，確認後按下「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_741989ab73509ae98c01e6427d6cb4f0.png)


### 連結 Volume

* Volume 建立好後，需先與虛擬運算個體連結，連結後進入虛擬運算個體才可使用。
*  Volume 建立後，會出現在 Volume 管理列表的最上方，等待其狀態變成 **AVAILABLE** 後即可開始連結至個體使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e30e1de20a0cf26da8a438dd97167444.png)



* 點擊該列表進入 Volume 服務詳細資料頁面，點擊「**連結**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cdb66f234fbb4508ff65f483c31d372f.png)



* 出現「連結 Volume 視窗」後，選擇欲連結的虛擬運算個體後按下「**確定**」。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 下拉選單僅顯示可連結 Volume (狀態非 `Stopped`) 的虛擬運算個體。 
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d80803226a6f6e01cee14be33d10da1a.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** Volume 連結至虛擬運算個體後，需經初始化才能使用，步驟請參考：

- [<ins>HowTo：初始化磁碟- Linux 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)
- [<ins>HowTo：初始化磁碟- Windows 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)
:::


* Volume 連結至虛擬運算個體後，可按一下「**重新整理**」，已連結的個體會顯示在下方的區塊中。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f7b94e3b13b748a0dfc369bb9b15572.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 若需改為使用其他類型的磁碟，或需變更磁碟容量，請參考：[<ins>HowTo : 變更資料磁碟</ins>](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-zh)。
:::


* 接續上圖，按下「**分離**」，即可將此 Volume 與所連接的個體分離。

### 刪除 Volume
* 删除 Volume 前請注意，Volume 一旦删除將無法挽回，點擊「**删除**」按鈕即可將此 Volume 删除。


:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**
1. 若 Volume 的狀態為 **IN-USE** 必須先將該 Volume 自虛擬運算個體分離，狀態變成 **AVAILABLE** 後，才能刪除。
2. 當 Volume 的快照存在時，將無法刪除該 Volume，請您先完成刪除 Volume 快照，再刪除 Volume。
:::

### Volume 快照
    
若需備份附加 Volume 的資料，請參考以下 Volume 快照步驟。

* Volume 快照可為 Volume 建立快照，在 Volume 服務詳細資料頁面，點擊「**快照**」，出現「建立快照」視窗，輸入快照的名稱及描述後，按下「**確定**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4b6c673e7c1a09689b7bbef316050b65.png)

## 快照
### Volume 快照管理
* 進入快照管理頁面，會看到所有的 Volume 快照列表資訊，包括 **ID**、**快照名稱**、**Volume 名稱**、**快照狀態**、**建立時間**及**建立者**。最後創建的快照會列在最上面，點選欄位名稱可依該欄位值排列或改變排列順序。
* 在「搜尋」列輸入關鍵字可篩選出列表的欄位中符合該特定條件的結果。
* 點擊 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再按一下「**刪除**」即可將該快照刪除。

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 
- 最後創建的個體列在最上方，點選上方的欄位名稱，可改變排列順序。
:::
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9252737d4d9e1c4c1391eb4086c0f11.png)

## 個體資料備份

TWCC 虛擬運算個體之檔案與資料可使用雲端物件儲存服務 (COS) 設定自動備份與還原，保障您的資料不受個體誤刪而遺失。

完整備份教學請參考：[使用 TWCC COS 備份/同步 運算資料](https://man.twcc.ai/@twccdocs/cosbackup-zh)

# 網路與安全
## 虛擬網路

虛擬網路服務主要是為虛擬運算個體提供可自訂的虛擬網路功能。本功能完整存取權限提供給租戶管理員使用，租戶使用者僅具讀取權限。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 

首次使用 TWCC 所提供的虛擬運算服務，必須先在虛擬網路服務先建立**預設虛擬網路 (Default network)**，才可以開始使用虛擬運算服務。建立步驟請參考：[<ins>HowTo：建立預設虛擬網路</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-zh)。後續若有使用其它網段的需求，可參考下方[<ins>建立自訂虛擬網路</ins>](#建立自訂虛擬網路)。
:::

### 建立自訂虛擬網路
* 由服務列表點選進入「**虛擬網路**」服務，在「**虛擬網路管理**」頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2f0c668bc53fb7af69dc890a4adfe4ca.png)




* 輸入虛擬網路設定的資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * 名稱：即網路名稱，不可重覆，名稱建立後不可再更改。
    * CIDR：無類別域間路由 (Classless Inter-Domain Routing, CIDR)，指定虛擬網路的位址範圍。
    * 閘道：給定一個預設閘道。
    * 名稱伺服器：給定一個名稱伺服器 (DNS)。
:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要**：
1. CIDR 不可與其他虛擬網段重複。
2. CIDR 請使用 RFC1918 定義的 private network 網段範圍，避免產生連線錯誤：
    - 10.0.0.0/8
    - 172.16.0.0/12
<!--     - 192.168.0.0/16 -->
3. 192.168.1.0/24 目前系統保留中，請勿使用。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ba2740597d609be0e577f2844f91134.png)


* 檢視虛擬網路的設定及計畫額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ffcca6dd6ebe84f2576b5b8ce0c8f9.png)



* 最新建立虛擬網路會出現在虛擬網路管理頁面的最上方，等待狀態變成 「**ACTIVE**」 後即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d4fce562a5314f70e7575c35a650f5e6.png)

* 點選列表上的虛擬網路則可檢視其詳細資訊

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ca00fdeabd4b31f089d50f8ac9764ec.png)

:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 為周全保護虛擬運算個體安全，虛擬網路僅限使用下列預設的三個域名伺服器 (DNS)，如有使用其它 DNS 伺服器的需求，請洽技術諮詢服務(isupport@twcc.ai)：
    - 101.101.101.101 (TWNIC)
    - 1.1.1.1 (Cloudflare)
    - 8.8.8.8 (Google)
2. 虛擬運算個體網路卡設定經修改後，將會導致無法連線，因此我們強烈不建議您更動網卡設定，請您操作與部署時特別留意。
:::


## VPN 虛擬私有網路

TWCC VPN 虛擬私有網路服務支援 IPsec/IKE 安全通訊協議，讓租戶建立 Site-to-Site VPN，以確保兩個站點之間安全地傳輸數據。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 此功能需租戶管理員權限才可使用，建立 VPN 連線之前需先建立 IKE 規則 和 IPSec 規則。
:::
### 建立 IKE 規則 

* 點選左側「**IKE 規則**」，在「**IKE Policy 規則**」管理頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c96299a1047cabcdde3b7735e389a9d.png)


* 在「**建立 IKE 規則** 」頁面，系統會產生一組預設的設定，請依實際需求修改參數值。設定好後點擊「**下一步：檢閱＋建立**」。
    * 名稱：規則的名稱。
    * 認證演算法：選擇 SHA-1、SHA-256、SHA-384、SHA-512 認證方式。
    * 加密演算法：選擇 3DES、AES-128、AES-192、AES-256加密方式。
    * IKE 版本：選擇 IKE 版本為 v1 或 v2。
    * 金鑰使用時間 (秒)：輸入金鑰有效時間，單位為秒數。
    * 完全正向保密 (PFS)：完全正向保密 (Perfect Forward Secrecy, PFS）可選擇 Group 2、Group 5、Group 14。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9f572fc078dc67a250121539040c1968.png)


* 檢視欲建立的 IKE 規則 資訊並點擊「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_392319d5e6f52ae97527a6bd4f004c4b.png)


* 新建立的 IKE 規則 會出現在列表的最上方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7bbfa4b167de59035d1203b419c2284e.png)


### 建立 IPSec 規則 

* 點選左側「**IPSec 規則**」，在「IPSec 規則管理」頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_704417d79d7d5c8a804069556fa51947.png)



* 在「**建立 IPSec 規則** 」頁面，系統會產生一組預設的設定，請依實際需求修改參數值。設定好後點擊「**下一步：檢閱＋建立**」。
    * 名稱：Policy 的名稱。
    * 認證演算法：選擇 SHA-1、SHA-256、SHA-384、SHA-512 認證方式。
    * 加密演算法：加密方式，選擇 3DES、AES-128、AES-192、AES-256 演算法。
    * IP 安全協定：傳輸模式，選擇 ESP、AH、AH-ESP。
    * 封裝傳送模式：選擇 Tunnel 隧道模式 或 Transport 傳輸模式。  
    * 金鑰使用時間 (秒)：金鑰的有效時間，單位為秒數。
    * 完全正向保密 (PFS)：完全正向保密 (Perfect Forward Secrecy, PFS）可選擇 Group 2、Group 5、Group 14 加強安全性。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc9d44d891f6e680baae600a2895e91b.png)




* 檢視欲建立的 IPSec 規則 資訊並點擊「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0e2ff89f43b8c05e7838c58b16254e8b.png)



* 新建立的 IPSec 規則 會出現在列表的最上方。



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af04eed4cd9b7a16d6bb5bf714930744.png)



* 建立好 IKE 規則 及 IPSec 規則 後，請至 VPN 管理頁建立服務。

### 建立 VPN 連線

* 進入「**VPN**」服務，在「**VPN 管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bd0e23ad73cf391e1cf8eeac1e5b9b89.png)


* 在「建立 VPN」頁面設定 VPN 名稱、私有網路並選擇 IKE 規則 和 IPSec 規則。選擇好後點擊「**下一步：檢閱 + 建立>**」。

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 建立 VPN 之前需先建立 IKE 規則 和 IPSec 規則。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8bcebf2d7aed3d26240596503d74e8d5.png)

* 檢視欲建立的 VPN 後點擊「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_543c4db1b5abe5b617b7b874c842926b.png)


* 建立後的 VPN 會出現在列表的最上方，此時的狀態會顯示「**PENDDING_CREATE**」，點擊該列表進入「**VPN 詳細資料**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa5f0a77f53131a10274232e41ccfede.png)


### 建立連線設定

* 進入「VPN 詳細資料」頁面後，再按一下左上方「連線」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f045a4c637b716ac131057536eb4999.png)



* 在建立連線頁面，輸入端點互連位址、遠端互連網段及預先共用金鑰後，點擊「**連線**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4c680f91334a8078cbb96892be1fa4a6.png)



* VPN 服務連線設定好後，狀態顯示成「**ACTIVE**」，VPN 連線即建立完成，您可以開始透過此連線與遠端進行訊息保密的安全數據傳輸。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d1582024f163b7752684de14d428034.png)


## 負載平衡服務

TWCC 所提供的負載平衡器服務支援**應用程式負載平衡器 (HTTP 與 HTTPs with SSL) **和**網路負載平衡器 (TCP)**，當流量變大時，可以將流量分配到不同的虛擬運算個體上，以維持服務的靈活性、擴充能力及高可用性。


### 建立負載平衡器

* 由服務列表點選「**負載平衡**」進入「負載平衡器管理」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94405b5839f87f053913feffa6a0e83d.png)


* 輸入負載平衡器設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * **名稱**：輸入負載平衡器的名稱。
    * **描述 (非必填)**：輸入負載平衡器的描述。
    * **類型**：選擇負載平衡器的類型為應用程式負載平衡器或網路負載平衡器。
    * **監聽器**
        * **協定**：
            * 應用程式負載平衡器可處理 **HTTP** 或 **HTTPs with SSL** 協定的流量。
            * 網路負載平衡器可處理 **TCP** 傳輸控制協定的流量。
        * **連接埠**：輸入負載平衡器要轉送的服務埠號。
        * **SSL 憑證**：
        * 點擊「**新增**」可設定多組協定或連接埠的監聽器。
    * **平衡方式**：選擇負載平衡方式，有 **ROUND_ROBIN** (循環模式)、**LEAST_CONNECTION** (最少連線優先模式) 及 **SOURCE_IP** (依來源位址分配模式) 三種選項。
    * **虛擬網路**：選擇虛擬網路。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 如需使用 **HTTPS with SSL** 協定的監聽器，請先[<ins>建立 SSL 憑證</ins>](#建立-SSL-憑證)。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12241a6e2519c28e49bab2f04a4631a0.png)




* 檢視負載平衡器的設定資訊，確定後點選「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b50acc4f5716aba63ad978a1ac9ec1f0.png)



* 建立完成後，會回到負載平衡器列表，最新建立負載平衡器會出現在最上方，按一下該列表進入負載平衡器內容頁面，等到狀態變成 「**ACTIVE**」 後，才可繼續編輯。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ea35b095d53eea05bcf32ebaab32654.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 負載平衡器建立好後，需將[<ins>虛擬運算個體連結至負載平衡器</ins>](#連結負載平衡器)，才能為您的服務發揮平衡流量的作用。
:::


### 負載平衡器管理
* 在負載平衡器管理頁面，點選負載平衡器列表，進入負載平衡器詳細資料頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ea35b095d53eea05bcf32ebaab32654.png)

* 進入負載平衡器內容頁面可檢視基本資訊及網路的連接設定，或執行「**編輯**」、「**删除**」、「**重新整理**」等功能。
* 負載平衡器建立好後，會產生一組 VIP (Virtual IP)，以供對外服務使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f43da94a737526ba3ec35622aac4c02c.png)



### 連結虛擬運算個體

* 進入負載平衡器管理頁面，點選欲連接的負載平衡器，點擊 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**編輯**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f1da10111b8e5edba97741e3289c7a3.png)


:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 當項目列表太多時，可善用搜尋欄，輸入關鍵字後即可快速找到所欲設定的負載平衡器。
:::

* 亦可從負載平衡器內容頁面，點擊「**編輯**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_01ba002698139a99fcdd1dd2ee7fcb86.png)



* 在編輯負載平衡器視窗，按一下「**新增伺服器**」，新增虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87350e9d536973d9941fd9262dea46d8.png)




* 輸入欲連接的虛擬運算個體**私有 IP** 及**連接埠**，例如：`192.xxx.xxx.xx:80`。
  再按一下「**新增伺服器**」繼續設定第二台虛擬運算個體的私有 IP 及連接埠。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_43008c707a2be6009ebfb65d3b23d8d7.png)



* 所有的伺服器都加入後，再點擊「**確認**」按鈕即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3193e67d59e971e317f8ec9fe20a3d62.png)




* 回到負載平衡器內容頁面，網路區塊中會出現已連結的個體 IP 位址，等到狀態變成 「**ACTIVE**」 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bda331274fdaf5296290f21f2ac5cf0b.png)



### 建立 SSL 憑證

* 點選左側「**SSL 憑證**」，在「**SSL 憑證管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bd2a82515b5a04f9a4b0781aa31598c.png)


* 輸入 SSL 憑證的名稱、描述及 Base64 編碼資訊 (PKCS#12 格式)，完成後點擊「**下一步：檢閱 + 建立>**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94c16cf15abbd26e42e7ff6869f55dac.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 目前 TWCC 僅支援建立 PKCS#12 格式的 SSL 憑證，請參考[<ins>HowTo：轉換 SSL 憑證格式</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-zh)。
:::

* 檢視 SSL 憑證的建立資訊，確定後點選「**建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ade1caffa03554d8eb14f031a453dfa5.png)



* 憑證建立後會出現在 SSL 憑證管理的列表中，當狀態顯示為「**Active**」即可在 HTTPS with SSL 的監聽器中選用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f77e7e47a585410d2df100933954846.png)


### SSL 憑證管理

參考[建立 SSL 憑證](#建立-SSL-憑證)將憑證建立好後，即可在建立應用程式負載平衡器時選用，亦可用將新建的憑證新增或更新到既有的應用程式負載平衡器中。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 目前 TWCC 僅支援建立 PKCS#12 格式的 SSL 憑證，請參考[<ins>HowTo：轉換 SSL 憑證格式</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-zh)。
:::

#### 新建 HTTPS with SSL 的應用程式負載平衡器

步驟同[建立負載平衡器](#建立負載平衡器)

- 類型：選擇應用程式負載平衡器
- 監聽器：協定請選擇 HTTPS with SSL，SSL 憑證請選擇已建立完成的憑證。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5af2bf64c02703ff200d04985278937.png)


#### 更新負載平衡器憑證

SSL 憑證有固定效期，您可以在憑證到期時，建立新憑證以更換過期的憑證：

* 進入負載平衡器詳細資訊頁面，點擊「**編輯**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c98c6339f017d217660a06d52ddc1bdf.png)


* 為已建立的 HTTPS with SSL 監聽器選取新建的憑證名稱，再點擊「**確認**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_63f61ef5ae2b846a58c0a7df25dc5af8.png)




* 更新後返回負載平衡器詳細資訊頁面，即可看到 SSL 憑證名稱，生效後狀態會變成 「**Active**」，即代表已成功更新 SSL 憑證。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fbf16e97e47eacd0436f3b61977efc74.png)



#### 删除 SSL 憑證

* 進入 SSL 憑證管理頁面，勾選欲删除的 SSL 憑證列表，再點擊上方的  「**删除**」按鈕即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2fbf0b28ee7acdc4ac63c10fffe58438.png)



:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  為確保 SSL 憑證的安全性，僅建立者本人可以檢視與使用自己建立的 SSL 憑證。
:::



## Auto Scaling

Auto Scaling 是一種自動彈性調整機制，本服務能夠在指定條件下動態增加或減少虛擬運算個體的數量，以因應負載增加自所造成的資源不足問題，提升服務效能並降低成本。

### 建立 Auto Scaling 範本
* 由服務列表點選「**Auto Scaling**」進入「**Auto Scaling 管理**」頁面，點擊「**＋建立**」
* 進入建立 Auto Scaling 頁面，輸入下列設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * 名稱：輸入 Auto Scaling 的名稱。
    * 描述：輸入 Auto Scaling 的描述，非必填。
    * Meter 名稱：選擇 Meter 名稱， 此為 Auto Scaling 判斷的依據，有 cpu_util、memory.usage、network.income.bytes.rate、network.outgoing.usage 四種選項。
　
    * 閥值上限：設定 Meter 的最高閥值。例如：若當 Meter 為 cpu_util 時, 此數值 80 即代表 CPU 的使用率超過 80% 時將增加 VM。
    * 閥值下限：設定 Meter 的最低閥值，低於此閥值時則會縮減 VM。
    * 虛擬運算個體最大上限：設定虛擬運算個體數量的最大上限，預設值為 2 （Auto Scaling 至少需 2 台虛擬運算個體）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14277f10af8a5e3b8302766ce8a2d34e.png)


* 檢視 Auto Scaling 的設定及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40995c8afb9d214fa7803cd3d1104f3e.png)

   
### Auto Scaling 管理
* Auto Scaling 管理頁面，剛建立好的 Auto Scaling 項目會列在最上方。點選 Auto Scaling 列表，可檢視 Auto Scaling 的設定資訊，或執行「**删除**」、「**重新整理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eaf8a350c20c81039ea8fad88434fa7a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ece2ede7d819aa178fe26e83c5d869b0.png)



### 在虛擬運算個體連結 Auto Scaling

*  進入「**虛擬運算個體**」服務，在「**虛擬運算個體管理**」頁面點選欲掛載的個體，進入虛擬運算個體詳細資料頁面，按一下 Auto Scaling 後的「**掛載**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99b746453c9f0124513deedebd69c295.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 虛擬運算個體的狀態必須為 **`Ready`** ，才可以掛載/移除 Auto Scaling。
:::

* 使用 Auto Scaling 需搭配負載平衡器，將流量分配到不同的虛擬運算個體上，以達成服務的高可用性。出現 Auto Scaling 設定視窗後，需選擇 Auto Scaling 的名稱、通知的連結服務、負載平衡器名稱及連接埠等資訊，設定好後按下「**確認**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d03c9e4b461fb632e16cc23ad7e9cdcc.png)


## 基礎虛擬防火牆

基礎虛擬防火牆服務提供簡單靈活的架構，在虛擬網路外創建防火牆，對網路內所有虛擬運算個體提供安全防護。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 此功能需租戶管理員權限才可使用。
:::

### 建立基礎虛擬防火牆

 * 進入「**基礎虛擬防火牆**」服務，在「**基礎虛擬防火牆管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d980c2ba500bb27a05baca13e6aadc4.png)


* 輸入名稱及描述，接著點擊「下一步：規則」。

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 若安全性群組規則已有建立所需的規則，您可先跳過此步驟。在選擇網路後，在進階規則選擇虛擬運算個體 IP，即可將安全性群組規則自動同步至防火牆。
:::


* 點擊「**建立規則**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe39865423400771cab01818a0fb9f53.png)



* 在建立基礎虛擬防火牆規則視窗輸入防火牆規則設定資訊，完成後點擊「**確認**」。
    * 名稱：輸入防火牆規則名稱
    * 動作：透過下拉選單選取所需的防火牆動作，例如：allow (允許)、deny (拒絕)、reject (拒絕並回應)
    * 協定：可選取 tcp、icmp、udp
    * 終端 IP：輸入終端主機的 IP 位址
    * 終端埠：輸入終端埠
    * 來源 IP：輸入來源的 IP 位址
    * 來源埠：輸入來源埠   
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc5e1fc63669854539bcc942eae82caf.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 若不設定終端 IP、終端埠、來源 IP、來源埠，系統將預設為 Any。
:::


* 回到「**基礎虛擬防火牆管理**」頁面，即可看到剛建立的規則，接著點擊「**加入排序**」。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b397f60dd7f204b8eeefa073ae5f3de.png)

    
* 加入排序後，防火牆規則會被加入到下方列表中。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3dce3f76176808f6f02972be6c72ae24.png)



* 重複以上的步驟建立更多防火牆規則，亦可點擊防火牆規則列表，選擇加入相同計畫中已建立的防火牆規則。
    

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47050a73ea93e08575f9ddc4c0c9c65c.png)



* 設定好規則後，可點選右側箭頭調整規則優先順序。完成後點擊「**下一步：網路**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04fb17026ec3bc7af4ac697b76270b74.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 排序越前面的規則，將覆寫排序後面的規則。
:::



:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 如未選擇任何防火牆規則，系統將預設防火牆規則為 deny all，拒絕所有流量。防火牆建立後，所有網段皆不可連線虛擬網路內已建立的的任一虛擬運算個體。
:::


* 選擇網路後，接著點擊「**下一步：進階規則**」，此步驟可將虛擬運算個體的安全性群組規則同步至防火牆，在防火牆也自動創建相對應的規則 (SyncRule)。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_faaeb1b8ab3bf7de05ae747e9d6f33d3.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 防火牆僅對選取的虛擬網路內之個體作用，若不使用此虛擬網路建立之個體，將不受此防火牆防護。
:::


* 在進階規則頁面內，會列出虛擬網路下所有的虛擬運算個體的私有 IP 列表。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e31cd502b22e931ab490d4c334637372.png)


* 點擊列表中的虛擬運算個體可查看此個體建立的安全性群組規則，勾選欲使用之規則的虛擬運算個體私有 IP，接著點擊「**下一步：檢閱+建立**」。      
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4e2cf4c55560f38e5cbab61881ac2939.png)


    
* 檢視欲建立的防火牆資訊，按下「**建立**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f6595ea73799e805dc34beb3244f434.png)

    
* 建立完成的防火牆會出現在虛擬運算防火牆管理列表的最上方，點擊該列表，可查看防火牆詳細資料或編輯規則。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_00cda3e43d970a8d3553cb7cc6a92bc1.png)

- 規格名稱包含 "SyncRule" 之規則，即是同步自安全性群組的規則。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f1da708e1126b12047b400b659bf733e.png)



    
### 編輯防火牆規則       

* 在「**基礎虛擬防火牆詳細資料**」頁面，點擊「**編輯規則**」，可改變規則的優先順序或是删除規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b2352610c7c8c90a5201169da971d29.png)



   
* 即可在「**編輯規則**」視窗中調整規則的順序或是新增、删除規則，編輯好後點擊「**確認**」。  
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a32c8b3217f41650022c5092fb565c8.png)



    
* 完成編輯後，防火牆的狀態會變成 **`PENDING_UPDATE`**。數分鐘後等狀態變成 **`ACITVE`**，即代表此防火牆設定已生效。    

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4fd245f3c9d0f43dd6e175dbd2939613.png)

    
## 安全性群組

TWCC 提供安全性群組功能，使用者可透過設定安全規則進行虛擬運算個體的網路安全控管，管理虛擬運算個體允許連入連出的網段、協定、連接埠。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 安全性群組功能是為各個虛擬運算個體設定個別的安全規則而設計，所以必須先建立至少一個可用的虛擬運算個體，才可以設定其安全群組規則。
:::

### 建立安全性群組規則

* 由服務列表點選「**安全性群組**」進入「**安全性群組管理 (虛擬運算個體列表)**」頁面，點選可用的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f04f72bff0227774bf9235dde798893c.png)


 
* 進入網路安全規則管理頁面，會顯示目前的網路安全規則，點擊「**＋建立**」，可創建新的規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7126649c13e5e7486bb82b599b32e18f.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
- TWCC Linux 個體預設開放的輸入/輸出規則：

| 方向 | 網路類型 | 連接埠 (最小) | 連接埠 (最大)| 協定|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |

- TWCC Windows 個體預設開放的輸入/輸出規則：

| 方向 | 網路類型 | 連接埠 (最小) | 連接埠 (最大)| 協定|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 9833     |9833 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 
因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國

若需連線 TWCC Windows 個體，請您與客服聯絡。
:::



* 進入「建立網路安全規則」頁面，填寫網路安全規則的設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
方向：選擇「ingress」輸入或「egress」輸出。
連接埠範圍(最小)：設定套用此規則開始的連接埠。
連接埠範圍(最大)：設定套用此規則結束的連接埠。
協定：選擇欲管控的協定如 tcp、udp、icmp... 等。
CIDR：指要套用此虛擬運算個體安全規則的 CIDR 網段。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87b3c97049604d4ec2dc19a42e771180.png)


* 檢視網路安全規則的設定資訊及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4afc32c6f387270b03609c0ca98bbbe1.png)

* 建立完成後，即可於安全性群組規則列表新增一項新的安全規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_799cc69d113e624f8905cd8cd8a58d39.png)



### 删除安全性群組規則
進入安全性群組規則管理頁面，於安全規則列表內選取欲刪除的網路安全規則，點擊 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，並點擊「刪除」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d828b2daf536c0e9e7d91cf301f7bab.png)


## 進階安全

TWCC 進階安全提供國際知名商用的新世代防火牆與威脅防護功能，以保護您在 TWCC 上的應用程式與資料安全。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 此功能需租戶管理員權限才可使用。
:::


### 建立進階安全

 * 進入「**進階安全**」服務，在「**進階安全**」管理頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_835f496bc2d6d8f0debf69154fe9c2f9.png)


* 輸入基本資訊，如名稱、描述、選擇模板（mail、web、ssh、rdp）、映像檔及硬體設定，接著點擊「**下一步：網路>**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_828661feb8744775260096c4611376e1.png)




* 選擇私有網路及信任網路，接著點擊「**下一步：密碼>**」。


:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 私有網路與信任網路請避免選擇相同的網路，否則防火牆將無法正常使用。
:::

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 更多資訊，請參考[虛擬網路](https://www.twcc.ai/doc?page=virtual_network)
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96586b388a7ec41c7058a48f27e217d9.png)




* 設定登入的密碼，接著點擊「**下一步：檢閱 + 建立>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f17ad41d26549c6d31722543dba1a323.png)




* 檢視建立進階安全的設定和預估使用額度，按下「**建立**」即完成。幾分鐘後等狀態變成 **Ready** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60136b287659e1a9ea5a1e5c562b76e1.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_290364b0731d02f7488653295605d0b3.png)



### 檢視進階安全詳細資料

* 在「**進階安全**」頁面，點擊欲檢視的項目列表，即可檢視詳細資料。點擊上方按鈕，可對此項目進行啟動、停止、刪除及重新整理。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0bc304b750b5acc2bf1d17055d18a2b.png)




### 登入 Web 管理介面 

* 在網路基本與進階防護詳細資料頁面（如上圖），點擊 WEB 管理介面連結，登入 Web 管理介面，帳號是 admin，密碼是在建立網路基本與進階防護時所設定的密碼。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0016b497215d208bbe9f0262dc1e06f3.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e81652b76b45dcbdf0928af3516c9af5.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 更多進階安全的防火牆使用方法，請參考[管理員指南](https://docs.paloaltonetworks.com/content/dam/techdocs/zh_TW/pdf/pan-os/8-1/pan-os-81-admin-guide-zh-tw.pdf)。
:::

<!-- 英文版：https://docs.paloaltonetworks.com/content/dam/techdocs/en_US/pdf/pan-os/8-1/pan-os-admin/pan-os-admin.pdf -->

## Web 應用程式防火牆

Web 應用程式防火牆服務，採用國際知名 Networks Web Application Firewall (WAF) 防火牆軟體，提供應用程式完善的安全防護機制。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 此功能需租戶管理員權限才可使用。
:::

### 建立 Web 應用程式防火牆

 * 進入「**Web 應用程式防火牆**」服務，在「**Web 應用程式防火牆管理**」頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea5ac8614e7970d9b7dbca2cd90ca96c.png)




* 輸入基本資訊，如名稱、描述、映像檔及硬體設定，接著點擊「**下一步：網路>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_30ba919575a5b2fea8525661c4d96635.png)




* 選擇欲使用的虛擬網路，接著點擊「**下一步：密碼>**」。
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 更多資訊，請參考[虛擬網路](https://www.twcc.ai/doc?page=virtual_network)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_21aa40489b432d0f9ebf92f0d17878bc.png)


* 設定登入的密碼，接著點擊「**下一步：檢閱 + 建立>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ce459aab7c7419642c0ff6b89d282356.png)



* 檢視建立 Web 應用程式防火牆的設定和預估使用額度，按下「**建立**」即完成。幾分鐘後等狀態變成 **`Ready`** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f36b499e935b34f4c9b4775c3d057da2.png)



### 檢視 Web 應用程式防火牆詳細資料

* 在「**Web 應用程式防火牆管理**」頁面，點擊欲檢視的項目列表，即可檢視詳細資料。點擊上方按鈕，可對此 Web 應用程式防火牆進行啟動、停止、刪除及重新整理。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68e7a8524e39d57cb9f6e5076f171801.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1759dda16f8ca1081620565012ddb451.png)


    
### 編輯防火牆保護對象
    
* 在 Web 應用程式防火牆詳細資料頁面，點擊「**編輯**」。  
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_103079c1e88af49097f15d4bb3397005.png)



* 出現「**編輯 Web 應用程式防火牆**」視窗後，選擇防火牆需保護的**伺服器**或**負載平衡器**，並設定密碼，設定好後點擊「**確認**」。 
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da8dae0cb85236af513cdb6d12eb6bfe.png)


### 登入 Web 管理介面 

* 在 Web 應用程式防火牆詳細資料頁面（如上圖），點擊 WEB 管理介面連結，登入 Web 管理介面，帳號是「**admin**」，密碼是您在建立 Web 應用程式防火牆時設定密碼。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40b9cc20bb4eb86e6b44d0e21e83bb3f.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b39f3e71997be661196d5a514c848142.png)

    
## 設定 NTP 自動校時

以下說明如何設定虛擬運算個體的特定時區，讓個體能自動校時：CentOS 的個體以原生命令設定時區； Ubuntu 的個體則以外部校時伺服器設定。

### CentOS 虛擬運算個體

- Step 1. 連線進入虛擬運算個體

- Step 2. 輸入以下指令，將時區設定為台灣時區
```bash=
sudo timedatectl set-timezone Asia/Taipei
```

- Step 3. 輸入以下指令，查詢虛擬個體的時區

```bash=
date
``` 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bf337c33ce4d5cbb947a978ff1c7888.png)


### Ubuntu 虛擬運算個體 (18.04 版本)

- Step 1. 連線進入虛擬運算個體

- Step 2. 輸入以下指令，更新套件

```bash=
sudo apt-get update
```
- Step 3. 輸入以下指令，安裝 NTP 套件

```bash=
sudo apt-get install -y ntp
```

- Step 3. 輸入以下指令，修改設定檔 :arrow_right: 再鍵入「i」進入編輯模式，將會看到以下畫面
```bash=
sudo vim /etc/ntp.conf
```
 :arrow_right: 將以下紅框空內容，在最前方輸入「#」隱藏一筆預設資料
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbd7b65b56cc9fdc0bca4e3a283f9bb2.png)


 :arrow_right: 並在下方依相同格式，輸入外部 NTP 伺服器 :arrow_right: 輸入完成後按下「esc」鍵離開編輯模式 :arrow_right: 輸入「:wq!」存檔離開
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6b3ee2a0904f453523459aca376aede.png)


- Step 4. 輸入以下指令重啟 NTP，以更新設定

```bash=
sudo systemctl restart ntp
```


### Ubuntu 虛擬運算個體 (16.04版本)


- Step 1. 連線進入虛擬運算個體

- Step 2. 輸入以下指令，安裝 NTP 套件

```bash=
sudo apt-cache policy ntp
sudo apt install -y ntp=1:4.2.8p4+dfsg-3ubuntu5
```

- Step 3. 輸入以下指令，修改設定檔 :arrow_right: 再鍵入「i」進入編輯模式，將會看到以下畫面
```bash=
sudo vim /etc/ntp.conf
```
 :arrow_right: 將以下紅框空內容，在最前方輸入「#」，隱藏四筆預設資料
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f521d88e5faa59dc9e3f0a481e55ef57.png)



 :arrow_right: 並在下方依相同格式，輸入外部 NTP 伺服器 :arrow_right: 輸入完成後按下「esc」鍵離開編輯模式 :arrow_right: 輸入「:wq!」存檔離開
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51eaafec0f88328c5688019a3eeecf0c.png)



- Step 4. 輸入以下指令重啟 NTP，以更新設定

```bash=
sudo systemctl restart ntp
```


## 對 Volume 與檔案加密
    
- [請參考連結內容](https://drive.google.com/file/d/1A6gdyL0lUMauygwM9cLtgU8GwbRpK36s/view?usp=sharing)  

## 外部資安資訊
- 建議定期瀏覽資安相關網站，例如： [TWCERT/CC台灣電腦網路危機處理暨協調中心](https://www.twcert.org.tw)、[行政院國家資通安全會報技術服務中心](https://www.nccst.nat.gov.tw/)，以獲得新的資訊安全相關訊息。
