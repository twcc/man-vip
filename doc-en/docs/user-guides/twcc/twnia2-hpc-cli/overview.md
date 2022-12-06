---
sidebar_position: 1
sidebar_label: 'Service overview'
slug: '/user-guides/twcc/twnia2-hpc-cli/overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/twnia2-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/twnia2-overview-zh'
---


# Service overview

## Taiwania2 - AI supercomputer

Taiwania2 is an AI supercomputer mainframe, consisting of 2,016 NVIDIA® Tesla® V100 GPU, and has the excellent performance of 9 PFLOPS (9 Peta floating-point operations per second). In 2018, Taiwania2 [ranked 20 of the TOP500 list](https://www.top500.org/system/179590/), and [ranked 10 of the Green500 list](https://www.top500.org/lists/green500/2018/11/).


![](https://twcc-wordpress-file.cos.twcc.ai/wp-content/uploads/2019/09/19130553/1-2.png)


Taiwania2 provides various services, including  [Interactive Container](https://man.twcc.ai/@twccdocs/doc-ccs-main-en), [Scheduled Container](https://man.twcc.ai/@twccdocs/HyMqnHupV?type=view),  [HPC Job](https://man.twcc.ai/@twccdocs/HyVzTSOpN?type=view) and Taiwania2 (HPC CLI) (This service).


## Taiwania2 (HPC CLI) - The compute service


Taiwania2 (HPC CLI) compute service consist of the following nodes: **compute**, **Hyper File System node** and **login and data transmission**. Taiwania2 (HPC CLI) uses **Slurm** which is well-suited for different sizes of Linux clusters, supports MPI, and is a fault-tolerant, and highly scalable cluster management and job scheduling system.
- Allocating exclusive and/or non-exclusive access to resources (compute nodes) to users for some duration of time
- Providing a framework for starting, executing, and monitoring work on the set of allocated nodes
- Arbitrating contention for resources by managing a queue of pending work

Moreover, with the **Singularity** container system, users can use the Docker image provided by Taiwania2 to perform AI computing and can quickly copy and change the container image. Singularity performs excellent massively parallel computing with low maintenance.

Benefits of Taiwania2 (HPC CLI):

- **Multi-node GPU allocation makes high-performance distributed, parallel computing a reality**
    Using Slurm, resources allocation manager, to operate the powerful HPC can make multi-node parallel computing a reality. Evenly distributing high workload improves processing efficiency.
- **High bandwidth networks connect nodes for rapid data transmission**
    Using 100 Gbs high-speed networks to connect GPU clusters produces exceptionally high throughput and extremely low latency, and it solves the bottleneck of traditional technologies. We never compromise on the transmission efficiency of huge-volume data.
- **Extreme accelerating with GPU Direct and RDMA architecture**
    The integration of NVLink and InfiniBand makes RDMA (Remote Direct Memory Access) boost multi-node significant data transmission and compute performance.