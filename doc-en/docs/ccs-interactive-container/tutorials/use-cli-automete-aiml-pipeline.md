---
sidebar_position: 12
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-cli-ccs-automate-compute-delete-with-twccli-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-cli-ccs-automate-compute-delete-with-twccli-en' 
---

# Use TWCC CLI to automatically complete computing and delete containers


This article will help users understand how to use  [TWCC CLI](https://man.twcc.ai/@twccdocs/twcc-cli-v05) **to automate the following tasks:**

```
1. Execute computing program
2. Delete container
```

After creating [Interactive Container](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/create-an-interactive-container) on portal or using TWCC CLI, you can assign manual tasks to script to complete computing automatically, delete containers, and reduce the cost of keeping the containers running. Since the computing program and data will be kept in the default storage space of the container, [Hyper File System (HFS)](https://man.twcc.vip/en/docs/hfs/intro), there is no need to worry about losing data when the container is deleted.

<br/>


### Step 1. Upload the computing program to the container

Refer to [<ins>Using SFTP + Filezilla to transfer file</ins>](https://man.twcc.ai/@twccdocs/rypYCr_TN?type=view#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88) to upload the training script to the container's default storage space, namely the Hyper File System (HFS) storage space.

<br/>


### Step 2. Install TWCC CLI

- Please refer to [<ins>Install TWCC CLI</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#1-%E9%83%A8%E7%BD%B2%E6%93%8D%E4%BD%9C%E7%92%B0%E5%A2%83) to install TWCC CLI in the Interactive Container.

:::info
- The container versions <ins>after</ins> 2021 already have TWCC CLI pre-installed for users, so you can log in directly after the creation.
- The container versions <ins>before</ins> 2021 require users to install TWCC CLI themselves.
:::

- Please [sign in](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh) after the installation completed.

<br/>


### Step 3. View Interactive Container's ID

- Enter the following command to view container's ID that you are currently using:
```
twccli ls ccs
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9dbab117e8ee86d346497b2296382ed2.png)

<br/>


### Step 4. Writing automation script

- Enter the following command to edit the automation script:
```
vi auto.sh
```
- Enter `i` to enter the editing mode, copy and paste the following example script into `auto.sh`. The content can be modified according to your computing program.

```bash
TWCC_CLI_CMD=/home/<USERNAME>/.local/bin/twccli
# <USERNAME>：Supercomputer account

echo "1. Execute computing"
# Enter the executable file of the computing program

echo "2. Delete Interactive Container"
$TWCC_CLI_CMD rm ccs -f -s <CCS_ID>
# <CCS_ID>： the container ID in step 3
```

- Press <kbd>Esc</kbd> key and enter `:wq!` to save.

<br/>


### Step 5. Execute automated script

Enter the following command to have the script running the computing program and delete the container!

```
bash auto.sh
```

<br/>


### Step 6. Confirm that the container has been automatically deleted

After the program has finished running, you can confirm that the container has been deleted from the list on the **Development Container Management Page**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dda7ef2697732ab45fddee8c30fbf058.png)