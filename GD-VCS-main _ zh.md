---
tags: Guide, VCS, TW
title: 虛擬運算服務 | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 虛擬運算服務

- [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af58322eb82b649d1f29aca1f201a117.png) 服務概觀](https://man.twcc.ai/@TWSC/bookmode-product-overview)

使用指南 <i class="fa fa-book" aria-hidden="true"></i>
---
- ### ● 建立與連線個體
    - [建立虛擬運算個體](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)
    - [建立客製化個體](https://man.twcc.ai/@TWSC/guide-vcs-create-custom-instance-zh)
- ### ● 連線個體
    - [準備工作](https://man.twcc.ai/@TWSC/vcs-guide-connect-prerequisite-zh)
    - ### 連線至 Linux 個體
        - [本機為 Windows](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-linux-from-windows-zh)
        - [本機為 Linux / macOS](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-linux-from-linux-zh)
    - ### 連線至 Windows 個體 
        - [本機為 Windows](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-windows-from-windows-zh)
        - [本機為 macOS](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-windows-from-macos-zh)

- ### ● 管理與監控
    - [啟用 Windows](https://man.twcc.ai/@TWSC/guide-vcs-activate-windows-zh)
    - [檢視/編輯](https://man.twcc.ai/@TWSC/guide-vcs-view-and-edit-instance-zh)
    - [停止/啟動/關機/重開機/刪除](https://man.twcc.ai/@TWSC/vcs-guide-manage-instance-zh)
    - [監控](https://man.twcc.ai/@TWSC/vcs-guide-monitor-instance-zh)
    - [調整規格](https://man.twcc.ai/@twccdocs/howto-vcs-resize-instance-zh)
- ### ● 儲存
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a62be3bdf4bc257526e95e16b063a777.png) 虛擬磁碟服務概觀](https://man.twcc.ai/@TWSC/guide-vcs-vds-overview-zh)
    - [建立資料磁碟](https://man.twcc.ai/@TWSC/guide-vcs-vds-create-data-disk-zh)
    - [檢視/連結/刪除資料磁碟](https://man.twcc.ai/@TWSC/guide-vcs-vds-manage-disk-zh)
	- [分離資料磁碟](https://man.twcc.ai/@twccdocs/vcs-vds-guide-detach-data-disk-zh)
    - [備份磁碟](https://man.twcc.ai/@TWSC/guide-vcs-vds-disk-snapshot-zh)

- ### ● 備份個體
    - ### 映像檔備份
        - [建立映像檔](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh)
        - [建立映像檔最佳作法](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh)
        - [管理映像檔](https://man.twcc.ai/@TWSC/vcs-vds-manage-instance-image-zh)
    - [ <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a798c7edb1b5032ecf92265a3150a7ec.png" width="30" heigh="30"> 資料備份](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fcosbackup-zh)[target=_blank]
    
- ### ● 鑰匙對
    - [建立與管理鑰匙對](https://man.twcc.ai/@TWSC/guide-vcs-keypair-zh)
    
- ### ● 網路
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ecced96f77b12664677d4cef97a3cc.png) 虛擬網路](https://man.twcc.ai/@TWSC/guide-vcs-vnw-zh)
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9bf6c4925efee137a33e4218349c813.png) 虛擬私有網路](https://man.twcc.ai/@TWSC/guide-vcs-vpn-zh)
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5eaf2d8a3b112a4b8c49a853eaab60d8.png) 負載平衡](https://man.twcc.ai/@TWSC/guide-vcs-lbs-zh)
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe3143064a67e3d04615d38683938427.png) Auto Scaling](https://man.twcc.ai/@TWSC/guide-vcs-auto-sacling-zh)

- ### ● 安全 
    - [安全性群組](https://man.twcc.ai/@TWSC/guide-vcs-sg-zh)
    - [![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db2be9ff86eff33624e32feceedf17e7.png) 基礎虛擬防火牆](https://man.twcc.ai/@TWSC/guide-vcs-vnf-zh)

概念說明 <i class="fa fa-commenting-o" aria-hidden="true"></i>
---
- [個體生命週期](/@twccdocs/concept-vcs-lifecycle-zh)
<!-- - [TWCC映像檔]() -->

案例教學 <i class="fa fa-lightbulb-o" aria-hidden="true"></i> 
---
- [建立預設虛擬網路](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-zh)
- [使用帳密 SSH 連線 Linux 個體](https://man.twcc.ai/@twccdocs/howto-vcs-create-usr-linux-zh)
- [初始化磁碟- Linux 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)
- [初始化磁碟- Windows 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)
- [變更資料磁碟](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-zh)
- [轉換 SSL 憑證](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-zh)
- [調整虛擬運算個體規格](https://man.twcc.ai/@twccdocs/howto-vcs-resize-instance-zh)
- [架設安全、可負載高流量的網站](https://man.twcc.ai/@twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-zh)[target=_blank]
- [使用一台虛擬運算個體架設多個且安全的網站](https://man.twcc.ai/@twccdocs/howto-vcs-host-secure-multi-web-one-instance-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-vcs-host-secure-multi-web-one-instance-intro-zh)[target=_blank]

其他資訊 <i class="fa fa-info-circle" aria-hidden="true"></i>
---

<!-- - [Release Notes]() -->
- [TWCC FAQs <i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh)[target=_blank] 
- [TWCC 價目表 <i class="fa fa-th-list" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS)
- [教學影片 <i class="fa fa-video-camera" aria-hidden="true"></i>](https://www.youtube.com/watch?v=BNQ7npYQDSo&list=PLYcc4OEy5lEDzfHqN79Yu1KHXbRFVRtdX)[target=_blank]