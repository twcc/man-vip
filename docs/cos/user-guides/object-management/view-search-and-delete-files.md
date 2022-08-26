---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-encryption-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-encryption-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檔案加密

您可以在上傳檔案至 TWCC 雲端物件儲存時，選擇檔案加密功能，TWCC 提供系統預設 SSE-KMS 金鑰，可將您上傳的檔案進行加密，保護您的重要資料。

:::info
- 金鑰為計畫共享，所有成員皆可使用加密功能。
- 金鑰統一由 TWCC 管理，尚不支援刪除、變更、使用自備金鑰。
:::

## 加密金鑰 ID

使用第三方軟體加密上傳檔案時，需使用加密金鑰 ID 將檔案加密 (使用者網站則是透過系統自動加密)，您可於以下步驟取得加密金鑰 ID：

登入 TWCC > 由服務列表進入選取「**雲端物件儲存**」> 進入「**雲端物件儲存管理**」頁，即可於頁面右上方，取得計畫的加密金鑰 ID。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e2778ea43b6b700eb72ef66ec11fc6a4.png)



## 如何將檔案加密？

TWCC 會在上傳檔案至雲端物件儲存空間時，為您的檔案進行加密，步驟請參考如下。
下載檔案時，系統將自動取得金鑰進行解密，您無需執行額外動作。


<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>



### 加密上傳

步驟同 [<ins>上傳檔案</ins>](https://man.twcc.ai/@twccdocs/guide-cos-upload-download-files-zh#%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88)，上傳前請先勾選 「**加密**」再點選 「**上傳**」，即可將檔案加密。

![](https://i.imgur.com/fCSF7DS.png)


### 確認檔案是否加密


檔案加密上傳後，進入檔案詳細資料頁，將顯示該檔案的加密屬性。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f9eb8db05b7c2a46281e52fa139cb711.png)



 </TabItem>
  <TabItem value="第三方軟體：S3 browser" label="第三方軟體：S3 browser">


### 準備工作


請先[<ins>下載 S3 browser、完成連線 TWCC 雲端物件儲存、建立儲存體</ins>](https://man.twcc.ai/@twccdocs/guide-cos-s3browser-zh)，並取得<a href="#加密金鑰-ID"><ins>加密金鑰 ID</ins></a>



### 設定加密功能


**Step 1. 進入設定頁面**

點選 **Tools** > **Server-Side-Encryption** > **+Add**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4828b14743452f78d82e199429e0eb94.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ceacfeaf972f12ddfb327fef7e180e65.png)


**Step 2. 設定加密內容**

- Bucket name or mask：輸入檔案需加密的「**儲存體**」名稱
- Encryption type：選擇 **Server-Side-Encrption with Customer Keys Stored in AWS KMS (SSE-KMS)**
- KMS key type：選擇 **Enter KMS master key ARN**，並輸入 TWCC 提供的 **加密金鑰 ID**
- 點選 **Save changes** 確認設定

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e0c48a902bdf32348014b2b2fac25efc.png)

- 再次點選 **Save changes** 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ccb461736610db73e310b16c5e5fb5d.png)



### 確認檔案是否加密

檔案上傳後，對檔按點選右鍵 > Properties > 即可檢視檔案加密屬性。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e38b3b62d64c3a5fdecdd2ae7b476b09.png)


:::info
- 本文以 S3 browser 為範例 Client 端軟體，您可以自行選用其他軟體。
- 更多 S3 browser 使用雲端物件儲存的教學，可參考 [<ins>使用 S3 browser 管理檔案</ins>](https://man.twcc.ai/@twccdocs/guide-cos-s3browser-zh)
:::

  </TabItem>
</Tabs>
