---
title: 其他 MPI 範例 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 其他 MPI 範例

submit jobs with srun



| MPI version| Module load| 
| -------- | -------- | 
| intel mpi| compiler/intel/2018| 
| mvapich| compiler/gnu/7.3.0 mvapich2/2.2| 
| mpich  | compiler/gnu/7.3.0 mpich/3.2.1| 
| openmpi| compiler/gnu/7.3.0 openmpi3/3.1.0| 
    
step by step example

<div style="background-color:black;color:white;padding:20px;">

#compile
$ module purge
$ module load compiler/intel/2018
$ mpicc -o hello /opt/ohpc/pub/examples/mpi/hello.c

</div>


file name : srun_job.sh
    
<div style="background-color:black;color:white;padding:20px;">

#!/bin/bash

#SBATCH -A ENT107046       # Project Account
#SBATCH -J test               # Job name
#SBATCH -o job.%j.out         # Name of stdout output file (%j expands to jobId)
#SBATCH -N 4                # Total number of nodes requested
#SBATCH -n 16                # Total number of mpi tasks requested
#SBATCH -t 00:30:00           # Run time (hh:mm:ss) - 0.5 hours
#SBATCH -p gp2d              # partition

module purge
module load compiler/intel/2018

srun  ./hello

</div>

and submit it
<div style="background-color:black;color:white;padding:20px;">

$ sbatch srun_job.sh

</div>