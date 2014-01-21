---
title       : Basic Git Commands
subtitle    : 
author      : Jeffrey Leek, Assistant Professor of Biostatistics 
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow   # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}

---

## So you've got a repo.... Now what?

* Once you have a repository, you'll probably make changes over time
* Often, you'll want to share these changes with others (users, followers, collaborators, etc.)
* __Git__ allows you to track your changes locally (on your computer)
* __GitHub__ allows you to share your changes with the world (or just a few people, depending on whether your repo is public or private)
* But how to communicate between Git and GitHub?
* First we'll review some basic commands, then we'll look at a typical workflow

---

## Pushing and Pulling 

<img class=center src=../../assets/img/01_DataScientistToolbox/gghuboverview.png height='500'/>

[http://gitready.com/beginner/2009/01/21/pushing-and-pulling.html](http://gitready.com/beginner/2009/01/21/pushing-and-pulling.html)

---

## Adding

* Suppose you add some new files or make changes to a local repository (on your computer)
* You need to let Git know that you want it to pay attention to these files (i.e. "track" these files)
* From the directory where the repo is located on your computer (in Git Bash or Terminal, depending on whether you're on Windows or Mac, respectively):
  * `git add .` adds all new files (note the period after `add`, which represents "all files")
  * `git add -u` updates tracking for files that changed names or were deleted
  * `git add -A` or `git add --all` does both of the previous 

---

## Committing

* You want to organize and save "snapshots" of the files you've staged for commit
* You type the command
  * `git commit -m "your message goes here"`, substituting a useful description (between the double quotes) of what changes you made since the last committed changes
* This only updates your local repo, not the remote repo on GitHub

---

## Log

* To see a log of the commits you've made locally, type `git log`
  * Spacebar advances page by page
  * Return advances line by line
  * Typing the letter "Q" exits the log

---

## Pushing

* Once you are pleased with your local commits, you would like to update the remote repo (on GitHub)
* The command `git push` sends your most recent commits to GitHub, updating your remote repository for the world to see

---

## Pull Requests

* If you fork someone else's repo and make some changes or additions, you may want the original author to merge your changes into their code
* To do so you need to issue a pull request via GitHub
* Don't need anyone's permission to fork and make changes, but the original author is not obligated to accept your changes
* Pull requests offer a powerful means of contributing to open source software

<img class=center src=../../assets/img/01_DataScientistToolbox/pull_request1.png height='150'/>

---

## Time to be a hacker!

* Git documentation [http://git-scm.com/doc](http://git-scm.com/doc)
* Github help [https://help.github.com/](https://help.github.com/)
* Google/Stack Overflow are great for Github
