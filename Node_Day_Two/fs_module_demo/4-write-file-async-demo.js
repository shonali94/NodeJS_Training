
var fs = require('fs');

/*
fs.writeFile('demo-two.txt', "Hello Folks!!", function (err) {
    if (err) throw err;
    console.log('Data written to file successfully!!')
})
*/

fs.writeFile('demo-two.txt', "Hello Folks!!", { flag: 'a+' }, (err) => {
    if (err) throw err;
    //console.log('Data written to file successfully!!')
})

// Flags: r+ (Reading and Writing), w+ (Writing and Reading), a (Append), a+ (Append and Read)

