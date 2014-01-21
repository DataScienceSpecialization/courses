---
title       : Reading data from APIs
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






## Application programming interfaces


<img class=center src=../../assets/img/03_ObtainingData/twitter.png height= 450/>


[https://dev.twitter.com/docs/api/1/get/blocks/blocking](https://dev.twitter.com/docs/api/1/get/blocks/blocking)


---

## Creating an application

<img class=center src=../../assets/img/03_ObtainingData/twitterapp1.png height= 450/>

[https://dev.twitter.com/apps](https://dev.twitter.com/appsmyapp <- oauth_app("twitter", key = "TYrWFPkFAkn4G5BbkWINYw"))

---

## Creating an application

<img class=center src=../../assets/img/03_ObtainingData/twitterapp2.png height= 450/>


---

## Creating an application

<img class=center src=../../assets/img/03_ObtainingData/twitterapp3.png height= 450/>


---

## Accessing Twitter from R


```r
myapp = oauth_app("twitter",
                   key="yourConsumerKeyHere",secret="yourConsumerSecretHere")
sig = sign_oauth1.0(myapp,
                     token = "yourTokenHere",
                      token_secret = "yourTokenSecretHere")
homeTL = GET("https://api.twitter.com/1.1/statuses/home_timeline.json", sig)
```



---

## Converting the json object


```r
json1 = content(homeTL)
json2 = jsonlite::fromJSON(toJSON(json1))
json2[1,1:4]
```


```
                      created_at           id             id_str
1 Mon Jan 13 05:18:04 +0000 2014 4.225984e+17 422598398940684288
                                                                                                                                         text
1 Now that P. Norvig's regex golf IPython notebook hit Slashdot, let's see if our traffic spike tops the previous one: http://t.co/Vc6JhZXOo8
```


---

## How did I know what url to use?


<img class=center src=../../assets/img/03_ObtainingData/twitterurl.png height= 450/>

[https://dev.twitter.com/docs/api/1.1/get/search/tweets](https://dev.twitter.com/docs/api/1.1/get/search/tweets)

---

## In general look at the documentation


<img class=center src=../../assets/img/03_ObtainingData/twitterdocs.png height= 450/>

[https://dev.twitter.com/docs/api/1.1/overview](https://dev.twitter.com/docs/api/1.1/overview)



---

## In general look at the documentation


* httr allows `GET`, `POST`, `PUT`, `DELETE` requests if you are authorized
* You can authenticate with a user name or a password
* Most modern APIs use something like oauth
* httr works well with Facebook, Google, Twitter, Githb, etc. 
