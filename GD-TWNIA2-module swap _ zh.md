---
title: module swap | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# module swap package1 package2
    
此指令用於替換指定的module設定，例如：將package1用package2取代。(視同於module unload package1 && module load package2) 範例如下：
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
   cmake/3.11.1		llvm5/5.0.1			singularity/2.5.1
   gnu7/7.3.0		ohpc				valgrind/3.13.0

  Where:
   D:  Default Module
   L:  Module is loaded

Use "module spider" to find all possible modules.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".

</div>
    
目前載入的是 intel/18.0.5.274 Compiler module
替換掉 intel module改用gnu7 module 指令如下：

<div style="background-color:black;color:white;padding:20px;">    

[qct@gn0101 ~]$ module swap intel gnu7
Inactive Modules:
  1) impi/2018.5.274

</div>


檢查替換後 module 狀況的指令如下：

<div style="background-color:black;color:white;padding:20px;">   

 [qct@gn0101 ~]$ module avail
------------------------ /opt/ohpc/pub/moduledeps/gnu7 -------------------------
   R/3.5.0			metis/5.1.0		openmpi3/3.1.0	scotch/6.0.4
   gsl/2.4			mpich/3.2.1		pdtoolkit/3.25	superlu/5.2.1
   hdf5/1.10.2		mvapich2/2.2	plasma/2.8.0
   impi/2019.0.117	ocr/1.0.1		py2-numpy/1.14.3
   likwid/4.3.2		openblas/0.2.20	py3-numpy/1.14.3
-------------------------- /opt/ohpc/pub/modulefiles ---------------------------
   EasyBuild/3.6.1		hwloc/1.11.10		papi/5.6.0
   Autotools		intel/18.0.5.274		pmix/2.1.1
   charliecloud/0.2.4	intel/19.0.0.117		prun/1.2
   cmake/3.11.1		llvm5/5.0.1			singularity/2.5.1
   gnu7/7.3.0 (L)		ohpc				valgrind/3.13.0

  Where:
   D:  Default Module
   L:  Module is loaded

Use "module spider" to find all possible modules.
Use "module keyword key1 key2 ..." to search for all possible modules matching any of the "keys".

</div>
    
目前載入的是 gnu7 module，而 intel module 已經被卸載。
    