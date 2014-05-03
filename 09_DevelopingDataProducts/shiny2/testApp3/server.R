library(shiny)

shinyServer(
  function(input, output) {
    output$text1 <- renderText({input$text1})
    output$text2 <- renderText({input$text2})
    output$text3 <- renderText({
        input$goButton
        isolate(paste(input$text1, input$text2))
    })
  }
)

