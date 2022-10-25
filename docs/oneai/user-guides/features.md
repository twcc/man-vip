---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/oneai-aimaker-release-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/oneai-aimaker-release-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Maker

AI Maker 為一套簡化機器學習開發、部署、管理流程的工具。

最新釋出的 [AI Maker 搶鮮版](https://docs.oneai.twcc.ai/s/3uxGFglX0) 整合 MLflow，強化 ML 訓練任務的深度與廣度，讓每個模型的產生可以有更自由與更詳盡的履歷。

[原 AI Maker](https://docs.oneai.twcc.ai/s/QFn7N5R-H) 已建立的訓練任務、模型、推論服務與 AI Maker 搶鮮版所建立的互不相通。若要使用 MLflow追蹤，建議您將作業轉移至 AI Maker 搶鮮版執行。

:::caution

一旦開始使用 OneAI，系統會於儲存服務中預設一個 `mlflow` 儲存體，用來存放由 MLflow 所產生的相關資料。

若您刪除`mlflow`儲存體，可能會發生 MLflow 不可用的情況。
:::
