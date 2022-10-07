---
sidebar_position: 3
title: '管理映像檔'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-manage-instance-image-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-manage-instance-image-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 管理映像檔

您可於「**映像檔管理**」頁面，管理計畫建立的映像檔與自其他計畫分享的映像檔。

<br/>

## 檢視映像檔資訊

檢視映像檔 ID、名稱、描述、狀態、建立時間、建立者等資訊。

:::info

名稱前方帶有計畫編號 (例：`GOVxxxxxx-`) 為自該計畫分享的映像檔。

:::

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**虛擬運算個體映像檔管理**」頁面，可看到所有映像檔的列表資訊，最近建立的映像檔會列在最上面。建立後待狀態從 **`QUEUED`** 變成 **`ACTIVE`** 後，即可使用映像檔建立個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_186918c503fa42eae342f88955c2bea3.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

```bash
twccli ls vcs -cus-img [-all]   # 檢視所有映像檔 ([-all]限租戶管理員使用) 
                       [-s]     # 檢視特定 ID 的映像檔
```

:::info
**[ ]** 中括號內為選擇性參數，其餘為必要參數。
:::

<br/>

**範例**

- 檢視為 ID 為 **`2580765`** 的虛擬運算個體建立的快照狀態
```bash
twccli ls vcs -cus-img -s 2580765  
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9762c16e87a59a78efc40158b19911ae.png)


</TabItem>

</Tabs>

<br/>

## 分享映像檔、分享管理

TWCC 提供跨計畫分享虛擬運算個體映像檔的服務，可將您已客製化部署完成的個體，在建立成映像檔後，分享複製給目標計畫使用，相同的環境可以跨計畫建立。

計畫轉移也可以使用此功能將舊計畫個體分享複製至新計畫續用。

:::info
- 僅租戶管理員能分享映像檔至其他目標計畫，且需同時為來源與目標計畫的租戶管理員。
- 支援分享虛擬運算個體映像檔，不支援分享資料磁碟快照。
- 不支援跨計畫分享含授權的映像檔 (例：含授權之 Windows Server)。
- 來源計畫所分享的映像檔，目標計畫的所有成員皆可選用以建立個體。
  > 分享的映像檔僅可建立 CPU 個體，暫不支援建立 GPU 個體。
- 被分享與分享後的映像檔，各自獨立不互相影響，並各自計算儲存用量。
:::

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

**分享映像檔**

* 進入映像檔管理頁後，選擇一映像檔，點選右側 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再選擇「**分享**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9cba50a5788cf4a04152d259a29c296f.png)

* 選擇分享的專案 (接收此分享的目標計畫)、建立映像檔名稱後，點選「**確定**」即跳轉至「**映像檔分享管理**」頁，進行分享的程序。
    
    
![](https://i.imgur.com/g2HnQk6.png)
    
:::info

映像檔名稱前方預設帶有您所屬的計畫 (來源計畫) 編號，後方為原映像檔的名稱 (可編輯)，方便目標計畫了解映像檔分享來源。

:::

**分享管理**
    
進入「**映像檔分享管理**」頁面可檢視已分享的映像檔名稱、分享的專案、分享狀態、分享建立時間。
    
分享後，映像檔即進入 **`approved`** (分享中) 狀態，分享完成後呈現 **`finished`** (分享完成) 狀態，目標計畫即可選用此分享的映像檔[建立客製化個體](https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-zh)。
    
![](https://i.imgur.com/vhE9VAy.png)

:::info
僅租戶管理員能檢視本人 (非全計畫) 的映像檔分享資訊。
:::

:::tip
<details>

<summary>快速動畫教學 <i class="fa fa-file-video-o" aria-hidden="true"></i></summary>

![](https://i.imgur.com/xWeCtYz.gif)

</details>
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


## 刪除映像檔

:::caution
選用映像檔建立虛擬運算個體，當狀態為建立中 (**`Starting`**) 時，為確保個體可完整建立，**請勿刪除映像檔**。
:::

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 不需使用的映像檔，可以點選該映像檔列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再選擇「**刪除**」即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ed43bef95d227e1a331beb45a266f4c1.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


## 以映像檔建立個體

請參考[建立客製化個體](https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-zh)，以計畫內所建立的映像檔，或以其他計畫分享的映像檔，建立客製化個體。