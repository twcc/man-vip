---
sidebar_position: 7
---

# Use TWCC COS to back up, synchronize and restore data

In this document, you will learn how to use COS to back up, synchronize and restore data of Virtual Compute Service (VCS) and Container Compute Service (CCS). For VCS instances/containers of different operating systems (Linux and Windows), we will separately show you how to back up and synchronize data using third-party softwares, such as s3cmd and Duplicati:

- S3cmd is a command line tool that applicable to VCS Linux instances and CCS containers. [<ins>Learn more about s3cmd</ins>](https://s3tools.org/s3cmd).
- Duplicati is a GUI tool that is applicable to VCS windows instances. [<ins>Learn more about Duplicati</ins>](https://duplicati.readthedocs.io/en/latest/01-introduction/).

## Preparation

- Create VCS instances or Interactive Containers.
- Create COS buckets to back up or synchronize your data.
- Connect to your VCS instance or Interactive container, and obtain the folder/file path to be backed up/synchronized.

## s3cmd: applicable to VCS Linux instances and CCS containers

### Install and set up s3cmd

**1. Install `pip` (For CCS container, please go to step 2)** 

```shell
sudo apt install python-pip
```

**2. Download and install s3cmd**
 
```shell
sudo pip install s3cmd
```

**3. Set parameters**

```shell
s3cmd --configure
```
After that, system will return the following content.

```shell
Enter new values or accept defaults in brackets with Enter.
Refer to user manual for detailed description of all options.
Access key and Secret key are your identifiers for Amazon S3. Leave them empty for using the env variables.
```

**4. Enter COS Access Key and Secret Key**

Please enter your COS Access key and Secret key

```
Access Key: <YOUR-ACCESS-KEY>
Secret Key: <YOUR-SECRET-KEY>
```

:::info
1. You can get public COS connection information on **SERVICES**> **Cloud Object Storage (COS)**> **Third-party Software** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1fec68be28d21f17d95d130da41e5662.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e35986692d1a032d4e360b490b8e051e.png)



2. You can find the COS connection information on **Private COS**> **Third-party Software** page.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_86f73bdb814460d68312c69522c92ce7.png)

:::

**5. Default Region: press enter key**

```shell
Default Region [US]:
```

**6. Endpoint: please enter TWCC COS endpoint:```cos.twcc.ai```**

```shell
Use "s3.amazonaws.com" for S3 Endpoint and not modify it to the target Amazon S3.
S3 Endpoint [s3.amazonaws.com]: cos.twcc.ai
```

**7. DNS-style sccess point: also enter ```cos.twcc.ai```**
```shell
Use "%(bucket)s.s3.amazonaws.com" to the target Amazon S3. "%(bucket)s" and "%(location)s" vars can be used
if the target S3 system supports dns based buckets.
DNS-style bucket+hostname:port template for accessing a bucket [%(bucket)s.s3.amazonaws.com]: cos.twcc.ai
```
**8. (Optional) set up encryption password**
If you need data encryption, please enter a password for encryption password, or simply press enter key to skip.
```
Encryption password is used to protect your files from reading
by unauthorized persons while in transfer to S3
Encryption password:
```
**9. (Optional) Bypass GPG program path: press enter key**
```shell
Path to GPG program [/usr/bin/gpg]:
```
**10. Use HTTPS protocol, enter```Yes``` (case sensitive!)**
```shell
When using secure HTTPS protocol all communication with Amazon S3
servers is protected from 3rd party eavesdropping. This method is
slower than plain HTTP, and can only be proxied with Python 2.7 or newer
Use HTTPS protocol [Yes]: Yes
```
**11. Bypass HTTP Proxy server name: press enter key**
```shell
On some networks all internet access must go through a HTTP proxy.
Try setting it here if you can't connect to S3 directly
HTTP Proxy server name:
```
**12. Double check the settings**
```shell
New settings:
  Access Key: XXXXXXXXXXXXXXX
  Secret Key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  Default Region: US
  S3 Endpoint: cos.twcc.ai
  DNS-style bucket+hostname:port template for accessing a bucket: cos.twcc.ai
  Encryption password:
  Path to GPG program: /usr/bin/gpg
  Use HTTPS protocol: True
  HTTP Proxy server name:
  HTTP Proxy server port: 0
```
**13. Test access: enter ```n```**
```shell
Test access with supplied credentials? [Y/n] n
```
**14. enter`y` to save the settings**
After entering `y`, you will get the path and file name of the configuration file:`/home/<supercomputer account>/.s3cfg`
```shell
Save settings? [y/N] y
Configuration saved to '/home/<supercomputer account>/.s3cfg'
```

