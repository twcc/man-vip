---
sidebar_position: 4
sidebar_label: '檢視、搜尋、刪除檔案'
slug: '/user-guides/twcc/cos/view-search-delete-files'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-search-delete-files-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-search-delete-files-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檢視、搜尋、刪除檔案

- 若尚未註冊使用帳號，請先[註冊 TWS](/user-guides/tws-member-center/manage-member-accounts/sign-up-for-tws.md)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://tws.twcc.ai/)，並進入[開發型容器管理](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md)頁。
- 若選擇使用 TWCC CLI 操作，請先[安裝 TWCC CLI](https://github.com/twcc/TWCC-CLI) 、並[登入](https://github.com/twcc/TWCC-CLI)。

## 檢視檔案內容

<!-- 1 start -->
<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


*  選定儲存體，並進入儲存體的內容頁面，請點選欲查看的檔案。

    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_72adbc230af97db5e02ca24de1bf2fd0.png)

:::info
TWCC 入口網站最多僅能顯示 1000 筆資料 (儲存體、資料夾、檔案)，若需檢視完整資料，請使用 TWCC CLI 或第三方軟體。
:::


* 進入檔案內容頁面後，即可檢視如下檔案的基本資訊。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1ecd57f58ba34c49be88e324efa6f13.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">


檢視儲存體 `bk_cli` 中所有檔案資訊

```bash
twccli ls cos -bkt bk_cli
```

  </TabItem>
</Tabs>

## 搜尋檔案

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


在「**搜尋**」列輸入欲查找的關鍵字可以自動篩選所有列表欄位內容符合該條件的結果。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0381491f809a48e02298c45a67771333.png)

  </TabItem>
</Tabs>

## 刪除檔案

删除不必要的檔案可節省儲存空間；**檔案刪除後無法復原，請您在刪除前先確認檔案已備份**。

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


* 進入儲存體內容後，點擊該檔案列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  選單按鈕，再按一下「**刪除**」即可。亦可點擊勾選欄選擇多個檔案，再點擊上方的「**删除**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_53380d4b55caf0a78c19c91ec5006700.png)

* 再次確定欲删除的檔案是否正確，一旦檔案被删除後將無法恢復。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df3640ed5ec0decdf6bbe28b3cc45148.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">


- 刪除儲存體 `bk_cli` 的 `testfile2` 檔案

```bash
twccli rm cos -bkt bk_cli -okey testfile2
```   
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_46d8119fc6debd65bcbe77574209266e.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c14b3d8059d8ea4ff1efc97df54f006.png)

  </TabItem>
</Tabs>
