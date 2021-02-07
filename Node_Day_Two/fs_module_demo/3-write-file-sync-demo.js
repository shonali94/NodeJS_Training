
var fs = require('fs');

// fs.writeFileSync('demo-one.txt', "Hello Everyone");
// console.log('Successfully written to File!!');


try {
    fs.writeFileSync('demo-one.txt', "Hello World");
    console.log('Successfully written to File!!');
} catch (err) {
    console.error(err);
}