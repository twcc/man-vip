---
sidebar_position: 5
sidebar_label: 'UCX (Unified Communication X)'
slug: '/user-guides/twcc/twnia2-hpc-cli/module-ucx-zh'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-ucx-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-ucx-zh' 
---


# UCX (Unified Communication X)

- Package official website
  - [UCX](https://www.openucx.org)
  - [UCX github](https://github.com/openucx/ucx)
- Release note
  - [UCX 1.10.1 github](https://github.com/openucx/ucx/blob/v1.10.1/NEWS)
- Package source: Github. Tar file compiles by the system administrator
- If you need to re-compile Open MPI, you can select the compiled UCX to proceed.

<br/>


## UCX 1.10.1 
### UCX module matrix 

| CUDA  | module name | usage                   |
| ------------ | ----------- | ----------------------- |
| 11.3         | ucx/1.10.1  | ml cuda/11.3 ucx/1.10.1 |
| 11.2         | ucx/1.10.1  | ml cuda/11.2 ucx/1.10.1 |
| 11.1         | ucx/1.10.1  | ml cuda/11.1 ucx/1.10.1 |
| 11.0         | ucx/1.10.1  | ml cuda/11.0 ucx/1.10.1 |
| 10.2         | ucx/1.10.1  | ml cuda/10.2 ucx/1.10.1 |
| 10.1         | ucx/1.10.1  | ml cuda/10.1 ucx/1.10.1 |
| 10.0         | ucx/1.10.1  | ml cuda/10.0 ucx/1.10.1 |
| 9.2          | ucx/1.10.1  | ml cuda/9.2 ucx/1.10.1  |
| 9.0          | N/A         | N/A                     |

- UCX 1.10.1 Compile-dependent environment

| UCX    | CUDA       | GCC   | MLNX_OFED   | GDRCOPY | knem          | CentOS |
| ------ | ---------- | ----- | ----------- | ------- | ------------- | ------ |
| 1.10.1 | 9.2 - 11.3 | 4.8.5 | 4.9-2.2.4.0 | 2.2     | 1.1.3.90mlnx1 | 7.8    |

- UCX 1.10.1 Compilation parameters
```bash
./contrib/configure-release \
--prefix="$specify_install_path" \
--with-cuda="$specify_cuda_path" \
--with-knem=/opt/knem-1.1.3.90mlnx1 \
--with-gdrcopy \
--with-verbs \
--with-dm \
--enable-mt \
--enable-numa \
--enable-devel-headers \
--enable-shared \
--disable-static \
--disable-doxygen-doc \
--without-xpmem \
--without-java
```