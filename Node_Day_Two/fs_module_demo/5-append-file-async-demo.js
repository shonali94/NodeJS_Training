
var fs = require('fs');

fs.appendFile('demo-one.txt', `\nSome More Data..`, (err) => {
    if (err) throw err;
    console.log('Data Append Successfully!!');
})

