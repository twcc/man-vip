---
sidebar_position: 1
title: '容器運算服務 (CCS)'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-ccs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-ccs-zh'
---

# TWCC FAQs | 容器運算服務 (CCS)


## 使用之前

<details>

<summary> Q1. 怎麼使用超級電腦？ </summary>

TWCC 中有許多超級電腦的運算資源，您可以透過下列方式使用：

1. 開發型容器：您可參考[此文件](/docs/ccs-interactive-container/overview.md)，建立快速部署的容器環境。
2. 高速運算服務：您可參考[此文件](/docs/faq/compute/vcs.md)，連線進入高速運算節點，以 Command Line 的方式使用超級電腦資源，進行跨節點的高速運算。

</details>

<details>

<summary> Q2. 如何開始使用容器？ </summary>

您可使用容器訓練 AI 模型並生成推論引擎，步驟參考如下：

**Step 1.** 參考[高速檔案系統文件](/docs/hfs/user-guides/manage-files.md)，將 AI 模型程式上傳到高速檔案系統，儲存於 `/home/主機帳號` 或 `/work/主機帳號` 目錄之下。  
**Step 2.** 參考[開發型容器文件](/docs/ccs-interactive-container/user-guides/create-connect/create-container.md)，建立容器，並連線容器進行模型訓練。  
**Step 3.** 訓練完成，可參考[高速檔案系統文件](/docs/hfs/user-guides/manage-files.md)，下載所需要的資料。  
**Step 4.** 若要進行推論，可參考[HowTo文件](/docs/ccs-interactive-container/tutorials/tensorflow-inception-v3-image-recognition.md)於容器內進行，或參考[虛擬運算文件](/docs/vcs/user-guides/create/create-instances.md)，建立虛擬運算個體進行推論。

</details>

<details>

<summary> Q3. 容器與高速運算該如何選擇？ </summary>

兩種服務皆可運行 GPU 的容器化環境：
- 若您的運算工作僅需要 8 顆 GPU 以下的計算資源，請使用容器運算服務。
- 而若需要 8 顆 以上的 GPU 資源，並希望能部署跨節點的分散式高速平行運算環境，請使用台灣杉二號 (命令列介面) 高速運算服務。

</details>
<div style={{height:10+'px'}}></div>

## 連線登入

<details>

<summary> Q1. 如何登入容器？ </summary>

可以透過 SSH 或 Jupyter Notebook 連線容器，請參考[連線容器](/docs/ccs-interactive-container/user-guides/create-connect/connect-container.md)。

</details>

<details>

<summary> Q2. SSH 連線至 TWCC 上的資源 CCS、VCS 和 HPC 有哪些可使用的的開源軟體？</summary>

可以使用 MobaXterm、PuTTY 和 VSCode...等第三方開源軟體。

</details>

<details>

<summary>

 Q3. 開發型容器 SSH 連線時顯示 `Permission denied`？ 
 
 </summary>

可能是主機密碼輸入錯誤，請重新輸入或參考[此文件](/docs/member/user-guides/member-key-quota/hpc-account-password-otp.md)至 Service 會員服務系統重設主機密碼。

</details>

<details>

<summary> Q4. 無法連線 Jupyter Notebook 時如何處理？ </summary>

請參考以下 2 種處理方式：

1. 進行以下操作將容器還原至初始狀態：
   - **Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
   - **Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
   - **Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
   - **Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔，再連線 Jupyter Notebook。
2. 請檢查貴單位防火牆設定是否有阻擋容器使用的 port，容器 port 範圍為 50000 ~ 60000。

</details>
<div style={{height:10+'px'}}></div>

## 管理容器

<details>

<summary> Q1. 如何暫停容器？</summary>

目前系統不支援容器暫停的功能，您可依需求選擇任一節省計算成本的方案：
1. 您可製作容器複本保留工作環境，並刪除容器，待需要使用容器時再以複本建立新容器。
2. 您可參考[此文件](/docs/ccs-interactive-container/tutorials/use-cli-automate-compute-delete.md)，編寫腳本自動執行運算、刪除容器。

</details>

<details>

<summary> Q2. 我要如何將容器還原至初始狀態？ </summary>

