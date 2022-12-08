---
sidebar_position: 2
title: 'Container Compute Service (CCS)'
sidebar_label: 'Container Compute Service'
slug: '/faqs/twcc/ccs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-ccs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-ccs-zh'
---

# TWCC FAQs | Container Compute Service (CCS)


## Before you begin

<details>

<summary> Q1. How to use a supercomputer?</summary>

TWCC has substantial HPC resources, and you can make use of through the following services:

1. Interactive Container: you can rapidly establish and deploy containers, refer to [<ins>this document</ins>](https://www.twcc.ai/doc?page=container) for more information.
2. High-performance Computing: you can use supercomputing resources through a command-line interface to perform high-performance parallel computing. For more information about connecting to HPC login nodes, refer to [<ins>this document</ins>](https://www.twcc.ai/doc?page=hpc_cli).

</details>

<details>

<summary> Q2. How to use containers? </summary>

You can use containers to train AI models and generate inference engines. The steps are as follows:

**Step 1.** Upload your model training code and data to HFS under `/home/account` or `/work/account` directory. For more details, refer to [<ins>Hyper File System</ins>](https://www.twcc.ai/doc?page=hfs).<br/>
**Step 2.** Create a container, connect to it ,and run the model training. For more information, refer to [<ins>Interactive Container</ins>](https://www.twcc.ai/doc?page=container).<br/>
**Step 3.** You can download required data after the training is completed. For more details, refer to [<ins>Hyper File System</ins>](https://www.twcc.ai/doc?page=hfs).<br/>
**Step 4.** You can generate an inference engine on a [<ins>CCS container</ins>](https://www.twcc.ai/doc?page=howto_ctn2) or on an [<ins>VCS Instance</ins>](https://www.twcc.ai/doc?page=vm).

</details>

<details>

<summary> Q3. How to choose which service to use, CCS or HPC CLI?</summary>

Both services can run on GPU containerized environments:
- If your computing process requires less than 8 GPUs, we recommend you choose CCS.
- If you want to deploy a multi-node, distributed high-performance parallel computing environment with more than 8 GPUs, we recommend you choose Taiwania 2 (HPC CLI).

</details>

<div style={{height:10+'px'}}></div>


## Connect to a container

<details>

<summary> Q1. How to connect to the container?</summary>

To connect to your container using SSH or Jupyter Notebook, refer to [<ins>Connect container</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-connect-zh) for more information.

</details>

<details>

<summary> Q2. What open source clients are available for connecting to TWCC resources, like CCS, VCS and HPC?</summary>

Third-party open source software such as MobaXterm, PuTTY and VSCode,etc.

</details>

<details>

<summary> Q3. How to fix SSH `Permission denied` errors while connecting to a container?</summary>

You might be entering the wrong password. Please re-enter or reset supercomputer password in Member Center, refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-hostname-pwd-otp-zh) for more information.

</details>

<details>

<summary> Q4. What should I do if I cannot launch Jupyter Notebook?</summary>

Please refer to the following 2 methods:

1. Perform the following operations to restore the container to its initial state:
   - **Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
   - **Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
   - **Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
   - **Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.
2. Please check whether your organization’s firewall settings have blocked the port used by the container. The container port range is 50000 ~ 60000.

</details>

<div style={{height:10+'px'}}></div>


## Manage containers

<details>

<summary> Q1. How to stop a container?</summary>

Currently CCS does not support container suspension. You can instead choose any of the following solutions to reduce costs:
1. You can make a duplicate of the container to keep the working environment, delete the container, and create a new container with the duplicate when you need to use the container.
2. Write scripts to automate computing and deletion tasks, refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-cli-ccs-automate-compute-delete-with-twccli-zh) for more information.

</details>


<details>

<summary> Q2. How do I restore the container to its initial state?</summary>

You can perform the following operations to restore the container to its initial state:

**Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
**Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
**Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
**Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.

</details>


<details>

<summary> Q3. Are the environments in different containers different?</summary>

All containers you create are mounted with the same storage space, [<ins>Hyoer File System (HFS) </ins>](https://www.twcc.ai/doc?page=hfs).
The life cycle of the HFS storage space follows the user's supercomputer account. Therefore, all containers created by one user are mounted with the same HFS storage space.

</details>

<div style={{height:10+'px'}}></div>


## Resource allocation and monitoring

<details>

<summary> Q1. How to use more than 8 GPUs?</summary>

Please use Taiwania 2 (HPC CLI) instead. For the usage, refer to the Horovod and Singularity manuals on the Internet or refer to the tutorial: [<ins>HowTo: High-performance Computing across nodes in containers-AI Benchmark</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-run-parallel-job-container-zh) for more information.

</details>


<details>

<summary> Q2. How to know the number of GPUs allocated to the container?</summary>

You can query the numbers of GPU with the following 2 methods:
1. Execute the following commands at the terminal:`$ nvidia-smi` 
2. On the TWCC portal, go to the **Interactive Container Management** page and then the **Interactive Container Details page**. Then you can check the number of GPUs in the **Basic Configuration** field.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_82996a6bb06bbdaf57fba5254999b60d.png)

</details>

<details>

<summary> Q3. How to know the GPU usage when the program is running? </summary>

Please refer to the following steps:
**Step 1.** Execute the following commands at the terminal: `$ nvidia-smi`  <br/>
**Step 2.** Check the column of `GPU-Util`. If it is not 0%, it means in use, and 0% means not in use (as shown in the figure below).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dbfac86546357537571cb99c4cceb37d.png)


</details>

<details>

<summary> Q4. Why can't I use the GPU in the container?</summary>

The following problems may cause the container's GPU to be unavailable:

1. The number of GPUs used by your program does not match the number created. Please make sure that the number of GPUs in the two places match.
2. The package compatibility issue. Please fix it with the following steps:
   - **Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
   - **Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
   - **Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
   - **Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.

</details>

<details>

<summary> Q5. Why is there shared memory in the basic settings when creating a container? </summary>

Shared memory is the memory space used when using certain frameworks. For example, PyTorch, refer to [<ins>PyTorch document</ins>](https://pytorch.org/docs/stable/multiprocessing.html) for more information.

</details>

<details>

<summary> Q6. How to know the memory usage when the program is running?</summary>

You can check the memory usage on the portal or in the container:
1. On the **Monitoring Interactive Container** page of the portal, you can view the memory usage graph, refer to [<ins>Monitoring Interactive Container</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-monitor-zh) document for more information.
2. Execute the command `top` or `free` in the container to check the memory usage.

</details>

<details>

<summary> 

Q7. What is the difference between "Memory Utilization" and "GPU Memory Utilization" in the **Monitoring Interactive Container** page?

</summary>

- **Memory Utilization**: The memory usage of the container allocated to you by the system, and its capacity is the specification you selected in the basic settings when you created the container.
- **GPU Memory Utilization**：The deployed container's GPU shows the memory usage on the core. The GPU of TWCC is NVIDIA V100. Refer to [<ins>NVIDIA Official website description</ins>](https://www.nvidia.com/content/dam/en-zz/zh_tw/Solutions/design-visualization/grid-vpc-vapps/volta-v100-datasheet-update-a4-636418-r4-tw.pdf) for more detailed information regarding GPU memory capacity.

</details>

<div style={{height:10+'px'}}></div>


## Packages

<details>

<summary> Q1. How many computing environments does the container currently support? </summary>

In TWCC's container service, 18 environments are provided for users to choose from, including:

* TensorFlow
* PyTorch
* CUDA
* MATLAB (BYOL)
* Caffe
* CNTK
* MXNet
* Caffe2
* TensorRT
* Triton Inference Server
* Theano
* Torch
* DIGITS
* NeMo
* RAPIDS
* Clara Train SDK
* Merlin Training
* Merlin Inference

</details>

<details>

<summary> Q2. How to check what packages and versions are in the container image?</summary>

You can use either of the two methods to refer to the packages and versions in the container image:
1. In the upper right corner on [<ins>NGC Website</ins>](https://docs.nvidia.com/deeplearning/frameworks/index.html), enter **TensorFlow release notes**, **PyTorch release notes**, etc., to search a framework's release note. Then, on the release notes page, select an image version to learn more about the packages in the image.
2. When you are creating a Interactive Container and choosing image file type, please move the mouse to <i class="fa fa-info-circle" aria-hidden="true"></i>, the prompt will display the NGC URL, and you may find related information in it.

</details>

<details>

<summary> Q3. I deleted the container and then re-created a new one. Why do the packages in the old container exist in the new one?</summary>

To provide computing convenience, TWCC mounts the Hyper File System (/home and /work directory, bound with your personal account) to all the containers you create by default, so that your data or packages can be used across containers. Therefore, deleting the container will not affect the packages and data installed in /home and /work directory.

</details>

<details>

<summary> Q4. What should I do if an error message `Permission denied` occurs when installing the package?</summary>

Take the following figure as an example. If the file pointed by `Permission denied` is not located under /home or /work directory, please refer to the Q3 in [<ins>Other questions</ins>](#Other-questions) and re-install the package after switching to the container root user.

![](https://i.imgur.com/oKeqxdV.png)

</details>

<details>

<summary> Q5. How to install cuDNN in the container?</summary>

CuDNN has been installed in the container environment. The detailed version information can be checked with the following three methods:
1. In the upper right corner on [<ins>NGC Website</ins>](https://docs.nvidia.com/deeplearning/frameworks/index.html), enter **TensorFlow release notes**, **PyTorch release notes**, etc., to search a framework's release note. Then, on the release notes page, select an image version to learn more about the packages in the image.
2. When you are creating a Interactive Container and choosing image file type, please move the mouse to <i class="fa fa-info-circle" aria-hidden="true"></i>, the prompt will display the NGC URL, and you may find related information in it.
3. Execute the `set | grep CUDNN` command after connecting to the container.

</details>

<details>

<summary> Q6. What are the built-in package management tools in the container? </summary>

You can use the built-in tools to manage your packages: `apt`, `apt-get`, and `pip`.

</details>

<details>

<summary> 

Q7. What should I do if `Unable to change to /home/host account-chdir (13: Permission denied)` occurs when installing the package?

</summary>

To ensure data security, the root user of the container cannot access your /home and /work directories. Please install with your supercomputer account and do not switch to the root user.

</details>

<details> 

<summary> Q8. How to install docker in the container?</summary>

TWCC containers do not provide OS-level permissions and therefore cannot be installed and used with docker services.

</details>

<div style={{height:10+'px'}}></div>



## Storage and data transfer

<details>

<summary> Q1. How to upload or download files to or from the container?</summary>

For uploading files to /home or /work of the container, or downloading files to your local machine, refer to [<ins>this document</ins>](https://www.twcc.ai/doc?page=hfs#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88) for more information.

</details>

<details>

<summary> Q2. Why can't I access my /home and /work directory when I switch to root user? </summary>

To ensure data security, the container's root user cannot access your directories, and only the user's account has permission to access them.

</details>

<details>

<summary> Q3. How to share the data of /home and /work directory to other users of the same project?</summary>

You can share container's data to other users using TWCC Cloud Object Storage (COS) with TWCC CLI. Refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-en/%2F%40twccdocs%2Fcos-overview-en) for more information.

</details>

<details>

<summary> Q4. How to set up automation to transfer the data in the container to the local machine?</summary>

You can use container's public ports to transfer data between your local machine. The available ports for the container are: 22, 80, and 443.


</details>

<details>

<summary> Q5. Why can't I access /home and /work directory in the Matlab container?</summary>

Since the current Matlab image has not been integrated with the Hyper File System (HFS), please execute the following commands in the terminal to access /home and /work directory: 

```
sudo su -
su [supercomputer account]
/opt/matlab/R2019b/bin/matlab
```

</details>

<details>

<summary> Q6. Can the shared memory be used as hard disk space?</summary>

If you select a container type with shared memory to create your container, you can use `/dev/shm` the shared memory space, as a hard disk to store your data.

<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> <b>Important:</b>

* Since storing data in the shared memory will occupy the space, please consider the storage space required by your program before storing.
* The data stored here will disappear when the container is deleted. Move the data that need to be saved to `/home/supercomputer account` or `/work/supercomputer account` directories before deleting the container.

</details>

<details>

<summary> Q7. Why can't I add new files with Jupyter Notebook?</summary>

You cannot add new files because the Hyper File System's storage space is almost full. Please refer to [<ins>Hyper File System FAQ Q6</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-hfs-en) to check and free up your storage space, or purchase more storage space.
For more information about the storage pricing and purchasing, refer to the two paragraphs of "Check used capacity" and "Storage space management policy" at [<ins>Hyper File System</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-en/%2F%40twccdocs%2Fhfs-overview-en).

</details>

<details>

<summary> Q8. Why can't I save files with Jupyter Notebook?</summary>

You cannot save files because the Hyper File System's storage space is almost full. Please refer to [<ins>Hyper File System FAQ Q6</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-hfs-en) to check and free up your storage space, or purchase more storage space.
For more information about the storage pricing and purchasing, refer to the two paragraphs of "Check used capacity" and "Storage space management policy" at [<ins>Hyper File System</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-en/%2F%40twccdocs%2Fhfs-overview-en).


</details>

<details>

<summary> Q9. How to upload files to Jupyter Notebook?</summary>

The storage space you access from Jupyter Notebook is the Hyper File System (HFS). For uploading your file, refer to [<ins>this document</ins>](https://www.twcc.ai/doc?page=hfs#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88) for more information.

</details>

<details>

<summary> Q10. How to transfer files between the container and Cloud Object Storage (COS)?</summary>

1. Please install [<ins> TWCC CLI</ins>](https://man.twcc.ai/@twccdocs/doc-cli-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-cli-install-linux-zh) in your container.
2. For using TWCC CLI to transfer files between the container and Cloud Object Storage (COS), refer to [<ins>this file</ins>](https://man.twcc.ai/@twccdocs/doc-cli-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-cli-cos-zh) for more information.

</details>

<details>

<summary> Q11. How to mount Cloud Object Storage to containers？ </summary>

The storage system used by TWCC containers is Hyper File System (HFS), which currently does not support hooking up Cloud Object Storage (COS) directly to the containers.

If you only need to transfer files with Cloud Object Storage (COS), please refer to Q10.

</details>

<div style={{height:10+'px'}}></div>


## Networking & Security

<details>

<summary> Q1. What is the range of the container's port?</summary>

The port numbers of containers range from 50000 to 60000.

</details>

<details>

<summary> Q2. Can I use VPN to link containers？</summary>

Currently TWCC containers do not support the deployment of VPN services (e.g. OpenVPN). The default open outbound ports for VPN services are different from those supported by TWCC containers, which use Port-Forwarding and outbound ports are randomly assigned and cannot be assigned corresponding port numbers.

</details>

<div style={{height:10+'px'}}></div>


## Container images

<details>

<summary> Q1. How to download the duplicate of a container?</summary>

Currently the system does not support this feature.

</details>

<div style={{height:10+'px'}}></div>



## Performance

<details>

<summary> Q1. Why is I/O slow when running the program?</summary>

It might be a dataset problem or the node where the container is located is busy:
1. If your dataset consists of many small files and occupies a lot of space, we recommend that you gather small files into large files to reduce I/O pressure.
2. Make a duplicate of the container, and then use the duplicate to create a new container. If we have sufficient capacity, the container can be created on a less busy node.

</details>

<details>

<summary> Q2. Why is the performance not as expected when the program is running?</summary>

Follow the steps below to troubleshoot package compatibility issues: <br/>
**Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
**Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
**Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
**Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.

</details>

<details>

<summary> Q3. Why is the performance slower than the local machine when running a program?</summary>

For ways to improve performance, please refer to the following:

1. Troubleshoot package compatibility issues
   - **Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
   - **Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
   - **Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
   - **Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.
2. If your dataset consists of many small files and occupies a lot of space, we recommend that you gather small files into large files to reduce I/O pressure.
3. Make a duplicate of the container, and then use the duplicate to create a new container. If there is still room for the overall system load, the container can be arranged on a less busy node.

</details>

<div style={{height:10+'px'}}></div>


## Execution error

<details>

<summary> 

Q1. Shows `insufficient shared memory` when the program is running? 

</summary>

1. If it is a PyTorch container environment, please set the num workers of Dataloader to 0.
2. Or create a new container and choose a specification with shared memory.

</details>

<details>

<summary>

Q2. Shows `bus error` when the program is running? 
 
</summary>

Follow the steps below to troubleshoot package compatibility issues: <br/>
**Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
**Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
**Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
**Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.

</details>

<details>

<summary>

Q3. Why couldn't I load some libraries during program execution (`Could not load dynamic library...`)?
 
</summary>

This might because the library version called in the program does not match the version in the container. Please execute the following command to get the library version in the environment, and then modify the library version your program calls: `sudo find / -name [library name]`

</details>

<details>

<summary> 

Q4. Why does `sudo apt update` occurs `Unable to change to /home/wistron1/ -chdir (13: Permission denied)`?

</summary>

Please switch to root user and execute `apt update`.

</details>

<details>

<summary> 

Q5. Why is `kernel busy` displayed in the upper right corner when using Jupyter Notebook?

</summary>

Please follow the procedure below to resolve package compatibility issues:<br/>
**Step 1.** Clear or move the packages in the `/home/supercomputer account/.local/` directory. Refer to [<ins>suggested troubleshooting methods for abnormal program execution</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) for more information.<br/>
**Step 2.** Enter the `/home/supercomputer account/.cache/` directory and clear the temporary files generated during the computing process.<br/>
**Step 3.** If you have installed Anaconda or Miniconda, please also remove or rename it.<br/>
**Step 4.** Re-create a new container. When selecting the image type, move the cursor to <i class="fa fa-info-circle" aria-hidden="true"></i>, and go to the NGC website to check image information. Select a suitable image to create a new container and launch the Jupyter Notebook.
</details>

<div style={{height:10+'px'}}></div>


## Other questions

<details>

<summary> Q1. How to transfer from the container to Taiwania 2 (HPC CLI) for training</summary>

You can refer to the instructions for use of Conda and Singularity on the Internet, or refer to the following tutorial:
- [HowTo: Create TWNIA2 containers](https://man.twcc.ai/@twccdocs/doc-twnia2-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-create-sglrt-container-en)
- [HowTo: Use Conda to manage the packages and execute jobs](https://man.twcc.ai/@twccdocs/doc-twnia2-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-conda-manage-packages-submit-job-en)

</details>

<details>

<summary> Q2. Can I create a container for others to use?</summary>

When creating a container for others to use, you need to consider the following points:

* Your supercomputer password must be provided to others to connect to the container.
* /home and /work directory are your personal HFS storage space. The data and files might lost or damaged when used by others. Even if you open a new container, these changes cannot be restored.
* There will be data security risks when sharing computing resources. Please consider carefully.

Therefore, in addition to creating containers for others, you can add others to the project on the [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fhowto-service-access-service-zh) so that the user can create containers on his own.

</details>


<details>

<summary> Q3. How to switch to the root user of the container? </summary>

Execute the following command to switch to root user:

```
sudo su
or
sudo -i
```    

</details>

<details>

<summary> Q4. Do you charge for the container once it is created, or do you charge when it is computing?</summary>

Once a container is created, it occupies compute resources. Therefore, the container will continue to be billed before you delete it.

</details>