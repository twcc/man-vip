---
tags: Guide, TWNIA2, ZH
title: Modules-SZIP | zh
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# SZIP

- 套件官網 : 
  - [SZIP](https://support.hdfgroup.org/doc_resource/SZIP)
- 套件來源 : 官網下載 tar 檔，系統管理員自行編譯
- 主要用於編譯 HDF5 時相依的 library
- 如果需要重編 HDF5 可選擇已編譯好的 SZIP 進行

## SZIP module matrix 

| module name | usage   |
| ----------- | ------- |
| szip/2.1.1  | ml szip |

- SZIP 2.1.1 編譯相依的環境

| GCC   | CentOS |
| ----- | ------ |
| 4.8.5 | 7.8    |

- SZIP 2.1.1 編譯使用的參數
```bash
CC=gcc CXX=g++ \
F77=gfortran F90=gfortran FC=gfortran \
./configure \
--prefix="$specify_install_path" \
--enable-production \
--enable-shared \
--enable-static \
--enable-encoding
```
- 編譯參考資料
  - [spack](https://github.com/spack/spack/blob/develop/var/spack/repos/builtin/packages/libszip/package.py)
