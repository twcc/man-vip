---
sidebar_position: 7
---

# 使用 TensorFlow 訓練 MNIST 手寫數字辨識模型


以下教學如何在 TWCC 建立一個開發型容器，並使用 Jupyter Notebook 的工作環境，進行 MNIST (手寫數字辨識資料集)的 AI 訓練

### Step 1. 登入 TWCC

- 若尚無帳號，請參考 [註冊 TWCC 帳號](https://www.twcc.ai/doc?page=register_account)

### Step 2. 建立開發型容器

- 請參考 [開發型容器](https://www.twcc.ai/doc?page=container#建立開發型容器) 建立開發型容器

:::info
映像檔類型請選擇 TensorFlow、映像檔選擇 `tensorflow-19.11-tf2-py3:latest`、硬體選擇支援 1 顆 GPU 的設定即可
:::

### Step 3. 連線容器、下載訓練程式

- 使用 Jupyter Notebook 連線容器，開啟 Terminal

:::info
:book: 參見[使用 Jupyter Notebook](https://www.twcc.ai/doc?page=container#使用-Jupyter-Notebook)
:::

- 輸入以下指令，將 [NCHC_GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) training 程式下載至容器

```bash=
git clone https://github.com/TW-NCHC/AI-Services.git
```

### Step 4. 進行 AI 模組訓練

- 回到 Jupyter Notebook 首頁，點進 「AI-Services/Tutorial_One」，點擊右側的「New」再點選內部的「Python3」以開啟 notebook


![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c6cc097cc5179a55edad53593acfd65a.png)


- 開啟Notebook後請將原目錄底下的 「Keras_MNIST.txt」 內的程式碼複製到 Notebook 內


![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e93523d5051f5d2e314a59c466e77846.png)


- 將程式碼複製完後，點選「Run」按鈕即可開始訓練


![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c485e0eddf052f8ebbb2654f0ac81f3.png)


- 訓練的結果會顯示在程式下方


![image alt](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e75db6ac0a38f206b58096367ec24e5f.png)

