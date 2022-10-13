---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-access-cos-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-access-cos-en' 
---

# Access Cloud Object Storage (COS)


Except for using [Hyper File System (HFS)](https://www.twcc.ai/doc?page=hfs) as the compute storage, [TWCC TWNIA2 (HPC CLI)](https://www.twcc.ai/doc?page=hpc_cli) can also use [TWCC Cloud Object Storage (COS)](https://www.twcc.ai/doc?page=object) as a storage option for data accessed less frequently.

This article will demonstrate two method to access files in [TWCC Cloud Object Storage (COS)](https://www.twcc.ai/doc?page=object) from TWNIA2 (HPC CLI):

1. **S3 client tools**<br/>
    With the S3 client tools, you can upload and download files via HTTPS (HyperText Transfer Protocol Secure) on the **login node** and when you submit jobs to the **compute nodes**.

2. **Mount COS as a network hard drive**<br/>
    Mount COS as the storage space using [FUSE (Filesystem in Userspace)](https://en.wikipedia.org/wiki/Filesystem_in_Userspace). Only the **login node** (ln01.twcc.ai) is available.

:::info
It is recommended to use **S3 client tools**:
- The COS mounted via FUSE is not a local drive. To prevent data loss, you can only upload one file at a time (read and download multiple files is available).
- There are also [<ins>many other limitations</ins>](https://github.com/s3fs-fuse/s3fs-fuse#limitations), so mounting COS as a network hard drive is only available on the login node.
:::

Below we demonstrate accessing COS with the two methods. You can choose either of them according to your needs.

<br/>


## 1. S3 client tools

There are many types of S3 client tools. The tools introduced below are mainly CLI tools. Choose a tool you preferred. In the following examples we use `TWCC CLI` and `S3cmd` to access COS data:
- **[S3cmd](https://github.com/s3tools/s3cmd)**<br/>
  Written in Python, S3md is one of the most well-known S3 CLI tools, with early development as well as complete and stable functionality.
- **[TWCC CLI](https://github.com/TW-NCHC/TWCC-CLI)**<br/>
  Consider using TWCC CLI if you are already familiar with it. You can use it to operate various TWCC services.
- Other tools
    - **[Rclone](https://github.com/rclone/rclone)**<br/>
  Rclone is able to access to various cloud storage. It is well-suited for transferring small files between TWCC TWNIA2 (HPC CLI) and COS.
    - **[S5cmd](https://github.com/peak/s5cmd)**<br/>
    S5cmd is written in Go language, and its transmission speed is faster than the tool written in Python but with fewer functions.

<br/>


### Installtion and Settings

- Accessing TWCC COS required the **Access Key** and the **Secret Key**. Please login to [TWCC portal](https://www.twcc.ai/) and go to the COS page to get the keys.
- Go to the **Third-party Software** page of `Cloud Object Storage (Shared storage space between project members)` or `Private COS (private storage space)` to get the keys.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_716af2cfd86e8e784e3bce0f1268254e.png)

<br/>


#### S3cmd

- **Install**
```bash
# Using pip to install
pip install s3cmd --user
```

- **Enter key**
```bash
# Here we use vim as the editing tool, you may use your familiar editor to edit ~/.s3cfg
vim ~/.s3cfg
```

```bash
# Edit content
-----------------------
# Setup endpoint
host_base = cos.twcc.ai
host_bucket = cos.twcc.ai
use_https = True

# Setup access keys
access_key = <COS Access Key>
secret_key = <COS Secret Key>
-----------------------
```

<br/>


#### TWCC CLI

- **Install**

```bash
# Using pip3 to install
pip3 install TWCC-CLI --user
```

- For **how to enter key, select projects or enter TWCC CLI environment, please refer to [TWCC CLI document](https://man.twcc.ai/@twccdocs/twcc-cli-v05#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99)** for more information.


<!-- #### MCLI
- **安裝**
已預先裝於台灣杉二號，使用以下指令載入工具即可。
```bash
$ module load mcli
```
- **寫入金鑰**
加入金鑰，指令及參考範例如下。
```bash
$ mcli config host add twcc https://cos.twcc.ai <COS Access Key> <COS Secret Key>
``` -->

<br/>


### Examples

We demonstrate each example using `S3cmd` and `TWCC CLI` in order.

- **Create a bucket named `mytwccbucket`**
  
```bash
# for S3cmd
s3cmd mb s3://mytwccbucket

# for TWCC CLI
twccli mk cos -bkt mytwccbucket
```

- **Upload files**

Create an empty folder in /home directory named `myfile`.
  
```bash
touch ~/myfile
```

Copy the file to `mytwccbucket` bucket.
  
```bash
# for S3cmd
s3cmd put ~/myfile s3://mytwccbucket/

# for TWCC CLI
twccli cp cos -bkt mytwccbucket -fn myfile -sync to-cos
```

- **View files**

Check if the upload is successful.

```bash
# for S3cmd
s3cmd ls s3://mytwccbucket/myfile

# for TWCC CLI
twccli ls cos -bkt mytwccbucket
```
- **Delete files**

Delete myfile just uploaded.

```bash
# for S3cmd
s3cmd rm s3://mytwccbucket/myfile

# for TWCC CLI
twccli rm cos -bkt mytwccbucket -okey myfile
```
- **Delete buckets**

Please make sure the bucket is empty before deleting it.

```bash
# for S3cmd
s3cmd rb s3://mytwccbucket

# for TWCC CLI
twccli rm cos -bkt mytwccbucket
```

:::info
Other parameters and description:
- S3cmd
Check by entering the `s3cmd --help` command or learn more on [<ins>s3cmd GitHub</ins>](https://github.com/s3tools/s3cmd#simple-s3cmd-howto).
- TWCC CLI
Check by entering the `twccli --help` command or learn more on [<ins>TWCC CLI document</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#4-%E9%9B%B2%E7%AB%AF%E7%89%A9%E4%BB%B6%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99COS-Cloud-Object-Storage).
:::

<br/>


## 2. Mount

The following are two mounting tools: [Goofys](https://github.com/kahing/goofys) and [S3fs](https://github.com/s3fs-fuse/s3fs-fuse), you may choose according to your needs.

:::info
The mounting methods are only able to used on ln01.twcc.ai login node.
:::

<br/>


### Create a COS bucket

- Please refer to TWCC [Cloud Object Storage](https://www.twcc.ai/doc?page=object) manual and create a COS bucket on the TWCC portal (The management of buckets cannot be operated using TWNIA2).
- After logging in to ln01.twcc.ai, create a `~/mount_cos` folder under your account:

```bash
mkdir -p ~/mount_cos
```

<br/>


### Enter keys

Create a folder under the `~/.aws` directory, and copy TWCC COS keys to `~/.aws/credentials`.

Here we use vim as the editing tool, you may use your familiar editor.

```bash
mkdir -p ~/.aws
vim ~/.aws/credentials
```

Enter the content below:

```bash
[default]
aws_access_key_id = COS Access Key
aws_secret_access_key = COS Secret Key
```

<br/>


### [Goofys](https://github.com/kahing/goofys) 

- Written in Go language, the performance is good, so you can give priority to using it.

Mount command:
```bash
goofys --endpoint https://cos.twcc.ai mytwccbucket ~/mount_cos
```

<br/>


### [S3fs](https://github.com/s3fs-fuse/s3fs-fuse)

- A well-known s3 mounting tool.

Mount command:

```bash
s3fs mytwccbucket ~/mount_s3 -o url=https://cos.twcc.ai/ -o use_path_request_style
```

<br/>


### Access files

After you complete mounting COS, you can access files in the newly created bucket `mytwccbucket` under the `~/mount_cos` directory.

Example:

```bash
# Create a new file named myfile
touch ~/mount_cos/myfile
```
Now you can click on `mytwccbucket` on the **Cloud Object Storage Management** page on the TWCC portal. You can see that `myfile` has been added to the content.

<br/>


### Unmount

Please exit the mounted folder and back to the /home directory.

```bash
cd ~/
```

Enter the unmount command.

```bash
fusermount -u ~/mount_cos
```

Enter the command below. The unmount is completed if there are no files listed. 

```bash
ls ~/mount_cos
``` 