var http = require("http");
const port = 8585;
 
const sensorLib = require('node-dht-sensor');

sensorLib.initialize(22,12)
const interval = setInterval(() => {
 read();
}, 2000);

var readout;
function read() {
 readout = sensorLib.read();
 console.log('Temperatur: ' + readout.temperature.toFixed(2));
}

process.on('SIGINT', () =>{
 clearInterval(interval);
console.log('Bye! motherf!');
process.exit();
});
 
http.createServer(function(req,res){
  console.log('New incoming client request for ' + req.url);
  res.writeHeader(200, {'Content-type': 'application/json'});
  switch(req.url){
    case '/temperature':
    res.write('{"temperature" :' + readout.temperature.toFixed(2) + '}');
    break;
    case '/light':
    res.write('{"light" :' + randomInt(1,100) + '}');
    break;
    default:
      res.write('{"hello" : "world"}');
  }
  res.end();
}).listen(port);
console.log('Server started ' + port);