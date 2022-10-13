---
sidebar_position: 11
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-gpu-burn-testing-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-gpu-burn-testing-en' 
---

# Monitor your resource－GPU Burn Testing


This tutorial demonstrates how to use GPU stress test tools to check whether the GPU is working properly when the GPU is fully loaded.

The GPU is working normally if the final result is `OK`, while `FAULTY` means that there is a problem with the GPU.

<br/>

## Step 1. Sign in to TWCC

- If you don’t have an account yet, please refer to [Sign up for an TWCC account](https://man.twcc.vip/en/docs/member/user-guides/member-key-quota/sign-up-for-twcc/).

<br/>

## Step 2. Create an Interactive Container

- Please refer to [Interactive Container](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/create-an-interactive-container) to create an Interactive Container.
- Please select TensorFlow for the image type, select a image version that supports Python 3, and select 1 GPU for the hardware.

<br/>

## Step 3. Connect to the container, download the training program

- Use Jupyter Notebook to connect to the container and open Terminal.

:::info
:book: See [Using Jupyter Notebook](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/connect-to-your-container/#jupyter-notebook)
:::

- Enter the following command to download the [NCHC_GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) training program to the container.

```bash
git clone https://github.com/TW-NCHC/AI-Services.git
```

<br/>

 
## Step 4. Perform GPU Burn Testing

- Enter the following command to access the **Tutorial_Two** directory.

```bash
cd AI-Services/Tutorial_Two
```

- Enter the following command to download GPU_Burn program and start execution.

```bash
bash gpu_testing.sh
```

<br/>


## Step 5. Computing capability

- **View computing capability**<br/>
The GPU used by the GPU container service is NVIDIA V100 32GB, which has powerful computing capabilities. The test running GPU-burn showed that the container has a computing capability of 13198 Gflop/s.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cefd6041539673437d78918f9f444ed6.png)



- **Monitor Interactive Container**

a. Interactive Container monitoring: Utilization of CPU, GPU and memory

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ac448244502db32c89da844e30e525bf.png)


b. In the Terminal of Jupyter Notebook in the container, you can run the following command to monitor the GPU temperature and power.

```bash
nvidia-smi
```
`GPU quantity` Displayed in increments of number 0, the example in the figure below is 1 GPU<br/>
`GPU temperature` Displayed in Celsius, the example in the figure below is 31 degrees C<br/>
`GPU power usage` Displayed in wattage, the example in the figure below is 43W<br/>


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_412e74892656a239328ed35fea78c191.png)