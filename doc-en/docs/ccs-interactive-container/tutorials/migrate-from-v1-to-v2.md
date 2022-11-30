---
sidebar_position: 14
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-migrate-container-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-migrate-container-en' 
---

# TWCC CCS new Container Platform (v2)

## Container Platform Update Description

TWCC has completed the update and integration of the CCS Container Computing Platform (from v1 to v2), upgrading the operating system and necessary packages, as well as fixing platform vulnerabilities to provide users with a more robust container platform.
In the future, TWCC will rolling upgrade the platform and provide users with more convenient container features.

## Please evaluate the v1 container for renewal

As the new v2 platform has been launched to provide user container services, TWCC will phase out the v1 container platform. Please evaluate whether your using containers on the v1 platform need to be renewed, and remove or migrate them to help us accelerate the process of phasing out.

- **v1 Container - No renewal requirement**: 
Please delete the container to save your cost and help us speed up the process of removing the v1 platform.

- **v1 Container - Renewal Required**: 
Since certain container features are only available for v2 platform (please check out [TWCC Portal (VIP) Feature Adjustment Description](#twcc-portal-vip-feature-adjustment-description)), please refer to [How to migrate v1 container to v2 platform?](#how-to-migrate-v1-container-to-v2-platform) and migrate your containers to get full user experience.


<!-- ## How to find whether a container is old or new?

You can find out whether a container is built on the v1 or v2 platform by the build time or the TWCC portal site.

- **Build time**
    - v1 Container: container bulit before 2022/9/x<sup>[1]</sup>
    - v2 Container: container bulit after 2022/9/x<sup>[1]</sup>

:::info
<sup>[1]</sup> To VIP user who have migrated their containers: 2022/9/xx is the time to separate the old and new containers.
:::

- **Portal - Container info page**
    - v1 Container: Show (v1) version
    > ![](https://i.imgur.com/ZRjInxR.png)
    
    > ![](https://i.imgur.com/MfSEW4N.png)

    - v2 Container: No version is showed
 -->

## How to migrate v1 container to v2 platform?

TWCC offers VIP users priority to migrate v1 containers via https://vip.twcc.ai, please use your account and login to the VIP site as the general procedure.

### Interactive Container

Please create a duplicate of your v1 container, and refer to the settings of v1 to create v2 container by the duplicate.

#### Step 1. Create a duplicate of v1 container

- Select "Interactive Container" in the service list.
- After entering the interactive container management page, click the v1 container to enter the details page.
- Please click "DUPLICATE" to create a duplicate of your v1 container and move to Step 2.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12328655518d001f13dad1ab83c880f6.png)

:::info
For more duplicate descriptions, please refer to [container duplicate](docs/ccs-interactive-container/user-guides/duplicate-backup/duplicates.md).
:::


#### Step 2. Migration operation: Create v2 container with duplicate

- Go back to the interactive container management page and [create new container with duplicate](docs/ccs-interactive-container/user-guides/duplicate-backup/duplicates.md), then you can migrate your v1 container to v2 platform.

:::info
You can refer to the v1 container details page to select the same image type, image, specification etc. as the v1 container.
:::

#### Step 3. Delete v1 container

- After confirming the container has been created with a duplicate (the status is changed to **`Ready`**), go back to the interactive container management page and **please delete the v1 container as soon as possible** to avoid generating additional costs.

### Scheduled Container

#### Step 1. Refer to v1 container setting

- Select "Scheduled Container" in the service list and click "Scheduled Container v1" on the left side to enter the `Scheduled Container Management (v1)` page.
- Select your v1 container and refer to the v1 container settings (image, type, schedule, command, ... etc.)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b7df096e44f91d605cdb92a295bde1c.png)


#### Step 2. Migration operation: Create v2 container

- Click "Scheduled Container" on the left side to enter the `Scheduled Container Management` page, and click "+CREATE" to create a v2 container. 


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f7960d203eb6e998c34c3f0483205d58.png)


- Select the same settings as the v1 container (image, basic settings, commands, scheduling, ... etc.)
- When the build is doned, you can keep your v1 container commands and migrate to v2 platform.

#### Step 3. Delete v1 container

- After confirming the v2 container has been created, go back to the scheduled container (v1) management page and **please delete the v1 container as soon as possible** to avoid generating additional costs.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19203698251bb5fb824e6f1d7fcd884c.png)


## TWCC Portal (VIP) Feature Adjustment Description

TWCC provides VIP users with priority for v1 container migration via https://vip.twcc.ai. The adjustments about container-related page of the VIP site for container platform update operations are listed below:

### Interactive Container

- **Management Page**
    - Click "+CREATE" on the management page, containers are all built on the v2 platform.
    - All v1 and v2 containers are listed in the management page. 
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1d1ca6f9ba5fb68e4e59fc8b96e43779.png)
- **Details Page**
    - **v1 Container**
        - The title is labeled as v1 container.
        - **Services of associating service port and disabling deletion protection are not provided**. Therefore, please [migrate to v2 container](#interactive-container) to get the full user experience.
        ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5660c85877d78d9dac6ad37b47f9524a.png)
    - **v2 Container**: All services are available.
- **Monitoring page on the left side**
    - Only shows the monitoring data of v2 container, no monitoring data of v1 container is displayed.
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12a2305b2e646acb870334925b6b037a.png)

### Scheduled Container

- **Management page**
    - **v1 Container**
        - Only displays v1 container.
        - **Services of creating and starting containers are not provided**. Therefore, please [migrate to v2 container](#scheduled-container) to get the full user experience.
        ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b83c3c33551a9a3a72cea34d4c83c777.png)

    - **v2 Container**
        - Only displays v2 container.
        ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b451721299c3f75b52c1d90bedd2f65b.png)
- **Details Page**
    - **v1 Container**
        - Labeled as a v1 container.
        - **Service of starting containers is not provided**. Therefore, please [migrate to v2 container](#scheduled-container) to get the full user experience.
        ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4fa9d27ee389dcb14a58079fc617c5ad.png)
    - **v2 Container**: All services are available.
- **Monitoring page on the left side**
    - Only shows the monitoring data of v2 container, no monitoring data of v1 container is displayed.
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_81d2c8f3dc5d0dd39423452bb654fc6f.png)