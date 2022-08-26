---
sidebar_position: 9
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-hdf5-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-hdf5-zh' 
---


# HDF5


- 套件官網
  - [HDF5](https://portal.hdfgroup.org)
  - [HDF5 1.10](https://support.hdfgroup.org/ftp/HDF5/releases/hdf5-1.10)
- release note
  - [HDF5 1.10.7 release notes](https://www.hdfgroup.org/2020/09/release-of-hdf5-1-10-7-newsletter-175)
- 套件來源：官網下載 tar 檔，系統管理員自行編譯

<br/>


## HDF5 module with Open MPI 4.1.1 matrix 

| CUDA | Open MPI | module name | usage                                   |
| ---- | -------- | ----------- | --------------------------------------- |
| 11.3 | 4.1.1    | hdf5/1.10.7 | ml cuda/11.3 openmpi4/4.1.1 hdf5/1.10.7 |
| 11.2 | 4.1.1    | hdf5/1.10.7 | ml cuda/11.2 openmpi4/4.1.1 hdf5/1.10.7 |
| 11.1 | 4.1.1    | hdf5/1.10.7 | ml cuda/11.1 openmpi4/4.1.1 hdf5/1.10.7 |
| 11.0 | 4.1.1    | hdf5/1.10.7 | ml cuda/11.0 openmpi4/4.1.1 hdf5/1.10.7 |
| 10.2 | 4.1.1    | hdf5/1.10.7 | ml cuda/10.2 openmpi4/4.1.1 hdf5/1.10.7 |
| 10.1 | 4.1.1    | hdf5/1.10.7 | ml cuda/10.1 openmpi4/4.1.1 hdf5/1.10.7 |
| 10.0 | 4.1.1    | hdf5/1.10.7 | ml cuda/10.0 openmpi4/4.1.1 hdf5/1.10.7 |
| 9.2  | 4.1.1    | hdf5/1.10.7 | ml cuda/9.2 openmpi4/4.1.1  hdf5/1.10.7 |
| 9.0  | N/A      | N/A         | N/A                                     |

- HDF5 1.10.7 編譯相依的環境

| SZIP  | Open MPI | GCC   | CentOS |
| ----- | -------- | ----- | ------ |
| 2.1.1 | 4.1.1    | 4.8.5 | 7.8    |

- HDF5 1.10.7  編譯使用的參數

```bash
CC=mpicc CXX=mpic++ \
F9X=mpif90 FC=mpif90 \
./configure \
--prefix="$specify_install_path" \
--enable-hl \
--enable-cxx \
--enable-fortran \
--enable-parallel \
--enable-build-mode=production \
--enable-unsupported \
--with-pic \
--with-zlib \
--with-szlib
```

- 編譯參考資料
  - [archlinux community pkg](https://github.com/archlinux/svntogit-community/blob/packages/hdf5-openmpi/trunk/PKGBUILD)
  - [spack](https://github.com/spack/spack/blob/develop/var/spack/repos/builtin/packages/hdf5/package.py) 
