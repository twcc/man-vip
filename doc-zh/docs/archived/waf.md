---
slug: '/user-guides/twcc/vcs/waf'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-waf-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-waf-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Web 應用程式防火牆

Web 應用程式防火牆服務，採用國際知名 Networks Web Application Firewall (WAF) 防火牆軟體，提供應用程式完善的安全防護機制。

:::info
此功能需租戶管理員權限才可使用。
:::

## 建立 Web 應用程式防火牆

 * 進入「**Web 應用程式防火牆**」服務，在「**Web 應用程式防火牆管理**」頁面，點擊「**＋建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea5ac8614e7970d9b7dbca2cd90ca96c.png)




* 輸入基本資訊，如名稱、描述、映像檔及硬體設定，接著點擊「**下一步：網路>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_30ba919575a5b2fea8525661c4d96635.png)




* 選擇欲使用的虛擬網路，接著點擊「**下一步：密碼>**」。
:::info
更多資訊，請參考[虛擬網路](https://www.twcc.ai/doc?page=virtual_network)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_21aa40489b432d0f9ebf92f0d17878bc.png)


* 設定登入的密碼，接著點擊「**下一步：檢閱 + 建立>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ce459aab7c7419642c0ff6b89d282356.png)



* 檢視建立 Web 應用程式防火牆的設定和預估使用額度，按下「**建立**」即完成。幾分鐘後等狀態變成 **`Ready`** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f36b499e935b34f4c9b4775c3d057da2.png)



## 檢視 Web 應用程式防火牆詳細資料

* 在「**Web 應用程式防火牆管理**」頁面，點擊欲檢視的項目列表，即可檢視詳細資料。點擊上方按鈕，可對此 Web 應用程式防火牆進行啟動、停止、刪除及重新整理。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68e7a8524e39d57cb9f6e5076f171801.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1759dda16f8ca1081620565012ddb451.png)


    
### 編輯防火牆保護對象
    
* 在 Web 應用程式防火牆詳細資料頁面，點擊「**編輯**」。  
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_103079c1e88af49097f15d4bb3397005.png)



* 出現「**編輯 Web 應用程式防火牆**」視窗後，選擇防火牆需保護的**伺服器**或**負載平衡器**，並設定密碼，設定好後點擊「**確認**」。 
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da8dae0cb85236af513cdb6d12eb6bfe.png)


## 登入 Web 管理介面 

* 在 Web 應用程式防火牆詳細資料頁面（如上圖），點擊 WEB 管理介面連結，登入 Web 管理介面，帳號是「**admin**」，密碼是您在建立 Web 應用程式防火牆時設定密碼。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40b9cc20bb4eb86e6b44d0e21e83bb3f.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b39f3e71997be661196d5a514c848142.png)
