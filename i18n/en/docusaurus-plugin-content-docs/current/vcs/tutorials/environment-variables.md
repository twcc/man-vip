---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-vcs-setup-env-variable-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set environment variables

In this document, we will explain how to set the environment variables you need to dynamically adjust your application setting to meet your environment requirements while creating [<ins>Interactive Containers</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-zh) / [<ins>VCS Instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh) via TWCC portal or TWCC CLI.


:::info
This function is only available for certain images:
- Interactive Containers：Most of them are available (If you need to use Matlab (public preview version) or Custom Image, please contact <a href = "mailto:isupport@twcc.ai"><ins>Technical Support</ins></a>).
- VCS Instance：Linux image.
:::


For example, if you create the container with [TensorFlow image](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-en/%2F%40twccdocs%2Fccs-concept-image-tensorflow-en), you can set the environment variable [`TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH`](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-user-guide/index.html#tf_disable_cudnn_rnn_tensor_op_math) to enable/disable the Tensor Core math when creating the container.

TensorFlow image enables Tensor Core math by default:

```
The default value for the environmental variable (Key=Value): TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH=0
```
If you need to disable this function, you can assign `1` to the variable when creating the container:

<br/>


### Step 1. Create a container/VCS instance and set environment variables

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

:::info
The following example uses a container for instruction. You can also use the same method to set the environmental variables when [<ins>creating a VCS instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en).
:::


When [<ins>creating a container</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-en), set the environment variables in the **ENVIRONMENT VARIABLES** tab and complete the creation and, then the deployment is done.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a59deaba5daa077c74e5e4e4c319117d.png)


:::info

The key and value of environment variables are written in the following format (JSON), so you can set multiple variables at once:

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

<br/>


### Step 2. Check environment variables

[Connect to the container](https://man.twcc.ai/@twccdocs/guide-ccs-connect-en) and use the following command to confirm that the environment variables are imported to the container.

```bash
echo $BUFFER
```

:::info
[<ins>Connect to the VCS instance</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-en) and confirm that the environment variables are imported to the instance using the following commands.
```bash
echo $Key
# Enter your key, e.g., $TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH
```
:::