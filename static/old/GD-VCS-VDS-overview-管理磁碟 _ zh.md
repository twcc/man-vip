---
tags: Guide, VCS, VDS, TW
title: 管理磁碟 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 管理磁碟

**資料磁碟** 建立後，您可以檢視磁碟資料、將磁碟連結至虛擬運算個體 (或與個體分離)、刪除磁碟。<br>(*※ 系統磁碟目前不支援以下管理功能*)

:::info
{%hackmd @docsharedstyle/note-zh %}
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh#%E8%99%9B%E6%93%AC%E7%A3%81%E7%A2%9F%E6%9C%8D%E5%8B%99)。
:::

## 檢視磁碟

檢視您的資料磁碟建立時間、ID、名稱、容量、類型、狀態、已連結之虛擬運算個體、掛載的路徑。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**資料磁碟管理**」頁，可檢視磁碟概略資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5d355da56d7b0dd4c1d31b98abe388ac.png)

- 若點選您的資料磁碟，進入「**資料磁碟詳細資料**」頁，則可檢視詳細的磁碟資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2c8742497a8cf2272b14d8fd77964bfd.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 檢視磁碟 ID、名稱、建立時間、掛載路徑、容量、狀態、類型。

```bash
$ twccli ls vds
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c976443120fa105196269359143aeb3a.png)

</details>

## 連結至虛擬運算個體

資料磁碟建立好後，需先與虛擬運算個體連結，連結後進入虛擬運算個體，將磁碟初始化後才可使用。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

*  資料磁碟建立後，會出現在資料磁碟管理列表的最上方，等待其狀態變成 **`AVAILABLE`** 後即可開始連結至個體使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f7c1cc7ccb72aebc2efda985d717abf.png)



* 點擊該列表進入資料磁碟詳細資料頁面，點擊「**連結**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2f6a1a074dcc0abaf7d0fa34b5a05518.png)



* 出現「**連結磁碟**」視窗後，選擇欲連結的虛擬運算個體後按下「**確定**」。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 下拉選單僅顯示可連結資料磁碟 (狀態非 **`Stopped`**) 的虛擬運算個體。 
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5025d37d70ede7ec72f9cd05fba6fa44.png)


* 資料磁碟連結至虛擬運算個體後，可按一下「**重新整理**」，已連結的個體會顯示在下方的區塊中，磁碟狀態將顯示 **`IN-USE`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa75bdb78bc52059698a1e40d540a0da.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚未支援)</summary>

<br>

</details>

<br>


:::info
{%hackmd @docsharedstyle/note-zh %}

1. 若需改為使用其他類型的磁碟，或需變更磁碟容量，請參考：[<ins>HowTo : 變更資料磁碟</ins>](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-zh)。
2. 資料磁碟連結至虛擬運算個體後，需經初始化才能使用，步驟請參考：
- [<ins>HowTo：初始化磁碟- Linux 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)
- [<ins>HowTo：初始化磁碟- Windows 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)
:::

## 自虛擬運算個體分離

若需刪除資料磁碟，或需與其他虛擬運算個體連結，請先將磁碟自原虛擬運算個體分離，再執行其他動作。

卸載、分離資料磁碟詳細步驟，請參考 [分離資料磁碟](https://man.twcc.ai/@twccdocs/vcs-vds-guide-detach-data-disk-zh)。



## 刪除資料磁碟

當磁碟不需使用時，您可刪除磁碟。刪除後即<ins>**不再計費**</ins>。

:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 删除資料磁碟前請注意，磁碟一旦删除將無法挽回。
1. 若資料磁碟的狀態為 **`IN-USE`** 必須先將該磁碟自虛擬運算個體分離，狀態變成 **`AVAILABLE`** 後，才能刪除。
2. 當資料磁碟的快照存在時，將無法刪除該磁碟，請您先完成刪除磁碟快照，再刪除磁碟。
:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**資料磁碟管理**」頁 > 勾選磁碟 > 點選上方「**刪除**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_910467bce5c2fd908efdf45c606cdbed.png)

- 或點選磁碟旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**刪除**」。
- 或進入「**資料磁碟詳細資料**」頁 > 點選上方「**刪除**」。

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

### 指令

```bash
$ twccli rm vds -id  #資料磁碟 ID 
                [-f] #是否強制刪除
```

:::info
{%hackmd @TWSC/cli-parameter-note-zh %}
:::

### 範例

- 刪除 ID 為 `376749` 的資料磁碟
```bash
$ twccli rm vds -id 376749
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e2a0873513f1cc8f60be01a78ae3b456.png)

- 強制(無警告視窗)刪除 ID 為 `376716` 的資料磁碟

```bash
$ twccli rm vds -id 376749 -f
```

</details>



