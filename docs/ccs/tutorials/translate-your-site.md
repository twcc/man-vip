---
sidebar_position: 13
---

# 使用 TWCC CLI 部署自動化 AI/ML pipeline


:::success **案例情境：是否有一套工作流程，可以自動建立容器、執行模型訓練、刪除容器？**
*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::

這篇文章將幫助使用者了解如何運用 TWCC CLI 及一台虛擬運算個體 (VCS)，將以下工作串接為自動化的流程 (pipeline)，提高工作效率並節省容器持續開啟的成本：

```
1. 建立容器
2. 執行訓練程式
3. 刪除容器
```

利用部署 pipeline 串接 TWCC 資源，您可將手動工作交由 script 自動化完成，在時間與人力上的安排會更加彈性，**且資源在執行完程式即自動刪除，運算所需的成本也會隨之降低。**

## 環境部署

本文範例將使用 TWCC 虛擬運算個體做為 local 端主機，已為使用者安裝 TWCC CLI，可快速執行部署容器自動化管理流程，您也可將 TWCC CLI 安裝於自己的電腦操作。

:::info **附註**
TWCC-CLI 安裝步驟與資源操作指令，可參考 [<ins>TWCC-CLI α</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05)。
:::

### Step 1. 建立虛擬運算個體
依照[建立虛擬運算個體](https://www.twcc.ai/doc?page=vm#%E5%BB%BA%E7%AB%8B%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)，在使用者網站建立一個虛擬運算務個體，設定請參考下方：

```
映像檔　：Ubuntu 20.04
基本設定：v.super
```

### Step 2. 啟用 TWCC CLI

請參考 [登入 TWCC CLI](https://man.twcc.ai/@twccdocs/doc-cli-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-cli-signin-zh) 啟用 TWCC CLI。

### Step 3. 安裝 jq
jq 是一個 JSON 格式的處理工具。TWCC CLI 資料都可轉換為 JSON 格式呈現，並可利用 jq 截取資料中某些欄位進行運用，相關文件可參考 [jq manual](https://stedolan.github.io/jq/manual/)。

- 輸入以下指令，安裝 jq：
```bash
sudo apt install jq
```


## SSH Without Password

一般 SSH 連線需要帶入金鑰或輸入密碼才能登入，因此將導致自動化過程停止無法繼續。

使用以下方法，建立一個容器並將虛擬運算個體的 SSH key 傳送至容器，往後即可略過帶入金鑰或輸入密碼的動作，直接登入容器。

### Step 1. 製作 SSH key
- 輸入以下指令，製作 SSH key
```
ssh-keygen -t rsa -n 4096
```

按 <kbd>Enter</kbd> 鍵略過以下三個問題

```bash
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f96f4eb15d06d0905bc8b51f66f4878e.png)

- 輸入以下指令，建立一個開發型容器

```bash
twccli mk ccs -gpu 1
```


### Step 2. 將 SSH key 帶入開發型容器
- 輸入以下指令，將 SSH key 帶入開發型容器

```bash
ssh-copy-id <USERNAME>@<CCS_IP> -p <PORT>

# <USERNAME> 主機帳號
# <CCS_IP>   開發型容器的公用 IP
# <PORT>     容器 SSH 的對外埠
```

- 首次將 key 放入容器，需請您輸入**主機密碼**，完成後虛擬運算個體對容器下指令就不再需要輸入密碼：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4aba0afaefcbda5d00554ed19da64eac.png)

:::info **附註**
[<ins>忘記主機密碼？</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
:::


### Step 3. 下載範例程式：GPU Burn 

本文使用 GPU Burn 程式做為操作範例，您可參考以下步驟，在進入容器環境後，載入所需的模型訓練程式，或直接[透過 SFTP + Filezilla ](https://www.twcc.ai/doc?page=hfs#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88) 將程式上傳至容器預設儲存空間 - 高速檔案系統。

- 輸入以下指令進入容器環境
```bash
ssh <USERNAME>@<CCS_IP> -p <PORT>

# <USERNAME> 主機帳號
# <CCS_IP>   開發型容器的公用 IP
# <PORT>     容器 SSH 的對外埠
```

- 下載範例程式 GPU Burn
```bash
git clone https://github.com/wilicc/gpu-burn.git
```

- 將程式編譯成可用的指令 (可略)

```bash
cd gpu-burn
make >> progress.log 2>&1
```

- 退出容器回到虛擬運算個體環境
 
```bash
exit
```

- 完成以上動作後，可刪除方才部署環境用的容器。請先列出所有容器，並找出容器 ID
 
```bash
twccli ls ccs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fdc83baa8f0a580a72f1bb4935802ba2.png)



- 刪除部署環境的容器
```bash
twccli rm ccs -f -s <SITE_ID>  

#<SITE_ID>  容器 ID
```

部署環境和載入執行程式完成囉！接下來即可開始製作並執行自動化建立容器、執行運算、刪除容器的 script。


## AI/ML pipeline script
自動化 AI/ML pipeline script 內容可分為 5 個步驟：

1. Create：建立容器運算資源。
2. Put Data：將相關檔案上傳至容器。
3. Execution：執行程式。
4. Collect Data：收集執行程式結果。
5. Garbage Collection：回收使用完的運算資源。

請參考下方步驟，製作和執行 pipeline script。

### Step 1. 製作 pipeline script
- 輸入以下指令編輯 pipeline script
```bash
vi AI_ML.sh
```

- 輸入`i` 進入編輯模式，將以下範例 script 貼入 `AI_ML.sh` 中。內容可依據您的運算程式修改，也可選擇建立規格更大的容器。

```bash
TWCC_CLI_CMD=/usr/local/bin/twccli

echo "1. Creating CCS"      # 建立開發型容器
TWCC_CLI_CMD mk ccs -gpu 1 -wait -json > ccs_res.log

CCS_ID=$(cat ccs_res.log | jq '.id')
echo "2. CCS ID:" $CCS_ID   # 開發型容器 ID

echo "3. Checking GPU"      # 確認 GPU 狀態
ssh -t -o "StrictHostKeyChecking=no" `$TWCC_CLI_CMD ls ccs -gssh -s $CCS_ID` "/bin/bash --login -c nvidia-smi"

echo "4. RUN GPU"           # 執行運算程式
ssh -t -o "StrictHostKeyChecking=no" `$TWCC_CLI_CMD ls ccs -gssh -s $CCS_ID` "cd gpu-burn;/bin/bash --login -c './gpu_burn 150'"
# 可依據您的程式，修改 "cd gpu-burn;/bin/bash --login -c './gpu_burn 150'"

echo "5. GC GPU"            # 刪除開發型容器
TWCC_CLI_CMD rm ccs -f -s $CCS_ID

echo "6. Checking CCS"      # 檢視容器狀態
TWCC_CLI_CMD ls ccs
```
- 按 <kbd>Esc</kbd> 鍵並輸入 `:wq!` 存檔。

:::info **附註**
* 步驟 **echo "4. RUN GPU"** 可依據您的程式，修改 `"cd gpu-burn;/bin/bash --login -c './gpu_burn 150'"` 此部分 script。
:::


### Step 2. 執行 pipeline script

- 輸入以下指令，執行 pipeline script：
```bash
bash AI_ML.sh
```

- Script 執行畫面如下，將會自動建立容器、執行 GPU burn 程式，並自動刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7581d2e73257db003cc6fcc2ae872d4e.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a441190039a6efb484ea9cb6bb5f9592.png)