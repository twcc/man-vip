---
sidebar_position: 2
---

# Memory capacity conversion (GB vs. GiB)



The capacity calculation unit- **Memory** and **Available memory**<sup>[1]</sup> used in Computer Service and High-performance Computing is different.


## Unit description

- **Memory**: Capacity is using **[GB (Gigabytes)](https://en.wikipedia.org/wiki/Gigabyte)** as the unit of calculation. *1 GB = 10<sup>9</sup> bytes*.
- **Available memory**: Capacity is using **[GiB (Gibibyte)](https://en.wikipedia.org/wiki/Byte#Multiple-byte_units)** as the unit of calculation. *1 GiB = 2<sup>30</sup> bytes*.

## Value conversion

**Conversion formula:**
> **1 GB ≒ 0.93 GiB**
**1 GiB = 1,024 MiB**

Please refer to the table<sup>[2]</sup> below for the conversion of **Memory** and **Available Memory** for all service specifications:

### Container Compute Service (CCS)

> Services include: **Interactive Container**, **Scheduled Container**
| Container type | GPU (pieces)| CPU (core) | Memory (GB) |<font color='#27a5bd'>**Available Memory**</font> |Shared memory (GB)|<font color='#27a5bd'>Available Shared Memory</font>|
| -------- | -------- | -------- |-------- |-------- |-------- |-------- |
| c.super   | 1     | 4     |90     |<font color='#27a5bd'>**84 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>86,016  MiB </font>   |-|-|
| c.xsuper   | 2    | 8    |180     |<font color='#27a5bd'>**168 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>172,032  MiB </font>       |-|-|
| c.2xsuper   | 4     | 16    |360     |<font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>343,040  MiB </font>      |-|-|
| c.4xsuper  | 8     | 32     |720     |<font color='#27a5bd'>**671 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>687,104  MiB </font>      |-|-|
| cm.super   | 1     | 4     |60     | <font color='#27a5bd'>**56 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>57,344  MiB </font>    | 30    | <font color='#27a5bd'>**28 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>28,672  MiB </font>    |
| cm.xsuper  | 2     | 8     |120     |  <font color='#27a5bd'>**112 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>114,688  MiB </font>     | 60    |  <font color='#27a5bd'>**56 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>57,344  MiB </font>   |
| cm.2xsuper   | 4     | 16     |240     | <font color='#27a5bd'>**224 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>229,376  MiB </font>     | 120    |<font color='#27a5bd'>**112 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>114,688  MiB </font>     |
| cm.4xsuper   | 8     | 32     |480     |  <font color='#27a5bd', font-weight:bold'>447 GiB</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>457,728  MiB </font>   |  240    |<font color='#27a5bd'>**224 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>229,376  MiB </font>     |

### High-performance Computing (HPC)

> Services include: **Taiwania 2 (HPC CLI)**, **HPC Job (Web Interface)**
| Job type | GPU (pieces)| CPU (core) | Memory (GB) |<font color='#27a5bd'>**Available**</font> |
| -------- | -------- | -------- |-------- |-------- |
| h.super   | 1     | 4     |90     |<font color='#27a5bd'>**84 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>86,016  MiB </font>   |
| h.xsuper   | 2    | 8    |180     |<font color='#27a5bd'>**168 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>172,032  MiB </font>       |
| h.2xsuper   | 4     | 16    |360     |<font color='#27a5bd'>**335 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>343,040  MiB </font>      |
| h.4xsuper  | 8     | 32     |720     |<font color='#27a5bd'>**671 GiB**</font><font color='#27a5bd'> =</font><br/><font color='#27a5bd'>687,104  MiB </font>      |




:::info
[1] It is the actual memory capacity that can be used by the user.
[2] The value is rounded to the nearest whole number.
:::