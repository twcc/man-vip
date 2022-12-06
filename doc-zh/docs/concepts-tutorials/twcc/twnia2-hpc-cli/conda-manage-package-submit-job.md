---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-conda-manage-packages-submit-job-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-conda-manage-packages-submit-job-zh' 
---

# 使用 Conda 管理套件與執行 Job


本文是關於 TWCC 台灣杉二號 (命令列介面) 安裝的套件管理工具 [Miniconda](https://docs.conda.io/en/latest/miniconda.html) 說明，以及教學如何使用 Conda 創立虛擬環境，安裝套件，並提交 Job。

<br/>


## Minoconda 簡介

Miniconda 為 Python 環境管理平台，囊括多種 Python 套件，並使用 Conda 作為軟體套件管理器。

使用 Miniconda 可省去一一下載 Python 套件的麻煩，使用簡單的 Conda 指令即可將套件安裝完成，並能切換至指定的虛擬環境，使用不同版本的 Python，解決多版本的相容問題。

<br/>


## 更新規劃說明

由於套件管理工具 Conda [修正 bugs 頻繁](https://docs.conda.io/projects/conda/en/latest/release-notes.html)，近期修正皆已大幅提升使用體驗。

為了加速讓 TWCC 用戶使用新版工具，經多方測試後，TWCC  將會持續更新 Miniconda (Conda 最小化版本)，並已移除 Anaconda。

:::info
用戶仍可自行安裝 Anaconda 在自己的 `/home/$USER` 或`/work/$USER` 目錄之下)。
:::

<br/>


## 重新設計 modulefile

一般使用 Aanaconda / Miniconda 皆會使用 `conda init` 設定環境，此時 Conda 將會更動使用者的 `~/.bashrc` 新增如下面內容。

```bash
# >>> conda initialize >>>
...
...
# <<< conda initialize <<<
```

對於初接觸 Linux 系統或 Conda 的用戶，並非友善之設計。當不再使用 Conda 時，有可能因忘記移除在 `~/.bashrc` 的 Conda 參數，造成 Conda 環境影響其他操作。

因此，TWCC 將透過重新撰寫新版 modulefile 的方式，使用 `module load miniconda2` 或 `module load miniconda3` 時，將會自動啟動上述參數；當 `module purge` 時，則將會自動移除這些環境變數。如此一來，可避免讓 Conda 更動用戶的`~/.bashrc`，也能正確使用 Conda，還給使用者單純的環境。

<br/>


## 如何使用 Miniconda ? 

- 透過 `module load miniconda2` / `module load miniconda3` 載入 conda 環境。
- 透過 `module purge` 即可卸載 conda 環境。
- 由於[上述原因](#重新設計-modulefile)，使用前**建議移除**之前使用 Conda 產生的 conda initialize 內容 (移除指令 `conda init --reverse` )。

:::info
- miniconda2：預設使用 Python 2 環境
- miniconda3：預設使用 Python 3 環境
:::

請參考以下操作範例。

<br/>


## Conda 操作範例

以下範例將在使用 Conda 創立一個虛擬環境，並安裝支援 GPU 運算的 TensorFlow，再透過 Slurm 資源調度管理系統，撰寫 job script 依需求索取資源、Queue 排程，並提交計算工作。

:::info 參考資料
- [<ins>Anaconda：TensorFlow</ins>](https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/)
- [<ins>Conda：Managing environments</ins>](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
:::

<br/>


### Step 1. 載入 Conda 並建立虛擬環境
```bash
# 清除 module 確保環境乾淨
module purge

# 載入 Conda 環境，以預設 python3 的 miniconda3 為範例
module load miniconda3

# 由於 TWCC 設計的 miniconda module，會自動初始化環境變數，不需要再 conda init。
# 建議移除之前 conda init 產生的內容 
conda init --reverse

# 創立 Conda 虛擬環境 (範例名稱為 mytf_gpu)，並安裝 Anaconda 公司已打包好的 tensorflow-gpu。
# 該環境已經包含 CUDA 和 cuDNN，無須再自行安裝
conda create --name mytf_gpu tensorflow-gpu

# 進入此虛擬環境
conda activate mytf_gpu
```

:::info
tensorflow-gpu，目前預設安裝 2.2 版。
- 可指定安裝版本 1 或 2，例如 1.15.0 版本的 tensorflow-gpu 則使用
 `conda create --name mytf_gpu tensorflow-gpu=1.15.0`
 - 其他版本可以參考 [<ins>版本列表</ins>](https://anaconda.org/anaconda/tensorflow-gpu/files)。
:::

<br/>


#### 離開以及刪除虛擬環境
```bash
# 離開 mytf_gpu 虛擬環境
conda deactivate

# 刪除 mytf_gpu 虛擬環境檔案
conda remove --name mytf_gpu --all
```

<br/>


#### 離開 Conda
```bash
# 卸載所有已載入的 module
module purge
```

```bash
# 或者，僅卸載 miniconda
module unload miniconda3
```

<br/>


#### 刪除 Conda 殘留檔案
```bash
# 當不再使用 Conda，刪除殘留 Conda 安裝檔/設定檔 (請小心使用，請確定此路徑無需要檔案再使用)
# 先檢查此路徑檔案內容 (通常只有 ~/.conda)
ls ~/.condarc ~/.conda ~/.continuum

# 再刪除檔案
rm -rf ~/.condarc ~/.conda ~/.continuum
```

<br/>


### Step 2. Slurm job script with Conda

當您準備好 Conda 環境與計算程式後，請按照以下步驟，透過 Slurm 資源調度管理系統，撰寫 job script 依需求索取資源、Queue 排程，並提交計算工作。


`.sh` 檔案為 Slurm 將提交運算的 Job script，內容分為「**兩大部分**」：

1. **Job、計畫、資源資訊**：job 名稱、節點數量、每節點運行的任務數、每節點的 GPU 數量、job 最長的運行時間、計畫 ID、Queue 名稱。
3. **Job 執行的內容**


撰寫以下內容，並使用上述步驟創立的 `mytf_gpu` 虛擬環境。


執行以下編輯指令 > 按下<kbd>i</kbd> > 將範例內容複製並貼上 > 按下<kbd>ESC</kbd> > 輸入`:wq!` 存檔離開，即完成 Job script！


```bash
vim <FILE_NAME>.sh
```

:::info 
您可使用習慣的編輯器撰寫 `.sh` 檔案，範例採用 vim 操作。
:::

- TensorFlow 2 with 1 node / 8GPUs
```bash
#!/bin/bash
#SBATCH --job-name=Hello_TWCC    ## job name
#SBATCH --nodes=1                ## 索取 1 節點
#SBATCH --cpus-per-task=32       ## 該 task 索取 32 CPUs
#SBATCH --gres=gpu:8             ## 每個節點索取 8 GPUs
#SBATCH --time=00:10:00          ## 最長跑 10 分鐘 (測試完這邊記得改掉，或是直接刪除該行)
#SBATCH --account=PROJECT_ID     ## PROJECT_ID 請填入計畫ID(ex: MST108XXX)，扣款也會根據此計畫ID
#SBATCH --partition=gtest        ## gtest 為測試用 queue，後續測試完可改 gp1d(最長跑1天)、gp2d(最長跑2天)、p4d(最長跑4天)

module purge
module load miniconda3
conda activate mytf_gpu

# 大部分使用 conda 用戶，程式並沒有透過 MPI 溝通
# 應不需要再添加 srun/mpirun，直接加上需要運行的指令即可

python $(your command) 
```


:::info
1. 於腳本檔頭增加以下內容，可以增設 email 取得 Job 狀態的通知：
    ```bash
    #SBATCH --mail-type=ALL
    #SBATCH --mail-user=$Your_email
    ```
2. 索取資源的比例，將依您指定的 GPU 數量，並依 1 GPU: 4 CPU: 90 GB Memory 比例分配。
    例：
    > 索取 1 GPU，會自動配置 4 CPU cores、90  GB Memory
      索取 8 GPU，會自動配置 32 CPU cores、720 GB Memory
3. 請勿指定使用特定運算節點，系統將會自動分配運算資源。
4. 更多 Queue 資訊，請參考 [<ins>Queue 與計算資源使用說明</ins>](../user-guides/queues/queues-computing-resources.md)。
:::

<br/>


#### 提交 Job

```bash
sbatch <FILE_NAME>.sh
```

:::info
提交完成後，將顯示系統派發的 Job ID。
:::

<br/>


#### 查看和取消

- 開始計算後，可使用以下指令查看 log

```bash
tail -f slurm_<JOB_ID>.out
```

:::info
其他常用指令如下，更多指令請參考 [<ins>Slurm指令</ins>](/docs/category/slurm-指令)：
1. 使用`squeue -u $USER`：查看正在運行的 job
2. 使用 `sacct -X`：查看今日運行的 job 及狀態，確認是否還在運行或已結束。
:::


- 取消正在運行的 Job。若想停止正在執行的 job，請執行此指令：

```bash
scancel <JOB_ID>
```