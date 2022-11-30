---
sidebar_position: 3
sidebar_label: '其他 MPI 範例'
slug: '/user-guides/twcc/twnia2-hpc-cli/mpi-examples'
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

```bash
# compile
module purge
module load compiler/intel/2018
mpicc -o hello /opt/ohpc/pub/examples/mpi/hello.c
```


file name : srun_job.sh

```bash
#!/bin/bash

#SBATCH -A ENT107046        # Project Account
#SBATCH -J test             # Job name
#SBATCH -o job.%j.out       # Name of stdout output file (%j expands to jobId)
#SBATCH -N 4                # Total number of nodes requested
#SBATCH -n 16               # Total number of mpi tasks requested
#SBATCH -t 00:30:00         # Run time (hh:mm:ss) - 0.5 hours
#SBATCH -p gp2d             # partition

module purge
module load compiler/intel/2018

srun  ./hello
```

and submit it

```bash
sbatch srun_job.sh
```