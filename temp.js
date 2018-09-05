const sensorLib = require('node-dht-sensor');

sensorLib.initialize(22,12)
const interval = setInterval(() => {
 read();
}, 2000);

function read() {
 let readout = sensorLib.read();
 console.log('Temperatur: ' + readout.temperature.toFixed(2));
}

process.on('SIGINT', () =>{
 clearInterval(interval);
console.log('Bye! motherf!');
process.exit();
});