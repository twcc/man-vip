---
sidebar_position: 10
sidebar_label: '即將棄用之套件'
slug: '/user-guides/twcc/twnia2-hpc-cli/module-to-be-deprecated'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-to-be-deprecated-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-to-be-deprecated-zh' 
---


# 即將棄用之套件


## nvidia/cuda/*
- 改變 module 命名方式，並重新撰寫 module
```bash
nvidia/cuda/9.0     # 請改使用 cuda/9.0
nvidia/cuda/9.2     # 請改使用 cuda/9.2
nvidia/cuda/10.0    # 請改使用 cuda/10.0
nvidia/cuda/10.1    # 請改使用 cuda/10.1
```

<br/>


## gnu 相關
- gnu or compiler/gnu 是 OpenHPC 提供，
  現在改統一使用 SCL Repository，命名方式也從 `gnu` -> `gcc`
```bash
compiler/gnu/7.3.0  # 請改使用 gcc7
gnu7/7.3.0          # 請改使用 gcc7
gnu8/8.3.0          # 請改使用 gcc8
```

<br/>


## OpenMPI/UCX 相關
以下 OpenMPI/UCX 都已 out-of-date 且可能不適合現有環境

```bash
nvidia/cuda/9.2 openmpi/3.1.4 ucx-cuda/1.7  # 請改用 cuda/9.2 openmpi4/4.1.1
nvidia/cuda/10.0 openmpi/3.1.2              # 請改用 cuda/10.0 openmpi4/4.1.1
nvidia/cuda/10.0 openmpi/3.1.4              # 請改用 cuda/10.0 openmpi4/4.1.1
nvidia/cuda/10.1 openmpi/3.1.6              # 請改用 cuda/10.1 openmpi4/4.1.1
```
