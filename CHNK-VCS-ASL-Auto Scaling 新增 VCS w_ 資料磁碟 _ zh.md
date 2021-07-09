---
tags: Chunks, ZH
title: Auto Scaling 新增 VCS w/ 資料磁碟 | zh
---

{%hackmd @docsharedstyle/important-zh %}

- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-zh) 會依據所連結虛擬運算個體建立時的設定而新增個體，因此：
    - 若 Auto Scaling 自動新增的個體<ins>**需要**</ins>自動連結新資料磁碟，請您在 **[<ins>建立個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh) 時**，一併建立資料磁碟。
    - 反之，若 Auto Scaling 自動新增個體<ins>**不需要**</ins>自動連結新資料磁碟，則請您在 **[<ins>建立個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh) 後**，[<ins>另建資料磁碟</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-zh)，再[<ins>連結至個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-zh#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)。