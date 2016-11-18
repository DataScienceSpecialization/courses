RStudio Presenter
===
author: Brian Caffo, Jeff Leek Roger Peng
date: May 21 2014
transition: rotate

<small> 
Department of Biostatistics   
Bloomberg School of Public Health   
Johns Hopkins University   
Coursera Data Science Specialization
</small>


RStudio Presentation
===
- RStudio created a presentation authoring tool within their
development environment. 
- If you are familiar with slidify, you will also be familiar with this tool
    - Code is authored in a generalized markdown format that allows for code chunks
    - The output is an html5 presentation 
    - The file index for the presenter file is .Rpres, which gets converted to an .md file and then to an html file if desired
    - There's a preview tool in RStudio and GUIs for publishing to Rpubs or viewing/creating an html file

Authoring content
===
- This is a fairly complete guide
    - http://www.rstudio.com/ide/docs/presentations/overview
- Quick start is
    - `file` then `New File` then `R Presentation`
    - (`alt-f` then `f` then `p` if you want key strokes)
    - Use basically the same R markdown format for authoring as slidify/knitr
        - Single quotes for inline code
        - Tripple qutoes for block code
        - Same options for code evaluation, caching, hiding etcetera

Compiling and tools
===
- R Studio auto formats and runs the code when you save the document
- Mathjax JS library is loaded by default so that `$x^2$` yields $x^2$
- Slide navigation button on the preview; clicking on the notepad icon takes you to that slide in the deck
- Clicking on `more` yields options for
    - Clearning the knitr cache
    - Viewing in a browser (creates a temporay html file in `AppData/local/temp` for me)
    - Create a html file to save where you want)
- A refresh button 
- A zoom button that brings up a full window

Visuals
===
transition: linear

- R Studio has made it easy to get some cool html5 effects, like cube transitions
with simple options in YAML-like code after the first slide such as
`transition: rotate`
- You can specify it in a slide-by-slide basis

Here's the option "linear"
===
transition: linear

- Just put `transition: linear` right after the slide creation (three equal signs or more in a row)
- Tansition options 
    - http://www.rstudio.com/ide/docs/presentations/slide_transitions_and_navigation

Hierarchical organization
===
type: section
- If you want a hierarchical organization structure, just add a `type: typename` option after the slide
- This changes the default appearance
    - http://www.rstudio.com/ide/docs/presentations/slide_transitions_and_navigation
- This is of type `section`

Here's a subsection
===
type: subsection

Two columns
===
- Do whatever for column one
- Then put `***` on a line by itself with blank lines before and after

***

- Then do whatever for column two


Changing the slide font
==========================================================
font-import: http://fonts.googleapis.com/css?family=Risque
font-family: 'Risque'

- Add a `font-family: fontname` option after the slide
    - http://www.rstudio.com/ide/docs/presentations/customizing_fonts_and_appearance
- Specified in the same way as css font families
    - http://www.w3schools.com/cssref/css_websafe_fonts.asp
- Use `font-import: url` to import fonts
- Important caveats
    - Fonts must be present on the system that you're presenting on, or it will go to a fallback font
    - You have to be connected to the internet to use an imported font (so don't rely on this for offline presentations)
- This is the `Risque` 
    - http://fonts.googleapis.com/css?family=Risque
    
Really changing things 
===
- If you know html5 and CSS well, then you can basically change whatever you want
- A css file with the same names as your presentation will be autoimported 
- You can use `css: file.css` to import a css file 
- You have to create named classes and then use `class: classname` to get slide-specific style control from your css
    - (Or you can apply then within a `<span>`)
- Ultimately, you have an html file, that you can edit as you wish
    - This should be viewed as a last resort, as the whole point is to have reproducible presentations, but may be the easiest way to get the exact style control you want for a final product

Slidify versus R Studio Presenter
===
**Slidify**
- Flexible control from the R MD file
- Under rapid ongoing development
- Large user base
- Lots and lots of styles and options
- Steeper learning curve
- More command-line oriented

***
**R Studio Presenter**
- Embedded in R Studio
- More GUI oriented
- Very easy to get started
- Smaller set of easy styles and options
- Default styles look very nice
- Ultimately as flexible as slidify with a little CSS and HTML knowledge

