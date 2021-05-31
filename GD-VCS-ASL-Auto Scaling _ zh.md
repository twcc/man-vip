---
tags: Guide, VCS, TW
title: Auto Scaling | zh
GA:
---


{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe3143064a67e3d04615d38683938427.png) Auto Scaling

Auto Scaling 是一種自動彈性調整機制，本服務能夠在指定條件下動態增加或減少虛擬運算個體的數量，以因應負載增加自所造成的資源不足問題，提升服務效能並降低成本。

:::info
{%hackmd @docsharedstyle/note-zh %}
- 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh#Auto-Scaling)。
- TWCC CLI 目前不支援此服務。
:::

## 建立 Auto Scaling 範本
* 由服務列表點選「**Auto Scaling**」進入「**Auto Scaling 管理**」頁面，點擊「**＋建立**」
* 進入建立 Auto Scaling 頁面，輸入下列設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * 名稱：輸入 Auto Scaling 的名稱。
    * 描述：輸入 Auto Scaling 的描述，非必填。
    * Meter 名稱：選擇 Meter 名稱， 此為 Auto Scaling 判斷的依據，有 cpu_util、memory.usage、network.income.bytes.rate、network.outgoing.usage 四種選項。
　
    * 閥值上限：設定 Meter 的最高閥值。例如：若當 Meter 為 cpu_util 時, 此數值 80 即代表 CPU 的使用率超過 80% 時將增加 VM。
    * 閥值下限：設定 Meter 的最低閥值，低於此閥值時則會縮減 VM。
    * 虛擬運算個體最大上限：設定虛擬運算個體數量的最大上限，預設值為 2 （Auto Scaling 至少需 2 台虛擬運算個體）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14277f10af8a5e3b8302766ce8a2d34e.png)


* 檢視 Auto Scaling 的設定及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40995c8afb9d214fa7803cd3d1104f3e.png)

   
## Auto Scaling 管理
* Auto Scaling 管理頁面，剛建立好的 Auto Scaling 項目會列在最上方。點選 Auto Scaling 列表，可檢視 Auto Scaling 的設定資訊，或執行「**删除**」、「**重新整理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eaf8a350c20c81039ea8fad88434fa7a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ece2ede7d819aa178fe26e83c5d869b0.png)



## 在虛擬運算個體連結 Auto Scaling

*  進入「**虛擬運算個體**」服務，在「**虛擬運算個體管理**」頁面點選欲掛載的個體，進入虛擬運算個體詳細資料頁面，按一下 Auto Scaling 後的「**掛載**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99b746453c9f0124513deedebd69c295.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 虛擬運算個體的狀態必須為 **`Ready`** ，才可以掛載/移除 Auto Scaling。
:::

* 使用 Auto Scaling 需搭配負載平衡器，將流量分配到不同的虛擬運算個體上，以達成服務的高可用性。出現 Auto Scaling 設定視窗後，需選擇 Auto Scaling 的名稱、通知的連結服務、負載平衡器名稱及連接埠等資訊，設定好後按下「**確認**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d03c9e4b461fb632e16cc23ad7e9cdcc.png)