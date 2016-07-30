var five = require("johnny-five");
var board = new five.Board();

var led; 

board.on("ready", function() {
  console.log('set up')
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  led.blink();
});