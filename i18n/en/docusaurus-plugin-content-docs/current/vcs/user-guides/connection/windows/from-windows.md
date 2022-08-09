---
sidebar_position: 1
title: '本機為 Windows'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to Windows instances from Windows

After finished [Preparation and Obtain connection information](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en), please refer to the following method to connect to the Windows instance ( local machine as Windows).

:::info
The created instance will enter the **`Ready`** state, and it will take some time before you can connect remotely to it.
:::

:::caution
1. Due to frequent information security incidents, if your connection comes from the following countries, we will disable your remote connection to Windows instances (port: 9833): China, Germany, France, South Korea, Netherlands, Poland, Russia. If you need to connect to TWCC Windows instance, please contact Customer Service.
2. You cannot connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly recommend that you do not change the network interface card settings. Please beware when operating and deploying.
:::

## Connection method


- **Step 1.** Open the **Remote Desktop Connection** program ( Windows built-in tool, or you can download it from the official Microsoft website).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_684a5e256e0fa4a4941d16eec10433e6.png)


- **Step 2.** Enter the public IP address , port number and user name of the instance, and then click **Connect**.
    
:::info
Remember to add the port number `9833` after the public IP. E.g., 203.145.222.23`:9833`.
:::
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1373c3c43427837667e57a967250fc0.png)

- **Step 3.** Enter the password, and your connection is successful!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_85a08f020c91828bcd92f5d2800af23a.png)

:::info
Account: administrator<br/>
Password: User-defined VCS instance password
:::