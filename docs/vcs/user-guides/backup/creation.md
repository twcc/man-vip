---
sidebar_position: 1
title: '建立映像檔'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 虛擬運算個體映像檔

虛擬運算個體映像檔功能可以保留某一時間點個體的狀態、作業系統內建的硬碟的檔案與資料，通常在進行重要的系統更新或特殊軟體安裝前會先建立映像檔，以便需要時可以回復到該時間點的狀態。

:::info
1. **虛擬運算個體刪除後，100 GB 的系統磁碟資料將會隨之消失，若您需保存此空間的資料，請參考以下步驟為個體建立映像檔，再刪除個體。**
2. 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::

## 建立映像檔

:::caution
1. **<ins>建立映像檔前，強烈建議請您參考[建立虛擬運算個體映像檔的最佳做法](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh)，先執行相關工作，以確保有效取得映像檔。</ins>**
2. 若映像檔狀態停止於 **`QUEUED`** 且久未轉為 **`ACTIVE`**，請洽詢技術支援團隊：<a href="mailto:isupport@twcc.ai">isupport@twcc.ai</a>，我們將協助您解決。
:::

- ### 建立一般映像檔

手動操作建立映像檔。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 進入虛擬運算個體管理頁面，點選欲建立映像檔的個體列表，進入該個體的詳細資料頁面，並點擊「**映像檔**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3c70e745f4052b117875a81aa2909ea4.png)


* 確認視窗提示的資訊，並輸入映像檔的名稱、描述後按「**確定**」。
* 建立映像檔需數分鐘，等待「**系統需求處理中...**」提示消失後，即可繼續進行其他工作。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ed2e50a4cd9980029e9dd4d291761ede.png)

* 頁面跳轉至虛擬運算個體映像檔管理頁，並等映像檔狀態由 **`QUEUED`** > **`SAVING`**  > 最後變為 **`ACTIVE`** 後即可使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1a78aa185d26f10ab476109712e155a.png)


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br/>

### 指令

```bash
twccli mk vcs -s        # 個體 ID  
              -cus-img  # 建立映像檔
```

:::info
1. **[ ]** 中括號內為選擇性參數，其餘為必要參數。
:::

### 範例

- 為 ID 為 **`918628`** 的虛擬運算個體建立映像檔
```bash
twccli mk vcs -s 918628 -cus-img
```

</details>

<br/>

- ### 建立定時映像檔

可利用 `crontab` 設定自動定時建立映像檔。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b> (尚未支援) </summary>

<br/>


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br/>

- 使用 `crontab -e` 進行設定，相關使用功能請參照 [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto)。
![](https://i.imgur.com/1zRke01.png)

- 指定任意時間進行快照工作，在此為範例為==午夜 01:01==。
![](https://i.imgur.com/mQp1kUr.png)


</details>