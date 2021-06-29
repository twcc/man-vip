---
tags: Guide, CLI, ZH
title: TWCC CLI - VCS | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# <img class="icon" src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af58322eb82b649d1f29aca1f201a117.png" width="25" height="25"> 虛擬運算服務

## 什麼是虛擬運算服務？

請參考[虛擬運算服務 - 服務概觀](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-overview-zh) 的介紹說明。

<br>

## TWCC CLI 操作範例

相關 TWCC CLI 對虛擬運算個體的**實際操作範例**，請於 [虛擬運算服務手冊](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh) 左側目錄搜尋主題，並選擇 **「TWCC CLI」** 的部分參考。

:::spoiler (點擊展開圖示)
:::info
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99fb80204a15b84979e10feffe05e6dd.png)
:::

<br>

## 詳細指令集

您可以點選以下連結，參考指令所帶的**必要**或**選擇性參數**的詳細說明：

**虛擬運算個體**相關操作的指令區以 `mk`、`ls`、`net`、`rm`分為 4 大類：

1. 建立虛擬運算個體 / 映像檔：[twccli mk vcs](https://man.twcc.ai/@TWSC/concept-cli-mk-vcs-zh)
2. 檢視個體與相關資源各項資訊：[twccli ls vcs](https://man.twcc.ai/@TWSC/concept-cli-ls-vcs-zh)
3. 管理個體安全性群組、公用 IP：[twccli net vcs](https://man.twcc.ai/@TWSC/concept-cli-net-vcs-zh)
4. 刪除個體與相關資源：[twccli rm vcs](https://man.twcc.ai/@TWSC/concept-cli-rm-vcs-zh)

---

**虛擬網路**則以 `mk`、`ls`、`rm` 分為以下 3 類： 

5. 建立虛擬網路：[twccli mk vnet](https://man.twcc.ai/@TWSC/concept-cli-mk-vnet-zh)
6. 檢視虛擬網路資訊：[twccli ls vnet](https://man.twcc.ai/@TWSC/concept-cli-ls-vnet-zh)
7. 刪除虛擬網路：[twccli rm vnet](https://man.twcc.ai/@TWSC/concept-cli-rm-vnet-zh)

---

**虛擬磁碟服務**也以 `mk`、`ls`、`rm` 分為以下 3 類： 

8. 建立虛擬磁碟：[twccli mk vds](https://man.twcc.ai/@TWSC/concept-cli-mk-vds-zh)
9. 檢視虛擬磁碟資訊：[twccli ls vds](https://man.twcc.ai/@TWSC/concept-cli-ls-vds-zh)
10. 刪除虛擬磁碟：[twccli rm vds](https://man.twcc.ai/@TWSC/concept-cli-rm-vds-zh)

---

**負載平衡服務**以 `ch` `mk`、`ls`、`rm` 分為以下 4 類： 

11. 建立負載平衡：[twccli mk vlb](https://man.twcc.ai/@TWSC/concept-cli-mk-vlb-zh)
12. 檢視負載平衡資訊：[twccli ls vlb](https://man.twcc.ai/@TWSC/concept-cli-ls-vlb-zh)
13. 更新負載平衡：[twccli ch vlb](https://man.twcc.ai/@TWSC/concept-cli-ch-vlb-zh)
14. 刪除負載平衡：[twccli rm vlb](https://man.twcc.ai/@TWSC/concept-cli-rm-vlb-zh)