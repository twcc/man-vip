---
title: TWCC 上傳 VCS 客製化映像檔 (測試階段)
tags: Test, Guide, VCS
GA: 
---

{%hackmd @docsharedstyle/default %}

{%hackmd @docsharedstyle/alpha-testing-zh %}

:arrow_backward:  [回到進入方式頁面](https://man.twcc.ai/@preview-twccdocs/vcs-customimage-entry)

# TWCC 上傳 VCS 客製化映像檔<sup>`Alpha`</sup>

TWCC 提供您上傳客製化映像檔的功能，將自製的映像檔上傳至雲端物件儲存體後，便可使用 TWCC 虛擬運算服務資源，建立您熟悉的個體環境。

此外，客製化映像檔可與全計畫成員共享，相同映像檔僅需上傳一次，減少您的操作步驟，節省時間，增加效率。

## 準備工作

* 請先準備您自製的虛擬運算個體映像檔，並將映像檔上傳至「雲端物件儲存」中。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4894102333547d5c84bbb28dd89716c8.png)



:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
- 確定支援的 Linux 映像檔格式 (請保留連接埠 `22` 以利 SSH 連線登入)： `raw`、`qcow2`。
- Windows 映像檔與其他格式如：`vhd`、`vhdx`、 `vmdk`、`vdi`、`iso`、`ploop`、`aki`、`ari`、`ami` ，請您先洽詢技術支援人員： isupport@narlabs.org.tw。
- 完整上傳方式，請參考 [雲端物件儲存](https://www.twcc.ai/doc?page=object&euqinu=true)，並建議使用第三方軟體上傳映像檔，速度較快。
:::

## 建立映像檔

* 進入 **「虛擬運算」** 服務，在 **「映像檔管裡」** 頁面，點擊 **「＋建立」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_242fec34949da1f700c24a8a7e9d926a.png)



* 輸人映像檔名稱、作業系統、作業系統版本及硬碟格式（TWCC 支援`raw`、 `vhd`、`vhdx`、`vmdk`、`vdi`、`iso`），接著點擊 **「下一步：映像檔來源＞」**。 

:::danger
{%hackmd @docsharedstyle/important-zh %}

請注意硬碟格式必須選擇映像檔相同的格式，避免以此映像檔建立之虛擬運算個體建立後無法連線使用。

:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ae000abf3b118439f5c4f6de4cd4ad38.png)


* 設定映像檔所在的儲存體、子路徑及檔案名稱，接著點擊 **「下一步：檢閱 + 建立>」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_953995207ad206bf3ac52c132b9fafdd.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- 檔案資訊可至雲端物件儲存頁查看，以下圖為例：
    - 儲存體：uploadtest
    - 子路徑：/images
    - 檔案名稱：bionic-server-cloudimg-amd64.img (需含副檔名)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ee8c1e3c8ba9350ad0843229db890b3.png)


:::

* 檢視映像檔的設定資訊，確定後點選 **「建立」**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_06ce92b356055d50a4cd7e198df4e023.png)


## 映像檔管理
* 映像檔建立後，會出現在映像檔管理的列表中，點擊列表可查看映像檔的詳細資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44a8d9fd3d50a462b0018c83c94eace0.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7840cd4522d043dd9a1049795604e20d.png)



* 系統準備好映像檔需要一點時間，當狀態變成 **「ACTIVE」** 後，即可與計畫成員共享，並開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7305137fe7a2fab0ab6a37ce34e7de54.png)



## 使用客製化映像檔建立虛擬運算個體

* 進入 **「虛擬運算」** 服務，在 **「虛擬運算個體管理」** 頁面，點擊 **「＋建立」**。

![](https://i.imgur.com/d0m9myw.png)

* 依您上傳的映像檔作業系統，選擇映像檔類型 **「Custom Image Linux」或「Custom Image Windows」** 。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_328e66915447e154ce6a1125bf002d91.png)



* 進入 **「建立虛擬運算個體」** 頁面，即可選擇自行上傳的映像檔，並依需求選擇硬體規格。

![](https://i.imgur.com/JMaPTnH.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 更多虛擬運算個體的使用方法，請參見 [虛擬運算個體](https://www.twcc.ai/doc?page=vm&euqinu=true)。
:::
