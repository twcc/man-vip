---
sidebar_position: 1
title: '建立映像檔'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-instance-image-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 虛擬運算個體映像檔

虛擬運算個體映像檔功能可以保留某一時間點個體的狀態、作業系統內建的硬碟的檔案與資料，通常在進行重要的系統更新或特殊軟體安裝前會先建立映像檔，以便需要時可以回復到該時間點的狀態。

:::info
1. **虛擬運算個體刪除後，系統磁碟資料將會隨之消失，若您需保存此空間的資料，請參考以下步驟為個體建立映像檔，再刪除個體。**
2. 映像檔大小與您建立虛擬運算個體所選擇的系統磁碟容量相同。映像檔建立後，以虛擬磁碟 (HDD) 費率計費。
3. 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/compute#虛擬運算服務)。
:::

<br/>

## 建立映像檔

:::caution
1. **<ins>建立映像檔前，強烈建議請您參考[建立虛擬運算個體映像檔的最佳做法](./best-practice-create-images.md)，先執行相關工作，以確保有效取得映像檔。</ins>**
2. 若映像檔狀態停止於 **`QUEUED`** 且久未轉為 **`ACTIVE`**，請洽詢技術支援團隊：<a href="mailto:isupport@twcc.ai">isupport@twcc.ai</a>，我們將協助您解決。
:::

<br/>

### 建立一般映像檔

手動操作建立映像檔。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入虛擬運算個體管理頁面，點選欲建立映像檔的個體列表，進入該個體的詳細資料頁面，並點擊「**映像檔**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1eae8d8ba6e77b6985c766895be51052.png)


* 確認視窗提示的資訊，並輸入映像檔的名稱、描述後按「**確定**」。
* 建立映像檔需數分鐘，等待「**系統需求處理中...**」提示消失後，即可繼續進行其他工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ed2e50a4cd9980029e9dd4d291761ede.png)

* 頁面跳轉至虛擬運算個體映像檔管理頁，並等映像檔狀態由 **`QUEUED`** > **`SAVING`**  > 最後變為 **`ACTIVE`** 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c89770549b8741ccde5d9e26a56bcd20.png)

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

### 建立定時映像檔

可利用 `crontab` 設定自動定時建立映像檔。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站 (TBD)">

<br/>

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- 使用 `crontab -e` 進行設定，相關使用功能請參照 [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto)。<br/>
- 指定任意時間進行快照工作，在此為範例為午夜 01:01。<br/>
![](https://i.imgur.com/mQp1kUr.png)

</TabItem>

</Tabs>