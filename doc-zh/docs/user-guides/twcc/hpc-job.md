---
title: HPC 高速運算任務
sidebar_label: 'HPC 高速運算任務'
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/doc-hpc-job-main-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/doc-hpc-job-main-zh'
---


# <img src="https://i.imgur.com/HKggEPN.png" width="25" height="25"/> HPC 高速運算任務

TWCC HPC 高速運算任務使用國際開源軟體 Slurm 作為 HPC 的資源調度軟體，Slurm 是一個容錯度高、高度可擴展的叢集管理系統，適用於大型和小型的 Linux 群集，至今已成為許多超級計算機所使用的資源管理器。Slurm 本身並不需要針對系統內核（Kernel）做調整，並且相對獨立。作為一個群集管理系統，Slurm 有三個關鍵功能：
* 可在一段時間內替用戶分配計算資源的獨佔或非獨占使用
* 提供管理框架，於計算節點上進行資源的分配、執行與監控
* 可透過排程管理的工作列隊（Queue）來仲裁資源分配

本 HPC 高速運算任務搭配 Singularity 來運行容器，用戶可使用本服務提供的 Docker 映像檔來進行相關 AI 運算。

:::info
若需使用 8 顆以上 GPU 或執行跨節點高速運算，請使用[<ins>台灣杉二號(命令列介面)</ins>](twnia2-hpc-cli/overview.md)，並參考以下教學案例：
- [<ins>HowTo：建立 TWNIA2 容器</ins>](twnia2-hpc-cli/tutorials/create-twnia2-containers.md)
- [<ins>HowTo：容器跨節點高速運算－AI Benchmark</ins>](twnia2-hpc-cli/tutorials/ai-benchmark-container.md)
:::

## 建立 HPC 高速運算任務

* 進入「HPC 高速運算任務」服務，在「HPC 高速運算任務管理」頁面，點擊「＋建立」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d397f10978041c2b6a160e0692719136.png)


:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f46d811575230f74a9c96c0b3edb0d52.png)



* 進入「建立 HPC 高速運算任務」頁面，首先需設定任務的名稱。
* 接著在任務 1 區塊選擇映像檔版本/快照、硬體規格及輸入指令，當容器啟動後會自動執行該指令的內容或程式。
 
:::info
請先使用 [「高速檔案系統」](hfs)上傳欲執行的程式內容。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e7968b03779782ea62894123f90a592c.png)


* 展開儲存資訊，可以看到本系統預設掛載的兩個 HFS 高速檔案儲存路徑。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_de333da60735a359b28ab85255d31291.png)



:::info 
* [雲端物件儲存服務](cos)
* [高速檔案系統](hfs)
:::

* HPC 高速運算任務服務可設定多項運算任務，按一下「**+新增任務**」，可展開任務 2 設定區塊，繼續設定其他任務。

:::info
目前 HPC 高速運算一次最多能設定五個任務。每個任務最多能跑四天。
:::

* 接著重覆任務 1 的操作，選擇映像檔版本/快照、硬體規格、輸入指令及儲存資訊設定多項運算任務。任務設定完成後接著點擊「**下一步：排程>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ea8ef0842f5f3602baaead2bd02b2c8.png)


* 排程設定提供「**啟動後立即執行**」及「**啟動後在指定任務時間開始執行**」兩種選擇，選擇任務的執行排程後接著點擊「**下一步：檢閱+建立>**」。

:::info
指定時間的任務最快可從設定時的下一個整點開始執行，此任務需手動啟動，才會開始執行任務（包括已排程任務）。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2673b4fab8dc081225d8d6b64983d1df.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_07c8012659af88030c30c044e51fb6ad.png)


* 檢視 HPC 高速運算任務的配置、命令、排程及預計使用額度等資訊，確認後按下「**建立**」即完成。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_64556c6ec8631e8d1248ca5aa060b9e0.png)



## HPC 高速運算任務管理

