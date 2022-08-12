---
sidebar_position: 10
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-launch-tensorboard-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-launch-tensorboard-zh' 
---

# 在容器中啟動 TensorBoard - ML 實驗視覺化工具

為了增加機器學習模型辨識的準確度，觀察模型訓練變化、除去錯誤，都是必要但複雜的工作。而 TensorBoard 以網頁形式視覺化呈現 TensorFlow 模型資料的變化，可繪製多種圖形，讓資料科學家可輕鬆檢視並理解神經網路的結構與實驗結果，快速找到優化模型的解決方案。

TWCC 的容器環境中已為用戶安裝 TensorBoard，本篇文章將教學如何啟動 TensorBoard 工具。更多 Tensorboard 介紹與使用方法，請參考[ TensorFlow 官網](https://www.tensorflow.org/tensorboard)。

:::tip
建議在 TensorFlow 容器中啟動，較能發揮 TensorBoard 的功能，用於其他容器功能將受限。
:::

<br/>

## Step 1. 連線進入開發型容器

請參考[<ins>連線方式</ins>](https://man.twcc.ai/@twccdocs/SJlZnSOaN?type=view#%E4%BD%BF%E7%94%A8-Jupyter-Notebook)連線進入您的開發型容器。

<br/>


## Step 2. 啟動 TensorBoard 服務

輸入以下指令啟動 TensorBoard 服務。

```bash
tensorboard --logdir=~/logdir --port 5000
```

:::info
1. 您需要指定一個作為 TensorBoard 提供網頁服務使用的連接埠 (port)。<div></div>
在 TWCC 的容器環境中，有三個 port 可供用戶使用，分別是`5000`、`5001`、`5002`，在此以 port `5000` 做為範例。<div></div>
更多資訊可參考 [<ins>HowTo：設定開發型容器的服務埠</ins>](https://www.twcc.ai/doc?page=howto-ccs-config-service-port)。
3. 上述指令中的 `--logdir` 為 log 檔存放位置，您可自行設定，本文以 `~/logdir` 做為範例。
:::

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
$ wei1803106@cwfs6actr1611034753151-lkffh:~$ tensorboard --logdir=~/logdir --port 5000<div></div>
2021-01-19 13:39:58.453097: I tensorflow/stream_executor/platform/default/dso_loader.cc:49] Successfully opened dynamic librarylibcudart.so.11.0<div></div>
TensorBoard 2.3.0+nv at http://cwfs6actr1611034753151-lkffh:5000/ (Press CTRL+C to quit)
</div>

<br/>


## Step 3. 關聯容器服務埠

請關聯 TensorBoard 使用的 port 與容器 port，完成後即可透過您的本機端網頁使用 TensorBoard 服務。

- 在 TWCC 容器資訊的頁面，按下 「**關聯**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc73c5a924078d793f6476bfd4ac159c.png)


- 在關聯服務埠選視窗中，勾選 「**5000**」，並按下確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a27d0036301d96b66135fb60e033ba04.png)

- 確認後，容器資訊頁面中的 「**連接埠**」 會多一筆目標埠為 5000 及對外埠的資訊。以下圖為例，目標埠 5000 的對外埠為 53081。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1be6b67ca36f92a6c0333ab90e8a2995.png)

<br/>


## Step 4. 連線 Tensorboard 服務
- 在容器資訊頁面取得容器的 **「公用 IP」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_602fd844280ad7e91bab261494c10941.png)


- 打開網頁瀏覽器，在網址列輸入 **`容器 IP : 對外埠`**，依範例為 `203.xxx.xxx.xxx:53081` ，即可連線進入Tensorboard。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efab9cdf24eb0d8abbc3b75bd60e3eac.png)

<br/>


:::info
更多 Tensorboard 介紹與使用方法，請參考[<ins>TensorFlow 官網</ins>](https://www.tensorflow.org/tensorboard)。
:::