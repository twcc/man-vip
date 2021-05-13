---
tags: ANCMNT, VDS, EN
title: 避免產生非預期費用：虛擬磁碟服務 (VDS) | en
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/eng-working-en %}

# 避免產生非預期費用：虛擬磁碟服務 (VDS)

## 文章說明

此篇文章希望幫助虛擬磁碟服務之用戶，重新檢視目前使用的磁碟狀態，若有閒置未使用的磁碟建議您進行刪除，**避免產生非預期之扣款**：

:::danger
{%hackmd @docsharedstyle/important-zh %}

- 刪除磁碟前，請務必確認磁碟內資料已有[<ins>備份</ins>](https://man.twcc.ai/@twccdocs/r1DhqHdpN?type=view#Volume-%E5%BF%AB%E7%85%A7)，刪除後磁碟內資料將無法復原。
- 若您直接刪除虛擬運算個體，已連結之虛擬磁碟 (Volume) 僅會與個體分離，不會隨之刪除，請務必至虛擬磁碟 (Volume) 管理頁面將不需要之磁碟刪除，以免造成額外的收費。
:::

## 刪除未使用之磁碟

<details class="docspoiler">

<summary><b>1. 刪除閒置中之磁碟 (<i>AVAILABLE</i>) </b></summary>

<br>

若磁碟 **<ins>未</ins>** 與虛擬運算個體連結，將顯示 **`AVAILABLE`** 閒置狀態，確認資料已[<ins>備份</ins>](https://man.twcc.ai/@twccdocs/r1DhqHdpN?type=view#Volume-%E5%BF%AB%E7%85%A7)後，可直接進行刪除，步驟參考如下：

### Step 1. 進入虛擬磁碟服務

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4894b18e3bc0b29ddf8b875e4f03e986.png)


### Step 2. 刪除 `AVAILABLE` 之磁碟


- 勾選 **`AVAILABLE`** 之磁碟 > 點擊上方「**刪除**」按鈕; 或直接點擊右側 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 進行刪除。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7d9c71e16d2c8645f65bc34b93aad9b4.png)

- 成功刪除後，磁碟將即自列表中消失，即不再扣款使用額度。

</details>


<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->


<!-- 1 start -->

<details class="docspoiler">

<summary><b>2. 刪除與虛擬運算個體連結之磁碟 (<i>IN-USE</i>)</b></summary>

<br>

若磁碟 **<ins>已</ins>** 與虛擬運算個體連結，將顯示 **`IN-USE`** 使用中之狀態，確認資料已[<ins>備份</ins>](https://man.twcc.ai/@twccdocs/r1DhqHdpN?type=view#Volume-%E5%BF%AB%E7%85%A7)後，需先將磁碟與個體分離，才能進行刪除，步驟參考如下：

### Step 1. 進入虛擬磁碟服務

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_181bf53ba6dba6cdeb50595fe7d3da60.png)


### Step 2. 點擊 `IN-USE` 之磁碟

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2e8acb6ca4ede032ceed6d1a065ca292.png)

進入 Volume 詳細資料頁後，可檢視已連結的個體與掛載路徑：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa6b4bf6ee5d1cec73d61a368b6d8eff.png)


### Step 4. 與虛擬運算個體分離

點擊上方「**分離**」按鈕，磁碟將與虛擬運算個體分離

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d0843d71573503dec64b73821be3548.png)


### Step 5. 刪除磁碟

與個體分離後，磁碟狀態轉為 **`AVAILABLE`** 後，即可點擊上方「**刪除**」按鈕將磁碟刪除。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4e995277444a74520f4defe695881bcb.png)

- 成功刪除後，磁碟將即自列表中消失，即不再扣款使用額度。

</details>


<br>


:::info

{%hackmd @docsharedstyle/note-zh %}

若您有未使用的虛擬運算個體，也建議您進行刪除，避免產生額外費用，刪除方式請參考 [<ins>此文件</ins>](https://man.twcc.ai/uaKL6SkBT9GePrMILRpomg?view#%E7%AE%A1%E7%90%86%E5%80%8B%E9%AB%94)。
:::
