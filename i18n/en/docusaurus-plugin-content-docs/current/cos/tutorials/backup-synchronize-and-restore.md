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
<supercomputer account> please change to the supercomputer account shown in step 14
```shell
sed -i 's/check_ssl_certificate = True/check_ssl_certificate = False/g' /home/<supercomputer account>/.s3cfg
```
### Back up/synchronize data to COS
After the setting is completed, you can save your data in VCS instances and containers to COS buckets. There are two methods: backup and synchronization.
<span class = "number">&#10102;</span> **Backup**: All your data will be stored. If the data is deleted or lost by mistake, you can restore the data from COS at any time.
<span class = "number">&#10103;</span> **Synchronization**: You can make your data in VCS instances/containers consistent with the data in COS. If the supercomputer data is deleted, the COS data will be deleted simultaneously.
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
    Configure schedules:<b style="font-face:bold">* * * * *</b> (**Minute Hour Day     Month Week**)
    | Name | Allowed value (integer) | 
    | -------- | -------- |
    | Minute    | 0 - 59, or * (no designation)    | 
    | Hour  | 0 - 23, or * (no designation)    | 
    | Day of the month   | 1 - 31, or * (no designation)    | 
    | Month   | 1 to 12, or * (no designation)    | 
    | Day of the week  | 0 to 7 (both 0 and 7 both mean Sunday), or * (no designation)    | 
    :::
