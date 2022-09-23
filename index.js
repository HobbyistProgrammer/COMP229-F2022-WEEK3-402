 // import http webserver nodejs core package.
const http = require('http');

// Create the webserver event handler
const server = http.createServer((req, res) => {

    // console.log(req);
    // const parameter = split(split(req.url, '/?')[0], '=')[1];


    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World');
});

// Start the server
server.listen(3000);

//apple
console.log('Server running at http://localhost:3000');