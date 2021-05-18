---
title: 共契 VCS (GPU) vs. CCS 選購指南 | zh
tags: Contract
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# 共契 VCS (GPU) vs. CCS 選購指南


TWCC [共契服務](https://man.twcc.ai/@twccdocs/supplycontract-zh)在**雲端 GPU 運算資源組**提供 GPU 規格的品項 (如下表)，共契用戶可選購虛擬運算服務(Virtual Compute Service, VCS)、或容器運算服務 (Container Compute Service, CCS)，兩者皆可建立 GPU 環境。

本文提供用戶選購指南，說明 VCS、CCS 服務之差異，並提供 VCS GPU 虛擬運算個體、CCS GPU 容器的 CPU 效能評測。工作負載小的應用程式建議使用 TWCC VCS 服務；大規模且資料密集的高負載工作則建議使用 TWCC CCS 服務，若共契用戶由 TWCC VCS 轉用 TWCC CCS 服務，另享有優惠！

#### 雲端 GPU 運算資源組

| 項次 | 品名 | TWCC 服務 |
| -------- | -------- | -------- |-------- |
| 1.1| `雲端GPU運算資源一般規格`<br>GPU:1片/CPU:8Core/RAM:90GB /HD:100GB|虛擬運算服務(VCS)、<br>容器運算服務(CCS)|
| 2.1 | `雲端GPU運算資源一般規格`<br>GPU:2片/CPU:16Core/RAM:180GB /HD:100GB |   虛擬運算服務(VCS)、<br>容器運算服務(CCS)|
 | 3.1 |`雲端GPU運算資源一般規格`<br>GPU:4片/CPU:32Core/RAM:360GB /HD:100GB      |虛擬運算服務(VCS)、<br>容器運算服務(CCS)|
 |4.1| `雲端GPU運算資源一般規格`<br>GPU:8片/CPU:64Core/RAM:720GB /HD:100GB      |虛擬運算服務(VCS)、<br>容器運算服務(CCS)|


## 1. 服務特色比較

|| 虛擬運算服務 (Virtual Compute Service, VCS)| 容器運算服務 (Container Compute Service, CCS)|
| -------- |--------  |-------- |
| 服務特色 |<ul><li>提供虛擬機服務，並可搭配使用自動擴展與負載平衡機制，無需擔心流量過載導致服務中斷。</li><li>Site-to-site VPN、安全性群組、Web應用程式防火牆、入侵防禦系統...等，提供多項彈性、完整的資安防護。</ul>  | <ul><li>提供輕量級且能秒級部署、啟動速度較快的容器環境，可攜性佳。</li><li>內建便利的 Jupyter Notebook 功能，使用者無需開啟本機端指令列連線容器，透過網路即可隨時上線完成工作。</li><li>可隨開隨用，以秒計費。</li><li>單一計畫最高可依需求開出8核在單一容器中，且最高同時可開出十個容器（合計80核）。</li><li>獨家開發「容器白名單」功能，可有效控管可連線之服務網路範圍，確保資料不被竊取及盜用。</li></ul>|
| 硬體資源 |<ul><li>使用新型 [Intel® Xeon® Gold 6248](https://ark.intel.com/content/www/us/en/ark/products/192446/intel-xeon-gold-6248-processor-27-5m-cache-2-50-ghz.html) CPU，支援多執行緒，能有效利用資源。</li><li>提供最佳比例的資源配置機制，規格優於業界水準。</li><li>除一般 CPU 虛擬運算個體，亦提供 GPU 加速運算個體的選擇。</li></ul>| <ul><li>所有容器皆具備所有容器皆具備 [NVIDIA® V100 GPU](https://www.nvidia.com/en-us/data-center/v100/)，資源可全力支援運算。</li><li>經 Nvidia 公司全力技術支援的容器環境，使用者不需安裝驅動程式及訓練環境，馬上開設、立馬使用。</li><li>配合 [TWCC-CLI](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5) 使用，可結合 [Kubeflow](https://www.kubeflow.org/) 及 [Airflow](https://airflow.apache.org/) 等工作流程管理平台，達到 AI/ML 自動化。 </li></ul> |
| 軟體資源 | 提供 Windows、Linux 作業系統選擇；映像檔含作業系統，環境部署時間較容器來得長，但您可擁有底層作業系統的管理權限。| 非一般作業系統，為 NGC 搭建的容器環境。並已預載多樣化的 AI 深度學習框架。|
| 儲存系統 | 虛擬磁碟 (Virtual Dsk Service, VDS)，可掛載多個高速、低延遲的 SSD 磁碟。| <ul><li>採用 InfiniBand 網路串接高速檔案系統 (Hyper File System, HFS)，具極高的吞吐量和極低的延遲，資料傳輸效能佳，儲存空間可彈性擴增容量。</li><li>每位使用者可免費使用 200GB (work/ 及 home/）空間。</li>|
| 適用情境 | 適用於工作負載小的應用程式，例：網站架設，AI 推論服務。| <ul><li>適用於大規模且資料密集的高負載工作。<br> </li><li>適合建立AI模型訓練</li>|


## 2. CPU 效能相當

使用國際間通用的 [Intel Linpack benchmark](https://software.intel.com/content/www/us/en/develop/articles/intel-mkl-benchmarks-suite.html) 分別測試 VCS GPU 個體 與 CCS 容器的 CPU 效能，透過雙精度線性計算方程組來測試浮點運算能力 (GFlops)。測試的規格如下：

| TWCC 服務 | 共契項次 | GPU | CPU | 記憶體 |
| -------- | -------- | -------- | -------- |  -------- | 
| 容器運算服務 (Container Compute Service, CCS)     | 1.1    |1|4 cores|90 GB |
| 虛擬運算服務 (Virtual Compute Service, VCS)   | 1.1     |1|8 vcores| 90 GB |


評測結果兩服務的 CPU 效能 在 Problem size 為 1000 - 45000 時差距甚小 (詳如下表)，效能相當，顯示 VCS CPU 開啟多執行緒可有效利用資源，並能維持應有的計算效能。

| Problem Size | GFLOPS Average-CCS | GFLOPS Average-VCS |
| -------- | -------- | -------- |
| 10000     | 287.9904    | 289.3429     |
| 15000     | 306.3143     | 307.6156     |
| 18000     | 305.5732     | 316.0054     |
| 20000     | 306.5518     | 315.4821     |
| 22000     | 306.7645     | 305.6874    |
| 25000     | 310.3173     | 315.9584    |
| 26000     | 312.6835     | 319.128     |
| 27000     | 311.6864     | 319.4253     |
| 30000     | 315.522    | 317.8702     |
| 35000     | 318.1729     | 319.2708     |
| 40000     | 319.1016     | 331.6347    |
| 45000     | 320.8948     | 333.9036     |


## 3. 共契用戶轉用 TWCC CCS 服務之優惠

用戶可參考上述特色與效能的說明，依使用情境選擇適用的服務。
在費用上的差異，TWCC VCS 對外網路流量需收費，TWCC CCS 網路流量皆不計費。
除此之外，若共契用戶由 TWCC VCS (規格含 GPU) 轉為使用 TWCC CCS，我們將提供每小時 31 點額度的優惠！

詳情請洽 TWCC 業務窗口：

- 業務窗口：鍾小姐
Email：<a href="mailto:0303113@narlabs.org.tw">0303113@narlabs.org.tw</a>
電話：(03)5776085 #359


<!--- 

------ 其他筆記-Linpack 操作內容 (請先略過) -------




### CCS

- 建立型號為 `c.super` (1 GPU/4 CPU/90 GB RAM) 的開發型容器

:::info
參考[開發型容器](https://www.twcc.ai/doc?page=container)
:::

- 建立完成後進入「開發型容器詳細資料頁」 > 開啟 Jupyter Notebook > 選擇開啟 Terminal > 輸入以下指令設定參數

```bash=
export MKL_DYNAMIC=false
export OMP_NUM_THREADS=4
```
- 開始執行 Linpack 效能測試程式

```bash=
Run LINPACK
```

- 畫面會顯示 CPU 的基本資訊、效能程式的設定，將執行 15 種 problem size (等式的數量)：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12a1d717ff92be950ad819a6d590d590.png)

- 所有 problem size 將重複執行四次計算，每次浮點數運算效能顯示在 GFlops 欄位：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fd5b9b33f9a1f1d14e1f48a915d22eab.png)

- 平均 GFlops 效能結果如下：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9803b6c4e9aa6627818d0f5513d3f685.png)


### VCS

- 建立型號為 `共契雲端GPU運算資源-GPU:1片/CPU:8Core/RAM:90GB/HD:100GB` 或 `vgv.xsuper` (1 GPU/8 vCPU/90 GB RAM) 的虛擬運算個體。



:::info
參考[虛擬運算個體](https://www.twcc.ai/doc?page=vm)
:::

- 建立完後，連線登入虛擬運算個體，執行如上的 Linpack 效能程式
- 畫面會顯示 CPU 的基本資訊、效能程式的設定，將執行 15 種 problem size (等式的數量)：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1ea28263d3e7a75df6460f8dcbd8943.png)

- 所有 problem size 計算效能如下：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4fe92226cda0795d147c02b34a950911.png)

- 平均 GFlops 效能如下：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e4f13cc105885e7e687deffbf8a14905.png)

---!>


             
           
            
           
            
            
            
            
            
            
            
           