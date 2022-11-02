---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-dataset-mngmnt-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-dataset-mngmnt-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 資料集管理

雲端檔案服務儲存的階層可分為三大類：(1) 資料集 (2) 第一層資料夾 (3)子資料夾。
首次使用請先建立[熱儲存區](../../concepts/intro-to-hot-cold-storage.md)資料集，以將您的檔案上傳至雲端檔案服務。

## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWCC](https://www.twcc.ai/)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://www.twcc.ai/)。
- 若選擇使用 TWCC CLI 操作，請先<a href="https://github.com/twcc/TWCC-CLI" target="_blank"><ins>安裝 TWCC CLI</ins></a>、並<a href="https://github.com/twcc/TWCC-CLI" target="_blank"><ins>登入</ins></a>


## 建立資料集


* 請在「**檔案儲存管理**」頁面點擊「**＋建立資料集**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a3a55a2722d9892af217baea915100fa.png)


* 出現「**建立資料集**」視窗後，輸入資料集名稱後點擊「**確認**」。

:::info

資料集名稱請填入 1~16 個字元以內的小寫英文字母或數字，且第一個字須為英文字母。

:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_93e58e0110b78bc573f5a09f3682a9db.png)

* 資料集建立完成後會出現在「**檔案儲存管理**」的列表中，點擊該列表進入資料集內容頁面即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2c453d058d136d110f1c9489a8e94408.png)


## 删除資料集


* 勾選欲删除的資料集，再點選上方的「**刪除**」按鈕，亦可勾選多個資料集一起删除。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5fc0a31f1f0b557438e805cc26618777.png)

* 點擊「**確認**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_398409bf3687ab6faabb2f99e88c9a10.png)

:::caution

資料集一旦删除，資料將無法恢復，刪除後將會停止計算費用。

:::
