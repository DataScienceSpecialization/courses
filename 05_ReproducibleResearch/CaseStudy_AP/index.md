---
title       : Reproducible Research Case Study
subtitle    : Identifying Harmful Constituents in Particulate Matter Air Pollution
author      : Roger D. Peng, Associate Professor of Biostatistics
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
url:
  lib: ../../libraries
  assets: ../../assets
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
---


## What Causes PM to be Toxic?

- PM is composed of many different chemical elements

- Some components of PM may be more harmful than others 

- Some sources of PM may be more dangerous than others

- Identifying harmful chemical constituents may lead us to strategies
  for controlling sources of PM


---

## NMMAPS

- The National Morbidity, Mortality, and Air Pollution Study (NMMAPS)
  was a national study of the short-term health effects of ambient air
  pollution

- Focused primarily on particulate matter ($PM_{10}$) and ozone ($O_3$)

- Health outcomes included mortality from all causes and
  hospitalizations for cardiovascular and respiratory diseases

- Key publications
  - http://www.ncbi.nlm.nih.gov/pubmed/11098531
  - http://www.ncbi.nlm.nih.gov/pubmed/11354823

- Funded by the [Health Effects
  Institute](http://www.healtheffects.org) 

  - Roger Peng currently serves on the Health Effects Institute Health
  Review Committee

---

## NMMAPS and Reproducibility

- Data made available at the Internet-based Health and Air Pollution
  Surveillance System (<http://www.ihapss.jhsph.edu>)

- Research results and software also available at iHAPSS

- Many studies (over 67 published) have been conducted based on the
  public data <http://www.ncbi.nlm.nih.gov/pubmed/22475833>

- Has served as an important test bed for methodological development

---

## What Causes Particulate Matter to be Toxic?

<img src="lippmann.png" width=1000 />


<http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1665439/>

- Lippmann *et al.* found strong evidence that Ni modified the
  short-term effect of $PM_{10}$ across 60 US communities

- No other PM chemical constituent seemed to have the same modifying
  effect

- To simple to be true?

---


## A Reanalysis of the Lippmann *et al.* Study

<img src="dominici.png" width=1000 />

<http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2137127/>

- Reexamine the data from NMMAPS and link with PM chemical constituent
  data

- Are the findings sensitive to levels of Nickel in New York City?

---

## Does Nickel Make PM Toxic?

<img src="nickel-beta.png", height=400>

- Long-term average nickel concentrations appear correlated with PM risk

- There appear to be some outliers on the right-hand side (New York City)

---

## Does Nickel Make PM Toxic?

<img src="nickel-beta-lm.png", height=450>

- Regression line statistically significant ($p < 0.01$)

---

## Does Nickel Make PM Toxic?

<img src="nickel-beta-lm-no-ny.png", height=450> 

- Adjusted regression line (blue) no longer statistically significant
($p < 0.31$)

---

## Does Nickel Make PM Toxic?

<img src="ni-leaveout.png" height=500>

---

## What Have We Learned?

- New York does have very high levels of nickel and vanadium, much
  higher than any other US community

- There is evidence of a positive relationship between Ni
  concentrations and $PM_{10}$ risk

- The strength of this relationship is highly sensitive to the
  observations from New York City

- Most of the information in the data is derived from just 3 observations

---

## Lessons Learned

- Reproducibility of NMMAPS allowed for a secondary analysis (and
  linking with PM chemical constituent data) investigating a novel
  hypothesis (Lippmann *et al.*)

- Reproducibility also allowed for a critique of that new analysis
  and some additional new analysis (Dominici *et al.*)

- Original hypothesis not necessarily invalidated, but evidence not as
  strong as originally suggested (more work should be done)

- Reproducibility allows for the scientific discussion to occur in a
  timely and informed manner

- This is how science works

