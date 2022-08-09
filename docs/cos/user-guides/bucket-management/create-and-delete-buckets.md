---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立、刪除儲存體

:::caution
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWCC](https://www.twcc.ai/)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://www.twcc.ai/)。
- 若選擇使用 TWCC CLI 操作，請先[安裝 TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI)[target=_blank] 、並[登入](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99)[target=_blank]。


## 建立儲存體

儲存體建立後，即可將您的檔案上傳至儲存體，並可建立資料夾管理檔案。

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>
    

* 從服務列表選擇「**雲端物件儲存**」，進入雲端物件儲存管理頁面後，點擊「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e9ca6e3c85e37663547603538277a02a.png)



* 輸入儲存體名稱後按「**確定**」。 請注意：儲存體名稱必須是唯一的；請填入 1~16 個字元以內的小寫英文字母或數字，且第一個字須為英文字母。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9da2d38617092c0c406899729122f328.png)


* 儲存體建立完成後會出現在列表的最上方，點擊該列表進入儲存體內容頁面即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d99b93fc09d2fe29f6e81f4e2f2af92.png)

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

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_551737bbf1b9cedfbfe0bbb9948bbf05.png)

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
