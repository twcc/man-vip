---
sidebar_position: 11
sidebar_label: 'srun'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-srun'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-srun-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-srun-zh'
---

# srun
   
srun用於提交任務或作為提交任務集中的單一任務。srun有多種選項來指定資源需求，包括：最小和最大節點數，CPU數，是否使用特定節點，以及特定節點的特徵（例如 記憶體大小，硬碟空間，某些必需的功能等）。由Slurm管理的叢集可執行平行運算工作，依序或平行在獨立或共享的節點上運作，運作的任務可以包含多步驟的任務，並可依照預先被分配的節點資源來工作。範例如下：
    

```  
srun date
```
![image](https://user-images.githubusercontent.com/109254397/184575433-8504c47e-73aa-4054-b6c3-05e764ce8297.png)

