---
sidebar_position: 5
---

# 確保計算工作能持續不中斷


- 為解決直接以 SSH 方式連線操作容器，計算工作會因網路連線而中斷的問題，以下提供三種解決方法，確保計算工作能持續在背景進行

## Method 1. 使用 Jupyter Notebook

### Step 1. 在 TWCC 點入已建立的開發型容器

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_248954d46886713138afa6f68486fa40.png)



### Step 2. 開啟 Jupyter Notebook 連線容器

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c4b11ac00cb6e7dd5f7386b18c5a57ba.png)



### Step 3. 點入 Terminal 以操作容器
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a027717a19eb85582f5f893ec2ed999c.png)



### Step 4. 下指令執行程式
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_92e9382801d6dd746faeffa8043ddb86.png)


:::info
:bulb: 上方網址列會顯示 Terminal 的編號： `terminals/1` 後續查看將會使用到
:::
### Step 5. 查看執行程式狀況
- 若關閉 Terminal，程式仍會在背景持續執行
- 欲查看程式運行狀況，在 Jupyter Notebook 點選 「Running」，下方點選欲檢視的 Terminal 編號
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4acc84b64bb17c41533b4718a74bcc2.png)


- 便可再次進入 Terminal 查看程式執行狀況
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_62ab66f669dfb35b75aaec84c0ee1993.png)




## Method 2. 使用 Screen 

### Step 1. 安裝 Screen

- SSH 連線進入容器後，安裝 Screen 

```bash=
sudo apt-get install screen
```

:::info
:book: 參見 [<ins>使用 SSH 登入連線</ins>](https://www.twcc.ai/doc?page=container#使用-SSH-登入連線)
:::
:::info
:warning:注意：若安裝出現 ` E: Unable to locate package screen`，請先執行以下更新指令，再安裝 screen
```bash=
sudo apt-get update
```
:::


### Step 2. 進入 Screen 環境
```bash=
screen
```
- 進入後的畫面，閱讀說明

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47056d9911ee362ef05bc9e6ac33febc.png)


- 按「Return」鍵，便可開始下指令

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1b9bebfacbf19334f64d7f9c5b4cd7b.png)



### Step 3. 在 Screen Shell 內執行程式

- 執行範例如下

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0017c6102df15b490d4492adf889470a.png)



### Step 4. 卸離 (detach) screen shell

- 在程式執行中，按下 `ctrl + a + d`，便會出現以下卸離成功的訊息 (紅框內為 screen shell ID)，程式便可在背景持續進行，SSH 斷線也不會受影響

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_017ef5c98429becb339bd36d43cdc7d2.png)



### Step 5. 查看執行程式

- 欲再次進入該 screen shell，輸入以下指令，便可操作容器、查看程式狀態

```bash=
screen -r [A chunk of screen shell ID]
```
:::info
:book: [<ins>其他 Screen 相關指令</ins>](https://blog.gtwang.org/linux/screen-command-examples-to-manage-linux-terminals/)
:::

## Method 3. 使用 Linux nohup 指令

### Step 1. SSH 連線進入容器後，執行程式

- 輸入以下指令便可讓程式在背景執行

```bash=
nohup [/code_path] &
```
:::info
:book: 參見 [<ins>使用 SSH 登入連線</ins>](https://man.twcc.ai/s/SJlZnSOaN#%E4%BD%BF%E7%94%A8-SSH-%E7%99%BB%E5%85%A5%E9%80%A3%E7%B7%9A)
:::
- 範例如下，同時會顯示 job ID (紅框內容：job ID = 1)，並說明程式的輸出檔將會呈現在「nohup.out」檔案裡 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d220eceddf16a2cc6c0e29a2af8b569b.png)


### Step 2. 查看輸出內容

- 若要查看程式最新輸出內容，輸入以下指令

```bash=
tail nohup.out
```
- 輸出內容顯示如下

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a118f65cfb32d6b14fb291a322ca56b2.png)



:::info
:book: [<ins>其他 nohup 相關指令</ins>](https://blog.gtwang.org/linux/linux-nohup-command-tutorial/)
:::
