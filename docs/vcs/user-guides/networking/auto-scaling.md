---
sidebar_position: 4
title: 'Auto Scaling'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-auto-sacling-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe3143064a67e3d04615d38683938427.png) Auto Scaling

Auto Scaling 是一種自動彈性調整的監控機制，本服務能夠在指定條件下<ins>動態**新增**或**移除**虛擬運算個體的數量</ins>，以因應負載增加所造成的資源不足、服務中斷的問題，提升服務品質與效能。

負載達到需求值後擴展數量，低於需求值便立即縮減，並搭配[負載平衡](./load-balancing.md)讓流量平均分配，可有效降低長時間建立閒耗之虛擬運算個體成本。

:::info
- 租戶管理員、租戶使用者對於 Auto Scaling 使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/networking-security#auto-scaling)。
:::

:::caution
[<ins>Auto Scaling</ins>](./auto-scaling.md) 會依據所連結虛擬運算個體建立時的設定而新增個體，因此：
- 若 Auto Scaling 自動新增的個體<ins>**需要**</ins>自動連結新資料磁碟，請您在 **[<ins>建立個體</ins>](../create/create-instances.md) 時**，一併建立資料磁碟。
- 反之，若 Auto Scaling 自動新增個體<ins>**不需要**</ins>自動連結新資料磁碟，則請您在 **[<ins>建立個體</ins>](../create/create-instances.md) 後**，[<ins>另建資料磁碟</ins>](../storage/create-data-disks.md)，再[<ins>連結至個體</ins>](../storage/view-attach-delete-disks.md#連結至虛擬運算個體)。
:::

<br/>


## 建立 Auto Scaling 範本

您可以建立一 Auto Scaling 範本，連結至多個虛擬運算個體使用。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 由服務列表點選「**Auto Scaling**」進入「**Auto Scaling 管理**」頁面，點擊「**＋建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5491a3fa25058a188c04c8adacde0f79.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

* 輸入下列設定資訊，完成後點擊「**下一步：檢閱+建立>**」：
    * **名稱**：輸入 Auto Scaling 的名稱。
    * **描述**：輸入 Auto Scaling 的描述，非必填。
    * **Meter 名稱**：選擇 Meter 名稱， 此為 Auto Scaling 判斷是否擴展、縮減虛擬運算個體數量的資源指標，可判斷 <ins>*cpuutil*</ins> `(CPU 使用率)`、<ins>*memory.usage*</ins> `(記憶體使用率)`、<ins>*network.income.bytes.rate*</ins> `(網路流入率)`、<ins>*network.outgoing.usage*</ins> `(網路流出率)` 四種指標。
    * **閥值上限**：設定 Meter 的最高閥值。例如：若當 Meter 選用 *cpuutil* ，此數值設定 80 即代表 CPU 的使用率超過 80% 時將擴展虛擬運算個體數量。
    * **閥值下限**：設定 Meter 的最低閥值，低於此閥值時則會縮減虛擬運算個體數量。
    * **虛擬運算個體最大上限**：設定虛擬運算個體數量的最大上限，預設值為 2 （Auto Scaling 至少需 2 台虛擬運算個體）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d868aef30fe5e7d4fad60706a7b206d1.png)


* 檢視 Auto Scaling 的設定及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d5547a82935d854983faaaff1441aa9.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>

## Auto Scaling 管理

檢視資訊、刪除 Auto Scaling。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* Auto Scaling 管理頁面，剛建立好的 Auto Scaling 項目會列在最上方。點選 Auto Scaling 列表，可檢視 Auto Scaling 的設定資訊，或執行「**删除**」、「**重新整理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eee7f8c6944a35087428960db9d26dce.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_846fd28c8f9c42456c22ae6f5b1575b0.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


## 將 Auto Scaling 連結/掛載至虛擬運算個體

將 Auto Scaling 連結/掛載至虛擬運算個體後，搭配[負載平衡](./load-balancing.md)才能發揮其功能，自動平衡虛擬運算個體的負載。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

*  進入「**虛擬運算個體**」服務，在「**虛擬運算個體管理**」頁面點選欲掛載的個體，進入虛擬運算個體詳細資料頁面，按一下 Auto Scaling 後的「**掛載**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db56a399662fec868f71cc242f585682.png)

:::info
虛擬運算個體的狀態必須為 <b>`Ready`</b> ，才可以掛載/移除 Auto Scaling。
:::

* 使用 Auto Scaling 需搭配**負載平衡器**，才能將流量平均分配至群組內的虛擬運算個體上，以達成服務的高可用性。
* 出現 Auto Scaling 設定視窗後，需選擇 Auto Scaling 的名稱、通知的連結服務、負載平衡器名稱及連接埠等資訊，設定好後按下「**確認**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_982b1da32467ef04536b5a7897bbd197.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>