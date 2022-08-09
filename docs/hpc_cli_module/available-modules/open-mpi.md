---
sidebar_position: 6
---


# Open MPI


- 套件官網 : 
  - [Open MPI](https://www.open-mpi.org/)
  - [Open MPI github](https://github.com/open-mpi/ompi)
- release note : 
  - [Open MPI 4.1.x NEWS](https://raw.githubusercontent.com/open-mpi/ompi/v4.1.x/NEWS)
- 套件來源 : 官網下載 tar 檔，系統管理員自行編譯
- 如果需要重編 Open MPI 可選擇已編譯好的 UCX 進行

## Open MPI 4.1.1 module matrix 

| CUDA | module name    | usage                       |
| ---- | -------------- | --------------------------- |
| 11.3 | openmpi4/4.1.1 | ml cuda/11.3 openmpi4/4.1.1 |
| 11.2 | openmpi4/4.1.1 | ml cuda/11.2 openmpi4/4.1.1 |
| 11.1 | openmpi4/4.1.1 | ml cuda/11.1 openmpi4/4.1.1 |
| 11.0 | openmpi4/4.1.1 | ml cuda/11.0 openmpi4/4.1.1 |
| 10.2 | openmpi4/4.1.1 | ml cuda/10.2 openmpi4/4.1.1 |
| 10.1 | openmpi4/4.1.1 | ml cuda/10.1 openmpi4/4.1.1 |
| 10.0 | openmpi4/4.1.1 | ml cuda/10.0 openmpi4/4.1.1 |
| 9.2  | openmpi4/4.1.1 | ml cuda/9.2 openmpi4/4.1.1  |
| 9.0  | N/A            | N/A                         |


- Open MPI 4.1.1 編譯相依的環境

| Open MPI | CUDA       | UCX    | GCC   | pmix     | hwloc    | libevent | CentOS |
| -------- | ---------- | ------ | ----- | -------- | -------- | -------- | ------ |
| 4.1.1    | 9.2 - 11.3 | 1.10.1 | 4.8.5 | internal | internal | internal | 7.8    |

- Open MPI 4.1.1 編譯使用的參數
```bash
./configure \
--prefix="$specify_install_path" \
--with-ucx="$specify_ucx_path" \
--with-cuda="$specify_cuda_path" \
--disable-getpwuid \
--disable-static \
--enable-shared \
--enable-mpi-fortran \
--enable-mpi-cxx \
--enable-mpi1-compatibility \
--without-xpmem \
--without-hcoll \
--with-slurm \
--with-zlib \
--with-pmi \
--with-pmix=internal \
--with-hwloc=internal \
--with-libevent=internal \
--with-platform=contrib/platform/mellanox/optimized
```
