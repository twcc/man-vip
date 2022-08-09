---
sidebar_position: 11
---

# Monitor your resource－GPU Burn Testing


This tutorial demonstrates how to use GPU stress test tools to check whether the GPU is working properly when the GPU is fully loaded.

If the final result is `OK`, it means that the GPU is performing normally; `FAULTY` means that there is a problem with the GPU.

## Step 1. Sign in TWCC

- If you don’t have an account yet, please refer to [Sign up for an TWCC account](https://www.twcc.ai/doc?page=register_account)

## Step 2. Create an Interactive Container

- Please refer to [Interactive Container](https://www.twcc.ai/doc?page=container#建立開發型容器)  to create an Interactive Container.

- Please select TensorFlow for the image type, select the version that supports Python 3 for the image, and select 1 GPU for the hardware.

## Step 3. Connect to the container, download the training program

- Use Jupyter Notebook to connect to the container and open Terminal.

:::info
:book: See [Using Jupyter Notebook](https://www.twcc.ai/doc?page=container#使用-Jupyter-Notebook) 
:::

- Enter the following command to download the [NCHC_GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) training program to the container

```bash
git clone https://github.com/TW-NCHC/AI-Services.git
```

 
## Step 4. Perform GPU Burn Testing

- Enter the following command to access the **Tutorial_Two** directory.

```bash
cd AI-Services/Tutorial_Two
```

- Enter the following command to download the GPU burn test tool and start execution.

```bash
bash gpu_testing.sh
```


## Step 5. Computing capability

- **View computing capability**
The GPU used by the GPU container service is NVIDIA V100 32GB, which has powerful computing capabilities. The test running GPU-burn showed the container's computing capability to be 13198 Gflop/s.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cefd6041539673437d78918f9f444ed6.png)



- **Monitor Interactive Container**

a. Interactive Container monitoring: CPU Utilization, Memory Utilization

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ac448244502db32c89da844e30e525bf.png)


b. In the Terminal of Jupyter Notebook in the container, you can run the following command to monitor the GPU temperature and power.

```bash
nvidia-smi
```
`GPU quantity` Displayed in increments of number 0, the example in the figure below is 1 GPU
`GPU temperature` Displayed in Celsius, the example in the figure below is 31 degrees C
`GPU power usage` Displayed in wattage, the example in the figure below is 43W


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_412e74892656a239328ed35fea78c191.png)