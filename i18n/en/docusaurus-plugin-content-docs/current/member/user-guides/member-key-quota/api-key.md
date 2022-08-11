---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twsdocs/guide-service-api-key-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twsdocs/guide-service-api-key-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Account & project management 


## Account & project information

* Click your username in the upper right corner, and then click "Account & Project".
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3edcedd009126147b1f6b98eefd86eee.png)


* The page will be directed to the Member Center, where you can manage project members, wallets, view service usage, modify member information, reset passwords, view order information... etc.


<!--
## 租戶管理權限
### 選擇計畫
* 登入 TWCC 網站，進入服務主頁面，點擊左上角的計畫名稱。　
![](https://man.twcc.ai/uploads/upload_1283e418bac0b66a853a8364c7470b4d.png)
* 選取欲查看的計畫後點擊「確認」。
 
![](https://man.twcc.ai/uploads/upload_31fde6db8eb496b5d7523dad6c87f4fe.png)
### 更改租戶管理權限
* 點擊右上角使用者名稱，再點選「租戶管理權限」。
![](https://man.twcc.ai/uploads/upload_5d0e0764dce3a524d5c954a66a68c93c.png)
* 進入「租戶管理權限」列表頁面，可查看或管理計畫內的租戶權限。
:::info
注意：租戶管理員可查看並修改計畫內所有租戶的帳戶及權限資訊；租戶使用者僅能查看自己的帳戶及權限資訊。
:::
![](https://man.twcc.ai/uploads/upload_78b5e2c5f44bcc115de0b0ed9edf7aa9.png)
* 點選「租戶管理權限」列表，會出現該租戶的「權限列表」視窗，點擊勾選框可改變使用該服務的權限。取消勾選狀態即可移除該租戶使用某項 TWCC 服務的權限。
:::info
:bulb:提示
* 在搜尋框輸入關鍵字可快速查找符合條件的使用者。
* 租戶管理權目前僅提供增删計畫內的租戶使用 TWCC 服務的權限，更多管理計畫成員資訊請參閱：[帳號計畫 > 管理計畫成員](https://www.twcc.ai/doc?page=member)
:::
![](https://man.twcc.ai/uploads/upload_a6ddab233062bca6eb9c1eb92a5b344c.png)
-->

<br/>

## API key management

The TWCC system provides each tenant with a master key (API key). The key will vary according to the project, user, and role. With this key, you can use TWCC related services through API calls. "API Key" provides functions such as key information, extension, adding, and deleting. Please manage your keys properly.

* Click the user name in the upper right corner, and then click "API Key".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2eebad996a85d76337d0d81daacf90f9.png)



* Enter the "API Key" list page, you can view the key ID, key, project, creation time, and effective time and other information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0e9634d29046ae48c411d7ded63618cf.png)


<br/>


### Extension of the key validity period

* In the "API Key Management" list page, click the menu button icon and then click the "Edit" button.　

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6db5c99d7c3475494a4c8ad0a4541d4c.png)



* In the "Edit API Key" window, enter the number of days you want to extend, and then click "Confirm".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5b2817b5e02e6f1a4344785fd6aa1cf.png)



* Go back to the "API Key Management" list page, and you can see the extended validity time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4ffdfbe009875229be993af44f6b5c3.png)

<br/>


### Create API Key

* Click "+Create API Key", and then click "Confirm" in the "Create API Key" window to generate a new key.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0ba1e9772f2c6f0249bb1f5f9517467.png)

<br/>


### Delete API Key
* Check the key to be deleted, and then click "Delete".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_09d557296ee2b704c5af921ab465279a.png)



* Before deleting the key, please note that once the key is deleted, it cannot be recovered. Click "Confirm" to delete the selected key.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e8485e69fe1221cfd6ab6eaec14c8af9.png)