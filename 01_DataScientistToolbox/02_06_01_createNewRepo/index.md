---
title       : Creating a New GitHub Repository
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

## Recap: Git vs. GitHub

* You don't need GitHub to use Git
* Git = Local (on your computer); GitHub = Remote (on the web)
* GitHub allows you to:
  1. Share your repositories with others
  2. Access other users' repositories
  3. Store remote copies of your repositories (on GitHub's server) in case something happens to your local copies (on your computer)

---

## Creating a GitHub Repository

* Two methods of creating a GitHub repository:
  1. Start a repository from scratch
  2. "Fork" another user's repository
* This lecture will walk you through the first method
* _NOTE: A repository is often referred to as a "repo"_

---

## Start a Repository From Scratch

* Either go to your profile page (https://github.com/your-user-name-goes-here/) and click on "Create a new repo" in the upper righthand corner of the page

__...OR...__

* Go directly to [https://github.com/new](https://github.com/new) (you'll need to log into your GitHub account if you haven't already done so)

---

## Start a Repository From Scratch

* Create a name for your repo and type a brief description of it
* Select "Public" (Private repos require a paid [or education] account)
* Check the box next to "Initialize this repository with a README"
* Click the "Create repository" button

<img class=center src=../../assets/img/CreateRepo/CreateRepo1.png height='350'/>

---

## Start a Repository From Scratch

* Congratulations! You've created a GitHub repository.

<img class=center src=../../assets/img/CreateRepo/CreateRepo2.png height='450'/>

---

## Creating a Local Copy

* Now you need to create a copy of this repo on your computer so that you can make changes to it
* Open either Git Bash (for Windows users) or Terminal (for Mac users)
* Create a directory on your computer where you will store your copy of the repo:

```
$ mkdir ~/test-repo
```
* Note: The tilde (`~`) symbol refers to your "home" directory, so this will create a directory called `test-repo` in your home directory
* Navigate to this new directory using the following command (`cd` stands for "change directory"):

```
$ cd ~/test-repo
```

---

## Creating a Local Copy

* Initialize a local Git repository in this directory

```
$ git init
```

* Point your local repository at the remote repository you just created on the GitHub server

```
$ git remote add origin https://github.com/your-user-name-goes-here/test-repo.git
```

* **Tip:** You can easily copy the URL of your Github repository with the copy to clipboard button

<img class=center src=../../assets/img/CreateRepo/git-repo-url.png height='200'/>

---

## Creating a Local Copy

* Here's what this process looks like in action:

<img class=center src=../../assets/img/CreateRepo/CreateRepo3.png height='350'/>

* Note: Actual appearance may differ slightly depending on your operating system and default settings.
