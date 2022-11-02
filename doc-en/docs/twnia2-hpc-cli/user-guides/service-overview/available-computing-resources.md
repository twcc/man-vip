---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-compute-capability-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-compute-capability-en'
---

# Available computing resources

As mentioned in the Service overview, Taiwania2 (HPC CLI) shares **252 computing nodes** and **2,016 NVIDIA® Tesla® V100 GPUs** with some TWCC computing services. Taiwania 2 has excellent performance of **9 PFLOPS** (9 Peta floating-point operations per second), supports up to 300 GB/s transfer rate between GPUs with NVLINK, also provides a high-bandwidth, low-latency parallel computing network.

The specifications of a single node are as follows:

| Item | Description | Quantity |
| -------- | -------- | -------- |
| CPU    | Intel Xeon Gold 6154 18 Cores 3.0GHz   |  2    |
| Memory    | 32GB DDR4-2666 RDIMM   |  24     |
| System disk    | 2.5” 240GB SATAIII   |  2 (RAID 1)     |
| HDD (Hard disk drive)    | 4TB NVMe   |  1     |
| GPU    | [NVIDIA® Tesla® V100 SXM2](https://www.nvidia.com/en-us/data-center/v100/)   |  8     |
| Network card    | Mellanox InfiniBand EDR 100Gb  |  4     |
