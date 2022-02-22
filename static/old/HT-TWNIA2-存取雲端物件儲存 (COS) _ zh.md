---
tags: HowTo, COS, TWCC
title: HowTo：存取雲端物件儲存 (COS) | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# HowTo：存取雲端物件儲存 (COS)

:::success
<i class="fa fa-star" aria-hidden="true"></i> **適用情境：台灣杉二號 (命令列介面) 如何存取雲端物件儲存的資料？**

*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::

[ TWCC 台灣杉二號 (命令列介面) (TWNIA2 (HPC CLI))](https://www.twcc.ai/doc?page=hpc_cli) 除了可使用[高速檔案系統 (Hyper File System, HFS)](https://www.twcc.ai/doc?page=hfs) 作為運算的儲存空間外，也可將較少存取的靜態資料存放於 [TWCC 雲端物件儲存 (Cloud Object Storage, COS)](https://www.twcc.ai/doc?page=object)。

本文將介紹 2 種方式，教學 TWNIA2 (HPC CLI) 如何存取 [TWCC 雲端物件儲存 (Cloud Object Storage, COS)](https://www.twcc.ai/doc?page=object) 空間的資料：

1. **S3 用戶端工具**
    透過 HTTPS (超級文字傳輸安全協定) 上傳及下載檔案，使用者可以在**登入節點**，以及**提交 job 到計算節點時**使用。

2. **掛載為網路硬碟**
    採用 [FUSE (Filesystem in Userspace)](https://en.wikipedia.org/wiki/Filesystem_in_Userspace) 技術遠端掛載 COS 空間為網路硬碟，**僅限掛載於登入節點** (ln01.twcc.ai)。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
建議用戶優先考慮使用 **S3 用戶端工具**：

- 因 FUSE 技術掛載 COS，並非實際本機檔案系統，因此為避免資料流失，用戶**僅能上傳單一檔案** (可多檔讀取、下載)。
- 此外還有[<ins>諸多限制</ins>](https://github.com/s3fs-fuse/s3fs-fuse#limitations)，因此僅提供用戶在登入節點使用。
:::


您可依需求擇一使用，以下說明如何使用此 2 種方式。

## 1. S3 用戶端工具

S3 用戶端工具種類繁多，以下介紹的工具以 CLI 操作形式為主，您可依需求選擇使用，範例將採用 `TWCC CLI`、`S3cmd` 存取 COS 資料：
- **[S3cmd](https://github.com/s3tools/s3cmd)** 
  以 Python 撰寫，開發早且功能完整穩定，為最知名 S3 CLI 工具之一。
- **[TWCC CLI](https://github.com/TW-NCHC/TWCC-CLI)** 
  若已經熟悉 TWCC CLI，可以優先考慮使用，並可操作多項 TWCC 服務。
- 其他工具
    - **[Rclone](https://github.com/rclone/rclone)** : 
  可串接多種雲端儲存空間，在 TWCC 台灣杉二號與雲端物件儲存之間，適合小檔案的傳輸。
    - **[S5cmd](https://github.com/peak/s5cmd)** : 
  以 GO 語言撰寫，傳輸速度較 Python 撰寫之工具快，但功能無 S3cmd 完整。


### 安裝及設定

- 存取 TWCC 雲端物件儲存服務需輸入 **Access Key** 與 **Secret Key**。請登入至 [TWCC 使用者網站](https://www.twcc.ai/) > 雲端物件儲存服務頁面查看。
- 至`雲端物件儲存 (計畫成員共享空間)` 或 `私有雲端物件儲存 (個人空間)` 之**第三方軟體下載**頁面，即可找到 Key 資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5db9d1f9718fc6c8ed4dee7a4995bee4.png)

#### S3cmd
- **安裝**
```bash
# 使用 pip 安裝
$ pip install s3cmd --user
```
- **寫入金鑰**
```bash
# 可自行選擇熟悉 editor 寫入 ~/.s3cfg，這邊以 vim 為例
$ vim ~/.s3cfg
```

```bash
# 寫入內容
-----------------------
# Setup endpoint
host_base = cos.twcc.ai
host_bucket = cos.twcc.ai
use_https = True

# Setup access keys
access_key = <COS Access Key>
secret_key = <COS Secret Key>
-----------------------
```

#### TWCC CLI
- **安裝**
```bash
# 使用 pip3 安裝
$ pip3 install TWCC-CLI --user
```
- **如何加入金鑰、選擇計畫，進入 TWCC CLI 環境，詳情可參考 [TWCC CLI 文件](https://man.twcc.ai/@twccdocs/twcc-cli-v05#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99)**。


<!-- #### MCLI
- **安裝**

已預先裝於台灣杉二號，使用以下指令載入工具即可。

```bash
$ module load mcli
```

- **寫入金鑰**

加入金鑰，指令及參考範例如下。

```bash
$ mcli config host add twcc https://cos.twcc.ai <COS Access Key> <COS Secret Key>
``` -->

### 操作範例

每個範例動作，依序展示使用指令 `S3cmd`、`TWCC CLI` 的操作方式。

- **建立名為 `mytwccbucket` 的 bucket**
  
```bash
# for S3cmd
$ s3cmd mb s3://mytwccbucket

# for TWCC CLI
$ twccli mk cos -bkt mytwccbucket
```

- **上傳檔案**

先在 /home 目錄建立一個空檔案，檔名為 `myfile`
  
```bash
$ touch ~/myfile
```

複製檔案到 `mytwccbucket` bucket
  
```bash
# for S3cmd
$ s3cmd put ~/myfile s3://mytwccbucket/

# for TWCC CLI
$ twccli cp cos -bkt mytwccbucket -fn myfile -sync to-cos
```
- **查閱檔案**

查閱是否上傳成功
```bash
# for S3cmd
$ s3cmd ls s3://mytwccbucket/myfile

# for TWCC CLI
$ twccli ls cos -bkt mytwccbucket
```
- **刪除檔案**

刪除剛上傳的 myfile
```bash
# for S3cmd
$ s3cmd rm s3://mytwccbucket/myfile

# for TWCC CLI
$ twccli rm cos -bkt mytwccbucket -okey myfile
```
- **刪除 bucket**

請先確認 bucket 內無檔案，再刪除 bucket

```bash
# for S3cmd
$ s3cmd rb s3://mytwccbucket

# for TWCC CLI
$ twccli rm cos -bkt mytwccbucket
```

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 其他參數及說明：
- S3cmd
可以下 `$ s3cmd --help` 參考，或是查閱 [<ins>s3cmd GitHub</ins>](https://github.com/s3tools/s3cmd#simple-s3cmd-howto)
- TWCC CLI
可以下 `$ twccli --help` 參考，或是查閱 [<ins>TWCC CLI 文件</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#4-%E9%9B%B2%E7%AB%AF%E7%89%A9%E4%BB%B6%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99COS-Cloud-Object-Storage)
:::

## 2. 掛載

以下將介紹兩種掛載工具：[Goofys](https://github.com/kahing/goofys) 與 [S3fs](https://github.com/s3fs-fuse/s3fs-fuse)，您可依需求選擇。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 掛載方式僅能在登入節點 ln01.twcc.ai 使用。
:::


### 建立 COS bucket

- 請參考 TWCC [雲端物件儲存](https://www.twcc.ai/doc?page=object)手冊，並在使用者網站先建立 1 個 COS bucket。(Bucket 的管理無法透過 TWNIA2 操作)
- 登入 ln01.twcc.ai 後，在自己帳號下創立 `~/mount_cos` 資料夾：

```bash
$ mkdir -p ~/mount_cos
```


### 寫入金鑰

以下將建立資料夾 `~/.aws`，請複製 TWCC 網頁的 COS 金鑰字串，寫入 `~/.aws/credentials`。

可自行選擇熟悉 editor ，範例以 `vim` 為例：

```bash
$ mkdir -p ~/.aws
$ vim ~/.aws/credentials
```

寫入以下內容：

```bash
[default]
aws_access_key_id = COS Access Key
aws_secret_access_key = COS Secret Key
```


### [Goofys](https://github.com/kahing/goofys) 
- 以 Go 語言撰寫，效能佳，可優先考慮使用。


掛載指令:
```bash
$ goofys --endpoint https://cos.twcc.ai mytwccbucket ~/mount_cos
```

### [S3fs](https://github.com/s3fs-fuse/s3fs-fuse)
- S3fs為知名的 s3 掛載工具。

掛載指令：

```bash
$ s3fs mytwccbucket ~/mount_cos -o url=https://cos.twcc.ai/ -o use_path_request_style
```

### 存取方式

掛載完成後，只需在`~/mount_cos` 路徑之下讀寫，就能存取剛建立的 COS `mytwccbucket` 資料。

以下示範操作

```bash
# 寫入一個空檔案，檔名為 myfile
$ touch ~/mount_cos/myfile
```
此時在 TWCC 網頁的雲端物件儲存管理，點選`mytwccbucket`，可以查看到內容新增了`myfile`檔案。



### 卸載

請先離開掛載的資料夾，回到 /home 目錄。

```bash
$ cd ~/
```


再執行卸載指令。

```bash
$ fusermount -u ~/mount_cos
```

再執行以下指令，資料夾裡無檔案，即卸載完成。 

```bash
$ ls ~/mount_cos
``` 

