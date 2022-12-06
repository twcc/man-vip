---
sidebar_position: 1
title: '產品概觀'
sidebar_label: '產品概觀'
slug: '/faqs/twcc/service-overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-product-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-product-zh'
---

# TWCC FAQs | Service overview

<details>

<summary> Q1. What's the difference between Container Compute Service (CCS), Virtual Compute Service (VCS) and High-performance Computing (HPC)?</summary>

The functions and features, resource specifications, and storage space of the three services:

| <p align="left" style={{width:60+'pt'}}>Service</p> |  <p align="left" style={{width:120+'pt'}}>Container Compute Service (CCS)</p>| <p align="left" style={{width:120+'pt'}}>Virtual Compute Service (VCS)</p>| <p align="left" style={{width:120+'pt'}}>High-performance Computing (HPC)</p>|
| -------- | -------- | -------- | -------- |
| Function and Feature | ● AI model training and inference<br/>● Adjust parameters at any time, making development easier<br/>● Fixed resource options | ● Similar to general virtual machines, suitable for setting up servers<br/>● Adjustable network and security settings<br/>● Fixed resource options | ● Multi-node parallel computing<br/>● Command-line interface<br/>● Flexible selection of the number of GPUs          |
| Resource specification   | ● Up to 8 GPUs can be used<br/>● Resource ratio of GPU:CPU:RAM(GB) is 1:4:90              | ● provide vCPUs, Up to 48 cores can be used                                                                   | ● Flexible selection of the number of GPUs|
| Storage space   | ● Hyper File System (HFS)<sup> [1][2] </sup>        | ● System disk (100 GB per disk)<br/>● Additional data disks of Virtual Disk Service (VDS). You can set the size for the disks.                                                              | ● Hyper File System (HFS)<sup> [1][2] </sup>          |


- <sup>[1]</sup> Sign up an account to get 200 GB of HFS(/home and /work 100 GB each), you can purchase more space according to your needs
- <sup>[2]</sup> Starting from September 1, 2021, free use of the temporary working directory area (/work) within 1500 GB per account under National Science and Technology Council Project(Former Ministry of Science and Technology). If you need to increase your quota, please go to the <ins><a href = "https://man.twcc.ai/@twsdocs/howto-service-access-service-zh">Member Center</a></ins> to adjust.

</details>


<details>

<summary> Q2. What's the difference between Hyper File System (HFS), Virtual Disk Service (VDS) and Cloud Object Storage (COS)?</summary>

The comparison of the matching compute services, price and data transfer of these three services:

| <div style={{width:120+'px'}} align="left">Service</div> | <div style={{width:150+'px'}} align="left">Hyper File System (HFS)</div> | <div style={{width:180+'px'}} align="left">Virtual Disk Service (VDS)</div>     | <div style={{width:200+'px'}} align="left">Cloud Object Storage (COS)</div> |<div style={{width:220+'px'}} align="left">Cloud File Service (CFS)</div>|
| -------- | -------- | -------- | -------- | -------- |
| Matching compute services | ● Container Compute Service (CCS)<br/>● High-performance Computing (HPC)<br/> | ● Virtual Compute Service (VCS)<br/> | ● Transfer data between CCS and VCS using the TWCC CLI       | ● Provide TWCC services to access data for AI/ML pipelines, data analytics, etc. |
| Price ranking high to low (1->4) | 1 | 2 | 3 | Hot Storage Price:3<br/> Cold Storage Price:4<br/> |
|Data transfer | ● Upload and download the files using SFTP<br/> ● Transfer data from disks to COS using the TWCC CLI | ● Transfer data from disks to COS using the TWCC CLI <br/> ● Connect VCS using SSH. Initialize the virtual disks then upload and download the files using SFTP| ● Upload and download the files using a third-party software | ● Upload and download the files using a third-party software<br/> ● SFTP support for uploading and downloading files<br/> ● Share files to project members via permission settings for data collaboration<br/> ● Version control and search of files<br/> ● Place the file side in cold or hot storage depending on usage  |

</details>

<details>

<summary> Q3. What are the use cases of Container Compute Service (CCS) and Virtual Compute Service (VCS)?</summary>

- Container Compute Service (CCS) is well suited for large-scale, data-intensive high load operation, e.g., AI model training
- Virtual Compute Service (VCS) is well suited for low load operation, e.g., Website building and AI inference

</details>

<details>

<summary> Q4. What cybersecurity certification and mechanism does TWCC implement? </summary>

Please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fsecurity-overview-zh) about cybersecurity certification and mechanism of TWCC.

</details>