進行以下操作即可將容器還原至初始狀態：

**Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
**Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
**Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
**Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>

<details>

<summary> Q3. 不同容器中的環境是否也不同？</summary>

容器的儲存環境是[高速檔案系統 (HFS) ](/docs/hfs/overview.md)，用戶建立不同的容器，系統皆會自動將用戶的 HFS 掛載作為容器環境。

而 HFS 空間的生命週期是隨著用戶的主機帳號，因此只要是同一用戶建立的容器，環境都是相同的 HFS 空間。

</details>
<div style={{height:10+'px'}}></div>

## 資源配置與監控

<details>

<summary> Q1. 如何使用 8 張 GPU 以上的資源？ </summary>

請改為使用 台灣杉二號 (命令列介面)，使用方法可參考網路上 Horovod 和 Singularity 的使用說明文件，或參考以下的 tutorial 進行： [HowTo：容器跨節點高速運算－AI Benchmark](/docs/twnia2-hpc-cli/tutorials/ai-benchmark-container.md)。

</details>


<details>

<summary> Q2. 如何知道容器配置的 GPU 數量？ </summary>

以下兩種方式皆可查詢容器的 GPU 配置數量：
1. 在 terminal 執行指令：`nvidia-smi`  
2. 在使用者網站中，開發型容器管理頁 > 容器詳細資料頁的「**基本設定**」欄位即有顯示。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03f616bd18d162c3dfb11da5e39a3530.png)

</details>

<details>

<summary> Q3. 在程式執行時，如何知道 GPU 使用情況？ </summary>

請參考以下步驟：
**Step 1.** 在 terminal 執行指令： ` nvidia-smi`  
**Step 2.** 確認 `GPU-Util` 欄位，非 0% 代表使用中，0% 即為未使用 (如下圖)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dbfac86546357537571cb99c4cceb37d.png)


</details>

<details>

<summary> Q4. 為何無法使用容器內的 GPU？ </summary>

可能是以下問題造成無法使用容器的 GPU：

1. 您的程式使用的 GPU 數量與建立數量不符，請確認兩處 GPU 數量是否相符。
2. 套件版本有相容性問題，請按照以下步驟：
   - **Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
   - **Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
   - **Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
   - **Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>

<details>

<summary> Q5. 建立容器時基本設定中，為何有共享記憶體？ </summary>

