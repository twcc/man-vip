---
title: module 選取 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# module 選取
    
清除所有module的載入設定，並查看現有可用module資源。
(modulefiles 配置可能隨時更動，請下module avail查看最新配置)

    
<div style="background-color:black;color:white;padding:20px;">
    
#Clean Module Setting
$ module purge
#Check Module Available Status
$ module avail
------------------------------------ /opt/ohpc/pub/modulefiles ------------------------------------
   EasyBuild/3.6.1                  compiler/llvm/5.0.1      nvidia/cuda/9.2.88
   charliecloud/0.2.4               compiler/pgi/18.10       nvidia/cuda/10.0.130 (D)
   compiler/gnu/4.8.5        (D)    devel/autotools          papi/5.6.0
   compiler/gnu/7.3.0               devel/cmake/3.11.1       pmix/2.1.1
   compiler/intel/19.0.1.144        devel/hwloc/1.11.10      prun/1.2
   compiler/intel/2017              devel/valgrind/3.13.0    singularity/2.5.1
   compiler/intel/2018       (D)    nvidia/cuda/9.0.176
  Where:
   D:  Default Module

Use "module spider" to find all possible modules.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".

</div> 

載入所選取的Module，這裡選用GNU7 與 MVAPICH Module。

        
<div style="background-color:black;color:white;padding:20px;">
    
$ module purge
$ module load compiler/gnu/7.3.0 mvapich2/2.2

</div> 
    
檢查載入module狀態
    
<div style="background-color:black;color:white;padding:20px;">
        
$ module list
Currently Loaded Modules:
  1)compiler/gnu/7.3.0   2) mvapich2/2.2

</div>
