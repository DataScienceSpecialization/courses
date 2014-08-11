library(shiny)
shinyUI(pageWithSidebar(
  headerPanel("Hello Shiny!"),
  sidebarPanel(
      h1('H1 text'),
      h2('h2 Text')
  ),
  mainPanel(
      h3('Main Panel text')
  )
))
