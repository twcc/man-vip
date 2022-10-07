---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-tensorflow-mnist-trainign-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-tensorflow-mnist-trainign-en' 
---

# Use TensorFlow to train handwritten digit recognition model on MNIST dataset


The following instruction demonstrates how to build an Interactive Container in TWCC and using Jupyter Notebook's working environment to run MNIST (Handwritten digit recognition dataset) AI training

### Step 1. Sign in TWCC

- If you don’t have an account yet, please refer to [Sign up for an TWCC account](https://www.twcc.ai/doc?page=register_account).

### Step 2. Create a TWCC Interactive Container

- Please refer to [Interactive Container](https://www.twcc.ai/doc?page=container#建立開發型容器) to create a Interactive Container.

### Step 3. Connect to the container and download the training program

- Use Jupyter Notebook to connect to the container and open Terminal.

:::info
:book: Refer to [Using Jupyter Notebook](https://www.twcc.ai/doc?page=container#使用-Jupyter-Notebook).
:::

- Enter the following command to download the [NCHC_GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) training program to the container.

```bash=
git clone https://github.com/TW-NCHC/AI-Services.git
```

### Step 4. Conduct AI module training

- Go back to the Jupyter Notebook homepage, click **AI-Services/Tutorial_One**, click **New** on the right and then click on the internal option **Python3** to open the notebook.

![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_741c6409b790a637a6fc3a5b85fe4759.png)

- After opening the Notebook, copy the code in **Keras_MNIST.txt** under the original directory to the Notebook.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4631ce4a4dfff5fad7874e08041d5e76.png)

- After copying the code, click the **Run** button to start training.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b80831b219a52644c473d5c28f63c23.png)

- The training results will be displayed below the program.

![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e75db6ac0a38f206b58096367ec24e5f.png)