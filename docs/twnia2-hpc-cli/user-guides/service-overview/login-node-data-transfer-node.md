---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-login-and-data-transfer-node-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-login-and-data-transfer-node-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 登入與檔案傳輸節點


| 類別 | 網域名稱 | 描述 |數量 |
| -------- | -------- | -------- | -------- |
| 登入節點     | ln01.twcc.ai     | 可執行下列工作<sup>*</sup>：<br/>1. 提交<sup>**</sup>、管理 job<br/>2. 可存取高速檔案系統上的檔案<br/>3. 編譯 HPC 相關應用程式<br/>4. 運行除錯程式以改善程式碼     |1   |
| 檔案傳輸節點     | xdata1.twcc.ai     | 可執行下列工作：<br/>1. 資料傳入/傳出高速檔案系統 (HFS)<br/>2. 使用 SFTP 的方式透過此類節點進行資料傳輸<sup>***</sup>  |1    |


- 登入節點與計算節點擁有相似的規格，兩種節點具有相容的環境，提供開發與測試應用程式碼的服務。

:::caution
<sup>*</sup>請勿於登入節點執行計算工作，系統超過負載將當機，並導致其他使用者無法登入。
:::

:::info
- <sup>**</sup> 在登入節點當機時，若使用 `srun` and `salloc` 指令提交 job 可能會造成計算中斷或資料流失，因此建議使用 `sbatch` 指令運行大規模計算工作。
- <sup>***</sup>TWCC 也提供用戶以 `rsync` 指令傳輸檔案，傳輸大量檔案使用體驗佳。但由於系統無提供 `rsync` 之傳輸紀錄，若有資安疑慮恐無法追查。若您同意承擔使用風險並授權 TWCC 開啟 `rsync` 功能，請您向 <ins><a href="isupport@twcc.ai"></a>isupport@twcc.ai</ins> 提出需求。
:::




