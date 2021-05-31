---
tags: Guide, VCS, VDS, TW
title: 管理映像檔 | zh
GA:
---


{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 管理映像檔 

## 檢視映像檔資訊

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入「**虛擬運算個體映像檔管理**」頁面，會看到所有映像檔的列表資訊，最後創建的映像檔會列在最上面，建立後待狀態變成 **`ACTIVE`** 後才可以使用映像檔建立個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_48fcd4930b9434b5ac9b11aaa8ff38ef.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

### 指令

```bash
$ twccli ls vcs -snap [-all] #檢視所有映像檔 ([-all]限租戶管理員使用) 
                      [-s]   #檢視特定 ID 的映像檔
```

:::info
{%hackmd @TWSC/cli-parameter-note-zh %}
:::

### 範例

- 檢視為 ID 為 **`918628`** 的虛擬運算個體建立的快照狀態
```bash
$ twccli ls vcs -snap -s 918628  
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19ffc79130c118e2642598005944ffa5.png)


</details>

<br>


## 刪除映像檔

:::danger

{%hackmd @docsharedstyle/important-zh %}

選用映像檔建立虛擬運算個體，當狀態為建立中 (**`Starting`**) 時，為確保個體可完整建立，**請勿刪除映像檔**。
:::

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 不需使用的映像檔，可以點選該映像檔列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> 選單按鈕，再選擇「**刪除**」即可。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fef6792d321ae679727ee90dcf12318d.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br>

</details>

<br>



## 以映像檔建立個體

請參考[建立客製化個體](https://man.twcc.ai/@TWSC/guide-vcs-create-custom-instance-zh)。