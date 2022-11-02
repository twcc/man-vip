---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-move-retrieve-data-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-move-retrieve-data-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 搬移與取用


您可以將不常存取的資料搬移至冷儲存區存放，待需要取用時再將資料搬移至熱儲存區。

## 搬移資料至冷儲存區

* 在資料集的內容列表頁面，會顯示檔案所在的儲存區，選擇一筆在「**熱儲存區**」儲存區的檔案，將滑鼠移至列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  選單按鈕，再點選「**搬移至冷儲存區**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_01247d535a5db90f5a2f1ce38f825c86.png)


* 出現確定搬移的提示視窗後點擊「**確認**」，回到檔案列表頁面，即會顯示「**熱儲存區（正在搬移至冷儲存區）**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47e8a7d4ad230c86d54cc33b9588e5bc.png)

    
:::info
將檔案搬移至冷儲存區需要一段時間，搬移成功後該檔案的「**儲存區**」會變成「**冷儲存區**」。
:::
   
## 搬移資料至熱儲存區
* 在資料集的內容列表頁面，選擇一筆在「**冷儲存區**」區的檔案，將滑鼠移至列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**搬移至熱儲存區**」。
  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38e64275ea848fa39141c3b4ae1f08cd.png)
        
* 出現確定搬移的提示視窗後點擊「**確認**」，回到檔案列表頁面，該檔案會顯示「**冷儲存區（正在搬移至熱儲存區）**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94050d513434d3a49da8ad2aec247c35.png)


:::info
搬移資料至熱儲存區需要一段時間，搬移成功後該檔案的「**儲存區**」會變成「**熱儲存區**」。
:::
    
## 取用冷儲存區的檔案

* 在資料集的內容列表頁面，選擇一筆在冷儲存區的檔案，將滑鼠移至列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**取用**」，取用後系統會將資料複製一份至冷資料下載區。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0463dea00cad6e5e3fa586263df52dbb.png)
    
* 出現「**取用冷儲存**」提示視窗後點擊「**確認**」。
    
:::info
冷資料取用，可能將耗費數小時，請至「**冷資料下載**」列表查詢取用進度。
:::

## 冷資料下載

* 進入「**冷資料下載**」頁面，從冷儲存區資料取用後會被暫存在此，選擇列表中的「**取用完成**」的檔案，將滑鼠移至列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點選「**下載**」，即可將檔案下載至本地端。
    
:::info
暫存在冷資料下載區的檔案 3 天後會被删除，請在期限內下載。
:::    
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a3282cca261f04c3833c5259bc216d7.png)
