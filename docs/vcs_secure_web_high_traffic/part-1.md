---
sidebar_position: 2
---
import TOCInline from '@theme/TOCInline';

# 第一部分：搭建網站服務架構

網站服務將由**負載平衡器**做為整體網頁架構的最前端，在使用者發起連線後，負載平衡器將會把使用者流量疏導至**後方的網頁伺服器**，並決定由哪一台伺服器提供網頁服務。

<TOCInline toc={toc} />

### Step 1. 建立前端負載平衡器

- 由服務列表點選「**負載平衡**」進入「**負載平衡器管理**」頁面，點擊「**＋建立**」
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7e75e34255e492c11ea7122aba0d3fd.png)

- 輸入負載平衡器設定資訊，完成後點擊「**下一步：檢閱+建立>**」<br/>
　1. 類型：選擇「**應用程式負載平衡器**」<br/>
　2. 監聽器： <br/>
　　a. 協定選擇 「**HTTP**」，連接埠設定 「**80**」，提供 HTTP 服務<br/>
　　b. 協定選擇 「**HTTPS with SSL**」，連接埠設定 「**443**」，提供 HTTPS 加密傳輸服務<br/>
　3. 平衡方法：選擇 「**ROUND_ROBIN**」<br/>
　4. 虛擬網路：選擇需架設負載平衡器的網段

:::caution
負載平衡器與 [Step 2](#Step-2-建立後方網頁伺服器，架設-NGINX-網頁服務) 的虛擬運算個體建立於相同虛擬網路上，才能發揮平衡流量之作用。
:::

:::info
TWCC 提供三種負載平衡器平衡方法：
1. **ROUND_BIN** (循環分配)：負載平衡器會輪流將使用者分配至不同伺服器，因每台伺服器權重皆相同，所以會照順序輪流提供使用者服務。
2. **LEAST_CONNECTION** (依連線數分配)：負載平衡器會偵測伺服器群，將使用者分配至連線數少的伺服器。
3. **SOURCE_IP** (依來源 IP 分配)：此模式是依來源位址（使用者的 IP），由負載平衡器來分配使用者至不同的網頁伺服器，在下一次進行連線時，系統會再重新分配。 
:::
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42cb4df35a247c39e34d7728cb4b06ff.png)


- 建立完成後，回到負載平衡器列表，請點選該筆平衡器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f9163f8b43bd366a88b426110ab75cd4.png)

- 進入詳細資料頁，等到狀態變成 **`ACTIVE`** 後，才可繼續編輯。
- **VIP (Virtual IP)**，**可申請 DNS 以對外提供給使用者，透過此 IP 使用您的網頁服務**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c8ac54118d4d0147631330cf651aa78.png)

### Step 2. 建立後方網頁伺服器，架設 NGINX 網頁服務

- 進入虛擬運算管理頁，建立名為 *lbssl01* 與 *lbssl02* 的兩台虛擬運算個體。

:::info
- 詳細虛擬運算個體建立步驟，請參考[<ins>虛擬運算服務</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)。
- 範例選用 **Ubuntu 映像** 檔建立，**虛擬網路和負載平衡選用相同網路**，請**開啟公用 IP** 供後續網站管理員維護使用，其他設定皆以預設資訊建立。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d4f2f49e5f6d8dca5b95e7211d24e557.png)

:::caution
您也可以在*lbssl01* 個體將網頁架設完成後，再使用[<ins>映像檔</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-vds-instance-image-zh)快速建立 *lbssl02* 網頁伺服器，節省應用程式重複安裝的成本。
:::

:::info
後續步驟將使用虛擬運算個體的私有 IP，請進入詳細資料頁面，並將此資訊記下來方便後續使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f0cfb8d596d4e72674ffa2913537fed.png)

:::

- 使用公用 IP 連線進入 *lbssl01* 與 *lbssl02* 個體後，分別使用以下 3 個指令，**將 2 台個體安裝 NGINX 架設網頁服務**：

:::info
1. 詳細虛擬運算個體連線步驟，請參考[<ins>連線虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-zh)。
2. 範例以 NGINX 做為架設網站的工具，您可以依需求安裝不同工具。
:::

```bash
sudo su
apt update
apt install -y nginx
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_356eef8571553c734c82ba43d4d33c46.png)
- 安裝好後，即可開始在 *lbssl01* 的個體，架設您的網頁，或依照範例輸入以下指令，編輯靜態網頁示意內容：
    
```bash
vim /var/www/html/index.nginx-debian.html
```
- 鍵盤按下 <kbd>i</kbd> 進入編輯模式，並將`\<h1>\</h1>`中間字串，改為 「**Hi, this is VCS lbssl01!**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a35c3a18c88ac9d6d8e77915f5060085.png)
- 再按下鍵盤 <kbd>Esc</kbd> 跳離編輯模式，並輸入 `:wq!` 與按下 <kbd>Enter</kbd>，存檔離開。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)
- 再輸入指令，重啟 NGINX

```
systemctl restart nginx
```
- 接著同樣以上述的步驟，修改 *lbssl02* 的內容，網頁顯示字串可以修改為不同的內容：「**Hi, this is VCS lbssl02!**」以利檢查負載平衡的作用。

### Step 3. 設定個體的安全性群組：開啟 80 連接埠

透過設定安全性群組，建立 80 連接埠，讓負載平衡器能串接後方網頁伺服器 (虛擬運算個體)、分配使用者的請求，並取得回覆傳送給使用者。

- 請點選左側「**聯網與資安**」> 「**安全性群組**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1770e397f5db929bb15ef6a3113fdb6d.png)

- 並點選建立的 *lbssl01* 個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b54eb467c3a00a9a248379b13455684b.png)

- 再點選進入個體的安全性群組，點選「**+建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1db8872b58bc054f1e07149e2a858444.png)
 
- 設定資訊
    1. **方向**：選擇「**Ingress**」(使用者從外部連線，進入此個體使用網頁服務)
    2. **連接埠範圍(最小)、連接埠範圍(最大)**：皆設定「**80**」(僅開放 80 連接埠，提供 HTTP 服務，網頁程式將自動將連線導向 443 連接埠，提供 HTTPS 網頁服務。)
    3. **協定**：選擇「**TCP**」
    4. **CIDR**：填入虛擬網路之 CIDR，確保同網段的負載平衡器可存取此個體<br/> 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_21b645ec6844d6adcd71f72f8f9f2581.png)
 
- 個體 *lbssl02*，也請依相同步驟新增 80 連接埠。
    
### Step 4. 將虛擬運算個體連結至負載平衡器

- 進入「**負載平衡器詳細資料頁**」> 點選「**編輯**」。
- 先將 *lbssl01* 個體 **`<私有IP>:<連接埠> (80)`** 資訊，新增到此負載平衡器 > 點選「**確認**」，完成設定。
:::caution
**此時請勿新增** *lbssl02* 至負載平衡器，請待 SSL 憑證申請完成後再新增。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cdd28b73c171b5801cf2a8e3d461f540.png)
