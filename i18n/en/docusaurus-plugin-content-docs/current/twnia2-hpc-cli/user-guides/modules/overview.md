---
displayed_sidebar: twnia2_hpc_cli_user_guides_modules
sidebar_label: 'Module 與可用軟體套件'
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-module-overview-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-module-overview-en' 
---

# Module Overview

## Environment variable manager


Module is an HPC environment variable manager which can easily switch between different tools, solving the complex dependency problem when compiling or running applications.

With modules, you can switch environment variables to use specific packages, tools, or libraries without using the `export` command. Moreover, unlike the `unset` command, with just one `module purge` command you can remove all the environment variables.

:::info
The most common tool for HPC to manage environment variables is `modules`. [<ins>Environment Modules</ins>](http://modules.sourceforge.net) is used traditionally, as Taiwania 1. Taiwania 2 (HPC CLI) adopts [<ins>Lmod</ins>](https://lmod.readthedocs.io) instead. The usage of the tools is similar, only the programming language is different.
:::

<br/>


## Basic module commands

- List available modules
 `module avail`
- List loaded modules
  `module list`
- View modules instruction
  `module whatis package1 package2 ...`
- Load specific modules
 `module load package1 package2 ...`
- Unload specific modules
  `module unload package1 package2 ...`
- Unload all modules
  `module purge`

:::tip

You can use **`ml`** to replace the above `module` command. Here are some examples:

- List available modules
 `ml av`
- Load specific modules
 `ml package1 package2 ...`
- Remove specific modules
  `ml -package1 -package2 ...`

:::

<br/>


## Basic module concepts

- Modules are organized in a hierarchical structure. Therefore, you must load a top level layer module before you can see the dependent modules at the next layer. In this way the wrong matching of packages can be avoided.
- For examples, you must `ml cuda/11.3` before you can see `openmpi4/4.1.1`, which is compilation dependent with `cuda/11.3`; you must load `openmpi4/4.1.1`, before you can see `openmpi4/4.1.1`, which is compile-dependent with `fftw3/3.3.9`.
- The above example can be used as follows:
```bash
# Unload all module
ml purge
# Load specific modules
ml cuda/11.3 openmpi4/4.1.1 fftw3/3.3.9 
```