const http = require("http");

http.createServer((req, res) => {

    var path = req.url.toLowerCase();

    switch (path) {
        case "/":
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end("Home page for IT122 homework");
            break;
        case "/about":
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end("Sarah Standish is also the Deputy Director of OneWorld Now!, a nonprofit after-school world language program for high school students. In her free time, she enjoys reading, cooking, biking, learning web development, and coding.");
            break;
        default:
            res.writeHead(404, {"Content-type": "text/plain"});
            res.end("This page doesn't exist.");
            break;
    }
}).listen(3000);
console.log("Server listening on port 3000");