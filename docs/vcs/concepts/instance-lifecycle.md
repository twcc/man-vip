---
sidebar_position: 2
title: '個體生命週期'
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-vcs-lifecycle-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 虛擬運算個體生命週期


各項在使用者介面或個體中，對虛擬運算個體的執行動作—建立、停止、啟動 (與開機)、關機、重開機、刪除，與動作所產生的個體生命狀態，與個體資源、資料、計費息息相關，並將連動影響連線、映像檔、負載平衡、Auto Scaling、磁碟等相關的服務操作。本文將詳細說明虛擬運算個體從建立到刪除之間，個體所有的生命週期狀態、意義與計費之間的關係。


- 執行動作與個體狀態之間的轉換：

![](https://i.imgur.com/WhovPH4.png)

- 個體狀態與描述、用量計費的關係如下表所示：

| 個體狀態 | 狀態描述 |個體用量計費 | 
| -------- | -------- | -------- |
| **`Starting`**     |準備進入 **`Ready`** 狀態。<br/> (1) 建立個體：系統正在分配資源並初始化個體中<br/> (2) 停止後啟動個體：啟動中 <br/> (3) 關機後啟動個體：開機中| 除 (3) 會計費，(1)、(2) 皆不計費     | 
| **`Ready`**     | 初始化已完成，個體已可正常連線使用|計費     | 
| **`Stopping`**   |釋放個體資源中，準備進入 **`Stopped`** 狀態| 計費    | 
| **`Stopped`**    |於使用者介面點選「**停止**」，個體將呈現 **`Stopped`** (關機且計算資源已釋放)，並且可再次透過使用者介面點選「**啟動**」重新配置資源。 | 不計費|
| **`Shutdown`**    |於個體中執行關機指令後，個體將呈現已關機狀態，並且可再次透過使用者介面點選「**啟動**」重新開機。| 計費| 
| **`Queueing`**     | 分配資源中，取得資源後將進入 **`Starting`** 狀態|不計費    | 
| **`Rebooting`**     |個體重開機中，準備進入 **`Ready`** 狀態 |計費     | 
| **`Deleting`**     | 刪除個體中，個體將被永久刪除|計費，刪除成功後便立即不再計費    | 

<br/>


## 建立個體

建立個體後，系統將分配資源並初始化執行個體中，個體狀態將呈現 **`Starting`**，此時尚未能連線使用，但不久後即進入 **`Ready`** 狀態。在 **`Ready`** 狀態下，可操作內容如下：

- <i class="fa fa-check" aria-hidden="true"></i> 連線登入
- <i class="fa fa-check" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
- <i class="fa fa-check" aria-hidden="true"></i> 建立個體映像檔
- <i class="fa fa-check" aria-hidden="true"></i> 建立/移除公用 IP
- <i class="fa fa-check" aria-hidden="true"></i> 掛載/移除 Auto Scaling 與負載平衡服務

<br/>


## 停止個體

若您將持續一段時間不使用個體，並希望保留各項資源，您可以點選「**停止**」關機並回收個體資源，個體將呈現 **`Stopping`**，準備進入 **`Stopped`** 資源已釋放的狀態。在 **`Stopped`** 狀態下，<ins>**個體將不再計費**</ins>。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**停止**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65a8bd007a7145bc66057988f0f0b8c8.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**停止**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**停止**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


停止後操作限制如下：

- <i class="fa fa-times" aria-hidden="true"></i> 連線登入
- <i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
- <i class="fa fa-times" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
- <i class="fa fa-times" aria-hidden="true"></i> 建立個體映像檔
- <i class="fa fa-times" aria-hidden="true"></i> 掛載/移除 Auto Scaling 與負載平衡服務

:::info
1. 停止後將**釋放**個體資源 — GPU、CPU、vCPU、記憶體、作業系統磁碟、浮動 IP (個體啟動後，將取得新的浮動 IP)。
2. 停止後將**保留**個體資源 — 資料磁碟、Auto Scaling、負載平衡、固定 IP。以上資源在啟動個體後，皆會自動連結回個體。
3. 除了記憶體內的資料將被清除，儲存於個體的所有資料皆會保留。
:::

:::caution
虛擬運算個體停止中 (**`Stopping`**)，請勿刪除個體，否則將影響系統處理工作，導致個體錯誤 (**`Error`**)。
:::

<br/>


## 啟動個體 (與個體開機)

若要回復並使用已停止的個體，或將已關機的個體開機使用，請點選「**啟動**」，個體狀態將呈現 **`Starting`**，正在重新分配資源中，並準備再次進入 **`Ready`** 狀態。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**啟動**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6b6237bb912f005648dbf8acf37c09f.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**啟動**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**啟動**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


:::info
停止再啟動之個體，多數將建立於新的實體主機上。
:::

<br/>


## 個體重開機

若要將 **`Ready`** 狀態的個體執行重開機 (關機並開機)，請點選「**重開機**」，個體狀態將呈現 **`Rebooting`**，正在重開機中，並準備再次進入 **`Ready`** 狀態。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**重開機**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e9d62c218823db9373ba407a6968fe07.png)


- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**重開機**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**重開機**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


:::info
與[<ins>停止個體</ins>](#停止個體)不同，重開機後除了會清除記憶體資料，**資源皆不釋放回資源池 (含浮動 IP)**，且儲存資料皆保留，重新開機後仍可使用。
:::

<br/>


## 個體關機

執行關機後，個體將進入 **`Shutdown`** 的已關機狀態，在 **`Shutdown`** 關機狀態下，<ins>**個體將持續計費**</ins>。

**TWCC 入口網站、TWCC CLI 不支援關機功能，請您於個體中操作：**

- Linux 個體：可以於個體中執行`sudo shutdown`、`sudo poweroff -f` 將個體關機
- Windows 個體：可使用`shutdown -s`、點選桌面左下關機鈕執行關機。

關機後操作限制如下：

- <i class="fa fa-times" aria-hidden="true"></i> 連線登入
- <i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
- <i class="fa fa-check" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
- <i class="fa fa-check" aria-hidden="true"></i> 建立個體映像檔
- <i class="fa fa-times" aria-hidden="true"></i> 掛載/分離 Auto Scaling 與負載平衡服務

:::info
與[<ins>停止個體</ins>](#停止個體)不同，關機後除了會清除記憶體資料，**資源皆不釋放回資源池**，且儲存資料皆保留，開機後仍可使用。
:::

<br/>


## 刪除個體

若要將個體永久刪除，不再使用，請刪除個體。

其他刪除的注意事項：
- 作業系統 (開機) 磁碟內的資料亦將永久刪除，若需保留可[建立個體映像檔](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh)。
- 資料磁碟則會自動分離保留

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- 進入「**虛擬運算個體管理**」頁 > 點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**刪除**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ff7d4f7ecaa5fcf2877cf7d8ad53fb2b.png)

- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**刪除**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

```bash
twccli rm vcs -s    # 個體 ID
twccli ls vcs       # 檢視結果
```

<br/>

**範例**

- 刪除 ID 為 **`937651`** 的虛擬運算個體，確認已刪除。

```
twccli rm vcs -s 937651
twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_024803eddc7136ec4fa25af5fe2ddc84.png)

</TabItem>

</Tabs>

<br/>

:::info
- 同一用戶一分鐘內僅能執行各 10 次建立、刪除虛擬運算個體。
- 若已開啟「[<ins>刪除保護機制</ins>](../user-guides/manage-monitor/view-edit-deletion-protection.md#開啟關閉-刪除保護機制)」，將無法直接刪除資源，請您先關閉後再執行刪除。
:::