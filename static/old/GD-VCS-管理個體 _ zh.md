---
tags: Guide, VCS, TW
title: 管理個體 | zh
GA:
---


{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 管理個體：停止/啟動/關機/重開機/刪除

您可以依需求與使用情境，對虛擬運算個體執行停止、啟動、關機、重開機、刪除之動作。

:::info
{%hackmd @docsharedstyle/note-zh %}
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::

## 停止個體

若您將持續一段時間不使用個體，並希望保留各項資源，您可以點選「**停止**」以關機並回收個體資源，個體將呈現 **`Stopping`**，準備進入 **`Stopped`** 資源已釋放的狀態 。在 **`Stopped`** 狀態下，<ins>**個體將不再計費**</ins>。

:::danger
{%hackmd @docsharedstyle/important-zh %}
虛擬運算個體停止中 (**`Stopping`**)，請勿刪除個體，否則將影響系統處理工作，導致個體錯誤 (**`Error`**)。
:::

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**停止**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fed3868fd9683c5e21bdddf2407afe84.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**停止**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**停止**」。


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br>

</details>

<br>

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  
1. 停止後將**釋放**個體資源 — GPU、CPU、vCPU、記憶體、作業系統磁碟。
2. 停止後將**保留**公用 IP、資料磁碟、Auto Scaling、負載平衡。以上資源在重新啟動個體後，皆會自動連結回個體。
3. 除了記憶體內的資料將被清除，儲存於個體的所有資料皆會保留。
4. 其他操作限制如下：
- <i class="fa fa-times" aria-hidden="true"></i> 連線登入
- <i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
- <i class="fa fa-times" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
- <i class="fa fa-times" aria-hidden="true"></i> 建立個體映像檔
- <i class="fa fa-times" aria-hidden="true"></i> 掛載/移除 Auto Scaling 與負載平衡服務
:::

## 重啟個體

若要回復並使用已停止的個體，請點選「**啟動**」，個體狀態將呈現 **`Starting`**，正在重新分配資源中，並準備再次進入 **`Ready`** 狀態。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**啟動**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_33b8fbf1523c8dba1e40300a6d47a3f6.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**啟動**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**啟動**」。

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br>

</details>

<br>


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  
停止再啟動之個體，多數將建立於新的實體主機上。
:::


## 個體關機

**TWCC 入口網站、TWCC CLI 不支援關機功能，請您於個體中操作：**

- Linux 個體：可以於個體中執行`sudo shutdown`、`sudo poweroff -f` 將個體關機
- Windows 個體：可使用`shutdown -s`、點選桌面左下關機鈕執行關機。
 
執行後，個體將進入 **`Shutdown`** 的已關機狀態。在關機狀態下，<ins>**個體將持續計費**</ins>。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
1. 與[<ins>停止個體</ins>](#停止個體)不同，關機後除了會清除記憶體資料，**資源皆不釋放回資源池**，且儲存資料皆保留，重新開機後仍可使用。
2. 操作限制如下：
- <i class="fa fa-times" aria-hidden="true"></i> 連線登入
- <i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
- <i class="fa fa-check" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
- <i class="fa fa-check" aria-hidden="true"></i> 建立個體映像檔
- <i class="fa fa-times" aria-hidden="true"></i> 掛載/分離 Auto Scaling 與負載平衡服務
:::

## 個體重開機

若要重新將已關機的個體開機，請點選「**啟動**」，個體狀態將呈現 **`Starting`**，正在開機中，並準備再次進入 **`Ready`** 狀態。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**啟動**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_88bd1f7f4dc4adca776ffd5a5c3ca27f.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**啟動**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**啟動**」。

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br>

</details>

<br>


## 刪除個體

若要將個體永久刪除，不再使用，在點選刪除後，個體狀態將呈現 **`Deleting`**，個體成功刪除後，便<ins>**不再計費**</ins>，並從個體列表上消失。

其他刪除的注意事項：
- 作業系統 (開機) 磁碟內的資料亦將永久刪除，若需保留可[建立個體映像檔](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh)。
- 資料磁碟則會自動分離保留

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入「**虛擬運算個體管理**」頁 > 點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**刪除**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_806c3c888ea507893c631722b2890dd6.png)

- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**刪除**」。

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

### 指令

```bash
$ twccli mk vcs -s   #個體 ID
$ twccli ls vcs      #檢視結果
```

### 範例

- 刪除 ID 為 **`937651`** 的虛擬運算個體，確認已刪除。

```
$ twccli rm vcs -s 937651
$ twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_024803eddc7136ec4fa25af5fe2ddc84.png)

</details>

<br>


---

:::warning
{%hackmd @docsharedstyle/tip-zh %}
更多虛擬運算個體狀態、服務操作影響、計費與否之資訊，請參考[<ins>虛擬運算個體生命週期</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-zh)。
:::


