---
sidebar_label: '運算服務'
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/role-compute-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/role-compute-zh'
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
|Enable/Disable deletion protection - personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Enable/Disable deletion protection - all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Delete personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Monitor personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Monitor all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

- Container image

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create container image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|View personal container image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all container images in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Use personal container image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all container images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|


:::info
- Role permissions of other services：<br/>
    - For role permissions of Hyper File System(HFS) and Cloud Object Storage(COS), please refer to [<ins>this doc</ins>](storage.md).
    - For role permissions of Container Security, please refer to [<ins>this doc</ins>](docs/vcs/user-guides/security/security-group.md).
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
|Enable/Disable deletion protection - personal container|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Enable/Disable deletion protection - all containers in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
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
|View images information shared by the source project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use personal image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use images shared by the source project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Multiple projects sharing personal image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Multiple projects sharing all images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete images shared by the source project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

<!-- 
- Custom image

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Upload custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal custom image information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all custom images information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use uploaded personal custom image|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all custom images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete personal custom image||<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all custom images in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
-->

:::info
- Role permission of other services：
    - For Virtual Disk, please refer to [<ins>this doc</ins>](storage.md).
    - For virtual network(VNW)<!-- - , VPN-->, load balancing service(LBS), auto scaling, and advanced security service(ADS), please refer to [<ins>this doc</ins>](networking-security.md).
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