---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-login-and-data-transfer-node-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-login-and-data-transfer-node-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Login node and data transfer node

| Category | Domain Name | Description | Quantity |
| -------- | -------- | -------- | -------- |
| Login node     | ln01.twcc.ai     | The following tasks can be performed<sup>*</sup>:<br/>1. Submitting<sup>**</sup> and managing jobs<br/>2. Accessing files on HFS<br/>3. Compiling HPC related applications<br/>4. Running the debugger to improve code quality    |1   |
| Data transfer node     | xdata1.twcc.ai     | The following tasks can be performed:<br/>1. Transferring data to/from HFS<br/>2. Using SFTP to transfer data<sup>***</sup>  |1    |


- The specifications between login node and data transfer node are similar. The two types of nodes have a compatible environment and both provide code developing and testing services.

:::caution
<sup>*</sup>Please do not run computing jobs on the login node, or the overloaded system will crash and have an impact on users logging in.
:::

:::info
- <sup>**</sup>Submitting jobs using the `srun` and `salloc` commands while logged in to a node may cause computation interruptions or data loss, so it is recommended to use the `sbatch` command to run large computation jobs.
- <sup>***</sup>TWCC also provides users transferring data with the `rsync` command, which offers a good experience when transferring large amounts of files. However, TWCC does not support recording the transfer log using `rsync`, so you cannot track problems when you have security concerns. If you agree to bear the risk and authorize TWCC to enable `rsync` function, please contact <ins><a href="isupport@twcc.ai"></a>isupport@twcc.ai</ins>.
:::