* 任務建立後，會出現在 HPC 高速運算任務管理列表的最上方，請務必「**啟動**」任務，待狀態從 Inactive 變為 Ready 時，任務將立即執行，或在指定時間執行運算

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99d308c271599172e402f292797b32a1.png)

* 點選該列表，可進入詳細資料頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_433de813c78b4174d620b873754955bb.png)


* 進入HPC 高速運算任務詳細資料「**配置**」頁面，可以檢視任務的基本資訊、 連線資訊及任務詳細規格，或執行「**啟動**」、「**停止**」、「**刪除**」和「**重新整理**」等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8af1bf00e626d2040e4e68104c9e184b.png)


* 點擊「**任務列表**」可查看任務的運算開始時間、結束時間及狀態。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40da7f4c2b4cb5ee07370c5d314926af.png)


* 點擊「**查看 LOG**」可查看任務執行的詳細 LOG 資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7a9928ea5db2d6d8d3c82b71f38b0fa4.png)

:::info
您可以[連線檔案傳輸節點](./hfs/user-guides/connect-data-transfer-node.md)，至 `/work/{{主機帳號}}/slurm_log` 路徑檢視所有高速運算任務的運算紀錄。
:::

## HPC 高速運算任務監控
* 點選左側「**HPC 高速運算任務監控**」，可查看本系統為 HPC 高速運算任務監控提供監控資訊服務，包括計畫的總累計使用量、特定使用者的累計使用量、GPU 的使用數量和使用時間等。

:::info
租戶使用者僅能看到自己資源使用資訊，租戶管理員可以看到專案內所有使用者資源使用情形，以便控管整個專案的資源使用額度。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1fe85aae907eb8ca655a93d4e8a2cf0.png)


## 連線使用方式

* HPC 高速運算任務提供資料傳輸節點 (xdata1.twcc.ai)、登入節點 (ln01.twcc.ai)，分別使用 SSH 及 SFTP 兩種連線使用方式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f46fba93e2bf16c33b0ce08ad91ffc1c.png)



### 連線資料傳輸節點 

:::info
[高速檔案系統](hfs)，使用 SFTP + FileZilla 以圖形化的操作介面，連線並傳輸檔案。
:::

### 連線登入節點

:::info
[登入「登入節點」](twnia2-hpc-cli/user-guides/service-overview/login-node-data-transfer-node.md)，連線登入節點
:::

* 登入成功之後，可直接使用 Slurm 的基本指令 `sinfo -V`，應會返回此服務的版本資訊，以確認此帳號可以正常使用 Slurm 的功能。

