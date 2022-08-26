---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-config-service-port-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-config-service-port-zh'
---

# 設定開發型容器的服務埠

TWCC 容器採用 Port-Forwarding 技術，可將外部連線轉發至相同網域下的不同容器，讓外部網路可以使用指定容器內的服務。

除 22 埠供 SSH 使用、8888 供 Jupyter Notebook 使用之外，容器開放 5000、5001、5002 三個服務埠，您可以將您在容器內架設的服務的 daemon 設置在其一的對外埠，並在容器詳細資料頁關聯對外埠與目標埠，完成後，您即可於本機透過公用 IP 和對外埠，使用該服務。

以下示範如何於容器內以 Flask 架設網頁服務，將服務的 daemon 設置在對外埠`5002`上，並關聯服務埠，即可透過本機瀏覽器使用該網頁服務：

## 建立容器

- 容器建立後，開啟 Jupyter Notebook :arrow_right: Terminal

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7adcd4b991852eb4a7f4d05b98f6adff.png)

## 架設網頁服務、設定服務 port

- 輸入以下指令，下載腳本並執行腳本內容 (安裝 [Flask](https://flask.palletsprojects.com/en/1.1.x/) 架設網頁、讓網頁顯示 `Hello World` 的字串，並設定 port 號為 `5002`)，使用容器架設網頁服務。 
```bash=
wget -O - https://bit.ly/TWCC_TestServicePort5002 | bash
```
![](https://i.imgur.com/TCStO51.png)
        
- 確認網頁服務已架設完成，且網頁服務 daemon 已位於 `5002` 埠
        
![](https://i.imgur.com/XKvEMYX.png)

## 關聯服務 port
        
- 回到容器詳細資料頁，點選「關聯」服務埠 :arrow_right: 勾選服務 daemon 的所在埠號 `5002` :arrow_right: 點選「確認」
        
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a83708e0a486692acf4221e824667adf.png)
        
- 完成後，系統將分配一「目標埠」(53055)，對應至對外埠 (5002)
        
![](https://i.imgur.com/a9wXd1e.png)

## 使用網頁服務
        
- 開啟您本機端的瀏覽器，輸入`http://公用IP:目標埠號`，即可看見網頁內容，開始使用網頁服務。

![](https://i.imgur.com/Za4GoFg.png)

