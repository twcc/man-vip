---
sidebar_position: 2
sidebar_label: '映像檔管理'
slug: '/user-guides/twcc/ccs-interactive-container/manage-images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-duplicate-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 容器映像檔管理

[建立自訂映像檔](xxx)完成後，您可以在「**映像檔管理**」頁，檢視映像檔資訊或刪除不再使用的映像檔。


## 檢視資訊

* 由服務列表點選「**開發型容器**」，並點選左側「**映像檔**」，進入「**映像檔管理**」頁。
* 您可以於此頁面檢視映像檔資訊，包含名稱、標籤、大小、最後更新時間、最後取用時間 。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2450432707f13611a571d4fc1de2e52c.png)

## 刪除映像檔
    
* 於「**映像檔管理**」頁可於映像檔右側點選 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> ，再點選「**刪除**」刪除容器。
* 或一次勾選單個或多個容器，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a53986b8479d385569553534df485e28.png)


:::info
- 最後更新時間：同一容器，若標籤名稱重複建立映像檔，將會覆蓋取代原已製作完成的映像檔，並更新此時間。
- 最後取用時間：取用映像檔建立容器之時間。

:::