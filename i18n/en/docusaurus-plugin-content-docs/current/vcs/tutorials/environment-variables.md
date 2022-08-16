---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-vcs-setup-env-variable-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set environment variables

In this document, we will explain how to set the required environment variables which can adjust the settings of the program to meet your needs when creating [<ins>interactive container</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-en) / [ <ins>VCS instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en).


:::info

This function only applies to certain images:
- Interactive container: most of images can be used. (But, if you are using Matlab (Preview) or custom image, please contact <ins> <a href = "mailto:isupport@twcc.ai">Technical Support</a > </ins>).
- VCS instance: Linux images

:::


For example, if you select [TensorFlow image](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-en/%2F%40twccdocs%2Fccs-concept-image-tensorflow-en) to create the container, you can set [`TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH`](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-user-guide/index.html#tf_disable_cudnn_rnn_tensor_op_math)environment variables to enable/disable the Tensor Core math when creating the container.

TensorFlow image enables Tensor Core math by default:

```
The default value for the environmental variable (Key=Value): TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH=0
```
If you need to disable this function, you can assign `1` to the variable when creating the container:


### Step 1. Create a container/VCS instance and set environment variables

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

:::info
The following example uses a container for instruction. You can also use the same method to set the environmental variables when [<ins>creating a VCS instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en).
:::





When [<ins>creating a container</ins>](https://man.twcc.ai/@twccdocs/guide-ccs-create-en), set the environment variables in the **ENVIRONMENT VARIABLES** tab and then complete the creation and deployment task..

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a59deaba5daa077c74e5e4e4c319117d.png)


:::info

The key and value of environment variables are written in JSON format (see the figue below), so you can set multiple variables at one time:

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


### Step 2. Confirm the environment variables are set

[Connect to the container](https://man.twcc.ai/@twccdocs/guide-ccs-connect-en) and execute the following command to confirm that the environment variables have been set into the container.

```bash
echo $BUFFER
```

:::info
[<ins>Connect to the VCS instance</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-en) and execute the following command to confirm that the environment variables have been set into the instance.


```bash
echo $Key
# Enter your key, e.g., $TF_DISABLE_CUDNN_RNN_TENSOR_OP_MATH
```

:::