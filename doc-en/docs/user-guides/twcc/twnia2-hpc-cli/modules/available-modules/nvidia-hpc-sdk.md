---
sidebar_position: 3
sidebar_label: 'NVIDIA HPC SDK'
slug: '/user-guides/twcc/twnia2-hpc-cli/nvidia-hpc-sdk'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-nvidia-hpc-sdk-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-nvidia-hpc-sdk-zh' 
---


# NVIDIA HPC SDK

- Package official website
  - [NVHPC SDK](https://developer.nvidia.com/hpc-sdk)
- Release note
  - [nvhpc 21.7](https://docs.nvidia.com/hpc-sdk/archive/21.7/hpc-sdk-release-notes/index.html) 
  - [nvhpc 21.2](https://docs.nvidia.com/hpc-sdk/archive/21.2/hpc-sdk-release-notes/index.html)
  - [nvhpc 20.9](https://docs.nvidia.com/hpc-sdk/archive/20.9/hpc-sdk-release-notes/index.html)
  - [nvhpc 20.7](https://docs.nvidia.com/hpc-sdk/archive/20.7/hpc-sdk-release-notes/index.html)
- Package source: Download from the official website.
- The default CUDA version is the latest version in each release.
- nvhpc has built-in Open MPI, mainly used in OpenACC.
- nvhpc has built-in qd , and the setting of environment variables is completed.
- The built-in gcc 4.8.5 of the operating system is installed by default.

<br/>


## NVHPC module matrix

| module name | usage         |
| ----------- | ------------- |
| nvhpc/21.7  | ml nvhpc/21.7 |
| nvhpc/21.2  | ml nvhpc/21.2 |
| nvhpc/20.9  | ml nvhpc/20.9 |
| nvhpc/20.7  | ml nvhpc/20.7 |

<br/>


## NVHPC with CUDA/NCCL/OpenMPI matrix

| NVHPC | CUDA | NCCL  | OpenMPI |
| ----- | ---- | ----- | ------- |
| 21.7  | 11.4 | 2.10.3 | 3.1.5   |
| 21.2  | 11.2 | 2.8.3 | 3.1.5   |
| 20.9  | 11.0 | 2.7.8 | 3.1.5   |
| 20.7  | 11.0 | 2.7.3 | 3.1.5   |