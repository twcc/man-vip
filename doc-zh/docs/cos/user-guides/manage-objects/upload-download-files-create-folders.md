---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-upload-download-files-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-upload-download-files-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 上傳、下載檔案、建立資料夾

:::tip
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](../../overview.md) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](../../overview.md) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](../../../category/使用第三方軟體管理檔案) 操作。
:::


## 上傳檔案

將您本地端的檔案上傳至雲端物件儲存體：

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


* 進入儲存體的內容頁面，點擊「**上傳**」。

![](https://i.imgur.com/p35M2hQ.png)



* 出現上傳檔案視窗後，可以直接**拖曳檔案或資料夾**或點擊「**選擇檔案**」。

![](https://i.imgur.com/5OELjU4.png)



* 選擇好欲上傳的檔案後，可勾選左上「**加密**」將檔案使用金鑰加密。完成後，點擊「**上傳**」。

:::info
更多檔案加密說明，請參考：[<ins>檔案加密</ins>](file-encryption.md)。
:::

![](https://i.imgur.com/fCSF7DS.png)


    
* 出現上傳完成後提示後點擊「完成」。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9bcdf1d73e3d33fe0fcbc8ac42fcfb24.png)


:::tip
檔案上傳限制：單一檔案不得超過 1GB，總檔案數不得超過 1000，如欲上傳更大更多的檔案，可透過左側功能列之「第三方軟體下載」。
:::

  </TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">


:::tip
上傳檔案可藉『相對路徑』、『絕對路徑』擷取資料傳入儲存體<br/>
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66f6bc7fd0b69de7274d2a3251a5a817.png)
:::


#### 上傳單一檔案 `-sync to-cos`

- 自當前路徑上傳單一檔案(檔名：`testfile1`)
- 並利用檢視指令確認檔案是否成功上傳目標儲存體`bk_cli`

```bash
twccli cp cos -bkt bk_cli -fn testfile1 -sync to-cos
twccli ls cos -bkt bk_cli
```


- 自相對路徑上傳單一檔案(檔名：`test1`)至目標儲存體 `testf1/` 目錄下

```bash
twccli cp cos -bkt bk_cli -dir testf1/ -fn test1 -sync to-cos
```

- 上傳相對路徑資料夾的所有檔案(資料夾：`testf2`) 至目標儲存體 

```bash
twccli cp cos -bkt bk_cli -dir testf2 -sync to-cos
```


  </TabItem>
</Tabs>

## 下載檔案

將雲端物件儲存體之檔案下載至您的本地端：

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


* 在儲存體的內容頁面，勾選欲下載的檔案後點擊列表上方的「下載」按鈕。

:::tip
目前一次僅能下載一個檔案，如欲下載多個檔案，可透過左側功能列之「第三方軟體下載」。
:::    
    

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89160860cbe9de11aabbe75ff2a718bc.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">


- 自儲存體下載單一檔案(檔名:`testfile1`)至當前資料夾
- 並檢視是否下載成功

```bash
twccli cp cos -bkt bk_cli -okey testfile1 -sync from-cos
twccli ls cos -bkt bk_cli
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_139476a0ef51c83f649a32e43a8feb3a.png)

<!--


- 自儲存體下載一檔案(檔名:`testfile2`)至指定目錄`download`

```bash=
twccli cp cos -bkt bk_cli -dir ./ -fn testfile2 -sync from-cos
```
-->

    

- 下載整包儲存體至指定目錄 
- 並檢視是否下載成功
```bash
twccli cp cos -bkt bk_cli -dir download/ -sync from-cos
twccli ls cos -bkt bk_cli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a7d7d0ece77cba4025908f4c48453de6.png)


  </TabItem>
</Tabs>
    


## 建立資料夾

您可以建立資料夾管理您的檔案：

<!-- 1 start -->


<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>

* 在儲存體的內容頁面，點擊「**建立資料夾**」，輸入資料夾名稱後按「**確定**」，即建立成功。
    

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94ccd09b44b8a0058821e9f279dcb5f8.png)

:::info
TWCC 入口網站最多僅能顯示 1000 筆資料 (儲存體、資料夾、檔案)，若需檢視完整資料，請使用 TWCC CLI 或第三方軟體。
:::


  </TabItem>
</Tabs>
