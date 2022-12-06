---
sidebar_position: 10
sidebar_label: 'Packages to be deprecated'
slug: '/user-guides/twcc/twnia2-hpc-cli/module-to-be-deprecated'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-to-be-deprecated-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-to-be-deprecated-zh' 
---


# Packages to be deprecated


## nvidia/cuda/*
- rename module and rewrite module\
```bash
nvidia/cuda/9.0     # Please use cuda/9.0
nvidia/cuda/9.2     # Please use cuda/9.2
nvidia/cuda/10.0    # Please use cuda/10.0
nvidia/cuda/10.1    # Please use cuda/10.1
```

<br/>


## gnu related
- gnu or compiler/gnu is provided by OpenHPC,
   Now the SCL Repository is used uniformly, and the naming method is also changed from `gnu` -> `gcc`
```bash
compiler/gnu/7.3.0  # Please use gcc7
gnu7/7.3.0          # Please use gcc7
gnu8/8.3.0          # Please use gcc8
```

<br/>


## OpenMPI/UCX related
The following OpenMPI/UCX are out-of-date and may not be suitable for the existing environment

```bash
nvidia/cuda/9.2 openmpi/3.1.4 ucx-cuda/1.7  # Please use cuda/9.2 openmpi4/4.1.1
nvidia/cuda/10.0 openmpi/3.1.2      # Please use cuda/10.0 openmpi4/4.1.1
nvidia/cuda/10.0 openmpi/3.1.4      # Please use cuda/10.0 openmpi4/4.1.1
nvidia/cuda/10.1 openmpi/3.1.6      # Please use cuda/10.1 openmpi4/4.1.1
```