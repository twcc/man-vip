---
sidebar_label: '從零開始'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【從零開始 TWCC】建立並連線開發型容器

【從零開始 TWCC】系列教學文件將以主題式方式為新手用戶深入淺出說明 TWCC 使用方式，將相關文件統整於此，讓您方便參考所需的資訊，順利邁開使用 TWCC 運算資源的第一步！<i class="fa fa-hand-peace-o" aria-hidden="true"></i>


## 主題與步驟說明

**【從零開始 TWCC】建立並連線開發型容器**

在此篇文章中，您將學會如何從註冊帳號、登入 TWCC 使用者網站，並建立開發型容器、使用 Jupyter Notebook 快速連線進入容器。


:::info
**開發型容器？Jupyter Notebook？**

- 開發型容器為 TWCC 服務之一，採用將作業系統層虛擬化的容器技術，可快速交付軟體。開發型容器提供多種 AI framework 選擇，並可建立高效能的 NVIDIA V100 GPU 環境，請參考[<ins>服務概觀</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fccs-overview-zh)了解更多。

- TWCC 提供開發工具 [<ins>Jupyter Notebook</ins>](https://jupyter.org/)，可作為快速與容器運算資源互動的介面，可編寫並執行程式。透過網頁操作容器，友善又好上手！

::: 

![](https://i.imgur.com/OTa5mVF.png)


:::info
本篇文章將使用到的 TWCC 服務：會員中心、[<ins>開發型容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh)。
:::

## 操作步驟教學


<Tabs className="unique-tabs">
  <TabItem value="Academic" label="Academic" default>
    <ol>1. [註冊帳號](/docs/api.md)
    </ol><ol>2. 完成後，您可以[新申請計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh)，或請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-team-zh)。
    </ol><ol>3. 若您為租戶管理員，請為您的計畫[購買計畫額度](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2FS17dwAja4%3Ftype%3Dview)，計畫需有額度才能建立並使用 TWCC 資源。
    </ol><ol>4. 若您為租戶管理員，額度申請完成後，可將計畫母錢包拆分成多個子錢包分配固定額度給成員使用，若無拆分則統一使用計畫母錢包扣抵額度。請參考 [計畫錢包管理](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) 了解更多。</ol>
  </TabItem>
  <TabItem value="Enterprise" label="Enterprise">
    1. [註冊帳號](https://tws.twcc.ai/)
    2. 完成後，您可以
        - 申請[免費體驗專案](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0)，或
        - 聯絡業務 (sales@twsc.io) 我們將深入了解您的使用需求，並協助您新增使用專案與額度，或
        - 請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之專案](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-manage-project-team-zh)。
  </TabItem>
</Tabs>
- 若不帶任何參數則以預設資訊建立容器：

| 映像檔類型、映像檔 | 容器名稱 |硬體設定|
| -------- | -------- | -------- |
| TensorFlow (latest environment)    | twcc-cli     | 1 GPU + 04 cores + 090GB memory |

- 環境變數詳細說明與設定範例請參考 [<ins>HowTo：設定環境變數</ins>](https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-zh)。