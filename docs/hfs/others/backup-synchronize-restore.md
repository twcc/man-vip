---
sidebar_position: 8
title: 空間管理政策
sync_original_production: 'https://man.twcc.ai/@twccdocs/terms-hfs-storage-mngmt-policies-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/terms-hfs-storage-mngmt-policies-zh'
---

# 高速檔案系統 (HFS) 空間管理政策

### 個人及公用磁碟核定空間
- /home 目錄：每個帳號之家目錄 (註冊帳號即可獲得 100 GB 免費空間)
- /work 目錄：每個帳號之暫存工作目錄 (註冊帳號即可獲得 100 GB 免費空間)

:::info
- [1] 自2021年9月1日起，科技部計畫每個帳號之的暫存工作目錄區域(/work)免費額度，由原本的 100 GB，提高到 1500 GB。
- [2] 如空間不敷使用時，您可以到[<ins>會員中心 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) 購買擴充。購買價格與調整方式請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS)。
:::

### 公用磁碟空間管理政策與使用須知
- 公用磁碟空間 (/work) 為計算工作短期暫存之用，若需長期保留，請將檔案移至國網中心 TWCC 其它儲存服務。
- 國網中心不會對公用磁碟空間做任何備份，若系統毀損或檔案刪除皆無法復原。
- 公用磁碟空間上的檔案用戶需自行備份保留，若發生檔案毀損、遺失或刪除，本中心不負任何還原或賠償責任。
- 為確保用戶有足夠的暫存空間完成計算工作，系統會自動清除超過28天以上未存取的檔案。
- 用戶不得意圖規避系統清理政策，禁止使用指令或程式 (如touch或其他作用類似的 command、script) 變更檔案最後存取時間，此行為將嚴重影響公用磁碟空間效能。
- 國網中心公用磁碟空間為高性能貴重研究設施、僅限於有關高速計算之目的使用，禁止存放與高速計算目的無關之私人用途檔案。
- 若發現用戶違反前述禁止事項並屢勸不改，國網中心有權暫停用戶對該檔案系統的存取權限，若因而造成用戶計算中斷、資料遺失或其他衍生損失，本中心亦不負任何賠償責任。
- 管理員將會不定期清理登入節點與檔案傳輸節點的 /tmp 目錄以維持系統正常運作，請避免於 /tmp 存放重要資料。

:::info
查看檔案最後存取時間的指令為：
```bash
ls -ula /path/to/your_scratch_file or directory
```
:::
   
- 個人磁碟空間 (/home )、 公用磁碟空間 (/work ) 備份政策
    

|  | /home |/work|
| -------- | -------- |-------- |
| 備份政策  | :white_check_mark: |:negative_squared_cross_mark:|
| 檔案清理政策 | :negative_squared_cross_mark:  | 28天 (免費或付費空間均須遵守)、禁止 touch |
