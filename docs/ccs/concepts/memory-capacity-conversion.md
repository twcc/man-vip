---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-ccs-memory-conversion-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-ccs-memory-conversion-zh'
---

# 記憶體容量換算 (GB vs. GiB)

容器運算服務與高速運算服務之「**記憶體**」與「**可用記憶體**」<sup>[1]</sup> 所使用之容量計算單位不同，請參考本文了解詳細差異與換算公式。

## 單位說明

- 「**記憶體**」：容量以 **[GB (Gigabytes)](https://en.wikipedia.org/wiki/Gigabyte)** 為計算單位，其中 *1 GB = 10<sup>9</sup> bytes*。
- 「**可用記憶體**」：容量以 **[GiB (Gibibyte)](https://en.wikipedia.org/wiki/Byte#Multiple-byte_units)** 為計算單位，其中 *1 GiB = 2<sup>30</sup> bytes*。

## 數值換算

**換算公式：**
> **1 GB ≒ 0.93 GiB** <div></div>
**1 GiB = 1,024 MiB**


所有服務規格之「**記憶體**」與「**可用記憶體**」容量數值換算請參考下表<sup>[2]</sup> ：

### 容器運算服務 (Container Compute Service, CCS)

> 服務包含：**開發型容器**、**任務型容器**

| 容器型號 | GPU<div align='left'>(張)</div>| CPU<div align='left'>(核心)</div> | 記憶體<div align='left'>(GB)</div> |<font color='#27a5bd'>**可用記憶體**</font> |共享記憶體<div align='left'>(GB)</div>|<font color='#27a5bd'>**可用共享記憶體**</font>|
| -------- | -------- | -------- |-------- |-------- |-------- |-------- |
| c.super   | 1     | 4     |90     |<font color='#27a5bd'>**84 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>86,016  MiB </font>   |-|-|
| c.xsuper   | 2    | 8    |180     |<font color='#27a5bd'>**168 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>172,032  MiB </font>       |-|-|
| c.2xsuper   | 4     | 16    |360     |<font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>343,040  MiB </font>      |-|-|
| c.4xsuper  | 8     | 32     |720     |<font color='#27a5bd'>**671 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>687,104  MiB </font>      |-|-|
| cm.super   | 1     | 4     |60     | <font color='#27a5bd'>**56 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>57,344  MiB </font>    | 30    | <font color='#27a5bd'>**28 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>28,672  MiB </font>    |
| cm.xsuper  | 2     | 8     |120     |  <font color='#27a5bd'>**112 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>114,688  MiB </font>     | 60    |  <font color='#27a5bd'>**56 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>57,344  MiB </font>   |
| cm.2xsuper   | 4     | 16     |240     | <font color='#27a5bd'>**224 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>229,376  MiB </font>     | 120    |<font color='#27a5bd'>**112 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>114,688  MiB </font>     |
| cm.4xsuper   | 8     | 32     |480     |  <font color='#27a5bd'>**447 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>457,728  MiB </font>   |  240    |<font color='#27a5bd'>**224 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>229,376  MiB </font>     |
| cm1.4xsuper   | 8     | 32     |360     |  <font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>343,030  MiB </font>   |  360    |<font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>343,030  MiB </font>     |

### 高速運算服務 (High-performance Computing, HPC)

> 服務包含：**台灣杉二號 (命令列介面)**、**高速運算任務**

| 容器型號 | GPU (張)| CPU (核心) | 記憶體 (GB) |<font color='#27a5bd'>**可用記憶體**</font> |
| -------- | -------- | -------- |-------- |-------- |
| h.super   | 1     | 4     |90     |<font color='#27a5bd'>**84 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>86,016  MiB </font>   |
| h.xsuper   | 2    | 8    |180     |<font color='#27a5bd'>**168 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>172,032  MiB </font>       |
| h.2xsuper   | 4     | 16    |360     |<font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>343,040  MiB </font>      |
| h.4xsuper  | 8     | 32     |720     |<font color='#27a5bd'>**671 GiB**</font><font color='#27a5bd'> =</font><div></div><font color='#27a5bd'>687,104  MiB </font>      |




:::info
[1] 為使用者實際可使用之記憶體容量。<div>[2] 數值以四捨五入至整數位。</div>
:::

