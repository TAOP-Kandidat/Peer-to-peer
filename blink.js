var http = require("http");
const port = 8585;
const onoff = require('onoff');

var Gpio = onoff.Gpio,
	led = new Gpio(14, 'out'), interval;

interval = setInterval(function(){
 var value = (led.readSync() +1) % 2;
 led.write(value, function() {
  console.log("Changed the LED");
 });
}, 2000);

process.on('SIGINT', function() {
 clearInterval(interval);
 led.writeSync(0);
 led.unexport();
 console.log('bye');
});
