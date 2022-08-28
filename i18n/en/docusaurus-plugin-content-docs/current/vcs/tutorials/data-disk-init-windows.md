---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-init-vol-windows-en' 
---

# Initialize Windows disks

To increase the storage space for the existing VCS instances, create and attach data disks of Virtual Disk Service to the target VCS instance. Then the data disks whether in Windows or Linux should be initialized and detected before you can access.

The following tutorial explains how to initialize your new data disk.

<br/>


### Step 1. Check if the disk is attached to the VCS instance

After [Attaching the data disk to your VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94), make sure the TWCC Portal shows it is properly attached.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0258ccfba8e0f5a832f0c58127e92b8d.png)

<br/>


### Step 2. Open Computer Management

Please [connect to your VCS instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-en), search **Computer Management** in <i class="fa fa-search" aria-hidden="true"></i> and open the application.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fb1297151397e15ba6fd1267256288e5.png)

<br/>


### Step 3. View the disk

Click **Disk Management** on the left menu, you can find the disk data that you have attached to the instance which is in the `Not Initialized` and the `Unallocated` status.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c833d41694f2c6e23d11cc5fe1a7725.png)

<br/>


### Step 4. Initialize the disk

- Windows will automatically open the initialization window. Select the data disk to be initialized > Select partition style (you can directly use the default `MBR (Master Boot Record)`) > click **OK**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b6a6b3062665e69a6c69853f4666e860.png)

- After initialization, the status of the data disk will change from `Not Initialized` to `Online`.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d513d7b0552ecbdca02e2428d9f283d.png)

<br/>


### Step 5. New Simple Volume 

- Right-click on the disk and click **New Simple Volume** to open the **New Simple Volume Wizard**.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea07ee0ed41d144fd044142934942bb0.png)


- Click **Next >**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d4f98dab7cf1292f394b48743f281f6.png)

<br/>


### Step 6. Specify Volume Size

- By default, the space of the entire disk is used. Just click **Next >** to create the entire disk as 1 partition.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8bbd15cb6e11f94086b633b0e0622776.png)


:::info
You may divide the disk into multiple partitions according to your needs.
:::

<br/>


### Step 7. Assign Drive Letter or Path

-  Assign Drive Letter or Path, click **Next >**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f7c41f45ab408524a122c7027c718789.png)

<br/>


### Step 8. Format Partition

- Enter the Volume Label and the rest using default setting. Click **Next >** to start formatting.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f8425186c8f26186dc2af085ecd020d5.png)


- Finally click **Finish**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a382217409d3fb2d575fe67ae712da3e.png)

- After the formatting is complete, the status of the data disk will change from `Unallocated` to `Healthy (Primary Partition)`.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6713873c9ad4af737f3bd54570ffc9fc.png)



- You may view the new data disk in **Devices and drives**, and you can start saving data to the new data disk.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f35b04db041835d8d8ce2bd9f9d8d9a1.png)