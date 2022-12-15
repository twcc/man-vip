---
sidebar_position: 4
sidebar_label: 'sbcast'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-sbcast'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-sbcast-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-sbcast-zh'
---

# sbcast

可用於將文件從本地硬碟傳輸到被分配任務的節點硬碟上，可在硬碟空間小的計算節點，或相對於共享文件系統提供更好的效能。但本服務已提供 HFS供使用者傳輸相關檔案，因此建議直接使用「/fs01」或「/fs02」兩個 HFS 的目錄，取代sbcast的功能。