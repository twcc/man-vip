---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-vcs-setup-env-variable-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup The Environmental Variables

This document is to explain how to setup the environment variables you need to  dynamically adjust your application setting to meet your environment requirements when creat [<ins>Interactive Containers</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-zh) / [<ins>VCS Instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh) via the TWCC user site and TWCC CLI.

:::info
This function is only available for certain image:
- Interactive Containers：Most of them are available (If you need to use Matlab(public preview version) and Custom Image, please contact <ins> <a href = "mailto:isupport@twcc.ai">Technical Support Services</a> </ins>).
- VCS Instance：Linux image.
:::


e.g.：If you use [TensorFlow image](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-zh/%2F%40twccdocs%2Fccs-concept-image-tensorflow-zh) file to create a container, you can set the [`TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH`](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-user-guide/index.html#tf_disable_cudnn_rnn_tensor_op_math) environment variable to enable/disable the Tensor Core math when you create the container.

TensorFlow image enable Tensor Core math by default:

```
Environmental Variables Preset Values (Key=Value)：TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH=0
```

You can configure a value of `1` to set it to disable, when creating the container:

### Step 1. Create containers / VCS Instance and setup the environment variables

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

:::info
The following is an example of the Interactive Containers, VCS Instance is setup in the same way, setting the environment variables when [<ins>creating the instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh).s
:::



When you create the container, setup the environment variables in the "**Environment Variables**" page and [<ins>create the container</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-zh), then the deployment is done.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22347194982f56be9cb4f8fc69ba27de.png)

:::info
The environmental variables Key and Value are set in the following format (JSON), and multiple variables can be set at once：

```
    {
    "Key1":"Value-a",
    "Key2":"Value-b",
    "Key3":100
    }
```

:::



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

```
twccli mk ccs -envk TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH -envv 1  
```


  </TabItem>
</Tabs>

### Step 2. Confirm environment variables

[<ins>Connect to the container</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-connect-zh) and use the following command to confirm that the environment variables are imported to the container.

```bash
echo $BUFFER
```

:::info
[<ins>Connect to the VCS Instance</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-zh) and confirm that the environment variables are imported to the instance using the following commands.
<div></div>

```bash
echo $Key

# Enter your key, e.g., $TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH
```

:::