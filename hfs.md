---
title: HFS 高速儲存服務
tags: Guide, HFS, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
:::warning
<i class="fa fa-bullhorn" aria-hidden="true"></i> 若您的 [<ins>Service 會員服務系統 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh)不適用以下畫面或流程，請 <i class="fa fa-sign-out" aria-hidden="true"></i> [<ins>點擊此連結</ins>](https://man.twcc.ai/@twsdocs/guide-hfs-zh) 參考操作說明。
:::

# HFS 高速檔案系統

高速檔案系統（Hyper File System，以下簡稱 HFS） 為可擴展、高效能的平行檔案系統，允許在不同節點上同時存取同份文件或不同份文件並可提供高速安全的資料儲存，為容器服務及 HPC 高速運算任務、台灣杉二號提供高效、安全及彈性之資料存取與串接。

## HFS 簡介

### 可使用 HFS 的服務項目 

在 [TWCC](http://www.twcc.ai) 上 HFS 會被同時掛載到所有 GPU 節點的相同目錄下，因此，當使用者透過檔案傳輸節點將檔案上傳至 HFS 後，即可透過 [TWCC](http://www.twcc.ai) 提供的**開發型容器服務**、**任務型容器服務**及 **HPC 高速運算任務服務 (網頁介面、命令列介面)** 存取 HFS 檔案系統中的內容。此三項服務的預設儲存系統為 HFS，因此一連線容器、HPC 高速運算任務，就可以直接使用 HFS 的資料。

### HFS 檔案傳輸節點資訊

本服務提供一個 HFS 檔案傳輸節點（data transfer node），並掛載 /home 與 /work 兩個路徑。系統提供的 HFS 檔案傳輸節點、掛載路徑與免費配額等資訊如下，未來如空間不敷使用時，亦可到 [Service 會員服務系統 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) 購買擴充。

:::info
:paperclip: **附註：** 購買價格與調整方式請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS)
:::



| 項目 | 內容 |
| -------- | -------- |
| HFS 傳輸節點|xdata1.twcc.ai| 
| HFS 埠號| 22|


|掛載路徑|免費配額大小|
 | -------- |-------- |
|/home/<主機帳號名稱>|100 GB|
|/work/<主機帳號名稱>|100 GB|


## 使用 SFTP + Filezilla 傳輸檔案

使用主機帳號登入 HFS 檔案傳輸節點，可將檔案以 SFTP 協定上傳至 HFS 檔案系統中，亦可將檔案從 HFS 中下載到本地端。以下範例說明如何使用 SFTP 上傳檔案。

以下以 Windows 作業系統 + [FileZilla](https://filezilla-project.org) 為例 (macOS 也是類似的操作步驟)

### Step 1. 連線、登入服務 

- TWCC 開發型容器服務的使用者，可透過 Jupyter Notebook 或 SSH 連線容器
- TWCC 任務型容器、HPC (網頁介面、命令列介面) 的使用者，可透過 HPC (命令列介面) 登入節點

:::info
:paperclip: **附註：** 
登入方法參見：
- [開發型容器](https://www.twcc.ai/doc?page=container&euqinu=true#%E9%80%A3%E7%B7%9A%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F) - 連線使用方式
- [HPC (命令列介面)](https://man.twcc.ai/s/B15nJXe-B#2-%E7%99%BB%E5%85%A5%E3%80%8C%E7%99%BB%E5%85%A5%E7%AF%80%E9%BB%9E%E3%80%8D) - 登入「登入節點」
:::

### Step 2. 儲存 SSH 私密金鑰至本機

- 登入後，輸入以下指令讀取 SSH 私密金鑰

```bash=
 cat ~/.ssh/id_dsa
```
- 以登入 TWCC 開發型容器 Jupyter -> Terminal 為例

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ce21b053250616fd41773cfbc967439.png)



- 以登入 TWCC HPC login node ln01.twcc.ai 為例

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f3a72aa7738fe630090f7f771a0e88a9.png)


- 儲存 SSH 私密金鑰到本機，複製紅色部分全部，開啟記事本貼上 (需包含頭尾資訊)

:::info
:paperclip: **附註：** macOS：可使用「文字編輯」軟體
:::
   
```bash=
-----BEGIN DSA PRIVATE KEY----- (這行也需複製)
...
...
-----END DSA PRIVATE KEY----- (這行也需複製)
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e417c2dcdb8ba67f5e68fdefb344b739.png)


- 將記事本存檔：檔案位置與檔案名稱不限，副檔名需為`.ppk`，存檔類型請改為`所有檔案`。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_688acdfd3df164086cbc28988fcbfabb.png)



### Step 3. 以 FileZilla + 金鑰登入「資料傳輸節點」

- 點選左上角站台管理員、左下方新增站台，跳出如下圖的選單
- 輸入及選擇，參考下圖

```
協定： SFTP
主機： xdata1.twcc.ai

登入型式： 金鑰檔案
使用者 ： 主機帳號
金鑰檔案： 金鑰檔案的路徑
```
- 點選「連線」，即可登入成功


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eefc4f0425480f57ea6e4b0585968cb1.png)



- 登入成功後，右側「遠端站台」即為 HFS 檔案系統內之資料，左側「本機站台」為您本機的資料。
- 預設目錄即為使用者的 /home 目錄，下方為 /home 目錄底下的資料。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e69ea54b6ed112035eeee732fdda0016.png)



### Step 4. 檔案管理

#### 切換目錄

- 於「遠端站台」將路徑「home」改為「work」即可將目錄切換至 /work 目錄

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cdea3f3d2f708c23435e543ba88155fc.png)




#### 上傳與下載檔案

- 可以「拖曳的方式」將本機檔案上傳至 HFS，或由 HFS 下載檔案至本機
- 左下方提供資料傳輸的資訊

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cefd531e8baa06876fae839a389938db.png)



#### 刪除檔案

- 對檔案點擊右鍵，選擇「刪除」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbcf9a302cfe158ed7d78e56b9e851be.png)




#### 新增資料夾

- 對目錄空白處點擊右鍵，選擇「新增目錄」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3e84de7c4d35a5bda347e9a16923925a.png)




## 查看容量

- 登入 TWCC 後，點入「查看服務概況」，即可查看 HFS 儲存容量

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ecfc2af35309f3f7c47dcc76a9a8b86.png)


- 可分別檢視 Home、Work 目錄總儲存容量、已使用與可使用的容量，並區分免費與加購之容量

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a75b2e797810090b393de250d96dc0ca.png)




## HFS 空間管理政策

### 個人及公用磁碟核定空間
- /home 目錄：每個帳號之家目錄 (註冊帳號即可獲得 100 GB 免費空間)
- /work目錄 ： 每個帳號之公用目錄 (註冊帳號即可獲得 100 GB 免費空間)

:::info
:paperclip: **附註：** 如不敷使用時，敬請付費提出加大儲存空間之申請（/home、 /work ) ，
申請說明請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS) 
:::

### 公用磁碟空間管理政策與使用須知
- 公用磁碟空間 (/work) 為計算工作短期暫存之用，若需長期保留，請將檔案移至國網中心 TWCC 其它儲存服務。
- 國網中心不會對公用磁碟空間做任何備份，若系統毀損或檔案刪除皆無法復原。
- 公用磁碟空間上的檔案用戶需自行備份保留，若發生檔案毀損、遺失或刪除，本中心不負任何還原或賠償責任。
- 為確保用戶有足夠的暫存空間完成計算工作，系統會自動清除超過28天以上未存取的檔案。
- 用戶不得意圖規避系統清理政策，禁止使用指令或程式 (如touch或其他作用類似的 command、script) 變更檔案最後存取時間，此行為將嚴重影響公用磁碟空間效能。
- 國網中心公用磁碟空間為高性能貴重研究設施、僅限於有關高速計算之目的使用，禁止存放與高速計算目的無關之私人用途檔案。
- 若發現用戶違反前述禁止事項並屢勸不改，國網中心有權暫停用戶對該檔案系統的存取權限，若因而造成用戶計算中斷、資料遺失或其他衍生損失，本中心亦不負任何賠償責任。
- 登入節點與檔案傳輸節點的/tmp 應避免存放重要資料。/tmp 儲存空間內的用戶暫存檔案，存放超過14天(含)以上會被系統自動刪除，當/tmp超過50%使用率時，中心將會通知占用容量的檔案擁有者搬移或刪除。

:::info
:paperclip: **附註：** 
查看檔案最後存取時間的指令為：
```bash=
ls -ula /path/to/your_scratch_file or directory
```
:::
   
- 個人磁碟空間(/home )、 公用磁碟空間(/work ) 備份政策
    

| /Home | /Work |
| -------- | -------- |
| 備份政策 :white_check_mark: | 備份政策 :negative_squared_cross_mark:|
| 檔案清理政策 :negative_squared_cross_mark:  | 檔案清理政策：28天 (免費或付費空間均須遵守)、禁止 touch |


<!-- 
## 使用 SFTP 


透過 [iService](https://iservice.nchc.org.tw) 註冊的主機帳號登入 GPFS 檔案傳輸節點，可將檔案以 SFTP 協定上傳至 GPFS 檔案系統中，亦可將檔案從 GPFS 中下載到本地端。以下範例說明如何使用 SFTP 上傳檔案。

### 登入 SFTP
* 開啟命令提示字元視窗，依照以下範例輸入 SFTP 主機登入資訊。登入的帳號及密碼為 [iService](https://iservice.nchc.org.tw) 中所設定之主機帳號與密碼。
* 成功登入 SFTP 互動模式後即可開始使用，輸入 help 可查詢常用的指令。

<div style="background-color:black;color:white;padding:20px;">
C:\Users\Janice_Chiang>sftp janice2019@xdata1.twcc.ai

janice2019@xdata1.twcc.ai's password:
Connected to xdata1.twcc.ai.
sftp>

</div>

### 查詢目前路徑與檔案
* 分別以 pwd 與 lpwd 取得伺服器端與本地端的目前路徑

<div style="background-color:black;color:white;padding:20px;">

sftp> pwd
Remote working directory: /home/janice2019
sftp> lpwd
Local working directory: C:\Users\Janice_Chiang
sftp>
</div>


* 更改本地端目錄，列出目錄下的檔案
    
<div style="background-color:black;color:white;padding:20px;">

sftp> lcd d:\testdata
sftp> lls
 磁碟區 D 中的磁碟是 DATA
 磁碟區序號:  7230-EBC6

 d:\testdata 的目錄

2019/05/22  下午 03:30    <DIR>          .
2019/05/22  下午 03:30    <DIR>          ..
2019/05/22  下午 03:26            25,741 logo.png
               1 個檔案          25,741 位元組
               2 個目錄  676,444,684,288 位元組可用
</div>

### 上傳檔案

* 將 logo.png 上傳至 /home/janice2019 下，即 GPFS 掛載點子目錄中。

<div style="background-color:black;color:white;padding:20px;">

sftp> put logo.png
Uploading logo.png to /home/janice2019/logo.png
logo.png

sftp> ls
logo.png

</div>

### SFTP 常用指令

以下列舉常用的 SFTP 指令供參考：

| 指令 | 說明 | 
| -------- | -------- |
| bye 或 exit 或 quit     | 結束 SFTP     |
| cd     | 變換遠方端伺服器的目錄     |
|chmod|更改檔案或目錄的權限|
|del 或 rm|刪除檔案|
|dir 或 ls|列出遠方端伺服器目錄下的檔案名稱|
|get|下載檔案|
|put|上傳檔案|
|open|連接主機|
|lcd|變換本地端機器的目錄|
|lpwd|列出本地端機器目前所在的目錄名稱|
|pwd|列出遠方端伺服器目前所在的目錄名稱|
|mkdir|新增一個遠方端伺服器的目錄|
|rmdir|刪除遠方端伺服器的目錄|
