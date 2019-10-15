require('./config/global.config');

app.disable('x-powered-by');
/*app.get('/index', function (req, res, next) {
    res.send('12dsdsdsdsdsds3');
    res.send(req.route.path);
    res.send(__dirname);
    next();
});*/

app.listen(global_port, function () {
    console.log("running on port: " + settings.PORT + '\n' + settings.PROCOL+settings.BASE_URL+":"+global_port);
});