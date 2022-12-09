---
sidebar_position: 2
sidebar_label: '建立個體映像檔'
slug: '/user-guides/twcc/vcs/instances/create-images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-instance-image-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立映像檔

:::caution
1. **<ins>建立映像檔前，建議您參考[建立虛擬運算個體映像檔的最佳做法](/concepts-tutorials/twcc/vcs/best-practice-create-images.md)，依文件內容進行檢核，避免耗費過多等待時間或無法取得有效映像檔。</ins>**
2. 若映像檔狀態停止於 **`QUEUED`** 且久未轉為 **`ACTIVE`**，請洽詢技術支援團隊：<a href="mailto:isupport@twcc.ai">isupport@twcc.ai</a>，我們將協助您解決。
:::

<br/>

## 建立一般映像檔

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入虛擬運算個體管理頁面，點選欲建立映像檔的個體列表，進入該個體的詳細資料頁面，並點擊「**映像檔**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1eae8d8ba6e77b6985c766895be51052.png)


* 確認視窗提示的資訊，並輸入映像檔的名稱、描述後按「**確定**」。
* 建立映像檔需數分鐘，等待「**系統需求處理中...**」提示消失後，即可繼續進行其他工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6db5bf42a2241b5cb33d06ca66e47d57.png)

* 頁面跳轉至虛擬運算個體映像檔管理頁，並等映像檔狀態由 **`QUEUED`** > **`SAVING`**  > 最後變為 **`ACTIVE`** 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b56086ae6e9bd6eb94bf72f918e8d80.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

```bash
twccli mk vcs -s            # 個體 ID  
              -cus-img      # 建立映像檔
```

:::info
1. **[ ]** 中括號內為選擇性參數，其餘為必要參數。
:::

<br/>

**範例**

- 為 ID 為 **`918628`** 的虛擬運算個體建立映像檔
```bash
twccli mk vcs -s 918628 -cus-img
```

</TabItem>

</Tabs>

<br/>

## 建立定時映像檔

可利用 `crontab` 設定自動定時建立映像檔。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站 (TBD)">

<br/>

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- 使用 `crontab -e` 進行設定，相關使用功能請參照 [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto)。<br/>
- 指定任意時間進行映像檔建立工作，在此為範例為午夜 01:01。<br/>
![](https://i.imgur.com/mQp1kUr.png)

</TabItem>

</Tabs>