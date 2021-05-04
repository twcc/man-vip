---
title: module load | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}


# module load package1 package2 …
    
此指令用於載入指定的module資訊。範例如下：
載入指定的singularity/2.5.1 module指令如下：
[qct@gn0101 ~]$ module load singularity/2.5.1
檢查目前 module 狀況的指令如下：
    
<div style="background-color:black;color:white;padding:20px;">

[qct@gn0101 ~]$ module avail
------------------------ /opt/ohpc/pub/moduledeps/intel ------------------------
   impi/2018.5.274 (L)		openmpi/1.10.7
   impi/2019.0.117		openmpi3/3.1.0
-------------------------- /opt/ohpc/pub/modulefiles ---------------------------
   EasyBuild/3.6.1		hwloc/1.11.10		papi/5.6.0
   Autotools		intel/18.0.5.274 (L)		pmix/2.1.1
   charliecloud/0.2.4	intel/19.0.0.117		prun/1.2
   cmake/3.11.1		llvm5/5.0.1			singularity/2.5.1 (L)
   gnu7/7.3.0		ohpc				valgrind/3.13.0

  Where:
   D:  Default Module
   L:  Module is loaded

Use "module spider" to find all possible modules.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".

    
</div>

檢查結果 singularity/2.5.1 (L) 已經被載入。