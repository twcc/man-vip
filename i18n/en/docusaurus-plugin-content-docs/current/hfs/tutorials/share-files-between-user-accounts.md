---
sidebar_position: 7
GA: UA-155999456-1
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-hfs-share-files-between-user-accounts-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-hfs-share-files-between-user-accounts-en'
---

# Share HFS files between user accounts

This tutorial will walk you through the methods and steps required to share HFS files to other user accounts and access shared files. You can:

1. Upload files to TWCC COS and share
    - Other users can download files via URLs to their space.
    - Other users can mount COS as a disk to access the files (i.e., a shared folder or a network drive). 
2. Change HFS file permissions.

Please refer to the following steps on how to share files (sharer) and steps on how other users access files (other users):

 
## 1. Upload files to TWCC COS and share

### Step 1. Upload files to TWCC COS (sharer)

Sharers can upload HFS files to COS through [S3 client tools or mounting COS as a disk](https://man.twcc.ai/@twccdocs/howto-twnia2-access-cos-zh); or [Backup/Sync HFS files to COS](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fcosbackup-zh#s3cmd%EF%BC%9A%E9%81%A9%E7%94%A8-VCS-%E5%80%8B%E9%AB%94-Linux%E3%80%81CCS-%E5%AE%B9%E5%99%A8).



Next steps:

<details class="docspoiler">

<summary><b> Other users download files via URLs to their space</b></summary>

### Step 2. Get file URLs (sharer)

Get the file URL through third-party software and share the URL with other users.
    
(The following uses Cyberduck as an operation example)

> ![](https://i.imgur.com/VuuWRhK.png)


> ![](https://i.imgur.com/Pklqlw4.png)


### Step 3. Download files to your space (other users)

After obtaining the file URL from the sharer, enter the following `wgwt` command to download the file to your space (TWCC TAIWNIA2 (CLI), VCS, CCS, or other local machines)

```
& wget <COS file URL> 
```
    

    
</details>

<div style={{height:8+'px'}}></div>

<details class="docspoiler">

<summary><b> Other users mount COS as a disk to access the files (i.e., a shared folder or a network drive) </b></summary>

### Step 2. Mount COS to TWNIA2 (other users)

For other users, please refer to [<ins>this article</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-access-cos-zh) to mount the sharer's COS as a network disk or shared folder. 
    
Files can be accessed after being mounted to your TWNIA2 (login node) or VCS instances.
    
</details>


## 2. Change HFS file permissions
    
The following steps change the permissions of HFS files/directories through the ACL (Access-control list) enabled on the file system.

The sharer can log in to TWNIA2 (CLI) to enter commands to change file permissions.

:::caution   
- This is an advanced method, and incorrect settings can lead to data leakage. Considering information security issues, it is recommended that you use the above method to share files through COS.
- This method only changes file permissions and does not transfer files. Therefore, the files keep occupying the storage space of the sharer after the permission is changed.
- Please connect to the login node before you changing the file permission.
     
:::
    
    

:::info  
Reference：[<ins>NCHC</ins>](https://iservice.nchc.org.tw/nchc_service/nchc_service_qa_single.php?qa_code=662)
:::
    
### UNIX file permissions
    
Use the `ls -l` command to view the information of the file. The first column indicates the permissions of Owner, Group, Other (not Owner or Group) for the file/directory, for example: `-rw-r-- r--`, the permission escription is as follows:

| Column 1 | Column 2-4| Column 5-7| Column 8-10|
| -------- | -------- | -------- | -------- |
| `-`：file (`d`: directory)    |Owner has r、w、x permissions   | Group has r permission    |Other has r permission|


### Change ACL permissions
    
```
setfacl [-bkRd] [{-m|-x} ACL parameter] target_file_name
```

#### Commands
    
- `setfacl`：set/remove the ACL permissions of a file/directory

#### Parameters
    
    
- `-m` sets following ACL parameters to the files. Cannot be used with `-x`;
- `-x` : deletes following ACL parameters. Cannot be used with `-m`;
- `-b` : removes "all" ACL parameters;
- `-k` : removes the "default" ACL parameters. The "default" parameters will be introduced in the following examples;
- `-R` : sets ACL recursively, that is, the subdirectories will set the same permission;
- `-d` : sets "Default ACL parameters". Only valid for directorys, the new data in the directory will inherit to this default value.
    
#### User and Group

- `-u`：change files permissions to a specific user (add his/her UNIX account behind)
- `-g`：change files permissions to members of a project （add project number behind）

#### Permission types
    
- `r`：read permission
- `w`：edit and write permissions
- `x`：`execute files` or `enter folders` permissions

    
### Operation examples
#### 1. Set file/directory ACL permission (sharer)
    
- Share the read and write permissions of a file to a specific user (UNIX account).
    
```
setfacl -m u:<UNIX_account>:rw <target_file>
```

- Share the read and execute permissions of /home under a UNIX account to a specific project.

```
setfacl -m g:<project_number>:rx /home/<UNIX_account>
```
:::info   
The execute permission `x` parameter is added since opening the folder requires the execute permission. 
:::

#### 2. Check the file ACL permissions has been set (sharer)
    

    
- If the permission is set successfully, a `+` sign will appear in the permission column.
    
```
ls -ald /path/<target_file or directory> 
```
    
    
![](https://i.imgur.com/59x20QD.png)


#### 3. View ACL permissions of file/directory (sharer)

```
getfacl <target_file or directory>
```

You will get the following information of a file/directory:

```
# file: path/file
# owner: <UNIX account of the file owner>
# group: <project number of the file owner>
user::rwx 
user:<UNUX account>:rwx (permission set to the target user)
group::---
group:<project number>:r-x (permission set to the target project)
mask::r-x
other::--- 
```
    
#### 4. Access files (other users)

Other users can enter `cd` command with sharer account to access files or folders. 
    
```
cd <UNIX_account_of_sharer> 
```


#### 5. Remove ACL permissions of file/directory (sharer)
    
If the files or directories are no longer shared, execute the following command to remove all permissions of the files/directories
    
```
setfacl -b <target_file or directory>
```

