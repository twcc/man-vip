---
title: module help | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# module help

<div style="background-color:black;color:white;padding:20px;">

[qct@gn0101 ~]$ module help
Usage: module [options] sub-command [args ...]

Options:
  -h -? -H --help                   This help message
  -s availStyle --style=availStyle  Site controlled avail style: system (default: system)
  --regression_testing              Lmod regression testing
  -D                                Program tracing written to stderr
  --debug=dbglvl                    Program tracing written to stderr
  --pin_versions=pinVersions        When doing a restore use specified version, do not follow defaults
  -d --default                      List default modules only when used with avail
  -q --quiet                        Do not print out warnings
  --expert                          Expert mode
  -t --terse                        Write out in machine readable format for commands: list, avail, spider,
                                    savelist
  --initial_load                    loading Lmod for first time in a user shell
  --latest                          Load latest (ignore default)
  --ignore_cache                    Treat the cache file(s) as out-of-date
  --novice                          Turn off expert and quiet flag
  --raw                             Print modulefile in raw output when used with show
  -w twidth --width=twidth          Use this as max term width
  -v --version                      Print version info and quit
  -r --regexp                       use regular expression match
  --gitversion                      Dump git version in a machine readable way and quit
  --dumpversion                     Dump version in a machine readable way and quit
  --check_syntax --checkSyntax      Checking module command syntax: do not load
  --config                          Report Lmod Configuration
  --config_json                     Report Lmod Configuration in json format
  --mt                              Report Module Table State
  --timer                           report run times
  --force                           force removal of a sticky module or save an empty collection
  --redirect                        Send the output of list, avail, spider to stdout (not stderr)
  --no_redirect                     Force output of list, avail and spider to stderr
  --show_hidden                     Avail and spider will report hidden modules
  --spider_timeout=timeout          a timeout for spider
  -T --trace                        


module [options] sub-command [args ...]

Help sub-commands:
------------------
  help                              prints this message
  help                module [...]  print help message from module(s)

Loading/Unloading sub-commands:
-------------------------------
  load | add          module [...]  load module(s)
  try-load | try-add  module [...]  Add module(s), do not complain if not found
  del | unload        module [...]  Remove module(s), do not complain if not found
  swap | sw | switch  m1 m2         unload m1 and load m2
  purge                             unload all modules
  refresh                           reload aliases from current list of modules.
  update                            reload all currently loaded modules.

Listing / Searching sub-commands:
---------------------------------
  list                              List loaded modules
  list                s1 s2 ...     List loaded modules that match the pattern
  avail | av                        List available modules
  avail | av          string        List available modules that contain "string".
  spider                            List all possible modules
  spider              module        List all possible version of that module file
  spider              string        List all module that contain the "string".
  spider              name/version  Detailed information about that version of the module.
  whatis              module        Print whatis information about module
  keyword | key       string        Search all name and whatis that contain "string".

Searching with Lmod:
--------------------
  All searching (spider, list, avail, keyword) support regular expressions:
  

  -r spider           '^p'          Finds all the modules that start with `p' or `P'
  -r spider           mpi           Finds all modules that have "mpi" in their name.
  -r spider           'mpi$         Finds all modules that end with "mpi" in their name.

Handling a collection of modules:
--------------------------------
  save | s                          Save the current list of modules to a user defined "default" collection.
  save | s            name          Save the current list of modules to "name" collection.
  reset                             The same as "restore system"
  restore | r                       Restore modules from the user's "default" or system default.
  restore | r         name          Restore modules from "name" collection.
  restore             system        Restore module state to system defaults.
  savelist                          List of saved collections.
  describe | mcc      name          Describe the contents of a module collection.
  disable             name          Disable a collection.

Deprecated commands:
--------------------
  getdefault          [name]        load name collection of modules or user's "default" if no name given.
                                    ===> Use "restore" instead <====
  setdefault          [name]        Save current list of modules to name if given, otherwise save as the
                                    default list for you the user.
                                    ===> Use "save" instead. <====

Miscellaneous sub-commands:
---------------------------
  show                modulefile    show the commands in the module file.
  use [-a]            path          Prepend or Append path to MODULEPATH.
  unuse               path          remove path from MODULEPATH.
  tablelist                         output list of active modules as a lua table.

Important Environment Variables:
--------------------------------
  LMOD_COLORIZE                     If defined to be "YES" then Lmod prints properties and warning in color.

------------------------------------------------------------------------------------------------------------

Lmod Web Sites

  Documentation:    http://lmod.readthedocs.org
  Github:           https://github.com/TACC/Lmod
  Sourceforge:      https://lmod.sf.net
  TACC Homepage:    https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

  To report a bug please read http://lmod.readthedocs.io/en/latest/075_bug_reporting.html
    ------------------------------------------------------------------------------------------------------------



Modules based on Lua: Version 7.7.14  2017-11-16 16:23 -07:00
    by Robert McLay mclay@tacc.utexas.edu

</div>