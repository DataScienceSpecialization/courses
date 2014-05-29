
(function( $ ) {

function isundef(x, y) {
    return (x == undefined) ? y : x;
}

QuizSingleHandler = function (question, idQuestion) {
    this.question = question;
    this.idQuestion = idQuestion;
    this.hintsShown = 0;
    this.attempts = 0;
}

QuizSingleHandler.prototype = {
      
    makeCorrection: function(self) {
        // when used as a callback, self will be passed as parameter,
        // since 'this' will be overridden by jquery
        var self = isundef(self, this);
        self.question.data('submitted', true);
        self.attempts += 1;
        console.log(self.attempts);
        
        $('.quiz-radio:checked', self.question).each(function() {
            var $radio = $(this);
            var $option = $radio.parent();
            
            if ( $option.hasClass('quiz-answer') ) {
                $option.addClass('quiz-correct');
                $option.parents('div.quiz').data('attempts', self.attempts);
                $option.parents('div.quiz').data('status', 'correct');
                self.explanationVisible(true);  
            } else {
                $option.addClass('quiz-wrong');
                $option.parents('div.quiz').data('attempts', self.attempts);
                $option.parents('div.quiz').data('status', 'wrong');
            };
        });
    },
    
    clear: function(self) {    
        var self = isundef(self, this);
        $('.quiz-radio', self.question).removeAttr('checked');
        self.clearCorrection();
    },
    
    clearCorrection: function(self) {
        var self = isundef(self, this);
        
        if ( self.question.data('submitted') == true ) {
            $('.quiz-option', self.question).removeClass('quiz-correct quiz-wrong');

            self.question.data('submitted', false);
        }      
        
        self.explanationVisible(false); 
        self.hintVisible(false);
    },
    
    showAnswer: function(self) {
        var self = isundef(self, this);
        self.clear();
        
        $('.quiz-answer', self.question).each(function() {
            $(this).addClass('quiz-correct');
            $(this).find('.quiz-radio').attr('checked', 'checked');
        });
        
        self.question.data('submitted', true);
        self.explanationVisible(true);
    },
    
    hintVisible: function(mode, self) {
        var self = isundef(self, this);
        mode = (mode) ? 'block' : 'none';
        $('.quiz-hint', self.question).each(function() {
          $(this).css('display', mode);
          // $(this).find('li:lt(' + self.hintsShown + 1, ')').show();
          // console.log(self.hintsShown);
          // self.hintsShown++;
        });
    },
    
    toggleHint: function(self) {
        var self = isundef(self, this);
        
        $('.quiz-hint', self.question).each(function() {
            if ( $(this).css('display') == 'none' )
              self.hintVisible(true);
            else
              self.hintVisible(false);
        });
    },
    
    explanationVisible: function(mode, self) {
        var self = isundef(self, this);
        
        mode = (mode) ? 'block' : 'none';
        
        $('.quiz-explanation', self.question).each(function() {
            // commented out to display answer as modal
            // $(this).css('display', mode); 
            $(this).css('display', 'none');
        });
    },
    
    init: function() {   
        var self = this;
        
        // added data-numOption to the template
        var template = Mustache.compile('<input type="radio" class="quiz-radio" ' +
        'name="quiz-question-{{idQuestion}}-options" value="{{label}}"' +
        'data-numOption="{{numOption}}"' +
        'id="quiz-question-{{idQuestion}}-option-{{numOption}}"/>' +
        '<label for="quiz-question-{{idQuestion}}-option-{{numOption}}">{{label}}</label>' 
        );
        
        /*
        var template = Mustache.compile('<label for="quiz-question-{{idQuestion}}-option-{{numOption}}" class="radio">' +
          '<input type="radio" class="quiz-radio" ' +
          'name="quiz-question-{{idQuestion}}-options" value="{{label}}"' +
          'data-numOption="{{numOption}}"' +
          'id="quiz-question-{{idQuestion}}-option-{{numOption}}"/>' +
          '{{label}}</label>' 
        );
        */
        
        // creates radio buttons for the quiz

        var numOption = 0;
        $('.quiz-answer, .quiz-option', self.question).each(function() {
            var $this = $(this);
            $this.addClass('quiz-option');
            $this.html(template({
                idQuestion: self.idQuestion, 
                numOption: ++numOption, 
                label: $this.text() 
            }));
        });
        
        // bind clear to the quiz-clear elements, if any
        $('.quiz-clear', self.question).each(function() {
            $(this).bind('click.clear', function() { self.clear(self) });
        });
       
        // clear correction if there are correct/wrong classes but the options checked changed
        $('.quiz-radio', self.question).each(function() {
            $(this).bind('click.clearCorrection', function() { self.clearCorrection(self) });
        });

        // bind makeCorrection to the quiz-submit elements, if any
        $('.quiz-submit', self.question).each(function() {
            $(this).bind('click.makeCorrection', function() { self.makeCorrection(self) });
        });
        
        // bind makeCorrection to the quiz-submit elements, if any
        $('.quiz-show-answer', self.question).each(function() {
            $(this).bind('click.showAnswer', function() { self.showAnswer(self) });
        });
        
        $('.quiz-toggle-hint', self.question).each(function() {
            $(this).bind('click.toggleHint', function() { self.toggleHint(self) });
        });

        self.hintVisible(false);
        self.explanationVisible(false);
    }
}

QuizMultipleHandler = function (question, idQuestion) {
    this.question = question;
    this.idQuestion = idQuestion;
}

QuizMultipleHandler.prototype = {

    _individual: function(self) {
        var self = isundef(self, this);
        self.question.data('submitted', true);
        
        var isCorrect = true;

        $('.quiz-checkbox', self.question).each(function() {
            var $checkbox = $(this);
            var $option = $checkbox.parent();
            
            isCorrect = isCorrect && 
                ($option.hasClass('quiz-answer') == $checkbox.is(':checked'));
        });
        
        $('.quiz-checkbox:checked', self.question).each(function() {
            var $checkbox = $(this);
            var $option = $checkbox.parent();
            
            if ( $option.hasClass('quiz-answer') == $checkbox.is(':checked') )
                $option.addClass('quiz-correct');
            else
                $option.addClass('quiz-wrong');
        });
        
        if ( isCorrect ) 
            self.explanationVisible(true);
    },
    
    _whole: function(self) {
        var self = isundef(self, this);
        self.question.data('submitted', true);
        
        var isCorrect = true;

        $('.quiz-checkbox', self.question).each(function() {
            var $checkbox = $(this);
            var $option = $checkbox.parent();
            
            isCorrect = isCorrect && 
                ($option.hasClass('quiz-answer') == $checkbox.is(':checked'));
        });
        
        $('.quiz-checkbox:checked', self.question).each(function() {
            var $checkbox = $(this);
            var $option = $checkbox.parent();
            
            if ( isCorrect )
                $option.addClass('quiz-correct');    
            else
                $option.addClass('quiz-wrong');
        });
        
        if ( isCorrect ) 
            self.explanationVisible(true);
    },
    
    clear: function(self) {    
        var self = isundef(self, this);
        $('.quiz-checkbox', self.question).removeAttr('checked');
        self.clearCorrection();
    },
    
    clearCorrection: function(self) {
        var self = isundef(self, this);
        
        if ( self.question.data('submitted') == true ) {
            $('.quiz-option', self.question).removeClass('quiz-correct quiz-wrong');

            self.question.data('submitted', false);
        }   
        
        self.explanationVisible(false);             
    },
      
    showAnswer: function(self) {
        var self = isundef(self, this);
        self.clear();
        
        $('.quiz-answer', self.question).each(function() {
            var $this = $(this);
            $this.addClass('quiz-correct');
            
            $('.quiz-checkbox', $this).each(function() {
                $(this).attr('checked', 'checked');
            });
        });
        
        self.question.data('submitted', true);
        self.explanationVisible(true);
    },
    
    hintVisible: function(mode, self) {
        var self = isundef(self, this);
        mode = (mode) ? 'block' : 'none';
        $('.quiz-hint', self.question).each(function() {
            $(this).css('display', mode);
        });
    },
    
    toggleHint: function(self) {
        var self = isundef(self, this);
        
        $('.quiz-hint', self.question).each(function() {
            if ( $(this).css('display') == 'none' )
                self.hintVisible(true);
            else
                self.hintVisible(false);
        });
    },
    
    explanationVisible: function(mode, self) {
        var self = isundef(self, this);
        
        mode = (mode) ? 'block' : 'none';
        
        $('.quiz-explanation', self.question).each(function() {
          $(this).css('display', 'none');
          // $(this).css('display', mode);
        });
    },
      
    init: function() {   
        var self = this;
        
        var template = Mustache.compile('<input type="checkbox" class="quiz-checkbox" ' +
        'id="quiz-question-{{idQuestion}}-option-{{numOption}}"/>' +
        '<label for="quiz-question-{{idQuestion}}-option-{{numOption}}">{{label}}</label>');
        
        var numOption = 0;

        $('.quiz-answer, .quiz-option', self.question).each(function() {
            var $this = $(this);
            $this.addClass('quiz-option');
            $this.html(template({
                idQuestion: self.idQuestion, 
                numOption: ++numOption, 
                label: $this.html() 
            }));
        });
        
        if ( self.question.attr('data-individual') != undefined ) {
            self.makeCorrection = self._individual;
        } else {
            self.makeCorrection = self._whole;
        }
        
        $('.quiz-clear', self.question).each(function() {
            $(this).bind('click.clear', function() { self.clear(self) });
        });
       
        $('.quiz-checkbox', self.question).each(function() {
            $(this).bind('click.clearCorrection', function() { self.clearCorrection(self) });
        });
        
        $('.quiz-submit', self.question).each(function() {
            $(this).bind('click.makeCorrection', function() { self.makeCorrection(self) });
        });
        
        $('.quiz-show-answer', self.question).each(function() {
            $(this).bind('click.showAnswer', function() { self.showAnswer(self) });
        });
        
        $('.quiz-toggle-hint', self.question).each(function() {
            $(this).bind('click.toggleHint', function() { self.toggleHint(self) });
        });

        self.hintVisible(false);
        self.explanationVisible(false);
    }
}

QuizTextHandler = function(question, idQuestion) { 
    this.question = question;
    this.idQuestion = idQuestion;
}

QuizTextHandler.prototype = {
  
    makeCorrection: function(self){
      var self = isundef(self, this);
      self.clearCorrection();
      self.question.data('submitted', true);
      
      $(".quiz-answerbox", self.question).each(function(){
        var userAnswer = parseFloat($(this).val());
        self.answer = $(this).data("answer");
        if (Math.abs(userAnswer - self.answer)/self.answer < 0.02){
          self.explanationVisible(true);
          $(this).addClass('quiz-correct')
        } else {
          $(this).addClass('quiz-wrong')
        }
      });
    },
    
    makeCorrection2: function(self) {
        var self = isundef(self, this);
        self.clearCorrection();
        self.question.data('submitted', true);

        var userAnswer = '';
        $('.quiz-answerbox', self.question).each(function() {
            var $answerbox = $(this);
            userAnswer = $answerbox.val();
            self.answer = $(this).attr("data-answer");
        });
        
        if ( !self.caseSensitive ) {
            userAnswer = userAnswer.toLowerCase();
            if ( self.answer )
                self.answer = self.answer.toLowerCase();
        }
        
        if ( !self.notrim ) {
            userAnswer = $.trim(userAnswer);
            self.answer = $.trim(self.answer);
            if ( self.answer )
                self.answer = self.answer.toLowerCase();
        }
        
        if ( userAnswer == self.answer || self.validator(userAnswer) ) {
            self.explanationVisible(true);
            $('.quiz-answerbox', self.question).each(function() {
                $(this).addClass('quiz-correct');
            });
        } else 
            $('.quiz-answerbox', self.question).each(function() {
                $(this).addClass('quiz-wrong');
            });
    },
    
    hintVisible: function(mode, self) {
        var self = isundef(self, this);
        mode = (mode) ? 'block' : 'none';
        $('.quiz-hint', self.question).each(function() {
            $(this).css('display', mode);
        });
    },
    
    toggleHint: function(self) {
        var self = isundef(self, this);
        
        $('.quiz-hint', self.question).each(function() {
            if ( $(this).css('display') == 'none' )
                self.hintVisible(true);
            else
                self.hintVisible(false);
        });
    },
    
    clear: function(self) {    
        var self = isundef(self, this);
        $('.quiz-answerbox', self.question).val('');
        self.clearCorrection();
    },
    
    clearCorrection: function(self) {
        var self = isundef(self, this); 
        
        if ( self.question.data('submitted') == true ) {
            $('.quiz-answerbox', self.question).removeClass('quiz-correct quiz-wrong');
            self.question.data('submitted', false);
        }   
        
        self.explanationVisible(false);             
    },
    
    showAnswer: function(self) {
        // if ( self.answer == undefined ) 
        //   return;
    
        var self = isundef(self, this);
        self.clear();
        
        $('.quiz-answerbox', self.question).each(function() {
            var $this = $(this);
            self.answer = $this.attr("data-answer");
            $this.val(self.answer);
            $this.addClass('quiz-correct');
        });
        
        self.question.data('submitted', true);
        self.explanationVisible(true);
    },
    
    explanationVisible: function(mode, self) {
        var self = isundef(self, this);
        
        mode = (mode) ? 'block' : 'none';
      
        $('.quiz-explanation', self.question).each(function() {
            $(this).css('display', 'none')
            // $(this).css('display', mode);
        });
        
    },
    
    init: function() {
        var self = this;
        
        self.answer = self.question.attr('data-answer');
        
        if ( self.question.attr('data-validator') != undefined )
            self.validator = eval("(" + self.question.attr('data-validator') + ")"); 
           
        self.validator = isundef(self.validator, function(x) { return false; });
            
        self.caseSensitive = self.question.attr('data-sensitive') != undefined;
        self.notrim = self.question.attr('data-notrim') != undefined; 
        
        $('.quiz-clear', self.question).each(function() {
            $(this).bind('click.clear', function() { self.clear(self) });
        });
        
        $('.quiz-submit', self.question).each(function() {
            $(this).bind('click.makeCorrection', function() { self.makeCorrection(self) });
        });
        
        $('.quiz-answerbox', self.question).each(function() {
            $(this).bind('change.clearCorrection', function() { self.clearCorrection(self) });
        });
        
        $('.quiz-show-answer', self.question).each(function() {
            $(this).bind('click.showAnswer', function() { self.showAnswer(self) });
        });
        
        $('.quiz-toggle-hint', self.question).each(function() {
            $(this).bind('click.toggleHint', function() { self.toggleHint(self) });
        }); 

        self.hintVisible(false);
        self.explanationVisible(false);
    }
}

$.quiz = function($context) {
    var self = $.quiz;
    // if no context is given, set it as document  
    $context = ($context == undefined) ? $(document) : $context;
    var handler = self.getHandler($context);
    
    // if it doesn't have a handler, check all children for handlers
    if ( handler == undefined ) {
        for (handler in self.handlers)
            $('.' + handler, $context).each(function() {
                var $this = $(this);
                var newQuiz = new self.handlers[handler]($this, self.getId($this));
                self.quizzes.push(newQuiz);
                newQuiz.init();
            });
    } // if it has, make it a quiz
    else {
        var newQuiz = new self.handlers[handler]($context, self.getId($context));
        self.quizzes.push(newQuiz);
        newQuiz.init();
    }
}

$.quiz.getId = function($element) {
    self.counter = (self.counter == undefined) ? 0 : self.counter;
    if ( $element.attr('id') != undefined )
        return $element.attr('id');
    else
        return ++self.counter;
}

$.quiz.getHandler = function($context) {
    for (var handler in $.quiz.handlers)
        if ( $context.hasClass(handler) ) 
            return handler;
    
    return undefined;
}

$.quiz.handlers = {
    'quiz-single': QuizSingleHandler,
    'quiz-multiple': QuizMultipleHandler,
    'quiz-text': QuizTextHandler
};

$.quiz.quizzes = [];

$.fn.quiz = function() {
    $.quiz(this);
    return this;
}

})(jQuery);
