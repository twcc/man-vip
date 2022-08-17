---
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-szip-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-szip-en' 
---


# SZIP

- Package official website:
  - [SZIP](https://support.hdfgroup.org/doc_resource/SZIP)
- Package source: Official Tar file compiled by the system administrator
- Mainly used for libraries that is depend when compiling HDF5.
- If you need to re-compile HDF5, you can select the compiled SZIP to proceed.

<br/>


## SZIP module matrix

| module name | usage   |
| ----------- | ------- |
| szip/2.1.1  | ml szip |

- SZIP 2.1.1 Compile-dependent environment

| GCC   | CentOS |
| ----- | ------ |
| 4.8.5 | 7.8    |

- SZIP 2.1.1 Compilation parameters
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
- Reference materials for compilation
  - [spack](https://github.com/spack/spack/blob/develop/var/spack/repos/builtin/packages/libszip/package.py)