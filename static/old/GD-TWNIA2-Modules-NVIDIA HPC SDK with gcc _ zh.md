---
tags: Guide, TWNIA2, ZH
title: Modules-NVIDIA HPC SDK with gcc | zh
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# NVIDIA HPC SDK with gcc{7,8,9,10}

- NVIDIA HPC SDK 承襲 PGI 特色，修改 `localrc` 能和指定 gcc 版本搭配。
  由於作業系統內建 gcc 是 4.8.5，對於 `C++11` 支援較不完整，若程式需要支援到`C++11` 及其以上，建議可指向較新版本的 gcc 通常編譯問題會較小。
- 詳細 support matrix 可檢視 NVIDIA HPC SDK 表格的 release note

## GCC10 with NVHPC 

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc10 nvhpc/21.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc10_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc10 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc10 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc10 nvhpc/20.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc10_localrc_20.7
```

## GCC9 with NVHPC 

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc9 nvhpc/21.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc9_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc9 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc9 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc9 nvhpc/20.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc9_localrc_20.7
```


## GCC8 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc8 nvhpc/21.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc8_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc8 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc8 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc8 nvhpc/20.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc8_localrc_20.7
```

## GCC7 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc7 nvhpc/21.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc7_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc7 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc7 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc7 nvhpc/20.7 |

```bash
#載入以上指定 module 後，需搭配以下指令才能生效
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc7_localrc_20.7
```