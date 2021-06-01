---
tags: Guide, VCS, TW
title: 進階安全 | zh
GA:
---

# 進階安全

TWCC 進階安全提供國際知名商用的新世代防火牆與威脅防護功能，以保護您在 TWCC 上的應用程式與資料安全。

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 此功能需租戶管理員權限才可使用。
:::


## 建立進階安全

 * 進入「**進階安全**」服務，在「**進階安全**」管理頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_835f496bc2d6d8f0debf69154fe9c2f9.png)


* 輸入基本資訊，如名稱、描述、選擇模板（mail、web、ssh、rdp）、映像檔及硬體設定，接著點擊「**下一步：網路>**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_828661feb8744775260096c4611376e1.png)




* 選擇私有網路及信任網路，接著點擊「**下一步：密碼>**」。


:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：** 私有網路與信任網路請避免選擇相同的網路，否則防火牆將無法正常使用。
:::

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 更多資訊，請參考[虛擬網路](https://www.twcc.ai/doc?page=virtual_network)
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96586b388a7ec41c7058a48f27e217d9.png)




* 設定登入的密碼，接著點擊「**下一步：檢閱 + 建立>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f17ad41d26549c6d31722543dba1a323.png)




* 檢視建立進階安全的設定和預估使用額度，按下「**建立**」即完成。幾分鐘後等狀態變成 **Ready** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60136b287659e1a9ea5a1e5c562b76e1.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_290364b0731d02f7488653295605d0b3.png)



### 檢視進階安全詳細資料

* 在「**進階安全**」頁面，點擊欲檢視的項目列表，即可檢視詳細資料。點擊上方按鈕，可對此項目進行啟動、停止、刪除及重新整理。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0bc304b750b5acc2bf1d17055d18a2b.png)



## 登入 Web 管理介面 

* 在網路基本與進階防護詳細資料頁面（如上圖），點擊 WEB 管理介面連結，登入 Web 管理介面，帳號是 admin，密碼是在建立網路基本與進階防護時所設定的密碼。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0016b497215d208bbe9f0262dc1e06f3.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e81652b76b45dcbdf0928af3516c9af5.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註**： 更多進階安全的防火牆使用方法，請參考[管理員指南](https://docs.paloaltonetworks.com/content/dam/techdocs/zh_TW/pdf/pan-os/8-1/pan-os-81-admin-guide-zh-tw.pdf)。
:::

<!-- 英文版：https://docs.paloaltonetworks.com/content/dam/techdocs/en_US/pdf/pan-os/8-1/pan-os-admin/pan-os-admin.pdf -->