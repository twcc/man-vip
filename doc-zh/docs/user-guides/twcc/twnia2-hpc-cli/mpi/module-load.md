---
sidebar_position: 1
sidebar_label: 'module 選取'
slug: '/user-guides/twcc/twnia2-hpc-cli/load-modules'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-available-module-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-available-module-zh' 
---

# module 選取


清除所有module的載入設定，並查看現有可用module資源。
(modulefiles 配置可能隨時更動，請下module avail查看最新配置)

```bash
# Clean Module Setting
module purge
# Check Module Available Status
module avail
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8efbdabc567a06e157ebd41dbc5dcaf4.png)


載入所選取的Module，這裡選用GNU7 與 MVAPICH Module。

```bash
module purge
module load compiler/gnu/7.3.0 mvapich2/2.2
```

檢查載入module狀態

```bash
module list
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d44281f4f96fbf047bff7fc9fd5176c5.png)