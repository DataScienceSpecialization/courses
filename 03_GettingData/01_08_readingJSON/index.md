---
title       : Reading JSON
subtitle    : 
author      : Jeffrey Leek 
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







## JSON

* Javascript Object Notation
* Lightweight data storage
* Common format for data from application programming interfaces (APIs)
* Similar structure to XML but different syntax/format
* Data stored as
  * Numbers (double)
  * Strings (double quoted)
  * Boolean (_true_ or _false_)
  * Array (ordered, comma separated enclosed in square brackets _[]_)
  * Object (unorderd, comma separated collection of key:value pairs in curley brackets _{}_)


[http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)


---

## Example JSON file

<img class=center src=../../assets/img/03_ObtainingData/githubjson.png height=450>


---

## Reading data from JSON {jsonlite package}


```r
library(jsonlite)
jsonData <- fromJSON("https://api.github.com/users/jtleek/repos")
names(jsonData)
```

```
 [1] "id"                "name"              "full_name"         "owner"            
 [5] "private"           "html_url"          "description"       "fork"             
 [9] "url"               "forks_url"         "keys_url"          "collaborators_url"
[13] "teams_url"         "hooks_url"         "issue_events_url"  "events_url"       
[17] "assignees_url"     "branches_url"      "tags_url"          "blobs_url"        
[21] "git_tags_url"      "git_refs_url"      "trees_url"         "statuses_url"     
[25] "languages_url"     "stargazers_url"    "contributors_url"  "subscribers_url"  
[29] "subscription_url"  "commits_url"       "git_commits_url"   "comments_url"     
[33] "issue_comment_url" "contents_url"      "compare_url"       "merges_url"       
[37] "archive_url"       "downloads_url"     "issues_url"        "pulls_url"        
[41] "milestones_url"    "notifications_url" "labels_url"        "releases_url"     
[45] "created_at"        "updated_at"        "pushed_at"         "git_url"          
[49] "ssh_url"           "clone_url"         "svn_url"           "homepage"         
[53] "size"              "stargazers_count"  "watchers_count"    "language"         
[57] "has_issues"        "has_downloads"     "has_wiki"          "forks_count"      
[61] "mirror_url"        "open_issues_count" "forks"             "open_issues"      
[65] "watchers"          "default_branch"    "master_branch"    
```

```r
jsonData$name
```

```
 [1] "ballgown"       "dataanalysis"   "datascientist"  "datasharing"    "derfinder"     
 [6] "derfinder-1"    "DSM"            "EDA-Project"    "futureofstats"  "googleCite"    
[11] "graduate"       "healthvis"      "jhsph753"       "jhsph753and4"   "leekasso"      
[16] "modules"        "rdsmGeneSig"    "reviews"        "rfitbit"        "rpackages"     
[21] "sva"            "swfdr"          "talks"          "testrepository" "tornado"       
[26] "tsp-devel"      "tspreg"        
```



---

## Nested objects in JSON


```r
names(jsonData$owner)
```

```
 [1] "login"               "id"                  "avatar_url"          "gravatar_id"        
 [5] "url"                 "html_url"            "followers_url"       "following_url"      
 [9] "gists_url"           "starred_url"         "subscriptions_url"   "organizations_url"  
[13] "repos_url"           "events_url"          "received_events_url" "type"               
[17] "site_admin"         
```

```r
jsonData$owner$login
```

```
 [1] "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek"
[11] "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek"
[21] "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek" "jtleek"
```



---

## Writing data frames to JSON


```r
myjson <- toJSON(iris, pretty=TRUE)
cat(myjson)
```

