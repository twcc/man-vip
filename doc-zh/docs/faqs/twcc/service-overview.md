---
sidebar_position: 1
title: '產品概觀'
sidebar_label: '產品概觀'
slug: '/faqs/twcc/service-overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-product-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-product-zh'
---

# FAQs | 產品概觀

<details>

<summary> Q1. 容器運算 (CCS)、虛擬運算 (VCS) 及高速運算 (HPC) 有什麼不同？</summary>

三種服務的功能與特色、資源規格、儲存空間比較如下：

| <p align="left" style={{width:60+'pt'}}>服務</p> |  <p align="left" style={{width:100+'pt'}}>容器運算服務 (CCS)</p>| <p align="left" style={{width:120+'pt'}}>虛擬運算服務 (VCS)</p>| <p align="left" style={{width:90+'pt'}}>高速運算 (HPC)</p>|
| -------- | -------- | -------- | -------- |
| 功能與特色 | ● 適用 AI<br/>模型訓練與推斷<br/>● 可隨時調整參數，利於開發<br/>● 資源選項固定 | ● 功能與一般虛擬機雷同，適合架設服務伺服器<br/>● 可調整網路及安全相關設定<br/>● 資源選項固定 | ● 跨節點運算<br/>● 命令列介面<br/>● 彈性選用 GPU 數量          |
| 資源規格   | ● 最多可調用 8 顆 GPU<br/>● 資源比 GPU:CPU:RAM(GB) 為 1:4:90              | ● 提供 vCPU，最多可調用 48 核                                                                   | ● 可彈性依<br/>需求調整 GPU 數量       |
| 儲存空間   | ● 高速檔案系統 (HFS)<sup> [1][2] </sup>        | ● 虛擬運算個體系統碟 (100 GB)<br/>● 虛擬磁碟服務 (VDS) 附加資料碟，可自行選擇容量                                                                   | ● 高速檔案系統 <br/>(HFS)<sup> [1][2] </sup>           |


- <sup>[1]</sup> 註冊帳號及獲得 200 GB (/home 與 /work 各 100 GB)，可依需求增購空間。
- <sup>[2]</sup> 自2021年9月1日起，國科會(原科技部)計畫下每個帳號之暫存工作目錄區域(/work) 1500 GB 內免費使用。系統僅提供預設配額 100 GB，若需調高配額請至<ins><a href = "/docs/user-guides/tws-member-center/access-tws-member-center"> 會員中心 </a></ins> 調整。


</details>

<details>

<summary> Q2. 高速檔案系統 (HFS)、虛擬磁碟服務 (VDS) 、雲端物件儲存服務 (COS)及雲端檔案儲存(CFS)有什麼不同？</summary>

三種服務的搭配運算服務與價位、存取速度、特色比較如下：

| <div style={{width:120+'px'}} align="left">服務</div> | <div style={{width:150+'px'}} align="left">高速檔案系統 (HFS)</div> | <div style={{width:180+'px'}} align="left">虛擬磁碟服務 (VDS)</div>     | <div style={{width:200+'px'}} align="left">雲端物件儲存服務 (COS)</div> |<div style={{width:250+'px'}} align="left">雲端檔案服務(CFS)</div>|
| -------- | -------- | -------- | -------- |-------- |
| 搭配運算服務 | ● 容器運算服務 (CCS)<br/>● 高速運算服務 (HPC)<br/> | ● 虛擬運算服務 (VCS)<br/> | ● 藉由 TWCC CLI 與容器運算服務及虛擬運算服務傳輸資料 <br/> | ● 提供 TWCC 服務存取資料，以進行 AI/ML pipeline、資料分析等工作<br/>|
| 價位高至低排序(1->4) | 1 | 2 | 3 |熱儲存價位:3<br/>冷儲存價位:4|
| 資料傳輸 | ● 透過 SFTP 上傳及下載檔案<br/> ● 透過 TWCC CLI 與雲端物件儲存服務 (COS) 進行傳輸 | ● 透過 TWCC CLI 與雲端物件儲存服務 (COS) 進行傳輸 <br/> ● 使用 SSH 連線虛擬運算個體，掛載且初始化虛擬磁碟，並透過 SFTP 上傳與下載檔案| ● 透過第三方軟體上傳及下載檔案  <br/>| ● 透過第三方軟體上傳及下載檔案 <br/> ● 支援SFTP 上傳與下載檔案 <br/>● 藉由權限設定分享檔案給專案成員，達到資料協作的目的 <br/> ● 可以對檔案進行版本控管與搜尋 <br/> ● 可視使用情境將檔案方置於冷儲存或是熱儲存<br/> |

</details>

<details>

<summary> Q3. 容器運算 (CCS) 跟虛擬運算 (VCS) 使用上分別適用於那些情境？</summary>

容器運算 (CCS) 適用於大規模且資料密集的高負載工作，例：建立 AI 模型訓練。
虛擬運算 (VCS) 適用於工作負載小的應用程式，例：網站架設，AI 推論服務。

</details>

<details>

<summary> Q4. TWCC 資訊安全相關認證與機制？</summary>
關於 TWCC 的資安認證與機制請參考<ins><a href = "https://www.twcc.ai/certification">此文件</a></ins>之說明。
</details>