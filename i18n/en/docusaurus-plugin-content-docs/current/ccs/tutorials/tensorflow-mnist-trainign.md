---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-tensorflow-inception-v3-port-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-tensorflow-inception-v3-port-en'
---

# Use TensorFlow Inception V3 to train image recognition model and generate inference engine

Deep learning is divided into two stages: **Training** and **Inference**. The former requires countless computing on a large amount of data to train and generate models, while the latter provides identification services by using model. the model.

Model training requires a lot of computing resources to obtain a model with a good identification accuracy. TWCC provides you with a container solution that uses GPU resources for computing and can quickly generate models.


This article will demonstrate step by step how to uses [TWCC Interactive Container](https://www.twcc.ai/doc?page=container), through GPU resources<sup>[1][2]</sup> and with the collocation of default storage system –[Hyper File System (HFS)](https://www.twcc.ai/doc?page=hfs) as a storage space for training data and models, using [TensorFlow Inception V3](https://www.tensorflow.org/api_docs/python/tf/keras/applications/InceptionV3) convolutional neural network architecture, and [CIFAR-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html) to run the model training of cat and dog image recognition, generate an inference engine, and provide external image recognition services.

:::info
- [1] You can create a container with up to 8 GPUs. For more information, please refer to [<ins>Specifications and pricing</ins>](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS).
- [2] If you need to use resources with more than 8 GPUs, you can use the service of [<ins>TWCC Taiwania 2 (HPC CLI)</ins>](https://www.twcc.ai/doc?page=hpc_cli) to finish the work.
:::


## Part 1. Image recognition model training

### Step 1. Sign in TWCC

If you don’t have an account yet, please refer to [ Sign up for a TWCC account](https://www.twcc.ai/doc?page=register_account).

### Step 2. Create a TWCC Interactive Container

Please refer to [Interactive Container](https://man.twcc.ai/s/SJlZnSOaN#%E5%BB%BA%E7%AB%8B%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A8) and based on the following settings, create a Interactive Container in TWCC:

```
Image type:     TensorFlow 18.12
Image version:  support Python 2
Basic Configuration: type c.super 
```

### Step 3. Connect to the container, download the training program

- See [Connection method](https://www.twcc.ai/doc?page=container#連線使用方式), and using Jupyter Notebook or SSH to connect to the default storage space of the container.


- Enter the following command to download the framework program of [TWCC GitHub Inception v3](https://github.com/TW-NCHC/AI-Services/tree/V3Training) for image recognition model training to the container.

```bash
git clone https://github.com/TW-NCHC/AI-Services.git
```


  
### Step 4. Conduct AI model training
 
 - Enter the **Tutorial_Three** directory
 
```bash
 cd AI-Services/Tutorial_Three
``` 
 
 - Perform model training
 
```bash
bash V3_training.sh --path ./cifar-10-python.tar.gz
``` 

- The following message in the terminal indicates that the training job is about to start.

:::caution
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_73e007a0bba2a9291a54bd03dd260893.png)
:::

 
- During the training, you can view the resource usage of CPU/GPU, memory, and network on the **Interactive Container Details** page

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ac448244502db32c89da844e30e525bf.png)


 
- After the model training job completes, the model will be stored in the path: `AI-Services/Tutorial_Three/inceptionv3/train/weights` 

:::caution
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a714f02d570256125e5b2ab9c92234c.png)
:::


## Part 2. Build an inference engine

The following tutorial demonstrates how to use the trained model to build an inference engine and provide web services for image recognition.

### Step 1. Reconnect to the container

See [Reconnect to the container](https://www.twcc.ai/doc?page=container#連線使用方式).

    
### Step 2. Build an inference engine
 
- Enter the Tutorial_Three directory

```bash
cd AI-Services/Tutorial_Three
``` 
 
- Enable the AI inference engine service

```bash
bash V3_inference.sh
``` 
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_309b6636ffb075f5de28ceeca0b7bac9.png)


### Step 3. Image recognition website

- Please go to the detailed information page of the Interactive Container, first:arrow_right: click on the **Associate** service port :arrow_right: select **5001** :arrow_right: click OK to open the HTTP web service endpoint

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fd0f4028883bfaca0f24e08a3eaf4012.png)


- Open the web browser and enter **`Container IP: Public Port`** in the address bar (as shown below on the Interactive Container Details page), you can starts to use the AI inference service.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66a4b466dca3684f31f39305a66cff2d.png)


- Click **Select File** to select the image file which content is to be recognized, and click **Upload** to upload the image.

:::caution

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b40825dec8c84270d4f3575d8a832fd0.png)

:::

- Using [Cat pictures](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8dc7172e7891a230d3932a7e987b55e1.jpg) as a test example, the result of image recognition and the similarity value are displayed in the browser, which is the most similar to Egyptian_cat (0.49293482)


:::caution
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2ac40d331173b3fc77b5d9acb5959f9b.png)
:::


### Step 4. Delete the container and recycle resources


**After the container is created, it will continue to be billed**. If you no longer need to perform training and inference, you can select the container from the TWCC **Interactive Container Management** page, click **Delete**, and recycle resources and stop the billing.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cfc738150d4e438c51bfae3418c4fa60.png)