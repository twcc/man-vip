---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-fftw3-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-fftw3-en' 
---


# FFTW3

- Package official website
  - [FFTW](https://www.fftw.org/)
  - [FFTW3 github](https://github.com/FFTW/fftw3)
- Release note
  - [FFTW release notes](https://www.fftw.org/release-notes.html)
- Package source: Official Tar file compiled by the system administrator

<br/>


## FFTW module with Open MPI 4.1.1 matrix

| CUDA | Open MPI | module name | usage                                   |
| ---- | -------- | ----------- | --------------------------------------- |
| 11.3 | 4.1.1    | fftw3/3.3.9 | ml cuda/11.3 openmpi4/4.1.1 fftw3/3.3.9 |
| 11.2 | 4.1.1    | fftw3/3.3.9 | ml cuda/11.2 openmpi4/4.1.1 fftw3/3.3.9 |
| 11.1 | 4.1.1    | fftw3/3.3.9 | ml cuda/11.1 openmpi4/4.1.1 fftw3/3.3.9 |
| 11.0 | 4.1.1    | fftw3/3.3.9 | ml cuda/11.0 openmpi4/4.1.1 fftw3/3.3.9 |
| 10.2 | 4.1.1    | fftw3/3.3.9 | ml cuda/10.2 openmpi4/4.1.1 fftw3/3.3.9 |
| 10.1 | 4.1.1    | fftw3/3.3.9 | ml cuda/10.1 openmpi4/4.1.1 fftw3/3.3.9 |
| 10.0 | 4.1.1    | fftw3/3.3.9 | ml cuda/10.0 openmpi4/4.1.1 fftw3/3.3.9 |
| 9.2  | 4.1.1    | fftw3/3.3.9 | ml cuda/9.2 openmpi4/4.1.1  fftw3/3.3.9 |
| 9.0  | N/A      | N/A         | N/A                                     |

- FFTW 3.3.9 Compile-dependent environment

| Open MPI | GCC   | CentOS |
| -------- | ----- | ------ |
| 4.1.1    | 4.8.5 | 7.8    |

- FFTW 3.3.9 Compilation parameters

```bash
CC=mpicc CXX=mpic++ \
F77=mpif90 F90=mpif90 FC=mpif90 \
./configure \
--prefix="$specify_install_path" \
--enable-mpi \
--enable-openmp \
--enable-shared \
--enable-sse2 \
--enable-threads
```

- Reference materials for compilation
  - [spack](https://github.com/spack/spack/blob/develop/var/spack/repos/builtin/packages/fftw/package.py) 
  - [hpc container maker](https://github.com/NVIDIA/hpc-container-maker/blob/master/hpccm/building_blocks/fftw.py)