
var http = require('http');
var fs = require('fs');
var path = require('path')

// Create Server
var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write('<h1>Hello Everyone</h1>');
        res.end();
    } else if (req.url == '/user') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>User Portal</h1>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>Admin Portal</h1>');
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, { "Content-Type": "application/json" });
        // res.write(`{"message" : "This is a JSON response"}`);
        res.write(JSON.stringify({ message: "Hello World" }))
        res.end();
    } else if (req.url == '/customer') {
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment;filename=data.csv")
        res.writeHead(200);
        res.write(`id,name,email\n1,King Kochhar,king@gmail.com`);
        res.end();
    } else if (req.url == '/employee') {
        fs.readFile(path.join(__dirname, "index.html"), "UTF8", function (contents) {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.writej('<h1>Page Not Found</h1>');
        res.end();
    }



})

// Listen Request on Specific Port
server.listen(3000);
console.log('The Server is running at port 3000!!')

//console.log(__dirname)