---
sidebar_position: 4
sidebar_label: 'NVIDIA HPC SDK with gcc{7,8,9,10}'
slug: '/user-guides/twcc/twnia2-hpc-cli/nvidia-hpc-sdk-gcc'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-nvidia-hpc-sdk-w-gcc-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-nvidia-hpc-sdk-w-gcc-zh' 
---


# NVIDIA HPC SDK with gcc{7,8,9,10}

- NVIDIA HPC SDK inherits the features of PGI that modifying `localrc` can match the specific gcc version.
The built-in gcc of the operating system is 4.8.5, the supports for `C++11` is relatively incomplete.  If your program needs `C++11` or newer versions, it is recommended to use a newer version of gcc to reduce compilation problems.
- The detailed support matrix can be viewed in the release note of the NVIDIA HPC SDK.

<br/>


## GCC10 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc10 nvhpc/21.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc10_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc10 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc10 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc10 nvhpc/20.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc10_localrc_20.7
```

<br/>


## GCC9 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc9 nvhpc/21.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc9_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc9 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc9 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc9 nvhpc/20.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc9_localrc_20.7
```

<br/>


## GCC8 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc8 nvhpc/21.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc8_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc8 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc8 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc8 nvhpc/20.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc8_localrc_20.7
```

<br/>


## GCC7 with NVHPC

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.7  | ml gcc7 nvhpc/21.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc7_localrc_21.7
```

| module name | usage              |
| ----------- | ------------------ |
| nvhpc/21.2  | ml gcc7 nvhpc/21.2 |
| nvhpc/20.9  | ml gcc7 nvhpc/20.9 |
| nvhpc/20.7  | ml gcc7 nvhpc/20.7 |

```bash
# It's available only when you load the specific module above and run the command below.
export NVLOCALRC=/work/HPC_SYS/nvidia/hpc_sdk/localrc_files/gcc7_localrc_20.7
```