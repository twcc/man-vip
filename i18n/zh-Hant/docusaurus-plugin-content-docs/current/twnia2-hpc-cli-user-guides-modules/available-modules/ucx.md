---
sidebar_position: 5
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-ucx-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-ucx-zh' 
---


# UCX (Unified Communication X)


- 套件官網
  - [UCX](https://www.openucx.org)
  - [UCX github](https://github.com/openucx/ucx)
- release note
  - [UCX 1.10.1 github](https://github.com/openucx/ucx/blob/v1.10.1/NEWS)
- 套件來源：github 下載 tar 檔後，系統管理員自行編譯
- 如果需要重編 Open MPI 可選擇已編譯好的 UCX 進行

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

- UCX 1.10.1 編譯相依的環境

| UCX    | CUDA       | GCC   | MLNX_OFED   | GDRCOPY | knem          | CentOS |
| ------ | ---------- | ----- | ----------- | ------- | ------------- | ------ |
| 1.10.1 | 9.2 - 11.3 | 4.8.5 | 4.9-2.2.4.0 | 2.2     | 1.1.3.90mlnx1 | 7.8    |

- UCX 1.10.1 編譯使用的參數
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
