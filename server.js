const connect = require('connect');

// instantiate app-server
const app = connect();

// custom middleware
function HelloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}

// custom middleware
function ByeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
}

// add middleware to connect application
app.use('/hello', HelloWorld);
app.use('bye', ByeWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000');