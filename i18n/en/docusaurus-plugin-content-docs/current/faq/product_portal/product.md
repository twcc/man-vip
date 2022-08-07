---
sidebar_position: 1
title: '產品概觀'
---


# TWCC FAQs | Service Overview

<details>

<summary> Q1. What's the difference between Container Compute Service (CCS), Virtual Compute Service (VCS) and High-performance Computing (HPC)?</summary>

The functions and features, resource specifications, and storage space of the three services:

| Service       | Container Compute Service (CCS)                                                       | Virtual Compute Service (VCS)                                                     | High-performance Computing (HPC) |
| -------- | -------- | -------- | -------- |
| Function and Feature | ● AI model training and inference<br/>● Adjust parameters at any time, making development easier<br/>● Fixed resource options | ● Similar to general virtual machines, suitable for setting up servers<br/>● Adjustable network and security settings<br/>● Fixed resource options | ● Multi-node parallel computing<br/>● Command-line interface<br/>● Flexible selection of the number of GPUs          |
| Resource specification   | ● Up to 8 GPUs can be used<br/>● Resource ratio of GPU:CPU:RAM(GB) is 1:4:90              | ● provide vCPUs, Up to 48 cores can be used                                                                   | ● Flexible selection of the number of GPUs|
| Storage space   | ● Sign up an account to get 200 GB of Hyper File System (HFS), you can purchase more space according to your needs        | ● System disk (100 GB per disk)<br/>● Additional data disks of Virtual Disk Service (VDS). You can set the size for the disks.                                                              | ● Sign up an account to get 200 GB of Hyper File System (HFS), you can purchase more space according to your needs          |

</details>


<details>

<summary> Q2. What's the difference between Hyper File System (HFS), Virtual Disk Service (VDS) and Cloud Object Storage (COS)?</summary>

The comparison of the matching compute services, price and data transfer of these three services:


| Service | Hyper File System (HFS) | Virtual Disk Service (VDS)     | Cloud Object Storage (COS) |
| -------- | -------- | -------- | -------- |
| Matching compute services | ● Container Compute Service (CCS)<br/>● High-performance Computing (HPC)<br/> | ● Virtual Compute Service (VCS)<br/> | ● Transfer data between CCS and VCS using the TWCC CLI       |
| Price | High | Medium | Low |
|Data transfer | ● Upload and download the files using SFTP<br/> ● Transfer data from disks to COS using the TWCC CLI | ● Transfer data from disks to COS using the TWCC CLI <br/> ● Connect VCS using SSH. Initialize the virtual disks then upload and download the files using SFTP| ● Upload and download the files using a third-party software |

</details>

<details>

<summary> Q3. What are the use cases of Container Compute Service (CCS) and Virtual Compute Service (VCS)?</summary>

- Container Compute Service (CCS) is well suited for large-scale, data-intensive high load operation, e.g., AI model training
- Virtual Compute Service (VCS) is well suited for low load operation, e.g., Website building and AI inference

</details>

<details>

<summary> Q4. What cybersecurity certification and mechanism does TWCC implement? </summary>

==**Need to update:exclamation:**==<br/>
Please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fsecurity-overview-zh) about cybersecurity certification and mechanism of TWCC.

</details>