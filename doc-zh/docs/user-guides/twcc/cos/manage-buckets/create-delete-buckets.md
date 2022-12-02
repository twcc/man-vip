---
sidebar_position: 1
sidebar_label: '建立、刪除儲存體'
slug: '/user-guides/twcc/cos/create-delete-buckets'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-create-delete-bucket-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-create-delete-bucket-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立、刪除儲存體

:::tip
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](../../overview.md) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](../../overview.md) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](../../../category/使用第三方軟體管理檔案) 操作。
:::

## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWCC](https://www.twcc.ai/)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://www.twcc.ai/)。
- 若選擇使用 TWCC CLI 操作，請先<a href="https://github.com/twcc/TWCC-CLI" target="_blank"><ins>安裝 TWCC CLI</ins></a>、並<a href="https://github.com/twcc/TWCC-CLI" target="_blank"><ins>登入</ins></a>。


## 建立儲存體

儲存體建立後，即可將您的檔案上傳至儲存體，並可建立資料夾管理檔案。

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


    
* 從服務列表選擇「**雲端物件儲存**」，進入雲端物件儲存管理頁面後，點擊「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_06609da5863d45a3b4ba6f9b52ed639e.png)



* 輸入儲存體名稱後按「**確定**」。 請注意：儲存體名稱必須是唯一的；請填入 1~16 個字元以內的小寫英文字母或數字，且第一個字須為英文字母。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9856f51aa6c23408a3ef29837b2c4eac.png)


* 儲存體建立完成後會出現在列表的最上方，點擊該列表進入儲存體內容頁面即可開始使用。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da6458b4e784d6c758fda967e3a4ffb7.png)



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    


- 建立名為 `bk_cli` 的儲存體

```bash
twccli mk cos -bkt bk_cli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fc30b6409e2372886223660e2aefd2da.png)

  </TabItem>
</Tabs>

## 删除儲存體

:::caution
刪除儲存體前，請先檢視目標儲存體是否已清空資料或備份；儲存體一旦删除，儲存體內所有的資料將會被全數删除，無法復原，
:::


<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>

* 删除不必要的儲存體，只要點擊該儲存體列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  選單按鈕，再按一下「**刪除**」。
* 為避免誤删，請輸入欲删除的儲存體名稱再次確認。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ef9ebf4f2386059c7c237664c33573d6.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">

- 刪除「**已清空**」的儲存體 `bk_cli1` 
```bash
twccli ls cos -bkt bk_cli1
twccli rm cos -bkt bk_cli1
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_192906ce0505e7303b8e391624b6df25.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_511e9bda39e94399aa5c414b8a6cccc8.png)


- 刪除「**未清空**」的儲存體 `bk_cli2`
```bash
twccli ls cos -bkt bk_cli2
twccli rm cos -bkt bk_cli2 -r
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ddbded358f57f02685f4bd887545a60.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22bf710e843dce06cb3468f4ecc8824d.png)

  </TabItem>
</Tabs>