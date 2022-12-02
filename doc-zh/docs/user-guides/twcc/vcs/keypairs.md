---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-keypair-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-keypair-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 鑰匙對

鑰匙對是登入 Linux 虛擬運算個體的憑證，建立個體之前，必須先取得或建立鑰匙對才能使用個體功能。

<br/>

## 建立鑰匙對

:::caution
TWCC 不負責紀錄及管理您的鑰匙對，建立後請務必下載並妥善保存此鑰匙對 `pem` 檔案，若沒有此鑰匙對，您將無法連線虛擬運算個體。
:::


<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

**1. 於建立虛擬運算個體時建立**

- 您可於[建立虛擬運算個體](./create/create-instances.md)時，於「鑰匙對」頁籤建立鑰匙對。

**2. 於鑰匙對管理頁建立**

* 點擊左側「**鑰匙對**」進入「鑰匙對管理」頁面，在此會顯示已建立的鑰匙對，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_191bdca9d25142835b1a798fb12c1354.png)


* 輸入鑰匙對的名稱後點擊確認。
* 公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b7f0ee96d82e1bc311b03f8e20cfc36.png)


鑰匙對建立後，**請務必立即按「下載」並妥善保存此鑰匙對**，若沒有此鑰匙對，將無法連線到該虛擬運算個體，下載後即可關閉此對話視窗。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d1384109af22c920d204ff660722e70.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- 建立名為 **`key1`** 的鑰匙對

```bash
twccli mk key -n key1
```

:::info
為方便管理，建議為每項鑰匙對命名
:::

</TabItem>

</Tabs>

<br/>


## 鑰匙對管理

### 檢視鑰匙對

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**鑰匙對管理頁**」面，剛建立好的 鑰匙對項目會列在最上方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f1a55b04e28e4aea16e87b4d797a5cd1.png)

- 選擇鑰匙對，進入「**鑰匙對詳細資料**」頁，可檢視建立時間，並可複製 Fingerprint 與 公開金鑰。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d1643df05cacbbb686bc10776a671aa.png)



</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- 檢視鑰匙對資訊

```bash
twccli ls key
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_752e44d40060a214fa67fba1db2a1ead.png)

</TabItem>

</Tabs>

<br/>

### 刪除鑰匙對

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**鑰匙對管理**」頁面 > 勾選鑰匙對 > 點選上方「**刪除**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbfda9c9b2de52067e3d6f1e67687404.png)

- 或點選鑰匙對旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 > 點選「**刪除**」。
- 或進入「**鑰匙對詳細資料**」頁 > 點選上方「**刪除**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- 刪除名稱為 `key1` 的鑰匙對 
```bash
twccli rm key -n key1
```
:::caution
刪除後，請自行刪除本機端鑰匙對
<details>

<summary>參考範例</summary>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ebc5f5ed8ea2bff1c5e0d8311873eb5.png)

</details>
:::

</TabItem>

</Tabs>