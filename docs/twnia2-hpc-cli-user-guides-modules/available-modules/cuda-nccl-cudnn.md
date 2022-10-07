---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-cuda-w-nccl-cudnn-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-cuda-w-nccl-cudnn-zh' 
---


# CUDA with NCCL/cuDNN

- 套件官網 
  - [CUDA](https://developer.nvidia.com/cuda-zone)
  - [NCCL](https://developer.nvidia.com/nccl)
  - [cuDNN](https://developer.nvidia.com/cudnn)
- release note 
  - [CUDA](https://developer.nvidia.com/cuda-toolkit-archive)
  - [NCCL](https://docs.nvidia.com/deeplearning/nccl/archives/index.html)
  - [cuDNN](https://docs.nvidia.com/deeplearning/cudnn/release-notes/index.html)
- 套件來源：由於 NVIDIA NGC CUDA 容器已同時安裝 NCCL/cuDNN，故已此為參考，統一複製容器內搭配的檔案
- 除此之外，NVIDIA HPC SDK 也已包含 CUDA 和 NCCL/OpenMPI，但缺少 cuDNN
- 提醒 CUDA 11 以後，部分 library 有可能無法搭配和 CentOS 7 預設提供的 gcc 4.8.5，可參考 release note 支援表，搭配 gcc 7 以上的 module 使用
![](https://i.imgur.com/G4pwXr4.png)
ref: https://docs.nvidia.com/hpc-sdk/hpc-sdk-release-notes/index.html

<br/>


## CUDA with NCCL/cuDNN module matrix

| module name | usage        |
| ----------- | ------------ |
| cuda/11.3   | ml cuda/11.3 |
| cuda/11.2   | ml cuda/11.2 |
| cuda/11.1   | ml cuda/11.1 |
| cuda/11.0   | ml cuda/11.0 |
| cuda/10.2   | ml cuda/10.2 |
| cuda/10.1   | ml cuda/10.1 |
| cuda/10.0   | ml cuda/10.0 |
| cuda/9.2    | ml cuda/9.2  |
| cuda/9.0    | ml cuda/9.0  |

<br/>


## CUDA with NCCL/cuDNN matrix

| CUDA | w/ NCCL | w/ cuDNN | based on CUDA container     |
| ---- | ------- | -------- | --------------------------- |
| 11.3 | 2.9.9   | 8.2.0    | 11.3.1-cudnn8-devel-centos7 |
| 11.2 | 2.8.4   | 8.1.1    | 11.2.2-cudnn8-devel-centos7 |
| 11.1 | 2.8.4   | 8.0.5    | 11.1.1-cudnn8-devel-centos7 |
| 11.0 | 2.9.6   | 8.0.5    | 11.0.3-cudnn8-devel-centos7 |
| 10.2 | 2.9.6   | 8.2.0    | 10.2-cudnn8-devel-centos7   |
| 10.1 | 2.8.4   | 7.6.5    | 10.1-cudnn7-devel-centos7   |
| 10.0 | 2.6.4   | 7.6.5    | 10.0-cudnn7-devel-centos7   |
| 9.2  | N/A     | 7.6.5    | 9.2-cudnn7-devel-centos7    |
| 9.0  | N/A     | 7.6.5    | 9.0-cudnn7-devel-centos7    |

