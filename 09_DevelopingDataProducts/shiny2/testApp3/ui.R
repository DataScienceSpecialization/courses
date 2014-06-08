library(shiny)
shinyUI(pageWithSidebar(
  headerPanel("Hello Shiny!"),
  sidebarPanel(
      textInput(inputId="text1", label = "Input Text1"),
      textInput(inputId="text2", label = "Input Text2"),
      actionButton("goButton", "Go!")
  ),
  mainPanel(
      p('Output text1'),
      textOutput('text1'),
      p('Output text2'),
      textOutput('text2'),
      p('Output text3'),
      textOutput('text3')
  )
))
