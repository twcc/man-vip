---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-hfs-share-files-between-user-accounts-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-hfs-share-files-between-user-accounts-zh'
---

# 跨帳號分享 HFS 檔案

此篇文章教學如何在不同帳號之間互相分享 HFS 檔案，您可以：

1. 上傳並透過 TWCC COS 分享
    - 其他用戶空間藉由檔案 URL 下載至其空間 
    - 其他用戶可將 COS 掛載方式存取 (共享資料夾、網路硬碟) 
2. 開放 HFS 檔案權限

請參考以下步驟操作，步驟區分「分享者」如何分享檔案與「其他用戶」如何存取檔案：
 
## 1. 上傳並透過 TWCC COS 分享檔案

<b>Step 1. 將檔案上傳至 TWCC COS (分享者)</b>

分享者可透過 [S3 用戶端工具或掛載 COS 的方式](https://man.twcc.ai/@twccdocs/howto-twnia2-access-cos-zh)，將 HFS 檔案上傳至 COS；或 [將 HFS 檔案備份/同步至 COS](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fcosbackup-zh#s3cmd%EF%BC%9A%E9%81%A9%E7%94%A8-VCS-%E5%80%8B%E9%AB%94-Linux%E3%80%81CCS-%E5%AE%B9%E5%99%A8)。


後續步驟區分以下兩種方式進行：

<details class="docspoiler">

<summary><b>其他用戶空間藉由檔案 URL 下載至其空間</b></summary>

<b>Step 2. 取得檔案 URL (分享者)</b>

透過第三方軟體取得檔案 URL，並將 URL 分享給其他使用者
    
(以下以 Cyberduck 為操作範例)

> ![](https://i.imgur.com/VuuWRhK.png)


> ![](https://i.imgur.com/Pklqlw4.png)


<b>Step 3. 將檔案下載自其空間 (其他用戶)</b>

自分享者取得檔案 URL後，輸入以下 `wgwt` 指令即可將檔案下載至其空間 (台灣杉二號 (命令列介面)、虛擬運算個體或容器)
    

```
& wget <COS file URL> 
```
    

    
</details>

<div style={{height:8+'px'}}></div>

<details class="docspoiler">

<summary><b> 其他用戶可將 COS 掛載方式存取 (共享資料夾、網路硬碟) </b></summary>

<b>Step 2. 將 COS 掛載至 TWNIA2  (其他用戶)</b>

其他用戶請參考 [<ins>此篇文章</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-access-cos-zh) 將分享者的 COS 儲存體視為網路硬碟或共享資料夾，掛載至您的 TWNIA2 （登入節點）或虛擬運算個體後，即可存取使用。
    
    
</details>


## 2. 開放 HFS 檔案權限
    
以下利用檔案系統支援的 ACL (Access-control list) 進行 HFS 檔案/目錄 權限開放設定，分享者可透過登入台灣杉二號 (命令列介面) 輸入指令操作。

:::caution   
- 此為進階分享方法，設定錯誤容易造成資料外洩。考量資安問題，較建議您使用上述方法，透過 COS 分享檔案。
- 此方法僅開放檔案權限，非轉移檔案。因此開放權限後，檔案容量仍佔用分享者的儲存空間。
- 請先連線進入登入節點，以執行開放檔案權限設定。
:::

:::info    
參考資料：[<ins>國網中心</ins>](https://iservice.nchc.org.tw/nchc_service/nchc_service_qa_single.php?qa_code=662)
:::
    
### UNIX 檔案權限說明

使用 `ls -l` 指令，可以檢視檔案的資訊，其中第一欄表示 Owner、Group、Other (非 Owner 或 Group) 對於該檔案/目錄，所具有的權限，舉例：`-rw-r--r--`，說明如下：

| 第 1 欄 | 第 2~4 欄| 第 5~7 欄| 第 8~10 欄|
| -------- | -------- | -------- | -------- |
| `-`：檔案 (`d`: 目錄)    |Owner 具 r、w、x 權限   | Group 具 r 權限    |Other 具 r 權限|


### 設定 ACL 權限
    
```
setfacl [-bkRd] [{-m|-x} ACL參數] 目標檔名
```

#### 指令
    
- `setfacl`：設定/移除 檔案/目錄 的 ACL 權限

#### 參數
 
- `-m` ：設定後續的 ACL 參數給檔案使用，不可與 `-x` 合用；
- `-x` ：刪除後續的 ACL 參數，不可與 `-m` 合用；
- `-b` ：移除『所有的』 ACL 參數；
- `-k` ：移除『預設的』 ACL 參數，關於所謂的『預設』參數於後續範例中介紹；
- `-R` ：遞迴設定 ACL，亦即包括次目錄都會一同設定；
- `-d` ：設定『預設 ACL 參數』。只對目錄有效，在該目錄新建的資料會引用此預設值
    
#### 使用者、群組

- `-u`：對特定使用者設定權限 (後接主機帳號)
- `-g`：對所有特定計畫成員設定權限 （後接計畫代碼）

#### 權限種類
    
- `r`：讀取權限
- `w`：修改、寫入權限
- `x`：`執行某檔案 或 `進入某目錄` 的權限

    
### 操作範例
#### 1. 設定 檔案/目錄 ACL 權限 (分享者)
    
- 分享「檔案」之 `讀取`及`修改` 權限給指定主機帳號
    
```
setfacl -m u:<主機帳號>:rw <目標檔案>
```

- 分享「主機帳號的家目錄」`讀取`及`執行` 權限至指定計畫群組
```
setfacl -m g:<計畫代碼>:rx /home/<主機帳號>
```
:::info    
由於開啟資料夾需要執行權限，故需要加入執行權限 `x` 參數。
:::

#### 2. 確認檔案已設定 ACL 權限 (分享者)
    
- 若權限設定成功，權限欄位將會出現`+`號
    
```
ls -ald /path/<目標檔案 or 目錄> 
```
    
    
![](https://i.imgur.com/59x20QD.png)


#### 3. 檢視檔案/目錄 ACL 權限 (分享者)

```
getfacl <目標檔案 or 目錄>
```

輸入後您將會取得以下檔案/目錄的權限資訊：

```
# file: path/file
# owner: <檔案擁有者主機帳號>
# group: <檔案擁有者初始計畫代碼>
user::rwx 
user:<主機帳號>:rwx (給予目標主機帳號的權限)
group::---
group:<計畫代碼>:r-x (給予目標計畫的權限)
mask::r-x
other::--- 
```
    
#### 4. 存取檔案 (其他用戶)
    
其他用戶於指令列 `cd` 至分享者的主機帳號，即可存取開啟權限的檔案與目錄
    
```
cd <分享者主機帳號> 
```


#### 5. 移除檔案/目錄 ACL 權限 (分享者)
    
若檔案、目錄不再分享，執行以下指令即可移除檔案/目錄所有的權限
    
    
```
setfacl -b <目標檔案 or 目錄>
```
