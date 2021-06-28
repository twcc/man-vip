---
title: API 金鑰 / 資源配額管理| zh
tags: Guide, Project, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}


## API 金鑰管理

TWCC 系統提供每位租戶一把主金鑰（API 金鑰），金鑰會依計畫、使用者及使用身份而不同。透過此金鑰即可以 API 呼叫的方式使用 TWCC 相關服務。「API 金鑰管理」提供金鑰的資訊、延長期限、新增、删除等功能，請妥善管理金鑰。

* 點擊右上角使用者名稱，再點選「API 金鑰管理」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9503da6c578c4d03bc807a09af1e61ae.png)





* 進入「API 金鑰管理」列表頁面，可查看金鑰的 ID、金鑰、計畫、建立時間及有效時間等資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d5fa093e330094d93643f96fa628838a.png)




### 延長金鑰期限

* 在「API 金鑰管理」列表項目，點擊選單按鈕圖再點擊「編輯」按鈕。　

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_775468e900cb37405dd3e1cba212677a.png)




* 在「編輯金鑰」視窗，輸入欲延長的天數，再點擊「確認」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_92bd126db2aa93df21e4d97583fa66ab.png)



* 回到「API 金鑰管理」列表頁面，即可看到延長後的有效時間。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34644d903d88237dab22250e3ce02e29.png)

### 新增金鑰

* 點擊「＋新增金鑰」，接著在「新增金鑰」視窗中點擊「確認」，即可產生一把新的金鑰。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3df137ddd5c24ab718f89ba9e247a3b0.png)



### 删除金鑰
* 勾選欲删除的金鑰，再點擊「删除」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c051b133bdcf3d71b0791b0d42faa401.png)


* 删除金鑰前請注意，金鑰一旦删除將無法挽回，點擊「確認」即可删除所選取的金鑰。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeaf48bc87753a134e8033d59ad3b970.png)




## 資源配額管理

資源配額管理功能讓租戶管理員可以管理計畫成員使用 TWCC 服務的資源額度，例如容器服務配額或虛擬機器服務。

:::info
注意：此功能需租戶管理員才可使用。
:::

* 點擊右上角使用者名稱，再點選「資源配額管理」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_54d3bce515396613658e73c0fabd8875.png)





### 容器服務配額管理

* 進入「資源配額管理」頁面，從「計畫使用量/配額」選單選擇「容器服務」可顯示整個計畫及計畫成員的容器服務資源使用量及配額。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_83e7e1971f75a4024718aaaff42d45bc.png)



* 點擊成員列表項目，出現「編輯配額」視窗，可設定該成員的配額。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_64452fe6c77644827a300d7c7fc49576.png)



### 虛擬運算服務配額管理

* 進入「配額管理」頁面，可從「計畫使用量/配額」選單選擇「虛擬運算服務」可顯示整個計畫及計畫成員的虛擬機器服務資源使用量及配額。


* 點擊成員列表項目，出現「編輯配額」視窗，可設定該成員的配額。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7440584eb3fa7f5d298f5fd6cbdd58e3.png)
