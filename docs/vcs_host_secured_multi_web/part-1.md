---
sidebar_position: 2
---
import TOCInline from '@theme/TOCInline';

# 第一部分：搭建同網域的網站服務

以下教學如何搭建兩個網站服務：建立虛擬運算個體、使用 Nginx 架設 2 個網頁服務，開啟個體 80 連接埠。

### Step 1. 建立虛擬運算個體

- 進入虛擬運算管理頁，建立一台名為 `virtualhost` 的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_49af40e14447056a7f51c2af26ffd7c0.png)

:::info
- 詳細虛擬運算個體建立步驟，請參考[<ins>虛擬運算服務</ins>](https://www.twcc.ai/doc?page=vm&euqinu=true#%E5%BB%BA%E7%AB%8B%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)。
- 範例選用 **Ubuntu 20.04** 映像檔建立 **(此文件不支援 Ubuntu 16.04)**，請**開啟公用 IP** 供後續網站管理員維護使用，其他設定皆以預設資訊建立。
:::

### Step 2. 建立網頁伺服器，架設 Nginx 網頁服務

使用公用 IP 連線進入個體後，分別使用以下 3 個指令，安裝 Nginx 架設網頁服務：

:::info
- 詳細虛擬運算個體連線步驟，請參考[<ins>連線虛擬運算個體</ins>](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)。
- 範例以 Nginx 做為架設網站的工具，您可以依需求安裝不同工具。
:::

```bash
sudo su
apt update
apt install -y nginx
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_356eef8571553c734c82ba43d4d33c46.png)

- 建立兩個根目錄資料夾，未來將分別放入不同的網站服務內容

```bash
cd /var/www/html
mkdir service1
mkdir service2 
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f4a75bc450074531c8919cfb6e4697af.png)

- 執行以下內容，編輯網頁資料
 
```bash
vim /var/www/html/index.nginx-debian.html
```
- 鍵盤按下 <kbd>i</kbd> 進入編輯模式，並將`<h1> 與 </h1>`中間字串，改為 「**Hi, this is VCS Service 1!**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aecda0f46fd5ebf2ef6f55463cbed710.png)


- 再按下鍵盤 <kbd>Esc</kbd> 跳離編輯模式，並輸入 `:wq!` 與按下 <kbd>Enter</kbd>，存檔離開。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- 接著執行以下指令，將網頁檔案移至 `service1` 資料夾下 > 進入 `service1` 資料夾 > 將檔案複製至 `service2` 資料夾 > 編輯 `service2` 的網頁檔案

```
mv index.nginx-debian.html service1
cd service1
cp index.nginx-debian.html /var/www/html/service2/
vim /var/www/html/service2/index.nginx-debian.html
```

- 鍵盤按下 <kbd>i</kbd> 進入編輯模式，並將`<h1>與</h1>`中間字串，改為 「**Hi, this is VCS Service 2!**」

![](https://i.imgur.com/vWAiU1N.png)

- 再按下鍵盤 <kbd>Esc</kbd> 跳離編輯模式，並輸入 `:wq!` 與按下 <kbd>Enter</kbd>，存檔離開。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- 更改 Nginx 設定檔，設定網站根目錄的路徑：在`root /var/www/html` 後方加上網頁資料夾名稱，如範例 `service1` 。
```
vim /etc/nginx/sites-available/default
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3360ec80ec2af839bf8b4c6d0cea62d.PNG)

- 再按下鍵盤 <kbd>Esc</kbd> 跳離編輯模式，並輸入 `:wq!` 與按下 <kbd>Enter</kbd>，存檔離開。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- 重新啟動 Ngix

```
systemctl restart nginx
```
### Step 3. 設定個體的安全性群組：開啟 80 連接埠

透過設定安全性群組，建立 80 連接埠，讓服務使用者可以成功訪問服務。

- 請點選左側「**聯網與資安**」> 「**安全性群組**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22ac1a1d24dbe8ce74cb82831ca8c706.png)


- 並點選建立的 **virtualhost** 個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_511f118d2982327ffbba67b52484c755.png)


- 再點選進入個體的安全性群組，點選「**+建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_011613e49d548d34c3f1937a2c8ef3db.png)

- 設定資訊
    1. **方向**：選擇「**Ingress**」(使用者從外部連線，進入此個體使用網頁服務)
    2. **連接埠範圍(最小)、連接埠範圍(最大)**：皆設定「**80**」(僅開放 80 連接埠，提供 HTTP 服務，網頁程式將自動將連線導向 443 連接埠，提供 HTTPS 網頁服務。)
    3. **協定**：選擇「**TCP**」
    4. **CIDR**：填入 CIDR，這裡以 0.0.0.0/0 作為範例，若有限制連入網段需求，請自行設定。<br/> 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0d24db55d6ac0ab5eb67d166325729a.png)

### Step 4. 確認開通 80 連接埠 

- 複製虛擬運算個體的公有 IP

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7a177b11c31e1b184dc9434378f194da.png)

- 將公用 IP，輸入瀏覽器網址列，確認有成功開通 80 連接埠

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8bb77232c2a6d01f93eab6fa3ed8ce0e.png)