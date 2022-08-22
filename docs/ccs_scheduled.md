---
title: 任務型容器
GA: UA-155999456-1
sync_original_production: 'https://man.twcc.ai/@twccdocs/doc-ccs-scheduled-main-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/doc-ccs-scheduled-main-zh'
---

# 任務型容器

任務型容器服務可依照需求，指定運算的開始執行時間，規劃批次任務使用的資源量，提升工作效率。使用完即回收運算資源，有效節省開發成本。

## 建立任務型容器

* 由服務列表點選「任務型容器」，在「任務型容器管理」頁面，點擊「＋建立」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d397f10978041c2b6a160e0692719136.png)


:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df526f70a917c5498d551513a1590b7d.png)


* 填寫容器基本資訊、選擇映像檔、基本設定及輸入執行程式的指令；當任務型容器啟動後會自動執行該指令的內容，接著點擊「下一步：儲存資訊>」進入儲存資訊頁面。

:::info
:bulb: 提示：請先使用 [「HFS 高速檔案系統」](https://www.twcc.ai/doc?page=hfs)上傳欲執行運算的程式內容。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f06710efd7d9ee81c80149fc11b663bb.png)



* 容器建立後系統會自動掛載 HFS 類型之高速儲存系統至容器，以利使用者在運行人工智慧運算時擁有更好的性能，亦可使用 TWCC 雲端物件儲存服務。

* 點擊「下一步：排程」，設定任務執行排程。

:::info 
:book: 參見
* [雲端物件儲存服務](https://www.twcc.ai/doc?page=object)
* [HFS 儲存服務](https://www.twcc.ai/doc?page=hfs)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b2b5540a2ac2d584332e9ad1b96cf74.png)


* 排程設定可選擇手動啟動任務或指定任務時間，接著點擊「下一步：檢閱+建立>」。
:::info
:bulb: 提示：指定時間的任務最快可從設定時的下一個整點開始執行，當任務型容器建立後，需先啟動該容器，到了指定的時間才會執行。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_319cb64dd16ad5227988135ad4b574f7.png)


最後，檢視整個容器的規格和價格，確定後點選「建立」即完成

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5297c91803fa85a421c7fa7d3e6ac9eb.png)



## 任務型容器管理
* 容器建立後，會出現任務型容器管理的容器列表中，請務必「啟動」容器，待狀態從 Inactive 變為 Ready 時，容器將立即執行運算，或在指定時間執行運算。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3d31b1f4dc578713d6902ba76ca8425.png)


* 點選容器列表，可查閱容器配置資訊或監控容器資源使用狀況。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1707082b19e4a47755d9693e32ba9ce9.png)


### 配置頁面

* 進入任務型容器詳細資料「配置」頁面，可以檢視容器的基本資訊、儲存及連線資訊，或執行「啟動」、「停止」、「刪除」和「重新整理」等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_06459c429abe3cea660dbd0d7a931bdb.png)


### 任務列表頁面

* 進入「任務列表」頁面，可以檢視任務的執行狀況，包含運算開始、結束時間、任務狀態，並能查看容器運算的 log

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_930e313952a21c943d655cc296e0e159.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f64b3640255755955947cdfba9fa7f5b.png)

:::caution
- 「任務 log」功能無法確保您的所有紀錄在容器結束運行後，仍可保存及取得，建議您將 log 轉存至 [TWCC HFS](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh) 或 上傳到 [TWCC COS](https://man.twcc.ai/@twccdocs/doc-cos-main-zh) 中，以確保紀錄可用性。
- 若希望由 TWCC 維運人員協助您取得完整紀錄，請您來信授權處理 (isupport@twcc.io)，並請勿存放機敏資料。
:::


## 任務型容器監控
* 點選左側「任務型容器監控」，可查看本系統為任務容器提供監控資訊服務，包括計畫的總累計使用量、特定使用者的累計使用量 (租戶管理者之功能)、GPU 的使用數量和使用時間等。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0589df1ee84336ba157b29c7a4c068e4.png)


:::info
:bulb: 提示：計畫使用者僅能看到自己資源使用資訊，計畫管理者可以看到計畫內所有使用者資源使用情形，以便控管整個專案的資源使用額度。
:::
