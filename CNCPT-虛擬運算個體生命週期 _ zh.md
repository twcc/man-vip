---
title: 虛擬運算個體生命週期 | zh
tags: Concept, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 虛擬運算個體生命週期


各項在使用者介面或個體中，對虛擬運算個體的執行動作—建立、停止、啟動、關機、重開機、刪除，與動作所產生的個體生命狀態，與個體資源、資料、計費息息相關，並將連動影響連線、映像檔、負載平衡、Auto Scaling、磁碟等相關的服務操作。本文將詳細說明虛擬運算個體從建立到刪除之間，個體所有的生命週期狀態、意義與計費之間的關係。


- 執行動作與個體狀態之間的轉換：


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_93c46993c1a7793e1017166b5ace1304.png)




- 個體狀態與描述、用量計費的關係如下表所示：

| 個體狀態 | 狀態描述 |個體用量計費 | 
| -------- | -------- | -------- |
| `Starting`     |準備進入 `Ready` 狀態。<br> - 建立個體：系統正在分配資源並初始化個體中<br> - 停止後啟動個體：啟動中 <br> - 關機後啟動個體：開機中| 計費     | 
| `Ready`     | 初始化已完成，個體已可正常連線使用|計費     | 
| `Stopping`   |釋放個體資源中，準備進入 `Stopped` 狀態| 計費    | 
| `Stopped`    |於使用者介面點選「停止」，個體將呈現 `Stopped` (關機且計算資源已釋放)，並且可再次透過使用者介面點選「啟動」重新配置資源。 | 不計費|
| `Shutdown`    |於個體中執行關機指令後，個體將呈現已關機狀態，並且可再次透過使用者介面點選「啟動」重新開機。| 計費| 
| `Queueing`     | 分配資源中，取得資源後將進入`Starting` 狀態|計費    | 
| `Deleting`     | 刪除個體中，個體將被永久刪除|計費，刪除成功後便立即不再計費    | 

## 建立個體

建立個體後，系統將分配資源並初始化執行個體中，個體狀態將呈現 **`Starting`**，此時尚未能連線使用，但不久後即進入 **`Ready`** 狀態。在 **`Ready`** 狀態下，可操作內容如下：

<i class="fa fa-check" aria-hidden="true"></i> 連線登入
<i class="fa fa-check" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
<i class="fa fa-check" aria-hidden="true"></i> 建立個體映像檔
<i class="fa fa-check" aria-hidden="true"></i> 建立/移除公用 IP
<i class="fa fa-check" aria-hidden="true"></i> 掛載/移除 Auto Scaling 與負載平衡服務

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 建立步驟請參考[<ins>建立虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)
:::

## 停止個體

若您將持續一段時間不使用個體，並希望保留各項資源，您可以點選「停止」關機並回收個體資源，個體將呈現 **`Stopping`**，準備進入 **`Stopped`** 資源已釋放的狀態 。在 **`Stopped`** 狀態下，<ins>**個體將不再計費**</ins>。其他操作限制如下：

<i class="fa fa-times" aria-hidden="true"></i> 連線登入
<i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
<i class="fa fa-times" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
<i class="fa fa-times" aria-hidden="true"></i> 建立個體映像檔
<i class="fa fa-times" aria-hidden="true"></i> 掛載/移除 Auto Scaling 與負載平衡服務

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  
1. 停止後將**釋放**個體資源 — GPU、CPU、vCPU、記憶體、作業系統磁碟。
2. 停止後將**保留**公用 IP、資料磁碟、Auto Scaling、負載平衡。以上資源在重新啟動個體後，皆會自動連結回個體。
3. 除了記憶體內的資料將被清除，儲存於個體的所有資料皆會保留。
4. 個體停止步驟請參考[<ins>停止虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/vcs-guide-manage-instance-zh#%E5%81%9C%E6%AD%A2%E5%80%8B%E9%AB%94)
:::

## 重啟個體

若要回復並使用已停止的個體，請點選「啟動」，個體狀態將呈現 **`Starting`**，正在重新分配資源中，並準備再次進入 **`Ready`** 狀態。
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  
1. 停止再啟動之個體，多數將建立於新的實體主機上。
2. 個體啟動步驟請參閱[<ins>重啟虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/vcs-guide-manage-instance-zh#%E9%87%8D%E5%95%9F%E5%80%8B%E9%AB%94)
:::


## 個體關機

執行關機後，個體將進入 **`Shutdown`** 的已關機狀態，在 **`Shutdown`** 關機狀態下，<ins>**個體將持續計費**</ins>。

操作限制如下：

<i class="fa fa-times" aria-hidden="true"></i> 連線登入
<i class="fa fa-times" aria-hidden="true"></i> 建立/移除公用 IP
<i class="fa fa-check" aria-hidden="true"></i> 連結/分離虛擬磁碟的資料磁碟
<i class="fa fa-check" aria-hidden="true"></i> 建立個體映像檔
<i class="fa fa-times" aria-hidden="true"></i> 掛載/分離 Auto Scaling 與負載平衡服務

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- 與[<ins>停止個體</ins>](#停止個體)不同，關機後除了會清除記憶體資料，**資源皆不釋放回資源池**，且儲存資料皆保留，重新開機後仍可使用。
- 關機步驟請參考[<ins>虛擬運算個體關機</ins>](https://man.twcc.ai/@TWSC/vcs-guide-manage-instance-zh#%E5%88%AA%E9%99%A4%E5%80%8B%E9%AB%94)
:::

## 個體重開機

若要重新將已關機的個體開機，請點選「啟動」，個體狀態將呈現 **`Starting`**，正在開機中，並準備再次進入 **`Ready`** 狀態。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  個體重開機步驟請參考[<ins>虛擬運算個體重開機</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-zh#%E5%80%8B%E9%AB%94%E9%87%8D%E9%96%8B%E6%A9%9F)
:::

## 刪除個體

若要將個體永久刪除，不再使用，在點選刪除後，個體狀態將呈現`Deleting`，<ins>**個體成功刪除後，便不再計費**</ins>，並從個體列表上消失。其他刪除的注意事項：
- 作業系統 (開機) 磁碟內的資料亦將永久刪除，若需保留可建立個體映像檔。
- 資料磁碟則會自動分離保留

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**  個體刪除步驟請參考[<ins>刪除虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/vcs-guide-manage-instance-zh#%E5%88%AA%E9%99%A4%E5%80%8B%E9%AB%94)
:::