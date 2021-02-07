
var http = require('http');

// Create Server
var server = http.createServer(function (req, res) {
    res.write('Hello Everyone');
    res.end();
})

// Listen Request on Specific Port
server.listen(3000);
console.log('The Server is running at port 3000!!')