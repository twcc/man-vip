---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Life Cycle Management

Life Cycle Management provides a variety of rules according to file type, name, sizes, creation date and idle period. Life Cycle Management can perform actions on files, including **Move to Cold Storage**, **Move to Hot Storage** and **Deletion**.

## Edit Life Cycle Rules 
* On **File Storage Management** page, move cursor to <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> button on right side of dataset, and click **EDIT LIFE CYCLE RULES**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dceb595fc66961bb7ec5a0d8ed62d95d.png)

* Enter to **Life Cycle Rules** to setup:
    * File Name: Enter file name and seperate using comma.
    * Extension: Enter file extension and seperate using comma.
    * File size: Enter file size to larger than given numbres.
    * File creation date: Enter date on the file created
    * Files that unchanged for a long time: Value(days).
* Tick multiple rules and click **Trial Results** button. The system will calculates the files which meet the criteria.

:::info
If `File Name` and `Extension` are both ticked, files that meet the criteria will be performed designated action.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_424fe8ad715c4a7199efe64f009c076d.png)


* Then select action: Move to Hot Storage, Move to Cold Storage or Deletion, and click **Update**.

:::info
It will takes up to 24 hours to take effect after rule creation or modification.
:::

* After the update, the settings will be applied to the dataset and life cycle rules will be enabled immediately. Click **STOP** to stop the life cycle rules and the settings will be remained.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a439505a69374b15245e1077eb3eb7ab.png)