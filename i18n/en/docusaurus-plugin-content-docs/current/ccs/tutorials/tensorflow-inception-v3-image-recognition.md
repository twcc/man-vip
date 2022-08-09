---
sidebar_position: 5
---

# Keep your processes running continuously


- When we operate containers using SSH, the processing might be interrupted due to the Internet disconnection. We provide the following 3 solutions to ensure that the computing work can continuously run in the background.


## Method 1. Using Jupyter Notebook

### Step 1. Click into the created Interactive Container in TWCC

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44743f61fe00be39e65f5926df2992f8.png)




### Step 2. Connect to the the container using Jupyter Notebook 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4759b121a387fdfd53d289929e9fa290.png)



### Step 3. Open the terminal to operate the container
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a027717a19eb85582f5f893ec2ed999c.png)



### Step 4. Enter and run the command
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_92e9382801d6dd746faeffa8043ddb86.png)


:::info
:bulb: The URL bar will display the terminal number: `terminals/1`, which will be used for the following steps.
:::
### Step 5. Check the status of the running process
- If you close the Terminal, the process will run continuously in the background.
- To check the running status of the process, click **Running** in Jupyter Notebook, and click the terminal number you want to check below.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4acc84b64bb17c41533b4718a74bcc2.png)


- Then you are able to enter Terminal again to check the status of the running process
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_62ab66f669dfb35b75aaec84c0ee1993.png)




## Method 2. Using Screen 

### Step 1. Install Screen

- Connect to the container using SSH, and then enter the command to install Screen:

```bash=
sudo apt-get install screen
```

:::info
==**Need to update the link:exclamation:**==
:book: Please refer to [<ins>Connect to the container using SSH</ins>](https://www.twcc.ai/doc?page=container#使用-SSH-登入連線).
:::
:::info
:warning: Warning: If the installation process shows `E: Unable to locate package screen`, please run the following command to update, then install Screen again.
```bash=
sudo apt-get update
```
:::


### Step 2. Enter Screen 
```bash=
screen
```
- After entering Screen, please read the description.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47056d9911ee362ef05bc9e6ac33febc.png)


- Press **Return** key to enter the command

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1b9bebfacbf19334f64d7f9c5b4cd7b.png)



### Step 3. Run the process in the screen shell

- The example is as follows

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0017c6102df15b490d4492adf889470a.png)



### Step 4. Detach screen shell

- When the process is running, press `ctrl + a + d`, it will show detach successful message (shell ID marked with red frame). Then, the process can run continously in the background, even if SSH is disconnected.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_017ef5c98429becb339bd36d43cdc7d2.png)



### Step 5. Check the status of the running process

- If you want to enter that screen shell again, enter the command to operate container and check the status of the process:

```bash=
screen -r [A chunk of screen shell ID]
```
:::info
:book: [<ins>More Screen command</ins>](https://blog.gtwang.org/linux/screen-command-examples-to-manage-linux-terminals/)
:::

## Method 3. Using Linux nohup command

### Step 1. Connect to the container using SSH and run the process

- Enter the command below to run the process in the background.

```bash=
nohup [/code_path] &
```
:::info
==**Need to update:exclamation:**==
:book: Please refer to [<ins>Connect to the container using SSH</ins>](https://man.twcc.ai/s/SJlZnSOaN#%E4%BD%BF%E7%94%A8-SSH-%E7%99%BB%E5%85%A5%E9%80%A3%E7%B7%9A).
:::
- The example is as follows, terminal will return the job ID (job ID = 1 marked with red frame), and the output of the process will be displayed in the "nohup.out".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d220eceddf16a2cc6c0e29a2af8b569b.png)


### Step 2. View the output content

- Enter the following command to view the latest output of the process.

```bash=
tail nohup.out
```
- The output is displayed as follows:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a118f65cfb32d6b14fb291a322ca56b2.png)



:::info
:book: [<ins>More nohup command</ins>](https://blog.gtwang.org/linux/linux-nohup-command-tutorial/)
:::