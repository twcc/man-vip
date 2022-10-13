---
sidebar_label: '儲存服務'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/role-storage-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/role-storage-en' 
---

# Comparison of role permissions of TWCC：Storage Services

## Hyper File System (HFS)

- Access via Data Transfer Node (<ins><a href = "xdata1.twcc.ai">xdata1.twcc.ai</a></ins>) or Login Node  (<ins><a href = "ln01.twcc.ai">ln01.twcc.ai</a></ins>)

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Access personal storage space|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all user's storage space in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


- Access via Interactive container (Jupyter Notebook)

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Access personal storage space|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all user's storage space in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

:::caution
Tanent Admins can access all storage space in the project via Jupyter Notebook. If Tenant Users have multiple projects, please deal with the data permissions under different projects yourself.
:::

- Access via Interactive container (SSH)

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Access personal storage space|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all user's storage space in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## Cloud Object Storage (COS)

- Public COS

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create bucket|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all bucket data in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all bucket data in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all bucket data in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>

- Private COS

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create bucket|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all bucket data in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Access personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Access all bucket data in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal bucket data|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all bucket data in the project|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


:::info
Role permission of COS using TWCC CLI or portal is the same.
:::

## Virtual Disk Service (VDS)

- General operations: 

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create data disk|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal data disk information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all data disk information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal data disk|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all data disk in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Attach personal data disk to personal VCS intance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Attach personal data disk to VCS Instance of other members|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Connect data disk of other member with personal VCS Instance|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Connect data disk of other member with VCS Instance of other member|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


- Data Disk Sanpshot

| Function | Tenant Admin | Tenant User |
| -------- | -------- | -------- |
|Create snapshot of personal disk|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Create snapshot of others|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View personal snapshot information|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|View all snapshot information in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Delete personal snapshot|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Delete all snapshot in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|Use personal snapshot|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Use all snapshot in the project|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## Cloud File Service

Storage permissions category：

- <i class="fa fa-eye" aria-hidden="true"></i> View：Browse, download and search files only.
- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit：In addition to view permissions, you can also delete, upload files, add folders, and move hot and cold storage.
- <i class="fa fa-share-square-o" aria-hidden="true"></i> Share：Set the sharing target and permission for the folder.


Storage level and permission description：

| Folder | First Level Folder | Subfolder |
| -------- | -------- | -------- |
| If the file is uploaded directly to the dataset, **all members of the project** can view and edit the file   | (1) Once created, only **project creator** and **folder creator** have permission to view, edit and share.<div></div>(2) Members with shared view or edit permissions do not have shared permissions| Inherit the permission settings of the first level folder     |