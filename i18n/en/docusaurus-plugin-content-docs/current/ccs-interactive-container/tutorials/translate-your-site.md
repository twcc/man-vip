---
sidebar_position: 13
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-cli-ccs-deploy-auto-aiml-pipeline-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-cli-ccs-deploy-auto-aiml-pipeline-en' 
---

# Deploy automated AI/ML pipeline using TWCC CLI


This article will help users understand how to use the TWCC CLI and a Virtual Compute Service (VCS) to concatenate the following tasks into an automated process (pipeline), improve work efficiency, and save the cost of continuous running containers.

```
1. Create a container
2. Execute the training script
3. Delete the container
```

By deploying a pipeline to connect TWCC resources, you can hand over manual tasks to script to automate until completion. The arrangement of time and manpower will be more flexible, **and the resources will be automatically deleted after the computing completes, so the computing cost will be reduced accordingly.**

<br/>


## Deploy the environmen

The example in this article uses the TWCC Virtual Compute Service with TWCC CLI pre-installed as the local host. You can quickly deploy an automated management process for containers. Alternatively, you can install TWCC CLI on your own computer and operate it.

:::info
For TWCC-CLI installation steps and resource operation instructions, please refer to [<ins>TWCC-CLI α</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05).
:::

<br/>

### Step 1. Create a VCS instance
Following [Create VCS instance](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances), create a virtual computing instance on the portal with the following settings:

```
Image               : Ubuntu 20.04
Basic configuration : v.super
```

<br/>

### Step 2. Enable TWCC CLI

Please refer to [Enter TWCC_CLI environment and start using service](https://man.twcc.ai/@twccdocs/twcc-cli-v05#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99) to enable TWCC CLI.

<br/>

### Step 3. Install jq

jq is a tool for parsing JSON. TWCC CLI data can be converted to JSON format, in which some data can be intercepted with jq for application. The related documentation can be found in the [jq manual](https://stedolan.github.io/jq/manual/).

- Enter the following command to install jq:

```bash
sudo apt install jq
```

<br/>


## SSH Without Password

Generally, SSH connection needs to insert the key or enter the password to log in, so the automated process will be stopped and unable to continue.

Use the following method to create a container and send the SSH key of the VCS instance to the container. After that, you can directly login to the container without inserting the key or entering the password.

<br/>

### Step 1. Create a SSH key
- Enter the following command to create a SSH key
```
ssh-keygen -t rsa -n 4096
```

Press <kbd>Enter</kbd> key to skip the following three questions.

```bash
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f96f4eb15d06d0905bc8b51f66f4878e.png)

- Enter the following command to create an Interactive Container.

```bash
twccli mk ccs -gpu 1
```

<br/>

### Step 2. Copy SSH key to the Interactive Container

- Enter the following command to copy SSH key to the Interactive Container.

```bash
ssh-copy-id <USERNAME>@<CCS_IP> -p <PORT>

# <USERNAME>    supercomputer account
# <CCS_IP>      container public IP
# <PORT>        container SSH port 
```

- The first time you put the key into the container, you will need to enter the **supercomputer password**. After that, you will no longer need to enter the password when executing commands to the container inside the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4aba0afaefcbda5d00554ed19da64eac.png)

:::info
[<ins>Forgot supercomputer password?</ins>](https://man.twcc.vip/en/docs/member/user-guides/member-key-quota/hpc-account-password-otp/#reset-supercomputer-password)
:::

<br/>


### Step 3. Download the sample program: GPU Burn

In this article, we take GPU burn testing as an example. You can refer to the following steps to load the required model training program after entering the container environment, or directly [Use SFTP + Filezilla](https://www.twcc.ai/doc?page=hfs#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88) to upload the program to the container default storage space, namely Hyper File System.

- Enter the following command to enter the container environment.
```bash
ssh <USERNAME>@<CCS_IP> -p <PORT>

# <USERNAME>    supercomputer account
# <CCS_IP>      container public IP
# <PORT>        container SSH port 
```

- Download the sample program: GPU Burn

```bash
git clone https://github.com/wilicc/gpu-burn.git
```

- Compile the program into usable command. (optional)

```bash
cd gpu-burn
make >> progress.log 2>&1
```

- Exit the container and return to the VCS instance environment.
 
```bash
exit
```

- After completing the above actions, you can delete the containers used to deploy the environment. Please list all the containers and find the container ID first.
 
```bash
twccli ls ccs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fdc83baa8f0a580a72f1bb4935802ba2.png)

- Delete the container for deploying the environment.

```bash
twccli rm ccs -f -s <SITE_ID>

# <SITE_ID>     Container ID
```

We finish deploying the environment and loading the execution program! Next, you can start to make and execute scripts to automatically create containers, perform computing, and delete containers.

<br/>

## AI/ML pipeline script
The  automated AI/ML pipeline script can be divided into 5 steps:

1. Create: Create container computing resources.
2. Put Data: Upload related files to the container.
3. Execution: Execute the program.
4. Collect Data: Collect the results of progam execution.
5. Garbage Collection: Recycle used computing resources.

Please refer to the steps below to create and execute a pipeline script.

<br/>

### Step 1. Create pipeline script

- Enter the following command to edit pipeline script.

```bash
vi AI_ML.sh
```

- Enter `i` to enter the editing mode, and paste the following example script into `AI_ML.sh`. The content can be modified according to your computing program, and you can also choose to create a larger container.

```bash
TWCC_CLI_CMD=/usr/local/bin/twccli

echo "1. Creating CCS"              # Create Interactive Container
$TWCC_CLI_CMD mk ccs -gpu 1 -wait -json > ccs_res.log
CCS_ID=$(cat ccs_res.log | jq '.id')

echo "2. CCS ID:" $CCS_ID           # Interactive Container's ID

echo "3. Checking GPU"              # Viewing GPU status
ssh -t -o "StrictHostKeyChecking=no" `$TWCC_CLI_CMD ls ccs -gssh -s $CCS_ID` "/bin/bash --login -c nvidia-smi"

echo "4. RUN GPU"                   # Executing computing program
ssh -t -o "StrictHostKeyChecking=no" `$TWCC_CLI_CMD ls ccs -gssh -s $CCS_ID` "cd gpu-burn;/bin/bash --login -c './gpu_burn 150'"
# You may modified "cd gpu-burn;/bin/bash --login -c './gpu_burn 150'" according to your program.

echo "5. GC GPU"                    # Delete Interactive Container
$TWCC_CLI_CMD rm ccs -f -s $CCS_ID

echo "6. Checking CCS"              # View container status
$TWCC_CLI_CMD ls ccs
```
- Press <kbd>Esc</kbd> key and enter `:wq!` to save.

:::info
* Step **echo "4. RUN GPU"** depends on your program. You may modify this part of the script. `"cd gpu-burn;/bin/bash --login -c './gpu_burn 150'"`
:::

<br/>


### Step 2. Execute the pipeline script

- Enter the following command to execute the pipeline script.

```bash
bash AI_ML.sh
```

- Script execution screen is as follows. The container will be created automatically, the GPU burn program will be executed, and the container will be deleted automatically.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7581d2e73257db003cc6fcc2ae872d4e.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a441190039a6efb484ea9cb6bb5f9592.png)