```
sinfo -V
```
![image](https://user-images.githubusercontent.com/46370453/184616633-9ed85f25-b638-40c4-9102-a16c0c52db8f.png)


## Slurm 基本指令簡介

本章節說明 Slurm 基本指令及用法，已經熟悉 Slurm 的使用者可以略過。以下列出 Slurm 基本指令的用途，在指令後方加上「--help」即可查詢完整用法與說明。

| 指令 | 說明 |
| -------- | -------- |
| sacct     | 此指令用於列出帳號的相關任務或任務集之狀態，例如運行中、已終止或是已完成，是最基本的檢視任務指令。     |
|salloc|用於即時分配資源分配，通常會用於分配資源並且產生一個 shell，然後使用 shell 執行 srun 的命令來啟動並執行任務。|
|sattach|可將標準輸入、輸出，和錯誤訊息等多次掛載與卸載在當前運行的任務或任務集中。|
|sbatch|用於提交作業腳本以供以後執行。該腳本通常包含一個或多個用於啟動並行任務的 srun 指令，是最基本的任務運行指令之一。|
|sbcast|可用於將文件從本地硬碟傳輸到被分配任務的節點硬碟上，可在硬碟空間小的計算節點，或相對於共享文件系統提供更好的效能。|
|scancel|用於取消正在等待中，或運行中的任務或任務集，也可發出任意訊號給運行的任務或任務集相關的所有進程。|
|scontrol| scontrol 是用於查看和/或修改 Slurm 狀態的管理工具。請注意，許多 scontrol 命令只能以 root 用戶身份執行，因此只有 TWCC 管理人員可使用。|
|sinfo|sinfo 資訊包含 Slurm 管理的分區和節點的狀態，sinfo 具有多種的過濾、排序，以及格式選項。|
|smap|smap 包含 Slurm 所管理的任務、分區，以及節點的狀態資訊，但以圖像方式來反應網路拓墣的資訊。|
|squeue|Squeue顯示任務或任務集的狀態。它具有各種過濾，排序和格式選項。預設是按優先順序顯示正在運行的任務，然後按優先順序顯示正在等待的任務，是常用檢視任務的指令。|
|srun|srun 用於提交任務或作為提交任務集中的單一任務。srun有多種選項來指定資源需求，包括：最小和最大節點數，CPU 數，是否使用特定節點，以及特定節點的特徵（例如 Memory 大小，硬碟空間，某些必需的功能等） 。 一個任務可以包含多步驟的任務，並可依照被分配的節點資源，依序或平行在獨立或共享的節點上運作。|
|strigger|strigger用於設置，取得或查看事件觸發器。事件觸發器包括節點關閉或任務接近其時間限制等事件。|

### 使用 sinfo 查看節點狀態
 
以下範例直接使用 `sinfo` 指令，可看到系統內有四種狀態的節點（STATE 欄位），分別為 drain*、drain、idle、down，"*"星號代表這個節點如果再持續不回以下範中可接受任務並執行、down 則是失去該節點資訊。 


```
sinfo
```

    PARTITION       AVAIL TIMELIMIT    NODES     STATE     NODELIST
    SlurmDefault*    up 1-00:00:00            1     drain*   gn1101.twcc.ai
    SlurmDefault*    up 1-00:00:00           98     drain    gn0101.twcc.ai,gn0103.twcc.ai,gn0104.twcc.ai,gn0107.twcc.ai,gn0109.twcc.ai,gn0111.twcc.ai,gn0112.twcc.ai,gn0114.twcc.ai,gn0115.twcc.ai,gn0204.twcc.ai,gn0206.twcc.ai,gn0207.twcc.ai,gn0208.twcc.ai,gn0211.twcc.ai,gn0212.twcc.ai,gn0214.twcc.ai,gn0216.twcc.ai,gn0301.twcc.ai,gn0302.twcc.ai,gn0306.twcc.ai,gn0310.twcc.ai,gn0311.twcc.ai,gn0315.twcc.ai,gn0317.twcc.ai,gn0318.twcc.ai,gn0405.twcc.ai,gn0410.twcc.ai,gn0411.twcc.ai,gn0415.twcc.ai,gn0416.twcc.ai,gn0501.twcc.ai,gn0502.twcc.ai,gn0503.twcc.ai,gn0510.twcc.ai,gn0511.twcc.ai,gn0513.twcc.ai,gn0515.twcc.ai,gn0516.twcc.ai,gn0517.twcc.ai,gn0602.twcc.ai,gn0606.twcc.ai,gn0608.twcc.ai,gn0609.twcc.ai,gn0612.twcc.ai,gn0613.twcc.ai,gn0617.twcc.ai,gn0703.twcc.ai,gn0705.twcc.ai,gn0708.twcc.ai,gn0709.twcc.ai,gn0710.twcc.ai,gn0711.twcc.ai,gn0713.twcc.ai,gn0714.twcc.ai,gn0801.twcc.ai,gn0802.twcc.ai,gn0806.twcc.ai,gn0811.twcc.ai,gn0812.twcc.ai,gn0818.twcc.ai,gn0911.twcc.ai,gn0914.twcc.ai,gn0915.twcc.ai,gn0918.twcc.ai,gn1003.twcc.ai,gn1005.twcc.ai,gn1006.twcc.ai,gn1010.twcc.ai,gn1011.twcc.ai,gn1013.twcc.ai,gn1016.twcc.ai,gn1018.twcc.ai,gn1026.twcc.ai,gn1027.twcc.ai,gn1102.twcc.ai,gn1104.twcc.ai,gn1107.twcc.ai,gn1109.twcc.ai,gn1110.twcc.ai,gn1112.twcc.ai,gn1114.twcc.ai,gn1115.twcc.ai,gn1119.twcc.ai,gn1120.twcc.ai,gn1122.twcc.ai,gn1127.twcc.ai,gn1202.twcc.ai,gn1203.twcc.ai,gn1207.twcc.ai,gn1208.twcc.ai,gn1210.twcc.ai,gn1212.twcc.ai,gn1214.twcc.ai,gn1218.twcc.ai,gn1222.twcc.ai,gn1226.twcc.ai,gn1228.twcc.ai,gn1230.twcc.ai
    SlurmDefault*    up 1-00:00:00          152     idle     gn0102.twcc.ai,gn0105.twcc.ai,gn0106.twcc.ai,gn0108.twcc.ai,gn0110.twcc.ai,gn0113.twcc.ai,gn0116.twcc.ai,gn0117.twcc.ai,gn0118.twcc.ai,gn0201.twcc.ai,gn0202.twcc.ai,gn0203.twcc.ai,gn0205.twcc.ai,gn0209.twcc.ai,gn0210.twcc.ai,gn0213.twcc.ai,gn0215.twcc.ai,gn0217.twcc.ai,gn0218.twcc.ai,gn0303.twcc.ai,gn0304.twcc.ai,gn0305.twcc.ai,gn0307.twcc.ai,gn0308.twcc.ai,gn0309.twcc.ai,gn0312.twcc.ai,gn0313.twcc.ai,gn0314.twcc.ai,gn0316.twcc.ai,gn0401.twcc.ai,gn0402.twcc.ai,gn0403.twcc.ai,gn0404.twcc.ai,gn0406.twcc.ai,gn0407.twcc.ai,gn0408.twcc.ai,gn0409.twcc.ai,gn0412.twcc.ai,gn0413.twcc.ai,gn0414.twcc.ai,gn0417.twcc.ai,gn0418.twcc.ai,gn0504.twcc.ai,gn0505.twcc.ai,gn0506.twcc.ai,gn0507.twcc.ai,gn0508.twcc.ai,gn0509.twcc.ai,gn0512.twcc.ai,gn0514.twcc.ai,gn0518.twcc.ai,gn0601.twcc.ai,gn0603.twcc.ai,gn0604.twcc.ai,gn0605.twcc.ai,gn0607.twcc.ai,gn0610.twcc.ai,gn0611.twcc.ai,gn0614.twcc.ai,gn0615.twcc.ai,gn0616.twcc.ai,gn0618.twcc.ai,gn0701.twcc.ai,gn0702.twcc.ai,gn0704.twcc.ai,gn0706.twcc.ai,gn0707.twcc.ai,gn0712.twcc.ai,gn0715.twcc.ai,gn0716.twcc.ai,gn0717.twcc.ai,gn0718.twcc.ai,gn0803.twcc.ai,gn0804.twcc.ai,gn0805.twcc.ai,gn0807.twcc.ai,gn0808.twcc.ai,gn0809.twcc.ai,gn0810.twcc.ai,gn0813.twcc.ai,gn0814.twcc.ai,gn0815.twcc.ai,gn0816.twcc.ai,gn0817.twcc.ai,gn0901.twcc.ai,gn0902.twcc.ai,gn0903.twcc.ai,gn0904.twcc.ai,gn0905.twcc.ai,gn0906.twcc.ai,gn0907.twcc.ai,gn0908.twcc.ai,gn0909.twcc.ai,gn0910.twcc.ai,gn0912.twcc.ai,gn0913.twcc.ai,gn0916.twcc.ai,gn0917.twcc.ai,gn1001.twcc.ai,gn1002.twcc.ai,gn1004.twcc.ai,gn1007.twcc.ai,gn1008.twcc.ai,gn1009.twcc.ai,gn1012.twcc.ai,gn1014.twcc.ai,gn1015.twcc.ai,gn1017.twcc.ai,gn1019.twcc.ai,gn1020.twcc.ai,gn1021.twcc.ai,gn1022.twcc.ai,gn1023.twcc.ai,gn1024.twcc.ai,gn1025.twcc.ai,gn1028.twcc.ai,gn1029.twcc.ai,gn1030.twcc.ai,gn1103.twcc.ai,gn1105.twcc.ai,gn1106.twcc.ai,gn1108.twcc.ai,gn1113.twcc.ai,gn1116.twcc.ai,gn1117.twcc.ai,gn1118.twcc.ai,gn1121.twcc.ai,gn1123.twcc.ai,gn1124.twcc.ai,gn1125.twcc.ai,gn1126.twcc.ai,gn1128.twcc.ai,gn1129.twcc.ai,gn1130.twcc.ai,gn1201.twcc.ai,gn1204.twcc.ai,gn1205.twcc.ai,gn1206.twcc.ai,gn1209.twcc.ai,gn1211.twcc.ai,gn1213.twcc.ai,gn1215.twcc.ai,gn1216.twcc.ai,gn1217.twcc.ai,gn1219.twcc.ai,gn1220.twcc.ai,gn1221.twcc.ai,gn1223.twcc.ai,gn1224.twcc.ai,gn1225.twcc.ai,gn1227.twcc.ai,gn1229.twcc.ai
    SlurmDefault*    up 1-00:00:00            1     down     gn1111.twcc.ai



### 提交、查看、刪除單一任務

* 使用 `srun` 指令派送一個名為 demo 的任務，任務內容為 sleep 100。

```
srun -J demo sleep 100 &
```
![image](https://user-images.githubusercontent.com/109254397/184206098-e43782b4-cadc-480c-b959-23e71c886e09.png)


* 使用 sacct 指令查看最近的任務狀況，由最下方確認有一個名為 demo 的任務正在執行中，Job ID 為 1962。

```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184206909-440fdbbd-6d84-4b01-8612-81c8a8ae6696.png)

* 使用 scancel 指令刪除 ID 為 1962 的任務，再下一次 Enter 確認終止後，即可終止該任務。　

```
scancel 1962
```
![image](https://user-images.githubusercontent.com/109254397/184207594-2e409d2f-2dfb-4dc4-a5ad-28c01e095654.png)


* 再使用 sacct 查看，即可發現 ID 1962 的任務已被終止（粗體字部分）。

```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184207841-fb9b8111-f814-48ca-8222-baee3da121ea.png)


### 使用 sbatch 搭配 Singularity 提交容器任務

使用 sbatch 指令提交一個任務，並使用 wrap 選項將要執行的內容包起來。內容為執行一段 singulatiry 的指令，該指令為使用「```docker://registry.twcc.ai/ngc/nvidia/ubuntu-v1:latest```」的鏡像檔來啟用容器，並在容器內執行「date」指令。任務提交後，系統回傳 Job ID 為 1963。

```
sbatch --wrap='singularity exec docker://registry.twcc.ai/ngc/nvidia/ubuntu-v1:latest date'
```
![image](https://user-images.githubusercontent.com/109254397/184208055-6f66fc16-83a7-43bf-b9f1-446cee618d80.png)

* 直接透過 tail 指令，瀏覽該目錄下的 Log 資訊。Log 格式為 slurm-Job_ID.out，如上範例為「slurm-1963.out」。可看到 Image 被解開啟用，隨後執行 date 指令顯示時間。

```
tail -f slurm-1963.out 
```
![image](https://user-images.githubusercontent.com/109254397/184208732-9fbc9c5c-6a22-4606-91e4-ec57f861dbd4.png)
