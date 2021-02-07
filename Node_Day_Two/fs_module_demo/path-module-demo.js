
var path = require('path');

// console.log(__dirname);

var file = "/fs_module_demo/demo-one.txt";

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.isAbsolute(file));

console.log(path.join('/', "fs_module_demo", "demo-one.txt"));