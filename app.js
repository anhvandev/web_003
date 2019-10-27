require('./config/global.config');

app.disable('x-powered-by');

app.listen(global_port, settings.BASE_URL, function () {
    console.log("running on port: " + settings.PORT + '\n' + settings.PROCOL+settings.BASE_URL+":"+global_port);
});