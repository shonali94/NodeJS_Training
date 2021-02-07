
// Import the Module
var os = require('os');

console.log("OS Type : " + os.type());
console.log("Total Memory : " + os.totalmem());
console.log("Free Memory : " + os.freemem())
console.log("User Information : " + os.userInfo().username);
console.log("Home Directory : " + os.homedir());

console.log(__dirname);