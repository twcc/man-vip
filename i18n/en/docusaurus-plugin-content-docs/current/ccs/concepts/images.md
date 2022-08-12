---
displayed_sidebar: ccs_framwork_image
sidebar_label: '容器映像檔'
sidebar_position: 3
title: 映像檔概觀
sync_original_production: 'https://man.twcc.ai/@twccdocs/ccs-concept-image-overview-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/ccs-concept-image-overview-en' 
---


# TWCC Container Image overview

TWCC provides a variety of [NGC](https://www.nvidia.com/zh-tw/gpu-cloud/containers/) optimized container images for AI computing and AI training frameworks. Working with the bottom layer of TWCC GPU resources, container images help containers show excellent computing performance.

The description of the container image type and name is as follows. You can choose the image type on the left to learn about the AI training framework and package version information of each TWCC image.

<br/>

## Image type

- **TWCC Image**

    TWCC cooperates with [NGC](https://www.nvidia.com/en-us/gpu-cloud/) to provide users with the following available container image types:

    TensorFlow, PyTorch, CUDA, Matlab, Caffe, CNTK, MXNet,  Caffe2, TensorRT, Triton Inference Server, Theano, Torch, DIGITS, RAPIDS, Clara Train SDK.

- **Custom Image**

    After creating a container with the above TWCC image, you can deploy the required package and create a [duplicate](https://www.twcc.ai/doc?page=container) to package the environment into a Custom Image, then you are able to create the same environment repeatedly.

<br/>

## Image name description

- Example：`tensorflow-20.11-tf2-py3:latest`
- Description：**`AI Training framework`**-**`NGC release date (yy.mm)`**-**`Minor version defined by NGC`**-**`Python version`**:**`The latest adapted version of TWCC`**。

<br/>

:::info
- Most of the images correspond with the above name description, but a few images are additionally marked with the applicable package name, like `digits-19.08-tensorflow:latest`; or use the original version name of the image, like `matlab-r2019b:latest`.
- `v1` indicates the optimized version of TWCC.
- You can customize the identification tag for Custom Image instead of `latest` displayed in the image name.
:::
