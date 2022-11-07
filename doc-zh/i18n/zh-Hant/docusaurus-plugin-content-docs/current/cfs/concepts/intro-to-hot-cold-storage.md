---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-cfs-hot-and-cold-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-cfs-hot-and-cold-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 熱、冷儲存區說明

雲端檔案服務以檔案存取頻率區分 **熱儲存區**、**冷儲存區**，您可以參考以下儲存區的特色說明，選擇是否將您的熱儲存區資料搬移至冷儲存區。

## 儲存區簡介

| 儲存區 | <div style={{width:240+'pt'}} align='left'>特色</div> |價格 |建議用途 |
| -------- | -------- | -------- | -------- |
| 熱儲存區     | 檔案可直接快速取用與編輯  | 單價較高  | 儲存較常存取的檔案     |
| 冷儲存區     | 檔案需先由冷儲存區複製資料至冷資料下載區<br/>才可取用與編輯  | 單價較低  | 儲存不常存取、<br/>可封存的檔案     |


:::info
- TWCC 使用者介面上「**檔案儲存管理**」、「**存取介面管理**」的功能，皆為對 **熱儲存區** 資料的管理功能。**冷儲存區** 之資料僅提供搬移至冷資料下載的功能，不提供其他檔案管理服務。
- 需先將檔案上傳至熱儲存區，才可將 <ins>[檔案搬移](#檔案搬移)</ins> 至冷儲存區。
:::


## 檔案搬移

您可以透過[手動搬移](../user-guides/move-files/move-retrieve-files.md)，或設定[生命週期](../user-guides/move-files/manage-file-lifecycle.md)自動將檔案遷移至冷儲存區進行資料長期儲存，並可隨時在不同儲存間進行檔案遷移。