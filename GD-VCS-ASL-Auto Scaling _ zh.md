---
tags: Guide, VCS, TW
title: Auto Scaling | zh
GA:
---


{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe3143064a67e3d04615d38683938427.png) Auto Scaling

Auto Scaling 是一種自動彈性調整的監控機制，本服務能夠在指定條件下<ins>動態**新增**或**移除**虛擬運算個體的數量</ins>，以因應負載增加所造成的資源不足、服務中斷的問題，提升服務品質與效能。

負載達到需求值後擴展數量，低於需求值便立即縮減，並搭配[負載平衡](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-zh)讓流量平均分配，可有效降低長時間建立閒耗之虛擬運算個體成本。

:::info
{%hackmd @docsharedstyle/note-zh %}
- 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh#Auto-Scaling)。
 
<br>

{%hackmd @twccdocs/vcs-asl-chunk-asl-with-disk-zh %}

:::

## 建立 Auto Scaling 範本

您可以建立一 Auto Scaling 範本，連結至多個虛擬運算個體使用。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 由服務列表點選「**Auto Scaling**」進入「**Auto Scaling 管理**」頁面，點擊「**＋建立**」
* 輸入下列設定資訊，完成後點擊「**下一步：檢閱+建立>**」：
    * **名稱**：輸入 Auto Scaling 的名稱。
    * **描述**：輸入 Auto Scaling 的描述，非必填。
    * **Meter 名稱**：選擇 Meter 名稱， 此為 Auto Scaling 判斷是否擴展、縮減虛擬運算個體數量的資源指標，可判斷 <ins>*cpuutil*</ins> `(CPU 使用率)`、<ins>*memory.usage*</ins> `(記憶體使用率)`、<ins>*network.income.bytes.rate*</ins> `(網路流入率)`、<ins>*network.outgoing.usage*</ins> `(網路流出率)` 四種指標。
　
    * **閥值上限**：設定 Meter 的最高閥值。例如：若當 Meter 選用 *cpuutil* ，此數值設定 80 即代表 CPU 的使用率超過 80% 時將擴展虛擬運算個體數量。
    * **閥值下限**：設定 Meter 的最低閥值，低於此閥值時則會縮減虛擬運算個體數量。
    * **虛擬運算個體最大上限**：設定虛擬運算個體數量的最大上限，預設值為 2 （Auto Scaling 至少需 2 台虛擬運算個體）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14277f10af8a5e3b8302766ce8a2d34e.png)

* 檢視 Auto Scaling 的設定及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40995c8afb9d214fa7803cd3d1104f3e.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚未支援)</summary>

<br>

</div>

</details>
   
## Auto Scaling 管理

檢視資訊、刪除 Auto Scaling。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>


* Auto Scaling 管理頁面，剛建立好的 Auto Scaling 項目會列在最上方。點選 Auto Scaling 列表，可檢視 Auto Scaling 的設定資訊，或執行「**删除**」、「**重新整理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eaf8a350c20c81039ea8fad88434fa7a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ece2ede7d819aa178fe26e83c5d869b0.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚未支援)</summary>

<br>

</div>

</details>



## 將 Auto Scaling 連結/掛載至虛擬運算個體

將 Auto Scaling 連結/掛載至虛擬運算個體後，搭配[負載平衡](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-zh)才能發揮其功能，自動平衡虛擬運算個體的負載。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

*  進入「**虛擬運算個體**」服務，在「**虛擬運算個體管理**」頁面點選欲掛載的個體，進入虛擬運算個體詳細資料頁面，按一下 Auto Scaling 後的「**掛載**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99b746453c9f0124513deedebd69c295.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 虛擬運算個體的狀態必須為 **`Ready`** ，才可以掛載/移除 Auto Scaling。
:::

* 使用 Auto Scaling 需搭配**負載平衡器**，才能將流量平均分配至群組內的虛擬運算個體上，以達成服務的高可用性。
* 出現 Auto Scaling 設定視窗後，需選擇 Auto Scaling 的名稱、通知的連結服務、負載平衡器名稱及連接埠等資訊，設定好後按下「**確認**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d03c9e4b461fb632e16cc23ad7e9cdcc.png)

</div>

</details>


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚未支援)</summary>

<br>

</div>

</details>
