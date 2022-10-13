---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-sg-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-sg-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安全性群組


TWCC 提供安全性群組功能，使用者可透過設定安全規則進行虛擬運算個體的網路安全控管，管理虛擬運算個體允許連入連出的網段、協定、連接埠。

:::info
- 安全性群組功能是為各個虛擬運算個體設定個別的安全規則而設計，所以必須先建立至少一個可用的虛擬運算個體，才可以設定其安全群組規則。
- 租戶管理員、租戶使用者對於安全性群組使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/networking-security#安全性群組)。
:::

<br/>

## 檢視虛擬運算個體安全性群組規則

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 由服務列表點選「**安全性群組**」進入「**安全性群組管理 (虛擬運算個體列表)**」頁面，點選可用的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_491c26f5432bafabc42dcfbde67d3d19.png)

* 進入網路安全規則管理頁面，會顯示目前的網路安全規則，

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

```bash
twccli ls vcs                   # 列出現有虛擬運算個體
twccli ls vcs -secg -s 937648   # 列出 ID 為 937648 個體的安全性群組
```

</TabItem>

</Tabs>

<details>

<summary>虛擬運算個體預設之安全性群組規則</summary>

- TWCC Linux 個體預設開放的輸入/輸出規則：

| 方向 | 網路類型 | 連接埠 (最小) | 連接埠 (最大)| 協定|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |

- TWCC Windows 個體預設開放的輸入/輸出規則：

| 方向 | 網路類型 | 連接埠 (最小) | 連接埠 (最大)| 協定|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 9833     |9833 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |

</details>

<br/>

:::caution
因資安事件頻傳，如果您的連線來自以下這些國家，我們將關閉您使用遠端連線至 Windows 個體的功能 (連接埠：9833)：中國、德國、法國、韓國、荷蘭、波蘭、俄國

若需連線 TWCC Windows 個體，請您與客服聯絡。
:::

<br/>

## 建立安全性群組規則

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 由服務列表點選「**安全性群組**」進入「**安全性群組管理 (虛擬運算個體列表)**」頁面，點選可用的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_491c26f5432bafabc42dcfbde67d3d19.png)


 
* 進入網路安全規則管理頁面，會顯示目前的網路安全規則，點擊「**＋建立**」，可創建新的規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_62c9d8a1bc691b23c90db9065ae46233.png)


* 進入「建立網路安全規則」頁面，填寫網路安全規則的設定資訊，完成後點擊「**下一步：檢閱+建立>**」。
    * 方向：選擇「ingress」輸入或「egress」輸出。
    * 連接埠範圍(最小)：設定套用此規則開始的連接埠。
    * 連接埠範圍(最大)：設定套用此規則結束的連接埠。
    * 協定：選擇欲管控的協定如 tcp、udp、icmp... 等。
    * CIDR：指要套用此虛擬運算個體安全規則的 CIDR 網段。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65f5a4642010788eaade8690416c0fd4.png)

* 檢視網路安全規則的設定資訊及計畫的額度資訊，確定後點選「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8694bfd1e5382dc5e95b6955c19a9c0e.png)

* 建立完成後，即可於安全性群組規則列表新增一項新的安全規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f644003a278a6603269b5ba1a4fd09da.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

:::info
若要進行設定網路安全性群組，請使用 `twccli net vcs --help` 進行查詢各細項功能
:::

- 若要設定對安全網路段：10.10.10.0/24，開放 TCP:81 埠的連入(ingress)，使用指令如下

```
twccli net vcs -secg -s 892486 -cidr 10.10.10.0/24 -in -proto tcp -p 81
twccli ls vcs -secg -s 892486
```

<details>

<summary>操作範例截圖(點我)</summary>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c3070ab4f93cd206e3945c68e786abfb.png)

</details>

</TabItem>

</Tabs>

:::caution
- 考量資安風險，CIDR 請勿設定 x.x.x.x"/0" (即與 0.0.0.0/0 等效) 之危險網段。
- 連接埠範圍請審慎設定，並請小心衡量開放範圍。為避免入侵風險，不建議您設定 ingress 連接埠範圍為 0 ~ 65535。
:::

<br/>


## 删除安全性群組規則

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

進入「**安全性群組規則管理**」頁面 > 勾選規則 > 點擊上方「**刪除**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9c9f9025a29dc292698fc94c87ae62ce.png)

- 或點擊規則右邊之 「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 選單按鈕，並點擊「**刪除**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


若要取消已設定的安全性群組，可使用 :point_right: `twccli rm vcs -secg $SecurityGroupId `

:::info
刪除安全性群組的時候，請使用安全性群組的 UUID 進行刪除。
UUID 最短僅需提供前8碼，即可進行刪除。
:::

參考範例:point_down:：
```bash
twccli rm vcs -secg ff781775
```

</TabItem>

</Tabs>