---
sidebar_position: 8
sidebar_label: 'Activity history'
slug: '/user-guides/twcc/general/activity-history'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-service-user-activity-history-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-service-user-activity-history-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View service activity history

The service functions you use on the TWCC portal and TWCC CLI are all done by calling the TWCC API. And the [service activity history](#view-the-service-activity-history) can be viewed on the TWCC portal and [download the log file](#download-the-log-file).

You can learn the following items from the service activity history:

- The member who started the operation<sup>[1]</sup>
- The method to start the operation (`GET`/`PUT`/`PATCH`/`POST`/`DELETE`)<sup>[2]</sup>
- Operated on which services
- Operation status
- Operation response time
- Operation start time

:::info

[1] **`Tenant User`** are only able to inquire their own usage records; **`Tenant Admin`** are able to inquire all members' usage records.

[2] TWCC APIs are categorized into 5 types of service methods ([<ins>Get to know about RESTful API </ins>](https://en.wikipedia.org/wiki/Representational_state_transfer)):
- `GET`：Get service information
- `PUT`：Update service overall information
- `PATCH`：Update partial service information
- `POST`：Create service
- `DELETE`：Delete service

:::

<br/>


## View the service activity history

### Step 1. Enter "History" page

After sign in to the TWCC portal, click "**User Name**"> "**History**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e329095d7fc25ee322edd617b9bc926b.png)

<br/>

### Step 2. Select project member (Tenant Users may skip)

If you are a Tenant Admin, please select your name, or the name of the member whose records you would like to view.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_382eb618f2c7c661f19fd0a2a535105b.png)

<br/>

### Step 3. View activity history

API activity history includes not only TWCC service activities, but also the records of projects, credits, etc., which covers a wide range of categories and items. The following are 2 examples of the records. For more details, please refer to **[TWCC API Document](https://man.twcc.ai/@twccdocs/api-main-zh)**.

<details>

<summary><b>Example 1 - Container Computer Service</b></summary>

- Activity history: as shown in the following table
- Record Description: The user made a request to **Create** (`POST`) **Container** (`k8s-taichung-default/sites`) at `2021/07/21 14:45`, and the API response time to the operation request is `0.746` seconds, the request is successful (`201`), and the system is about to start creating the container.

| Method | Path | Status Code |Response time (sec) |Request Time |
| -------- | -------- | -------- |-------- |-------- |
| POST    | http://apigateway.twcc.ai:8000/api/v2/k8s-taichung-default/sites/     | 201     |0.746     |2021-07-21 14:45    |

</details>

<div style={{'height':'8px'}}></div>

<details>

<summary><b>Example 2 - Virtual Compute Service</b></summary>

- Activity history: as shown in the following table
- Record Description: The user made a request to **Delete** (`DELETE`) **Virtual compute entity (ID: 1986546)** (`openstack-taichung-default-2/sites/1986546`) at `2021/07/21 22:20`, and the API response time to the operation request is `0.263` seconds, the request is successful (`200`), and the system is about to start deleting the instance.

| Method | Path | Status Code |Response time (sec) |Request Time |
| -------- | -------- | -------- |-------- |-------- |
| DELETE    | 	http://apigateway.twcc.ai:8000/api/v3/openstack-taichung-default-2/sites/1986546/     | 200     |0.263     |2021-07-21<br/>22:20    |

</details>

<br/>


## Download the log file

The TWCC portal can display up to 1,000 pieces of the latest data at a time, and older data will no longer be viewed. You can click "**Export Report**" to save a record of the moment.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_788bd83e639bf54045d4f0c2b0b0729d.png)

<br/>


:::tip

Due to the encoding issue, after the report is downloaded, clicking the file directly to open it with Excel may result in garbled characters.

Please open `Excel` > select "**Data**" > click "**From Text/CSV**" to import the log file > File Origin select "**65001:Unicode (UTF-8)**" > after loading, you can view it normally.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d21f408b2e75897830dc30f2cc8b7af.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19c1b3a40d77c4a7c60bf079b25e5e16.png)

:::