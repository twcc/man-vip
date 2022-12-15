---
sidebar_position: 3
sidebar_label: '詮釋資料、搜尋與版本紀錄'
slug: '/user-guides/twcc/cfs/metadata-search-versioning'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-metadata-search-versioning-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-metadata-search-versioning-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 詮釋資料、搜尋與版本紀錄

## 詮釋資料管理

您可以加入檔案的描述性詮釋資料，以精準搜尋或方便程式依特定情境處理。

### 編輯詮釋資料

* 在資料集的內容列表頁面，將滑鼠移至檔案列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**編輯詮釋資料**」。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_024d4bcb438352a85bd058eee53e4767.png)


* 使用者可新增或編輯檔案的詮釋資料，以用來做更精準地搜尋。

:::info
單一個檔案的詮釋資料以 10 個為上限。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9084bc9ee762f286bb5f2169317a2ab.png)

* 請依照 **鍵值；值** 的格式輸入或修改詮釋資料的內容，點擊「**新增**」可增加一筆詮釋資料，修改完成後點擊「**更新**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7689cf8ba7708b48644675b516698d52.png)

## 檔案搜尋

檔案儲存服務提供 **一般搜尋** (所有資料集 or 指定資料集 關鍵字) 及 **進階搜尋** (指定資料集內) 兩種檔案搜尋方式。


### 一般搜尋

可在「**搜尋**」列輸入欲查找的關鍵字，即可自動篩選所有資料集列表欄位中符合該條件的結果。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1215b41269912ceaa23e66a0962d6b6d.png)

### 進階搜尋

* 進入資料集內容列表頁面後點擊右上方「**進階搜尋**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5644803269a10025798f10e6988365c7.png)

- **進階檔案搜尋**

    * 進階檔案搜尋可針對關鍵字進行資料集的全域查詢，進入「**進階搜尋**」頁面後，預設為「**進階檔案搜尋**」，在右邊的搜尋框輸入關鍵字，即可搜尋出所有包含此關鍵字的檔案。

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c4e889aa7f195e9dae8c86ea5070d58.png)


- **自訂詮釋搜尋**

    * 自訂詮釋搜尋可搜尋自訂詮釋資料的鍵值或值，點擊「**進階檔案搜尋**」出現下拉選單，選擇「**自訂詮釋搜尋**」。

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11170d509dab30f33f2168a2de1cff68.png)

    * 再依照自訂詮釋搜尋的條件格式：key;value，輸入欲查詢的條件。

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e49cb67057cb7072469d284a68117626.png)

## 版本紀錄

* 進入檔案列表頁面，將滑鼠移至檔案列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**版本紀錄**」可查看該檔案的版本。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b77287f6ec8284f0513d55a68b8d37b4.png)

 
* 上傳檔案時，如果有相同檔名的檔案存在時，系統會自動保留舊版本並記錄不同的版本號碼、儲存區、建立時間等資訊，點擊「**下載**」即可將該檔案下載至本地端。

:::info
- 舊版本的檔案僅能保留 30 天。
- 若需從某個舊版本還原檔案，請您將舊版本下載，並再次重新上傳。
- 上傳與冷儲存區相同檔名之檔案：新檔案將會儲存於熱儲存區，並顯示於檔案儲存管理頁；原檔案仍儲存於冷儲存區，可點選右側於版本紀錄檢視/取用。
:::
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1db41fb768daba187ec4f5984e8f8014.png)
