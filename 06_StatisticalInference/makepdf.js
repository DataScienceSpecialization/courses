<<<<<<< HEAD
var casper = require('casper').create({viewportSize:{width:1500,height:1000}});
var args = casper.cli.args;
var imgfile = (args[1] || Math.random().toString(36).slice(2))
casper.start(args[0], function() {
  this.wait(args[2], function(){
    this.captureSelector(imgfile, "slides");
  });
});
 
=======
var casper = require('casper').create({viewportSize:{width:1500,height:1000}});
var args = casper.cli.args;
var imgfile = (args[1] || Math.random().toString(36).slice(2))
casper.start(args[0], function() {
  this.wait(args[2], function(){
    this.captureSelector(imgfile, "slides");
  });
});
 
>>>>>>> 1125e7d02597aa72ba764ce21ea3618c1ee3cd20
casper.run();