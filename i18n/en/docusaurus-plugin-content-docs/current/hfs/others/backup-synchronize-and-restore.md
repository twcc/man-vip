---
sidebar_position: 8
title: 空間管理政策
---

# Hyper File System (HFS) storage management policies

### Approved space for private and public disks
- /home directory: home directory of each account (register for an account to get 100 GB of free storage space)
- /work directory: public directory (work) directory of each account (sign up and you can get 100 GB of free storage)

:::info
If the space is insufficient, you can go to the [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-en) to purchase expansions. Please refer to the [<ins>price list</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS) for the pricing and adjustment method.
:::

### Public disk storage management policies and instructions
- The public disk space (/work) is used for short-term temporary storage of computing jobs. If you need to keep it for a long time, please move the files to other storage services of the NCHC TWCC.
- The NCHC will not make any backup of the public disk space, and it cannot be recovered if the system is damaged or files are deleted.
- For the files in the public disk space, users need to back up and kept by themselves. If the files are damaged, lost or deleted, NCHC will not be responsible for any restoration or compensation.
- To ensure that users have enough temporary storage space to complete computing, the system will automatically clear files that have not been accessed for more than 28 days.
- Users shall not intend to circumvent the system cleaning policy. It's prohibited to the use of commands or programs (such as touch or other similar commands and scripts) to change the last access time of files. This behavior will seriously affect the performance of public disk space.
- The public disk space of the NCHC is a high-performance and valuable research facility and it's only used for high-performance computing purposes. It is forbidden to store private files that are not related to high-performance computing purposes.
- If users are found to have violated the foregoing prohibitions and not changing after repeatedly advised, NCHC has the right to suspend the user's access to the file system. If the user's computing being interrupted, data loss or other derivative losses are caused, NCHC will not be responsible for any compensation liability.
- The administrator will clean up the /tmp directory of the login node and data transfer node irregularly to maintain the stable operation of the system. Please avoid storing important data in /tmp directory.


:::info
The command to view the last access time of the file is:
```bash
ls -ula /path/to/your_scratch_file or directory
```
:::
   
- Backup policy for private disk space (/home ) and public disk space (/work)
    

|  | /Home |/Work|
| -------- | -------- |-------- |
| Backup policy  | :white_check_mark: |:negative_squared_cross_mark:|
| File cleaning policy | :negative_squared_cross_mark:  | 28 days (apply to both free and paid space), touch is prohibited |