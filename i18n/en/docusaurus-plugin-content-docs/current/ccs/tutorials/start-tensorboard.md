---
sidebar_position: 9
---

# Visualize data distribution-implement Linear-Regression with TensorFlow


## 1. Using Jupyter Notebook (Python)

### Step 1. Sign in TWCC

- If you don’t have an account yet, please refer to [Sign up for a TWCC account](https://www.twcc.ai/doc?page=register_account).

### Step 2.  Create an Interactive Container

- Please refer to [Interactive Container](https://www.twcc.ai/doc?page=container#建立開發型容器) to create a Interactive Container.
- Please select TensorFlow for the image type (For image, please select a version with Python 2 before 19.08 (`not including 19.08`)).


### Step 3. Connect to the Container

- Use Jupyter Notebook to connect the container and add Python 2 notebook

:::info
:book: See [Connection method](https://www.twcc.ai/doc?page=container#連線使用方式)
:::


### Step 4. Execute Linear-Regression program

- Copy and paste the following code to Jupyter Notebook

```python
%matplotlib inline
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
# 用 numpy 亂數產生 100 個點
x_data = np.random.rand(100).astype(np.float32)
y_data = x_data * 0.1 + 0.3
# Try to find values for W and b that compute y_data = W * x_data + b
# (We know that W should be 0.1 and b 0.3, but TensorFlow will
# figure that out for us.)
W = tf.Variable(tf.random_uniform([1], -1.0, 1.0))
b = tf.Variable(tf.zeros([1]))
y = W * x_data + b
# Minimize the mean squared errors.
loss = tf.reduce_mean(tf.square(y - y_data))
optimizer = tf.train.GradientDescentOptimizer(0.2)
train = optimizer.minimize(loss)
# Before starting, initialize the variables.  We will 'run' this first.
init = tf.global_variables_initializer()
# Launch the graph.
sess = tf.Session()
sess.run(init)
# Fit the line.
for step in range(201):
    sess.run(train)
    if step % 20 == 0:
        print(step, sess.run(W), sess.run(b))
        plt.plot(x_data, y_data, 'ro', label='Original data')
        plt.plot(x_data, sess.run(W) * x_data + sess.run(b), label='Fitted line')
        plt.legend()
        plt.show()
# Learns best fit is W: [0.1], b: [0.3]
```

- Click **Run**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d7aa8421020677a326adb22f508f0ef4.png)



### Step 5. Visualize data distribution

- TensorFlow will slowly find the weight value of fitting and draw a linear regression line

:::info 0 [-0.7029411] [0.33094117]
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fb0b79090def125ce1173c78dad6362a.png)
:::
:::info 100 [0.03479815] [0.33622062]
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_257640a2d6ddf46bc0c7eea9ea26efc8.png)
:::
:::info 200 [0.09321669] [0.30376825]
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d2ff561591c061432b01fc7728eca4c.png)
:::

## 2. Using SSH or Jupyter Notebook (Terminal) for connection

:::info
:bulb: The following example is from [TensorFlow Official Tutorial](https://www.tensorflow.org/api_guides/python/regression_examples)
:::

### Step 1. Using SSH to log in or open Jupyter Notebook (Terminal)

:::info
:book: See [Using Jupyter Notebook](https://www.twcc.ai/doc?page=container#使用-Jupyter-Notebook)
:::

### Step 2. Download the TensorFlow program from GitHub

```bash
git clone https://github.com/tensorflow/tensorflow.git
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94baa375f655c1c8a10cecd3ca0c0d4b.png)


### Step 3. Switch to branch Tensorflow 1.10

```bash
cd tensorflow && git checkout r1.10
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b54848bfd66229b4d336c2a804a4584.png)



### Step 4. Switch to the example/regression directory

```bash
cd tensorflow/examples/get_started/regression
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a7ccd02f252fa2873aa6b5ad6c7f3f3.png)


### Step 5. Run the sample program using Python commands

```bash
python linear_regression.py
```

- The following message will be output during the computing:

    - Check point directory: You can use the TensorBoard tool to visualize neural networks and analyze training trends
    - The loss value after every 100 iterations, which helps to determine whether the model training has converged

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c66fb2a3b252f1eac4ef50818c90af1.png)