```
[
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.7,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.6,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.6,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3.9,
		"Petal.Length" : 1.7,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.6,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.4,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.1,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3.7,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.8,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.8,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.1,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.3,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.1,
		"Petal.Width" : 0.1,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 4,
		"Petal.Length" : 1.2,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 4.4,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3.9,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 1.7,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.7,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.7,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.6,
		"Sepal.Width" : 3.6,
		"Petal.Length" : 1,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 1.7,
		"Petal.Width" : 0.5,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.8,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.9,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.2,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.2,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.7,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.8,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.2,
		"Sepal.Width" : 4.1,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.1,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 4.2,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 1.2,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 3.6,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.1,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.4,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.5,
		"Sepal.Width" : 2.3,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.4,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 1.3,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.5,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.6,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 1.9,
		"Petal.Width" : 0.4,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.8,
		"Sepal.Width" : 3,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.3,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 1.6,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 4.6,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5.3,
		"Sepal.Width" : 3.7,
		"Petal.Length" : 1.5,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 1.4,
		"Petal.Width" : 0.2,
		"Species" : "setosa"
	},
	{
		"Sepal.Length" : 7,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 4.7,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.9,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 4.9,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 2.3,
		"Petal.Length" : 4,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.5,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.6,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 4.7,
		"Petal.Width" : 1.6,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 2.4,
		"Petal.Length" : 3.3,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.6,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.6,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.2,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 3.9,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 2,
		"Petal.Length" : 3.5,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.9,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.2,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 2.2,
		"Petal.Length" : 4,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.7,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 3.6,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 4.4,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 4.1,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.2,
		"Sepal.Width" : 2.2,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 3.9,
		"Petal.Width" : 1.1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.9,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 4.8,
		"Petal.Width" : 1.8,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 4.9,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.7,
		"Petal.Width" : 1.2,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.3,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.6,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.4,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.8,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.8,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3,
		"Petal.Length" : 5,
		"Petal.Width" : 1.7,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 2.6,
		"Petal.Length" : 3.5,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 2.4,
		"Petal.Length" : 3.8,
		"Petal.Width" : 1.1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 2.4,
		"Petal.Length" : 3.7,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 3.9,
		"Petal.Width" : 1.2,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 5.1,
		"Petal.Width" : 1.6,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.4,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.6,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 4.7,
		"Petal.Width" : 1.5,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.3,
		"Petal.Length" : 4.4,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.1,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 4,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.5,
		"Sepal.Width" : 2.6,
		"Petal.Length" : 4.4,
		"Petal.Width" : 1.2,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.6,
		"Petal.Width" : 1.4,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.6,
		"Petal.Length" : 4,
		"Petal.Width" : 1.2,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5,
		"Sepal.Width" : 2.3,
		"Petal.Length" : 3.3,
		"Petal.Width" : 1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 4.2,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.2,
		"Petal.Width" : 1.2,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.2,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.2,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 4.3,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.1,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 3,
		"Petal.Width" : 1.1,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.1,
		"Petal.Width" : 1.3,
		"Species" : "versicolor"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 6,
		"Petal.Width" : 2.5,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 5.1,
		"Petal.Width" : 1.9,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.1,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.9,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 5.6,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.5,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.8,
		"Petal.Width" : 2.2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.6,
		"Sepal.Width" : 3,
		"Petal.Length" : 6.6,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 4.9,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 4.5,
		"Petal.Width" : 1.7,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.3,
		"Sepal.Width" : 2.9,
		"Petal.Length" : 6.3,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 5.8,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.2,
		"Sepal.Width" : 3.6,
		"Petal.Length" : 6.1,
		"Petal.Width" : 2.5,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.5,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 5.1,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 5.3,
		"Petal.Width" : 1.9,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.8,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.5,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.7,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 5,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 5.1,
		"Petal.Width" : 2.4,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 5.3,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.5,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.5,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.7,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 6.7,
		"Petal.Width" : 2.2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.7,
		"Sepal.Width" : 2.6,
		"Petal.Length" : 6.9,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 2.2,
		"Petal.Length" : 5,
		"Petal.Width" : 1.5,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.9,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 5.7,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.6,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.9,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.7,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 6.7,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 4.9,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 5.7,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.2,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 6,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.2,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 4.8,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.9,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 5.6,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.2,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.8,
		"Petal.Width" : 1.6,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.4,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 6.1,
		"Petal.Width" : 1.9,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.9,
		"Sepal.Width" : 3.8,
		"Petal.Length" : 6.4,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 5.6,
		"Petal.Width" : 2.2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.8,
		"Petal.Length" : 5.1,
		"Petal.Width" : 1.5,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.1,
		"Sepal.Width" : 2.6,
		"Petal.Length" : 5.6,
		"Petal.Width" : 1.4,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 7.7,
		"Sepal.Width" : 3,
		"Petal.Length" : 6.1,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 5.6,
		"Petal.Width" : 2.4,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.4,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 5.5,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6,
		"Sepal.Width" : 3,
		"Petal.Length" : 4.8,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.9,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 5.4,
		"Petal.Width" : 2.1,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 5.6,
		"Petal.Width" : 2.4,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.9,
		"Sepal.Width" : 3.1,
		"Petal.Length" : 5.1,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.8,
		"Sepal.Width" : 2.7,
		"Petal.Length" : 5.1,
		"Petal.Width" : 1.9,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.8,
		"Sepal.Width" : 3.2,
		"Petal.Length" : 5.9,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3.3,
		"Petal.Length" : 5.7,
		"Petal.Width" : 2.5,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.7,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.2,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.3,
		"Sepal.Width" : 2.5,
		"Petal.Length" : 5,
		"Petal.Width" : 1.9,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.5,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.2,
		"Petal.Width" : 2,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 6.2,
		"Sepal.Width" : 3.4,
		"Petal.Length" : 5.4,
		"Petal.Width" : 2.3,
		"Species" : "virginica"
	},
	{
		"Sepal.Length" : 5.9,
		"Sepal.Width" : 3,
		"Petal.Length" : 5.1,
		"Petal.Width" : 1.8,
		"Species" : "virginica"
	}
]
```


[http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/](http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/)


---

## Convert back to JSON


```r
iris2 <- fromJSON(myjson)
head(iris2)
```

```
  Sepal.Length Sepal.Width Petal.Length Petal.Width Species
1          5.1         3.5          1.4         0.2  setosa
2          4.9         3.0          1.4         0.2  setosa
3          4.7         3.2          1.3         0.2  setosa
4          4.6         3.1          1.5         0.2  setosa
5          5.0         3.6          1.4         0.2  setosa
6          5.4         3.9          1.7         0.4  setosa
```



[http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/](http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/)

---

## Further resources

* [http://www.json.org/](http://www.json.org/)
* A good tutorial on jsonlite - [http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/](http://www.r-bloggers.com/new-package-jsonlite-a-smarter-json-encoderdecoder/)
* [jsonlite vignette](http://cran.r-project.org/web/packages/jsonlite/vignettes/json-mapping.pdf)
