---
tags: Guide, VCS, TW
title: 建立客製化個體 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 建立客製化個體

建立 TWCC 虛擬運算個體後，您可以進入個體部署您需要的工具、打造您專屬的客製化環境，並建立[**映像檔**](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh)保存工作環境，即可重複建立相同客製化的環境，也可以作為備份個體設定之措施，避免個體毀損遺失。

:::info
{%hackmd @docsharedstyle/note-zh %}
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::


{%hackmd @twccdocs/chunk-before-you-begin-zh %}
- [建立虛擬運算個體](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)，部署工作環境，並建立個體[映像檔](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh)。

## 建立客製化個體

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>
<br>

建立步驟同參考 [<ins>建立虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)，僅「**映像檔**」改選擇所要回復的映像檔版本 `(private)xxx您自訂的映像檔名稱xxx`，即可完成建立。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_020639a28b42ede29aa4ca4ceb1612a5.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- CLI start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (TBD) </summary>

</details>

<br>

:::danger

{%hackmd @docsharedstyle/important-zh %}

選用映像檔建立虛擬運算個體，當狀態為建立中 (**`Starting`**) 時，為確保個體可完整建立，**請勿刪除映像檔**。
:::