
/**
 * Http Module: 
 * To create a simple Node.js web server to handle incoming requests.
 * To access web page of any web application.
 * 
 */

// Import Http Module
var http = require('http');

// Create a web server
var server = http.createServer(function (req, res) {
    // Handle All Incomming Request Here..
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hello Everyone!!</h2>');
        res.end();
    } else if (req.url == '/user') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Welcome to User Page!!</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Welcome to Admin Page!!</h2>');
        res.end();
    }
})

// Listen for incoming request over specific port
server.listen(3000);
console.log('The server is running at port 3000!!')



