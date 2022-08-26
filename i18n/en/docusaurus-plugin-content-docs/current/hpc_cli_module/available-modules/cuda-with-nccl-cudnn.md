---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-cuda-w-nccl-cudnn-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-cuda-w-nccl-cudnn-en' 
---


# CUDA with NCCL/cuDNN

- Packages official website
  - [CUDA](https://developer.nvidia.com/cuda-zone)
  - [NCCL](https://developer.nvidia.com/nccl)
  - [cuDNN](https://developer.nvidia.com/cudnn)
- Release note
  - [CUDA](https://developer.nvidia.com/cuda-toolkit-archive)
  - [NCCL](https://docs.nvidia.com/deeplearning/nccl/archives/index.html)
  - [cuDNN](https://docs.nvidia.com/deeplearning/cudnn/release-notes/index.html)
- Package source: NVIDIA NGC CUDA container has been installed with NCCL/cuDNN. We take this as a reference and copy the files in the container.
- In addition, NVIDIA HPC SDK also includes CUDA and NCCL/OpenMPI, but lacks cuDNN.
- Remind that the version after CUDA 11, some libraries may not be compatible with the gcc 4.8.5 provided by CentOS 7 by default. You can refer to the support matrix in the release note for use with modules above gcc 7.
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