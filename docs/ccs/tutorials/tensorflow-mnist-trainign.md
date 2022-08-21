---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-tensorflow-inception-v3-port-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-tensorflow-inception-v3-port-zh'
---

# 使用 TensorFlow Inception V3 訓練影像辨識模型、生成推論引擎

深度學習分為兩階段：**訓練**與**推論**，前者需對大量的資料數據進行無數次的計算，訓練並產生模型；而後者則是將模型對外提供辨識服務。

模型訓練需要大量的運算資源，才能取得辨識效果良好的模型，TWCC 提供您容器解決方案，使用 GPU 資源運算，可快速生成模型。


本文將一步步教學如何透過 [TWCC 開發型容器](https://www.twcc.ai/doc?page=container)，使用 GPU 資源<sup>[1][2]</sup>，並搭配預設儲存系統–[高速檔案系統 (HFS)](https://www.twcc.ai/doc?page=hfs) 作為訓練資料與模型之存取空間，利用 [TensorFlow Inception V3](https://www.tensorflow.org/api_docs/python/tf/keras/applications/InceptionV3) 卷積類神經網路架構、[CIFAR-10 資料集](https://www.cs.toronto.edu/~kriz/cifar.html) 進行貓、狗影像辨識模型訓練，並生成推論引擎、對外提供圖片辨識服務。

:::info
- [1] 可建立最多含 8 GPUs 的容器，請參考[<ins>規格與定價</ins>](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS)。
- [2] 若需使用 8 GPUs 以上的資源，您可以使用 [<ins>TWCC 台灣杉二號 (命令列介面)</ins>](https://www.twcc.ai/doc?page=hpc_cli)服務來完成工作。
:::


## Part 1. 影像辨識模型訓練

### Step 1. 登入 TWCC

若尚無帳號，請參考 [註冊 TWCC 帳號](https://www.twcc.ai/doc?page=register_account)

### Step 2. 建立開發型容器

請參考 [開發型容器](https://man.twcc.ai/s/SJlZnSOaN#%E5%BB%BA%E7%AB%8B%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A8) 並依據下方設定，於 TWCC 建立開發型容器：

```
映像檔類型： TensorFlow 18.12
映像檔版本： 支援 Python 2 的版本
基本設定：   型號 c.super 
```

### Step 3. 連線容器、下載訓練程式

- 參考 [連線容器](https://www.twcc.ai/doc?page=container#連線使用方式)，使用 Jupyter Notebook 或 SSH 連線進入容器之預設儲存空間


- 輸入以下指令，將 [TWCC GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) Inception v3 影像模型訓練的架構程式，下載至容器

 ```bash
git clone https://github.com/TW-NCHC/AI-Services.git
 ```


  
### Step 4. 進行 AI 模型訓練
 
 - 進入 「**Tutorial_Three**」目錄
 
 ```bash
 cd AI-Services/Tutorial_Three
 ``` 
 
 - 執行模型訓練
 
 ```bash
bash V3_training.sh --path ./cifar-10-python.tar.gz
 ``` 

- 在 Terminal 看到以下訊息，表示即將開始訓練模型


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_73e007a0bba2a9291a54bd03dd260893.png)

 
- 在訓練過程中，可在「**開發型容器詳細資料**」頁面可檢視 CPU/GPU、記憶體與網路的資源使用狀況

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b167cdd9099d947b9b1a145318789b9b.png)


 
- 模型訓練完成，將會存放在路徑： `AI-Services/Tutorial_Three/inceptionv3/train/weights` 


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a714f02d570256125e5b2ab9c92234c.png)



## Part 2. 生成推論辨識引擎

以下教學如何將訓練好的模型，生成推論引擎，並對外提供圖片推論、辨識的網頁服務。

### Step 1. 連線容器

請再次 [連線進入容器](https://www.twcc.ai/doc?page=container#連線使用方式)

    
### Step 2. 生成推論辨識引擎 
 
- 進入 Tutorial_Three 目錄

```bash
cd AI-Services/Tutorial_Three
``` 
 
- 開啟 AI 推論引擎的服務

```bash
bash V3_inference.sh
``` 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_309b6636ffb075f5de28ceeca0b7bac9.png)


### Step 3. 圖片辨識網站

- 請先至開發型容器詳細資料頁 :arrow_right: 點選「**關聯**」服務埠 :arrow_right: 勾選「**5001**」 :arrow_right: 再按下確定便可開啟 HTTP 網頁服務端點

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e7c40c0c9fce17a0187f1f12be330b80.png)


- 開啟瀏覽器 :arrow_right: 在網址列輸入 **`容器公用IP:對外埠`** (如下，可於容器詳細資料頁查詢) 便可開始使用 AI Inference 的服務

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c4c4b345e4761709116ae1c55c89590e.png)


- 點選「**選擇檔案**」選擇要進行辨識內容的圖片檔案，並點選「**Upload**」上傳圖片

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e2799644668d5a4edf5d6e228515e8bd.jpg)


- 以[貓咪圖片](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8dc7172e7891a230d3932a7e987b55e1.jpg)作為測試範例，圖片辨識的結果與相似度數值顯示在瀏覽器，與 Egyptian_cat (0.49293482) 最為相似


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b8464fe7cd03c895eb918b64a8778633.jpg)


### Step 4. 刪除容器，回收資源


**容器建立後即持續計費**，若不再需要執行訓練與推論，您可以從 TWCC 「**開發型容器管理**」頁，勾選容器、點選「**刪除**」，回收資源並停止計費。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a18ff79ec4afc015c2129eb96b44ccb0.png)

