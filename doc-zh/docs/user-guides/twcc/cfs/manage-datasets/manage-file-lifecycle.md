---
sidebar_position: 2
sidebar_label: '生命週期'
slug: '/user-guides/twcc/cfs/lifecycle'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-lifecycle-mngmnt-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-lifecycle-mngmnt-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 生命週期管理

生命週期管理提供多種檔案生命週期管理規則，可依據檔案的類型、名稱、大小、建立日期、長時間沒有異動的檔案（依天數）等設定篩選條件，再指定欲執行的動作，包含 **搬移至冷儲存區**、**搬移至熱儲存區** 或 **刪除**。

## 編輯生命週期規則 
* 在「**檔案儲存管理**」頁面，將滑鼠移至資料集列表右側的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再點擊「**編輯生命週期規則**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_898aa1c5559452242c98aa147cac6c08.png)

* 進入「**生命週期規則**」頁面後，首先需設定生命週期規則：
    * 檔案名稱：輸入檔案名稱，文字請用逗號分隔。
    * 檔案類型：輸入副檔名，以逗號分隔多個類型。
    * 檔案大小：設定檔案大小大於某一數值。
    * 檔案建立日期：設定檔案建立的日期。
    * 長時間沒有異動的檔案：數值（天）。
* 可勾選多項條件的規則，設定好後點擊「**試算結果**」按鈕，系統會先試算出符合此生命週期規則的檔案。

:::info
若同時設定並勾選 `檔案名稱` 與 `副檔名`，則符合檔案名稱條件或符合副檔名條件的檔案皆會執行動作。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e0b162e22eaa3ad99f99a769629b400c.png)



* 接著點選動作選項：搬移至熱儲存區、搬移至冷儲存區或删除，設定好後點擊「**更新**」。

:::info
新增或編輯規則後，最多要經過 24 小時後才會生效。
:::

* 更新後，系統會對該資料集套用設定並立即啟用生命週期規則，若不想立即啟用可點擊「**停用**」，停用後生命週期規則的設定仍會保留。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5ecab2d64d62919a51a7ca906694598.png)