**15. Modify certificate settings to avoid backup/synchronization errors**
(supercomputer account) please change to the supercomputer account shown in step 14
```shell
sed -i 's/check_ssl_certificate = True/check_ssl_certificate = False/g' /home/<supercomputer account>/.s3cfg
```

### Back up/synchronize data to COS
After the setting is completed, you can save your data in VCS instances and containers to COS buckets. There are two methods: backup and synchronization.
<span class = "number">&#10102;</span> <b>Backup</b>: All your data will be stored. If the data is deleted or lost by mistake, you can restore the data from COS at any time.<br/>
<span class = "number">&#10103;</span> <b>Synchronization</b>: You can make your data in VCS instances/containers consistent with the data in COS. If the supercomputer data is deleted, the COS data will be deleted simultaneously.

- **Back up data**
    - Back up now
    ```
    s3cmd sync /<LOCAL_DIR> s3://<DEST_BUCKET>
    ```
    - Set the backup schedule, for example, regularly back up files to COS every day at 2:00 am
    
    Enter the following command to edit the crontab job
    ```bash
    crontab -e 
    ```
    Enter the following command in the script
    ```bash
    0 2 * * * /usr/local/bin/s3cmd -c /<LOCAL_DIR>/.s3cfg sync /home/ubuntu s3://<DEST_BUCKET>
    ```
    
