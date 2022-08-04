---
sidebar_label: '運算服務'
sidebar_position: 1
---

# Comparison of role permissions of TWCC: Computing service

## Interactive Container

- General operation

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal container information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all container information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Access personal container using Jupyter|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all containers in the project using Jupyter|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Access personal container using SSH|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all containers in the project using SSH|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Delete personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Monitor personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Monitor all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

- Container duplicate

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create container duplicate|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|View personal container duplicate|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all container duplicates in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Use personal container duplicate|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all container duplicates in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|


:::info
- Role permissions of other services：<br/>
==**Need to update:exclamation:**==
    - For role permissions of Hyper File System(HFS) and Cloud Object Storage(COS), please refer to <ins><a href = "https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh">this doc</a></ins>。
    - For role permissions of Container Security, please refer to <a href = "https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh#%E5%AE%B9%E5%99%A8%E9%80%A3%E7%B7%9A%E5%AE%89%E5%85%A8">this doc</a>。
- Role permissions that using TWCC CLI or portal is the same.
:::

## Scheduled Container


| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal container information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all container information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Start/Stop/Delete personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Start/Stop/Delete all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Monitor personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Monitor all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

## Virtual Compute Service (VCS)

- General operation

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create VCS instance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal instance information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all instances information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Connect to personal instance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Connect to all instances in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Start/Stop/Delete personal instance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Start/Stop/Delete all instances in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Monitor personal instance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Monitor all instances in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|View personal key pair information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all key pair information in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal key pair|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all key pair in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

- Image

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|View personal image information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all images information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use personal image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

- Custom image

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Upload custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all custom images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use personally uploaded custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all custom images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete personal custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all custom images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

:::info
==**Need to update:exclamation:**==
- Role permission of other services：
    - For Virtual Disk, please refer to [<ins>this doc</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh#%E5%8D%80%E5%A1%8A%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99).
    - For virtual network(VNW), VPN, load balancing service(LBS), auto scaling, advanced security service(ADS), please refer to [<ins>this doc</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-en).
- Role permissions that using TWCC CLI or portal is the same.
:::

## HPC Job (Web Interface)

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create HPC Job|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal HPC Job information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all HPC Job information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Start/Stop/Delete personal HPC Job|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Start/Stop/Deleteall HPC Jobs in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Monitor personal HPC Job|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Monitor all HPC Jobs in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## Taiwania 2 (HPC CLI)

- There's no different role permission in this service.