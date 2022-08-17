---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-create-sglrt-container-zh' 
---

# 建立 TWNIA2 容器


:::tip **適用情境：如何建立台灣杉二號的容器？如何客製化容器？**
*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::

您可透過 「**Singularity**」 包裝您所需的套件與程式，**建立可在 TWCC 台灣杉二號 (命令列介面) (TWNIA2 (HPC CLI)) 服務執行運算工作的容器環境**，並可以快速部署套件、搬移、以及分享。

- 本篇文章將教學：
    - 如何在台灣杉二號使用 Singularity 容器，或利用 [TWCC 虛擬運算個體](https://www.twcc.ai/doc?page=vm)客製化容器
    - 運行簡易容器指令
    - 進階操作：建立容器沙盒測試環境、輕量化容器

:::info
[<ins>Singularity</ins>](https://sylabs.io/) 工具相當於 Docker，可建立 Rootless 形式的容器。
:::

## 準備工作：容器映像檔

容器來源有多種選擇，您可以使用 TWCC 已預載的容器映像檔、下載容器映像檔，或客製化您的容器環境。

### 1. TWCC 預載的容器映像檔

TWCC 已為使用者預載常用的 NGC 容器，並放置於路徑 `/work/TWCC_cntr` 之下：


| [PyTorch](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_21-11.html#rel_21-11) | [TensorFlow](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_21-11.html#rel_21-11) |[CUDA](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#abstract) |[HPC SDK](https://docs.nvidia.com/hpc-sdk/hpc-sdk-release-notes/index.html)|
| -------- | -------- | -------- | -------- |
| pytorch_21.11-py3   | tensorflow_21.11-tf2-py3     | cuda_11.5.1-cudnn8-devel-ubuntu20.04     | nvhpc_22.1-runtime-cuda11.5-ubuntu20.04
| pytorch_21.11-py3_horovod   | tensorflow_21.11-tf1-py3    |  cuda_11.5.1-cudnn8-runtime-ubuntu20.04    | nvhpc_22.1-devel-cuda11.5-ubuntu20.04|
|   -   | -     |   cuda_11.5.1-cudnn8-devel-centos8   | nvhpc_22.1-runtime-cuda11.5-centos7     |
|   -     | -     | cuda_11.5.1-cudnn8-runtime-centos8    | nvhpc_22.1-devel-cuda11.5-centos7  |   -     | -     | 11.5.1-cudnn8-devel-centos8      | 



> TWCC Release Date: 31Mar22

您可以使用以下指令來建立容器並執行指令，而使用後的映像檔快取預設會存放於 `$HOME/.singularity/cache` 內，可快速再次使用容器，省下下載等待的時間：

```
singularity exec --nv oras://registry.twcc.ai/singularity/<套件名>:<版本號> <在容器內執行的指令>
```



### 2 下載容器映像檔

熟悉容器技術的進階用戶，若希望映像檔加入其他應用程式、套件，可先使用 [TWCC 虛擬運算個體](https://www.twcc.ai/doc?page=vm)客製化您的容器映像檔，再將映像檔上傳至台灣杉二號 (命令列介面) 使用。

- 本篇以 **[<ins>TWCC 虛擬運算個體</ins>](https://www.twcc.ai/doc?page=vm)** 示範，系統選用 CentOS 7。

:::caution
由於客製化 Singularity 容器映像檔需使用 sudo 權限，台灣杉二號 (命令列介面, HPC CLI) 服務為避免造成實體機損壞，恕無法提供 sudo 權限給用戶，建議使用 **[<ins>TWCC 虛擬運算個體</ins>](https://www.twcc.ai/doc?page=vm)** 環境編譯您的容器映像檔，完成後即可刪除。
:::
:::tip
因為容器映像檔系統多使用 Ubuntu，建議虛擬運算個體環境選用 CentOS，較好判斷環境是容器之內或是之外。
:::

#### Step 1. 在虛擬運算個體安裝 Singularity 

安裝步驟截錄自官網文件，詳細步驟或其他版本之 Linux 用戶請查閱 Singularity 官網[最新文件](https://sylabs.io)。

- 虛擬運算個體為 **Ubuntu** 請使用以下指令安裝：

```bash
sudo wget -O- http://neuro.debian.net/lists/xenial.us-ca.full | sudo tee /etc/apt/sources.list.d/neurodebian.sources.list && \
    sudo apt-key adv --recv-keys --keyserver hkp://pool.sks-keyservers.net:80 0xA5D32F012649A5A9 && \
    sudo apt-get update && \
    sudo apt-get install -y singularity-container
```
    
- 虛擬運算個體為 **CentOS** 請使用以下指令安裝：

```bash
sudo yum update -y && \
    sudo yum install -y epel-release && \
    sudo yum update -y && \
    sudo yum install -y singularity
```

#### Step 2. 客製化 Singularity 容器

您可以利用撰寫 **Singularity Definition File** 選擇基礎的映像檔 (base image) 來源，並安裝所需的應用程式，建立您專屬的客製化容器。

以下參考 [Singularity Quick Start 範例](https://sylabs.io/guides/3.6/user-guide/quick_start.html#singularity-definition-files)，說明如何撰寫 Definition file。 File 內容主要分為 **Header** 和 **Sections** 兩部分：

:::info
- **Header**：定義 base 映像檔的來源 (例：docker, library, yum...等)。  
- **Sections**：有多種選項可設定，主要會使用以下 2 個項目：
    - `%post`：建立容器後將執行的內容。
    - `%environment`：容器建立好後，會將程式的環境變數會放到 /environment 內。
:::



以下示範建立 1 個 CUDA 10.1 映像檔，並編譯 [CUDA Samples](https://github.com/NVIDIA/cuda-samples) deviceQuery 的容器：

- 建立 Singularity definition file

```
vim <DEF_FILE_NAME>.def
```

- 修改為符合需求的客製化內容：
 
```bash
# 使用 docker nvidia/cuda:10.1-devel-ubuntu18.04 做為基礎映像檔
BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-devel-ubuntu18.04
Stage: devel
%post
    # 初始化基礎映像檔的環境變數
    . /.singularity.d/env/10-docker*.sh

%post
    # 安裝 wget
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        wget
    rm -rf /var/lib/apt/lists/*
%post
    # 下載並編譯 cuda sample 的 deviceQuery 範例
    cd /
    mkdir -p /var/tmp && wget -q -nc --no-check-certificate -P /var/tmp https://github.com/NVIDIA/cuda-samples/archive/v10.1.tar.gz
    mkdir -p /var/tmp && tar -x -f /var/tmp/v10.1.tar.gz -C /var/tmp -z
    cd /var/tmp/cuda-samples-10.1/Samples/deviceQuery
    make
    mkdir -p /usr/local/cuda-samples-10.1/bin
    cp deviceQuery /usr/local/cuda-samples-10.1/bin
    rm -rf /var/tmp/cuda-samples-10.1 /var/tmp/v10.1.tar.gz
%environment
    # 增設容器的環境變數
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH
```

:::info
**Singularity definition file** 和 **Dockerfile** 撰寫語法不同但使用方式相似，使用者皆可透過此種文件執行指令安裝應用程式、建立客製化容器映像檔。 
:::

- 執行 definition file 建立容器
```bash
sudo singularity build <CONTAINER_NAME>.sif <DEF_FILE_NAME>.def
```

:::tip
推薦您使用 [<ins>HPC Container Maker</ins>](https://github.com/NVIDIA/hpc-container-maker) 撰寫 Singularity definition file ，如寫程式一樣維護方便。
:::


#### Step 3. 下載容器映像檔

請將您的容器映像檔下載至本機。

#### Step 4. 將容器映像檔上傳至高速檔案系統 (HFS)

參考[高速檔案系統](https://www.twcc.ai/doc?page=hfs)，將容器映像檔透過資料傳輸節點 `xdata1.twcc.ai` 上傳至台灣杉二號 (命令列介面)的儲存空間，放在 `/home/$USER` 或 `/work/$USER` 目錄下使用。


## 運行容器

容器映像檔準備好後，即可於台灣杉二號 (命令列介面) 環境，運行容器內的指令並執行運算。

以下概略介紹 2 個 Singularity 基礎操作的指令，更多指令資訊請參考：[Singularity- Command Line Interface](https://sylabs.io/guides/3.6/user-guide/cli.html)。


**1. `shell` (Run a shell within a container)**

- 進入容器環境內並啟用 shell 環境，可查看容器內的檔案。

```bash
singularity shell --nv <CONTAINER_NAME>.sif
```

**2. `exec` (Run a command within a container)**

- 執行容器內的`cat`指令，例如執行以下指令，os-relase 會顯示容器 OS 為 ubuntu。

```bash
singularity exec --nv <CONTAINER_NAME>.sif cat /etc/os-release
```


:::info
- 運行 GPU 資源，指令皆需加上 `--nv`。
:::


## 進階操作

### 1. 建立沙盒容器

若需測試套件是否與容器環境相容時，您可以建立「**沙盒容器**」，既不影響原容器映像檔內容，也無需重建立容器，又可在容器內安裝或進行操作：

- 請先建立沙盒資料夾，放入容器映像檔的所有內容

```bash
sudo singularity build --sandbox <FOLDER_NAME> docker://nvidia/cuda:10.1-devel-ubuntu18.04
```

- 使用 `shell` 方式進入沙盒容器內，並具有寫入的權限。

```bash
sudo singularity shell --writable <FOLDER_NAME>/
```

- 即可利用 `apt` 使用以下指令更新並安裝套件

```bash
apt-get update
apt-get install wget
```

- 使用沙盒建立 Singularity 容器映像檔


:::info
由於沙盒未將套件寫入 definition file，您無法紀錄容器內有哪些套件，維護不易，較不推薦使用此方式建立容器映像檔。建議使用[<ins>客製化 Singularity 容器</ins>](#2-客製化-Singularity-容器)之方式。
:::

```bash
sudo singularity build <CONTAINER_NAME>.sif <FOLDER_NAME>/
```


### 2. 建立輕量化容器

為將容器最小化，並僅存放編譯好的執行檔、具相依性的 runtime library，您可以參考 [Singularity 官網範例](https://sylabs.io/guides/3.6/user-guide/definition_files.html#multi-stage-builds)，使用 **「多階段建立容器 (Multi-Stage Builds)」** 功能，在同份 Singularity definition file 定義 2 階段以上的容器建立過程，將工作分階段進行。

以本文範例為例說明：
- 第 1 階段使用 `nvcc` 編譯，並產生 `deviceQuery` 執行檔
- 再將 deviceQuery 複製到第 2 階段 (**不含編譯所需的內容**)，建立輕量化的容器映像檔
- 容器檔案大小從 1.4G 縮小至 664M
```bash
BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-devel-ubuntu18.04
Stage: devel
%post
    # initialize base image environment
    . /.singularity.d/env/10-docker*.sh

%post
    # install wget
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        wget
    rm -rf /var/lib/apt/lists/*
%post
    # download and compile cuda sample deviceQuery
    cd /
    mkdir -p /var/tmp && wget -q -nc --no-check-certificate -P /var/tmp https://github.com/NVIDIA/cuda-samples/archive/v10.1.tar.gz
    mkdir -p /var/tmp && tar -x -f /var/tmp/v10.1.tar.gz -C /var/tmp -z
    cd /var/tmp/cuda-samples-10.1/Samples/deviceQuery
    make
    mkdir -p /usr/local/cuda-samples-10.1/bin
    cp deviceQuery /usr/local/cuda-samples-10.1/bin
    rm -rf /var/tmp/cuda-samples-10.1 /var/tmp/v10.1.tar.gz
%environment
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH

BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-runtime-ubuntu18.04
%post
    . /.singularity.d/env/10-docker*.sh

# copy precompiled cuda sample deviceQuery 
# from develop stage
%files from devel
    /usr/local/cuda-samples-10.1/bin /usr/local/cuda-samples-10.1/bin
%environment
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH
```

<!-- ## 下個主題 <i class="fa fa-forward" aria-hidden="true"></i>
- 如何利用容器完成跨節點高速運算工作？:point_right: [使用容器跨節點高速運算－AI Benchmark]() -->