- **Synchronize data**
    - Synchronize now
    ```bash
    s3cmd sync --delete-removed /<LOCAL_DIR> s3://<DEST_BUCKET>
    ```
    - Set the synchronization schedule, for example, regularly synchronize files to COS every day at 2AM
    
    Enter the following command to edit the crontab job
    ```bash
    crontab -e  # Add the following content
    ```
    
    Enter the following command in the script
    ```bash
     0 2 * * * s3cmd sync --delete-removed /<LOCAL_DIR> s3://<DEST_BUCKET>
    ```

    :::info
    Configure schedules:<b>* * * * *</b>(**Minute Hour Day     Month Week**)

    | Name | Allowed value (integer) | 
    | -------- | -------- |
    | Minute    | 0 - 59, or * (no designation)    | 
    | Hour  | 0 - 23, or * (no designation)    | 
    | Day of the month   | 1 - 31, or * (no designation)    | 
    | Month   | 1 to 12, or * (no designation)    | 
    | Day of the week  | 0 to 7 (both 0 and 7 both mean Sunday), or * (no designation)    | 

    :::
    :::info
    If you need to back up multiple versions of files, please enable the Bucket Versioning function. See [How to Enable or Disable Versioning for a Bucket](https://s3browser.com/amazon-s3-versioning.aspx) from S3 Browser.
    :::

### Recover backed up/synchronized files from COS
If the data of VCS instances/containers is deleted by mistake or is lost, you can restore the data from backup or synchronization.
<span class = "number">&#10102;</span> <b>Restore from backup</b>: All data backed up in COS will be restored to local machine, and the inconsistent data between both sides will still be stored in supercomputer.<br/>
<span class = "number">&#10103;</span> <b>Restore from synchronization:</b> The data synchronized with COS will be completely restored to local machine, and will use COS data for the inconsistencies between both sides.

- **Restore from backup**
    ```
    s3cmd sync s3://<DEST_BUCKET>/ /<LOCAL_DIR>/ 
    ```
- **Restore from synchronization**
    ```
    s3cmd sync --delete-removed s3://<DEST_BUCKET>/ /<LOCAL_DIR>/
    ```

### Other COS commands
In addition to backing up, synchronizing and recovering data, s3cmd can also perform general operations on COS buckets:
- List all buckets
```bash=
s3cmd ls
```
- Create a bucket
```bash=
s3cmd mb s3://<BUCKET_NAME>
```
- Upload a file
```bash=
s3cmd put <LOCAL_FILE> s3://<BUCKET_NAME>
``` 
 
- List all files in the bucket
```bash=
s3cmd ls s3://<BUCKET_NAME>
```
- Delete a file in the bucket
```bash=
s3cmd rm s3://<BUCKET_NAME>/<FILE_NAME>
```
- Delete a large number of files in the bucket (e.g., all files under the folder `gpu-burn`)
```bash=
s3cmd del s3://<BUCKET_NAME>/gpu-burn/*
```
- Delete a folder in the bucket
```bash=
s3cmd del --recursive s3://<BUCKET_NAME>/<FOLDER_NAME>/
```
- Delete a bucket
```bash=
s3cmd rb s3://<BUCKET_NAME>
```
:::info
[More detailed instructions for S3cmd commands](https://s3tools.org/usage)
:::

<!--
:::spoiler COS 檔案加密方式 (請點我)
TWCC 雲端儲存系統，除了提供台灣企業點對點 (End to End) 加密資料傳輸外，也結合 Intel 處理器、雲端儲存及 Intel 進階加密指令集 （Intel AES-NI) 技術，以及 Seagate 的世界級儲存解決方案，使用國際標準 256 位元 AES 的資料加密機制，保護使用者上傳的機敏資料。
使用者可使用 S3 SSE-C (Server Side Encryption - Customer) AES256 加密機制，將上傳的檔案進行加密，步驟如下：
1. 安裝工具
```bash=
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip
unzip awscliv2.zip
sudo ./aws/install
```
2. 輸入以下設定指令後，放入您的 COS key  (Access key、Secret key)
```bash=
aws configure
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8702217aa696d2886219da27e12ec7ed.png)
3. 產生加密 Key
```bash=
openssl rand -out sse-c.key 32
```
4. 使用 S3 SSE-C 加密上傳的檔案
```bash=
aws s3 cp <FILE_NAME> s3://<BUCKET_NAME>/<FILE_NAME> --sse-c AES256 --sse-c-key fileb://<ENCRYPT_KEY> --endpoint-url https://cos.twcc.ai
```
6. 使用加密 Key 下載 S3 SSE-C 加密的檔案
```bash=
aws s3 cp  s3://<BUCKET_NAME>/<FILE_NAME> sse-c-test-file --sse-c AES256 --sse-c-key fileb://<ENCRYPT_KEY> --endpoint-url https://cos.twcc.ai
```
:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**
* 若沒有加密 Key 則無法正常下載，請您妥善保存 key
![](https://i.imgur.com/lBsNhB1.png)
:::
  -->
  
## Duplicati: applicable to VCS Windows instances
### Download and install Duplicati
+ Go to [Duplicati download page](https://www.duplicati.com/download) to download and install the latest version suitable for Microsoft Windows.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4940fe49ea855d3ec1dafbbe5ab44517.png)
### Back up data to COS
After the installation, you can save your data in VCS instances and containers to COS buckets.
**1. Add backup settings**
Click **+ Add backup** , and select **Configure a new backup**
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bba8aba18cc763d370620a67742b3de5.png)
Set the backup name, select **AES-256 encryption, built-in** for encryption,  and set the passphrase.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_59c57bde2d4a3f0d1ffa04ec814b3178.png)
    
**2. Set the backup destination**
- Storage Type: S3 compatible
- Use SSL: please tick the checkbox
- Server: select **Custom server url**, and enter `cos.twcc.ai`
- Bucket name: enter the bucket name you wish to store the backups
- AWS Access ID/Key: enter COS Access Key and Secret Key
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d8dd490ef4262c493d47a7d7fcabe6ec.png)


:::info
1. You can get public COS connection information on **SERVICES**> **Cloud Object Storage (COS)**> **Third-party Software** page.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1fec68be28d21f17d95d130da41e5662.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e35986692d1a032d4e360b490b8e051e.png)
2. You can find the COS connection information on **Private COS** > **Third-party Software** page.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_86f73bdb814460d68312c69522c92ce7.png)
:::
- After entering the information, click **Test Connection**. If the settings are correct, system will pop up **Connection worked!** message. 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5d9b3b08b34d2ad17d62b498a33d3967.png)
**3. Set backup source data and schedule**
- Select the folder or file you want to back up from the local computer
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0de0e5dd8c2cd48641747c01b87aefbe.png)
**4. Set automatic backup schedule**
 
E.g., regular backup automatically at 13:00 every day
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f272bf0c59d0421e21a455fdf9db45f.png)
5. Set backup options and store settings
Select the default value for the remote volume size (select a smaller size if your Internet speed is slow). Select backup retention according to your needs (*keep all backups, delete backups that are older than a specific time, keep a specific number of backups, smart backup retention or custom backup retention.*).
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d6d5438c1fbf66cf1b6fbd9abbb2d35.png)
- Click **Save** to save the settings. After that, Home page will display the next backup schedule and backup configuration.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_273db54d4841201a42d104c31b40a20c.png)
- If you need to back up immediately, please click **Run now**
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8eda7e6aa1a2f568acbd05035304a6a3.png)
- If you don’t need to back up data anymore, click **Delete** to delete the configuration
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be3ec19ac18ed11bafaa78882afdd685.png)

### Restore backup data from COS 
**1. Set the restore configuration**
Click **Restore**, and select the backup configuration you want to restore
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4619d1399e5d1155d46455ad7d610107.png)
**2. Select files**
Select the backup version, and select the files and folders you want to restore
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_76489e382a681d2c07b2952bbf90fc49.png)
**3. Set the restore options**
Set the options according to your needs, and click **Restore** to start the restoration
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ddecefe13808e3fce9851045e66d45e6.png)
After the restoration, it will show you the following message: *Your files and folders have been restored successfully*.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ff8ed1e91f893f41cd8737c9b0441688.png)