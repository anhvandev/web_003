app.use(function (err, req, res, next) {
    console.log(err);
    res.status(200);
    next();
});

global.index_controller = require(router_path + 'Index.router');
app.use('/', index_controller);

global.login_controller = require(router_path + 'Login.router');
app.use('/login', login_controller);


app.use(function(req, res, next) {
    res.status(404).send('404 page');
});