---
tags: Guide, CCS, ZH
title: 管理容器 | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 管理容器

容器建立後，您可透過以下方式檢視容器資料或刪除容器。

:::info
{%hackmd @docsharedstyle/note-zh %}
租戶管理員、租戶使用者對於開發型容器使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A8)。
:::


## 檢視資訊

檢視容器 ID、名稱、公用 IP、狀態、建立時間、建立者、映像檔版本、資源比例、日誌、網路連線、儲存、...等資訊。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 於「**開發型容器管理**」頁可檢視基本資訊。
- 也可以點選特定容器，進入「**開發型容器詳細資料**」頁檢視更多容器資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66e8d42357ff675c82a5f267559461c0.png)


- 進入開發型容器詳細資料「**配置**」頁面，可以檢視容器的基本資訊、網路、儲存等資訊，連線登入使用該容器
- 或執行「**複本**」、「**删除**」、「**重新整理**」和查看「**容器日誌**」等功能。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6c4979fd3d11f5bfbc9fa80997b44e73.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 檢視容器 ID、名稱、建立時間、狀態。

```bash
$ twccli ls ccs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c56a8a4bafb8fd5ee6b4913dc5d9c86.png)

- 檢視計畫下的所有容器 **(僅限租戶管理員使用)**
    
```bash
$ twccli ls ccs -all
```

</details>



## 刪除容器

若容器已無使用，建議您刪除容器以節省成本。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 於「**開發型容器管理**」頁可於容器右側點選 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> ，再點選「**刪除**」刪除容器。
- 或一次勾選單個或多個容器，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_379ae97f957d95b6a940cfc43b47bdd7.png)

- 另外也可於「**開發型容器詳細資料**」頁，點選上方「**刪除**」刪除容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2881ea99d7be4882eab6634184a14f8d.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 刪除 ID 為 **`934369`** 的容器

```bash
$ twccli rm ccs -s 934369
```
</details>
