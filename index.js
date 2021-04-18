import http from 'http';
import qs from 'querystring';
import { getAll, getItem } from './data.js';

http.createServer((req, res) => {

    let url = req.url.split("?"); // get route from query string
    let query = qs.parse(url[1]); // convert query string to object
    let path = url[0].toLowerCase();

    switch (path) {
        case "/":
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end(JSON.stringify(getAll()));
            break;
        case "/about":
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end("Sarah Standish is also the Deputy Director of OneWorld Now!, a nonprofit after-school world language program for high school students. In her free time, she enjoys reading, cooking, biking, learning web development, and coding.");
            break;
        case "/detail":
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end(JSON.stringify(getItem(query.title)));
        default:
            res.writeHead(404, {"Content-type": "text/plain"});
            res.end("This page doesn't exist.");
            break;
    }
}).listen(3000);
console.log("Server listening on port 3000");