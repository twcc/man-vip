---
title: 登入與檔案傳輸節點 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 登入與檔案傳輸節點


| 類別 | 網域名稱 | 描述 |數量 |
| -------- | -------- | -------- | -------- |
| 登入節點     | ln01.twcc.ai     | 可執行下列工作：<br>1. 提交、管理 job<br>2. 可存取高速檔案系統上的檔案<br>3. 編譯 HPC 相關應用程式<br>4. 運行除錯程式以改善程式碼     |1   |
| 檔案傳輸節點     | xdata1.twcc.ai     | 可執行下列工作：<br>1. 資料傳入/傳出高速檔案系統 (HFS)<br>2. 使用 SFTP 的方式透過此類節點進行資料傳輸  |1    |


- 登入節點與計算節點擁有相似的規格，兩種節點具有相容的環境，提供開發與測試應用程式碼的服務。

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 請勿於登入節點執行計算工作，系統超過負載將當機，並導致其他使用者無法登入。
:::

:::info
{%hackmd @docsharedstyle/note-zh %}
TWCC 也提供用戶以 `rsync` 指令傳輸檔案，傳輸大量檔案使用體驗佳。但由於系統無提供 `rsync` 之傳輸紀錄，若有資安疑慮恐無法追查。若您同意承擔使用風險並授權 TWCC 開啟 `rsync` 功能，請您向 <ins><a href="isupport@twcc.ai"></a>isupport@twcc.ai</ins> 提出需求。
:::