共享記憶體是使用某些 framework 運算時會使用到的記憶體空間，例：PyTorch，詳情可查看[PyTorch document](https://pytorch.org/docs/stable/multiprocessing.html)。

</details>

<details>

<summary> Q6. 如何知道程式運行時的記憶體用量？ </summary>

在使用者網站或是容器內部皆可查詢記憶體用量：
1. 在使用者網站**開發型容器監控**頁面，可查看記憶體用量圖，詳情可參考[開發型容器監控頁面](/docs/ccs-interactive-container/user-guides/manage-monitor/monitor-container.md)文件。
2. 在容器中下指令 ` top` 或 ` free` 查看記憶體用量。

</details>

<details>

<summary> Q7. 開發型容器監控頁面中，「記憶體用量」與「GPU 記憶體用量」的差異？</summary>

- **記憶體用量**：系統分配給您的容器記憶體之使用量，其容量即為您在建立容器時，在基本設定選擇的規格。
- **GPU 記憶體用量**：容器配置的 GPU 顯示核心上的記憶體之使用量，TWCC 的 GPU 為 NVIDIA V100，關於 GPU 記憶體容量與詳細資訊，可參考 [NVIDIA 官網說明](https://www.nvidia.com/content/dam/en-zz/zh_tw/Solutions/design-visualization/grid-vpc-vapps/volta-v100-datasheet-update-a4-636418-r4-tw.pdf)。

</details>
<div style={{height:10+'px'}}></div>

## 套件軟體

<details>

<summary> Q1. 目前容器支援多少種計算環境？ </summary>

在 TWCC 的容器服務中，提供了 18 種環境供使用者選擇，包含：

* TensorFlow
* PyTorch
* CUDA
* MATLAB (BYOL)
* Caffe
* CNTK
* MXNet
* Caffe2
* TensorRT
* Triton Inference Server
* Theano
* Torch
* DIGITS
* NeMo
* RAPIDS
* Clara Train SDK
* Merlin Training
* Merlin Inference

</details>

<details>

<summary> Q2. 如何確認容器映像檔中包了什麼套件及其版本？ </summary>

以下兩種方法皆可確認映像檔套件及版本：
1. 在 [NGC 網站](https://docs.nvidia.com/deeplearning/frameworks/index.html) 中，在右上角搜尋框依不同框架輸入 **TensorFlow release notes**、**PyTorch release notes** ...等內容，進入 release notes 列表頁面後，再點擊您要確認的框架版本，即可檢視套件內容及版本。
2. 建立開發型容器、選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到相關資訊。

</details>

<details>

<summary> Q3. 為何我刪除容器後再重新建立容器，新容器內仍存在舊容器上的套件？ </summary>

為提供運算便利性，TWCC 預設會將高速檔案系統之儲存空間 (/home 及 /work，綁定個人帳號) 掛載至您建立的所有容器，讓您的資料或套件可跨容器使用，因此刪除容器不會影響安裝在 /home 及 /work 的套件與資料。 

</details>

<details>

<summary>

 Q4. 安裝套件時發生錯誤訊息 `Permission denied` 如何處理？ 
 
 </summary>

以下圖為例，如果 `Permission denied` 指出的檔案，其位置不在 /home 或 /work 底下，請參考 [其他疑問](#其他疑問) Q3 切換成容器 root 身分後再行安裝。

![](https://i.imgur.com/oKeqxdV.png)

</details>

<details>

<summary> Q5. 在容器中如何安裝 cuDNN？ </summary>

容器環境已有安裝 cuDNN，詳細版本資訊可透過以下三種方法確認：
1. 在 [NGC 網站](https://docs.nvidia.com/deeplearning/frameworks/index.html) 中，在右上角搜尋框依不同框架輸入 **TensorFlow release notes**、**PyTorch release notes** ...等內容，進入 release notes 列表頁面後，再點擊您要確認的框架版本，即可檢視套件內容及版本。
2. 建立開發型容器、選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到相關資訊。
3. 連線容器後執行 ` set | grep CUDNN` 指令

</details>

<details>

<summary> Q6. 容器中有哪些內建的套件管理工具？ </summary>

容器環境中有內建 `apt` , `apt-get` , `pip` 等3個套件管理工具可供管理套件。

</details>

<details>

<summary>

 Q7. 安裝套件時發生 `Unable to change to /home/主機帳號 - chdir (13: Permission denied)` 如何處理？ 
 
 </summary>

為保障資料安全，容器的 root 身分無法存取您的 /home與 /work 目錄，因此請使用主機帳號的身分安裝，勿切換成 root 權限。

</details>


<details>

<summary> Q8. 如何在容器中安裝 docker 使用?</summary>

TWCC 容器不提供 OS 層權限，因此無法安裝與使用 docker 服務。

</details>
<div style={{height:10+'px'}}></div>

## 儲存與資料傳輸

<details>

<summary> Q1. 如何將檔案上傳至容器，或從容器下載？ </summary>

請參考此[文件](/docs/hfs/user-guides/manage-files.md#上傳與下載檔案)，將檔案上傳到容器的 /home 或 /work 中，或將檔案下載到 local 端。 

</details>

<details>

<summary> Q2. 為何切換成 root 無法存取自己的 /home 與 /work？ </summary>

為保障資料安全，容器的 root 身分無法存取您的目錄，僅限用戶本人帳號有權限存取。

</details>

<details>

<summary> Q3. 要如何分享 /home 與 /work 的資料給其他同計畫使用者？ </summary>

可以透過 TWCC CLI 操作 TWCC 雲端物件儲存 (COS)，將容器資料分享給其他使用者，操作方式請參考[此文件](/docs/cos/overview.md)。

</details>

<details>

<summary> Q4. 如何設定自動化將容器內資料回傳 local 端？ </summary>

請利用容器對外連接埠 (port) 進行與 local 端的資料傳送，容器可使用的 port 為：22、80、443。

</details>

<details>

<summary> Q5. 以 Matlab 映像檔建立的容器為何無法存取 /home 及 /work？ </summary>

因目前的 Matlab 映像檔尚未整合 HFS 高速檔案系統，因此請在 terminal 執行以下指令來存取 /home 及 /work：  
```
sudo su -
su [主機帳號]
/opt/matlab/R2019b/bin/matlab
```

</details>

<details>

<summary> Q6. 能否將共享記憶體當硬碟空間使用？ </summary>

若您選擇有共享記憶體設定的規格，`/dev/shm` 即為共享記憶體空間，可供存放資料當硬碟使用
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> <b>重要：</b>

* 由於存放資料在共享記憶體中會占掉共享記憶體空間，因此存放前請先考量您程式所需要的空間。
* 存放於此的資料會隨容器刪除而消失，若資料需保存，請在刪除容器前將資料搬移到`/home/主機帳號`或`/work/主機帳號`。

</details>

<details>

<summary> Q7. 為何 Jupyter Notebook 無法寫入檔案？ </summary>

高速檔案系統空間已快用滿，導致無法寫入檔案，請參考[高速檔案系統 FAQ Q6](/docs/faq/storage/hfs.md)，檢查並清理您的儲存空間，或參考增購更多儲存空間，增購方式請參考[高速檔案系統](/docs/hfs/overview.md)中的「查看使用容量」及「空間管理政策」兩個段落，即可得知價格以及增購空間的方法。

</details>

<details>

<summary> Q8. 為何 Jupyter Notebook 儲存檔案失敗？ </summary>

高速檔案系統空間已快用滿，導致無法寫入檔案，請參考[高速檔案系統 FAQ Q6](/docs/faq/storage/hfs.md)，檢查並清理您的儲存空間，或參考增購更多儲存空間，增購方式請參考[高速檔案系統](/docs/hfs/overview.md)中的「查看使用容量」及「空間管理政策」兩個段落，即可得知價格以及增購空間的方法。

</details>

<details>

<summary> Q9. 如何上傳檔案到 Jupyter Notebook？ </summary>

Jupyter Notebook 所使用的儲存空間即為高速檔案系統 (HFS)，請透過[此文件](/docs/hfs/user-guides/manage-files.md#上傳與下載檔案)，上傳您的檔案。

</details>

<details>

<summary> Q10. 如何於容器內與雲端物件儲存間傳輸檔案？ </summary>

1. 請在容器內[安裝 TWCC CLI](https://github.com/twcc/TWCC-CLI)。
2. 再參考[此文件](/docs/twnia2-hpc-cli/tutorials/access-cos.md)，使用 TWCC CLI 進行容器與雲端物件儲存的檔案傳輸。

</details>

<details>

<summary> Q11. 請問如何將雲端物件的儲存體掛載到容器上使用？ </summary>

TWCC 容器所使用的儲存系統為高速檔案系統 (HFS)，目前不支援直接將雲端物件的儲存體掛載到容器上進行使用。

若僅需與雲端物件儲存進行檔案傳輸，請您參考 Q10 的操作步驟。

</details>
<div style={{height:10+'px'}}></div>

## 網路安全

<details>

<summary> Q1. 容器的 Port 範圍是什麼？</summary>

容器 Port 的範圍為：50000 ~ 60000。

</details>

<details>

<summary> Q2. 容器是否可以使用 VPN？</summary>

目前 TWCC 容器不支援部署 VPN 服務 (例如：OpenVPN)。VPN 服務預設開啟的對外埠與 TWCC 容器所支援的對外埠不同，且 TWCC 容器採用 Port-Forwarding 的技術，對外埠為隨機配發，無法指定對應的埠號。

</details>
<div style={{height:10+'px'}}></div>

## 容器複本

<details>

<summary> Q1. 容器複本如何下載？ </summary>

目前系統尚未支援此功能。

</details>
<div style={{height:10+'px'}}></div>


## 執行效能

<details>

<summary> Q1. 執行程式時發現 I/O 緩慢？ </summary>

可能是 dataset 問題或是容器所處的節點較為繁忙：
1. 若您的 dataset 為許多小檔案，且 dataset 佔了大量空間，我們建議您將小檔案集合成大檔案，以減少 I/O 壓力。
2. 製作容器複本，再以複本開一個新的容器，若系統整體負載仍有餘裕，可以將容器安排建立在較不繁忙的節點。

</details>

<details>

<summary> Q2. 程式執行時效能不如預期？ </summary>

按照下列步驟排除套件相容性問題：  
**Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
**Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
**Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
**Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>

<details>

<summary> Q3. 程式執行時發現比 local 端還慢？ </summary>

改善效能的方式請參考如下：

1. 排除套件相容性問題
   - **Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
   - **Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
   - **Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
   - **Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。
2. 若您的 dataset 為許多小檔案，且 dataset 佔了大量空間，我們建議您將小檔案集合成大檔案，以減少 I/O 壓力。
3. 製作容器複本，再以複本開一個新的容器，若系統整體負載仍有餘裕，可以將容器安排建立在較不繁忙的節點。

</details>
<div style={{height:10+'px'}}></div>

## 執行錯誤

<details>

<summary>

 Q1. 程式執行時顯示 `insufficient shared memory`？ 
 
 </summary>

1. 若為 PyTorch 容器環境，請將 Dataloader 的 num workers 設置為 0
2. 或重新建立一個容器，並選擇有 shared memory 的規格。

</details>

<details>

<summary>

 Q2. 程式執行時顯示 `bus error`？ 
 
 </summary>

按照以下步驟排除套件相容性問題：  
**Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
**Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
**Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
**Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>

<details>

<summary>

 Q3. 程式執行時發生有些 library 無法載入 (`Could not load dynamic library...`)？ 
 
 </summary>

可能是程式中呼叫的 library 版本與容器中的版本不符。請執行以下指令，取得環境中的 library 版本後，再修改程式所呼叫的 library 版本：` sudo find / -name [library名稱]`

</details>

<details>

<summary>

 Q4. 為何 `sudo  apt  update` 產生 `Unable  to  change  to  /home/wistron1/ -chdir  (13:  Permission  denied)`？ 
 
 </summary>

請切換成 root 身分後再執行 ` apt update`。

</details>

<details>

<summary>

 Q5. 為何使用 Jupyter Notebook 時，右上角顯示 `kernel busy`？ 
 
 </summary>

請按照以下程序解決套件相容性問題：  
**Step 1.** 參考[程式執行異常的建議排除方式](/docs/ccs-interactive-container/tutorials/python-package-installation.md#程式執行異常的建議排除方式) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
**Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
**Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
**Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>
<div style={{height:10+'px'}}></div>

## 其他疑問

<details>

<summary>

 Q1. 如何從容器轉移至台灣杉二號(命令列介面)進行訓練運算？ 
 
 </summary>

可參考網路上 Conda 和 Singularity 的使用說明文件，或參考以下的 tutorial 進行：  
- [HowTo：建立 TWNIA2 容器](/docs/twnia2-hpc-cli/tutorials/create-twnia2-containers.md)
- [HowTo：使用 Conda 管理套件與執行 Job](/docs/twnia2-hpc-cli/tutorials/conda-manage-package-submit-job.md)

</details>

<details>

<summary> Q2. 我可以建立一個容器給其他人用嗎？ </summary>

建立容器給他人使用時，需考量以下幾點注意事項：

* 您的主機密碼必須提供給他人連線容器。
* /home 與/work 為您的個人 HFS 儲存空間，他人在使用上可能造成這兩個檔案夾中的資料毀損、遺失...等可能，即使您再開新容器也無法復原這些變動。
* 分享計算資源會有資料安全的風險，請審慎考慮。

因此，除為他人建立容器之外，您亦可以透過 [Service 會員服務系統 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](/docs/member/user-guides/member-key-quota/go-to-member-center.md)，將他人加入計畫中，該使用者即可自行運用容器資源。

</details>


<details>

<summary> Q3. 如何切換成容器的 root 身份？ </summary>

執行以下指令即可切換為 root 身分：  
```
sudo su

或

sudo -i
```    
</details>

<details>

<summary> Q4. 容器是一建立就開始收費，還是開始跑程式才收費？ </summary>

容器一建立即開始佔用計算資源，因此建立後、在您刪除容器之前，將會持續計費。
</details>