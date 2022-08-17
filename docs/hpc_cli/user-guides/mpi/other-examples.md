---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-mpi-example-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-mpi-example-zh' 
---

# 其他 MPI 範例


submit jobs with srun

| MPI version| Module load| 
| -------- | -------- | 
| intel mpi| compiler/intel/2018| 
| mvapich| compiler/gnu/7.3.0 mvapich2/2.2| 
| mpich  | compiler/gnu/7.3.0 mpich/3.2.1| 
| openmpi| compiler/gnu/7.3.0 openmpi3/3.1.0| 
    
step by step example

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

#compile<br/>
$ module purge<br/>
$ module load compiler/intel/2018<br/>
$ mpicc -o hello /opt/ohpc/pub/examples/mpi/hello.c<br/>

</div>


file name : srun_job.sh
    
<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

#!/bin/bash

#SBATCH -A ENT107046        # Project Account<br/>
#SBATCH -J test             # Job name<br/>
#SBATCH -o job.%j.out       # Name of stdout output file (%j expands to jobId)<br/>
#SBATCH -N 4                # Total number of nodes requested<br/>
#SBATCH -n 16               # Total number of mpi tasks requested<br/>
#SBATCH -t 00:30:00         # Run time (hh:mm:ss) - 0.5 hours<br/>
#SBATCH -p gp2d             # partition<br/>

module purge<br/>
module load compiler/intel/2018<br/>

srun  ./hello<br/>

</div>

and submit it

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ sbatch srun_job.sh

</div>