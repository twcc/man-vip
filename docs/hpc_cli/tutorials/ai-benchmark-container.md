---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-run-parallel-job-container-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-run-parallel-job-container-zh' 
---

# 容器跨節點高速運算－AI Benchmark


:::tip **適用情境：如何使用超過 8 顆 GPUs 運算？如何建立台灣杉二號的容器？如何提交 Job？**
*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::
本篇文章將教學如何使用 **TWCC 台灣杉二號 (命令列介面) (*TWNIA2 (HPC CLI)*)** 建立容器與執行跨節點高速運算。

TWCC 容器運算服務 (開發型容器與任務型容器)、HPC 高速運算任務，皆採用 [NVIDIA NGC 優化之容器](https://ngc.nvidia.com/catalog/containers)，包含`TensorFlow`、`PyTorch` ...等等。本篇文章也將採用 NGC 容器做為操作範例<sup>[1]</sup>。

自 `NGC 19.11` <sup>[2]</sup>版本以後的容器，已[實驗性支援 Singularity 容器](https://developer.nvidia.com/blog/how-to-run-ngc-deep-learning-containers-with-singularity/)，適用 HPC 使用情境，因此台灣杉二號 (命令列介面) 用戶可以直接下載 NGC 容器使用，亦可用 NGC 提供的容器為基礎映像檔，疊加自己常用工具<sup>[3]</sup>。

本文將透過 Singularity 容器包裝計算工作需使用的套件，再透過 Slurm 資源調度管理系統，撰寫 job script 依需求索取資源、Queue 排程，並提交計算工作。


:::info
[1] NVIDIA 提供許多 [<ins>Deep Learning 範例</ins>](https://github.com/NVIDIA/DeepLearningExamples)參考，提升操作便利性。<br/>
[2] NGC 版號由 「**年分.月份**」組成：`NGC 20.09` 即是 2020 年 9 月發行版本。可參閱 [<ins>NGC Support Matrix</ins>](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html)，詳述 NGC 提供 AI frameworks、套件版號的差異。<br/>
[3] 也可下載 Docker Hub 或其他 Container Registry 的容器使用，更多資訊請參考 [<ins>HowTo：建立 TWNIA2 容器</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-zh)。
:::


## Step 1. 使用已預載容器或下載 NGC 容器

TWCC 已為使用者預載以下 3 個常用的 NGC 容器，並放置於路徑 `/work/TWCC_cntr` 之下：
- **NGC 21.11 TensorFlow 1** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_21-11.html#rel_20-11) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 路徑：`/work/TWCC_cntr/tensorflow_21.11-tf1-py3.sif` 
- **NGC 21.11 TensorFlow 2** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_21-11.html#rel_20-11) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 路徑：`/work/TWCC_cntr/tensorflow_21.11-tf2-py3.sif`
- **NGC 21.11 PyTorch** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_21-11.html#rel_21-11) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 路徑1：`/work/TWCC_cntr/pytorch_21.11-py3.sif`
 路徑2：`/work/TWCC_cntr/pytorch_21.11-py3_horovod.sif` (額外安裝 horovod)

若想使用其他版本或其他容器，TWCC 台灣杉二號已安裝 Singularity，您可以使用 `singularity pull` 指令，下載 Singularity 容器<sup>[4]</sup>。

:::info
[4] 可下載 Docker Hub 或其他 Container Registry 的容器使用，更多使用方式與資訊請參考 [<ins>HowTo：建立 TWNIA2 容器</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-zh)。
:::


## Step 2. 在容器裡安裝套件 (可略)

需要 sudo 權限才能在 Singularity 容器裡安裝套件，用戶可以在自己的機器建立客製化容器 (建議使用虛擬機，如 TWCC 的虛擬運算服務)，再上傳至台灣杉二號環境使用<sup>[5]</sup>。


例如：以 PyTorch 的容器為基礎映像檔，安裝 [Horovod 分散式訓練框架](https://horovod.ai/)<sup>[6]</sup>：

- 建立**容器**

```bash
sudo singularity build pytorch_20.09-py3_horovod.sif pytorch_20.09-py3_horovod.def
```

- **`pytorch_20.09-py3_horovod.def` 的內容**
```bash
BootStrap: docker
From: nvcr.io/nvidia/pytorch:20.09-py3
Stage: build
%post
    # source env
    . /.singularity.d/env/10-docker*.sh

    # install horovod
    export HOROVOD_GPU=CUDA
    export HOROVOD_GPU_OPERATIONS=NCCL
    export HOROVOD_NCCL_LINK=SHARED
    export HOROVOD_WITHOUT_GLOO=1
    export HOROVOD_WITH_MPI=1
    export HOROVOD_WITH_PYTORCH=1
    export HOROVOD_WITHOUT_TENSORFLOW=1
    export HOROVOD_WITHOUT_MXNET=1
    export LD_LIBRARY_PATH=/usr/local/cuda/lib64/stubs:$LD_LIBRARY_PATH
    pip install --no-cache-dir horovod==0.20.3
```

:::info 
[5] 更多如何客製化容器的步驟，請參考[<ins>客製化 Singularity 容器</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-zh#2-%E5%AE%A2%E8%A3%BD%E5%8C%96-Singularity-%E5%AE%B9%E5%99%A8)。<br/>
[6] NGC 提供的容器，TensorFlow 有安裝 Horovod，而 PyTorch 則無，因此需額外安裝。
:::

## Step 3. 啟用混合精度 (可略)

NVIDIA 提供的 TensorFlow、PyTorch、MXNet，皆可啟用混合精度 (Automatic Mixed Precision)，可以提高運算速度，若有需要請參考 NVIDIA [Automatic Mixed Precision for Deep Learning](https://developer.nvidia.com/automatic-mixed-precision)。

:::info
也可參考以 TWCC 容器服務[<ins>開啟 TensorFlow 自動混合精度運算與執行效能分析</ins>](https://www.twcc.ai/doc?page=howto_ctn6)。
:::


## Step 4. 撰寫 Slurm Job Script

當您準備好計算環境後，請按照以下步驟，透過 Slurm 資源調度管理系統，撰寫 job script 依需求索取資源、Queue 排程，並提交計算工作。


`.sh` 檔案為 Slurm 將提交運算的 Job script，內容分為「**兩大部分**」：

1. **Job、計畫、資源資訊**：job 名稱、節點數量、每節點運行的任務數、每節點的 GPU 數量、job 最長的運行時間、計畫 ID、Queue 名稱。
3. **Job 執行的內容**


以下以 Horovod 撰寫的 benchmark script 為編輯和測試的範例：

執行以下編輯指令 > 按下<kbd>i</kbd> > 擇一範例複製貼上 > 按下<kbd>ESC</kbd> > 輸入`:wq!` 存檔離開，即完成 Job script！

```bash
vim <FILE_NAME>.sh
```
:::info
您可使用習慣的編輯器撰寫 `.sh` 檔案，範例採用 vim 操作。
:::

### TensorFlow 1
```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## 索取 2 節點
#SBATCH --ntasks-per-node=8      ## 每個節點運行 8 srun tasks
#SBATCH --cpus-per-task=4        ## 每個 srun task 索取 4 CPUs
#SBATCH --gres=gpu:8             ## 每個節點索取 8 GPUs
#SBATCH --time=00:10:00          ## 最長跑 10 分鐘 (測試完這邊記得改掉，或是直接刪除該行)
#SBATCH --account="PROJECT_ID"   ## PROJECT_ID 請填入計畫ID(ex: MST108XXX)，扣款也會根據此計畫ID
#SBATCH --partition=gtest        ## gtest 為測試用 queue，後續測試完可改 gp1d(最長跑1天)、gp2d(最長跑2天)、gp4d(最長跑4天)

module purge
module load singularity 

# tf 1
SIF=/work/TWCC_cntr/tensorflow_20.09-tf1-py3.sif
SINGULARITY="singularity run --nv $SIF"

# tf 1 horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.19.1/examples/tensorflow_synthetic_benchmark.py
HOROVOD="python tensorflow_synthetic_benchmark.py --batch-size 256"

# enable AUTO MIXED PRECISION
export TF_ENABLE_AUTO_MIXED_PRECISION=1

# enable NCCL log
export NCCL_DEBUG=INFO

srun $SINGULARITY $HOROVOD
```

### TensorFlow 2

```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## 索取 2 節點
#SBATCH --ntasks-per-node=8      ## 每個節點運行 8 srun tasks
#SBATCH --cpus-per-task=4        ## 每個 srun task 索取 4 CPUs
#SBATCH --gres=gpu:8             ## 每個節點索取 8 GPUs
#SBATCH --time=00:10:00          ## 最長跑 10 分鐘 (測試完這邊記得改掉，或是直接刪除該行)
#SBATCH --account="PROJECT_ID"   ## PROJECT_ID 請填入計畫ID(ex: MST108XXX)，扣款也會根據此計畫ID
#SBATCH --partition=gtest        ## gtest 為測試用 queue，後續測試完可改 gp1d(最長跑1天)、gp2d(最長跑2天)、gp4d(最長跑4天)

module purge
module load singularity 

# tf 2
SIF=/work/TWCC_cntr/tensorflow_20.09-tf2-py3.sif
SINGULARITY="singularity run --nv $SIF"

# tf 2 horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.19.5/examples/tensorflow2_synthetic_benchmark.py
HOROVOD="python tensorflow2_synthetic_benchmark.py --batch-size 256"

# enable NCCL log
export NCCL_DEBUG=INFO

srun $SINGULARITY $HOROVOD
```

### PyTorch
```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## 索取 2 節點
#SBATCH --ntasks-per-node=8      ## 每個節點運行 8 srun tasks
#SBATCH --cpus-per-task=4        ## 每個 srun task 索取 4 CPUs
#SBATCH --gres=gpu:8             ## 每個節點索取 8 GPUs
#SBATCH --time=00:10:00          ## 最長跑 10 分鐘 (測試完這邊記得改掉，或是直接刪除該行)
#SBATCH --account="PROJECT_ID"   ## PROJECT_ID 請填入計畫ID(ex: MST108XXX)，扣款也會根據此計畫ID
#SBATCH --partition=gtest        ## gtest 為測試用 queue，後續測試完可改 gp1d(最長跑1天)、gp2d(最長跑2天)、gp4d(最長跑4天)

module purge
module load singularity 

SIF=/work/TWCC_cntr/pytorch_20.09-py3_horovod.sif
SINGULARITY="singularity run --nv $SIF"

# pytorch horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.20.3/examples/pytorch/pytorch_synthetic_benchmark.py
HOROVOD="python pytorch_synthetic_benchmark.py --batch-size 256"

# enable NCCL log
export NCCL_DEBUG=INFO

srun $SINGULARITY $HOROVOD
```

:::info
1. 於腳本檔頭增加以下內容，可以增設 email 取得 Job 狀態的通知：
    ```bash
    #SBATCH --mail-type=ALL
    #SBATCH --mail-user=$Your_email
    ```
2. 索取資源的比例，將依您指定的 GPU 數量，並依 1 GPU: 4 CPU: 90 GB Memory 比例分配。
    例：
    > 索取 1 GPU，會自動配置 90  GB Memory
      索取 8 GPU，會自動配置 720 GB Memory
3. 更多 Queue 資訊，請參考 [<ins>Queue 與計算資源使用說明</ins>](https://www.twcc.ai/doc?page=hpc_cli#4-Queue-%E8%88%87%E8%A8%88%E7%AE%97%E8%B3%87%E6%BA%90%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E)。
:::


## Step 5. 提交 Job

- 執行以下指令即可提交 Job，系統將為您安排 Queue 排程、所需的資源，並依排序啟動運算

```bash
sbatch <FILE_NAME>.sh
```

:::info
提交完成後，將顯示系統派發的 Job ID。
:::

## Step 6. 查看和取消

- 開始計算後，可使用以下指令查看 log

```bash
tail -f slurm_<JOB_ID>.out
```

:::info
其他常用指令如下，更多指令請參考 [<ins>Slurm指令</ins>](https://www.twcc.ai/doc?page=hpc_cli#6-Slurm%E6%8C%87%E4%BB%A4)： 
1. 使用`squeue -u $USER`：查看正在運行的 job
2. 使用 `sacct -X`：查看今日運行的 job 及狀態，確認是否還在運行或已結束。
:::


- 取消正在運行的 Job。若想停止正在執行的 job，請執行此指令：

```bash
scancel <JOB_ID>
```

##  <i class="fa fa-backward" aria-hidden="true"></i> 前一主題
- 如何建立 TWNIA2 容器？:point_right: [HowTo：建立 TWNIA2 容器](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-zh)