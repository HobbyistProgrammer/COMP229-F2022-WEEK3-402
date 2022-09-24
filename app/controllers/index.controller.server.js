// Index Controller

// custom middleware
export function HelloWorld(req, res, next){
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    res.render('index', {title: "home"});
}