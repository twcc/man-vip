---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Container ports (service ports)

TWCC interactive containers provide 5 **target ports**, port 22, 8888, 5000, 5001, 5002, for external services running on the containers.

By default, the container has SSH server run on port 22 and Jupyter Notebook run on port 8888 with association done automatically, so you can use both ways to connect and operate the container immediately after the container is created.

The custom **target ports** are: 5000, 5001, and 5002. You can set the daemon of the service running on a container to one of the target ports, and associate it with the public port. After that, the system will configure a corresponding **public port (50000 ~ 60000)**. You can expose your service with using the public IP and the public port. (e.g., [AI inference](https://man.twcc.vip/en/docs/ccs/tutorials/tensorflow-mnist-trainign) or [Website service](https://man.twcc.vip/en/docs/ccs/tutorials/configure-service-ports))

<br/>


## Prerequisites
- Create [Interactive Containers](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/create-an-interactive-container).
- If you choose to use TWCC portal, after the container is created, please click the container you want to connect to on the **Interactive Container Management** page and enter the **Interactive Container Details** page.
- If you choose to use TWCC CLI operation, please obtain the [Container's ID](https://man.twcc.vip/en/docs/ccs/user-guides/management-and-monitoring/manage-your-container/#view-the-information) first.

<br/>


## View service port information

By default, SSH runs on target port 22; Jupyter Notebook runs on target port 8888. (Public ports are all allocated by the system).

The following methods indicates how to view the external service port information associated with the container.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

Scroll down the page to the **Networks & Connection** section > **Port**. The associated service port information is displayed at the bottom left.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9f214fd51f5749ee8b9ee6dee23345e8.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

View the service port information associated with the container with ID **`886330`**.

```bash
twccli ls ccs -p -s 886330
```

</TabItem>
</Tabs>

<br/>


## Associate the service port

You can associate the container with **target ports** 5000, 5001, 5002, and the system will configure a corresponding **public port (50000 ~ 60000)**. You can provide the external services through this mechanism. (e.g., [AI inference](https://man.twcc.vip/en/docs/ccs/tutorials/tensorflow-mnist-trainign) or [Website service](https://man.twcc.vip/en/docs/ccs/tutorials/configure-service-ports)).

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- Click "**ASSOCIATE**" service port :arrow_right: Select the target port of the service daemon `5002` :arrow_right: Click  "**OK**"

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d1e8b0a33edbe2ee0bdc3b0dd9171b3.png)
        
- After that, the system will configure a **public port** (`54708`) corresponding to the target port  (`5002`).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_714db4fec691344f598c4c8c9fce7a8f.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Associate the container (ID `886330`) with the target port `5000`.
```bash
twccli net ccs -p 5000 -open -s 886330
```

- After association, enter the [view command](#view-service-port-information) to view the public port allocated by the system.

</TabItem>
</Tabs>

<br/>


## Dissociate the service port

If the container no longer provides external services, you can dissociate the service port.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

In the Interactive Container Details page, click "<b>DISSOCIATE</b>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6423c9d5a5250258bf5d723d6c89c7b6.png)

Then check the port number to be dissociated, and click **OK** to successfully dissociate.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60d9a8d43ca282904c175f37cb94af93.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

Dissociate the container (ID `886330`) with the target port `5000`.
```bash
twccli net ccs -p 5000 -close -s 886330
```

</TabItem>
</Tabs>