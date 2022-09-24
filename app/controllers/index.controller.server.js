// Index Controller

// custom middleware
export function displayHomePage(req, res, next){
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    res.render('index', {title: "home", page: 'home'});
}

export function displayProjectsPage(req, res, next){
    res.render('index', { title: 'Projects', page: 'projects'});
}

export function displayServicesPage(req, res, next){
    res.render('index', { title: 'Services', page: 'services'});
}
export function displayContactsPage(req, res, next){
    res.render('index', { title: 'Contact', page: 'contact'});
}

export function displayAboutPage(req, res, next){
    res.render('index', { title: 'About', page: 'about'});
}