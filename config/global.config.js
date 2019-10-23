//setting
global.path_module     = require('path');
global.app_root        = path_module.dirname(require.main.filename);
global.config_path     = app_root + '/config/';
global.app_path        = app_root + '/app/';
global.controller_path = app_path + 'controller/';
global.model_path      = app_path + 'model/';
global.router_path     = app_path + 'router/';
global.util_path       = app_path + 'util/';
global.hepler_path     = app_path + 'helper/';
global.middleware_path = app_path + 'middleware/';
global.view_path       = app_root + '/view/';
global.public_path     = app_root + '/public/';
global.settings        = require(config_path + 'settings.config');

require(config_path + 'define.config');

// app
var cookieParse    = require('cookie-parser');
var bodyParse      = require('body-parser');
var session        = require('express-session');
var passport       = require('passport');
global.express     = require('express');
global.global_port = settings.PORT;
global.app         = express();
app.set('view engine', 'pug');
app.set('views', view_path);
app.set('view cache', settings.CACHE);
app.use('/', express.static(public_path));
app.use(cookieParse());
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json({type: 'application/*+json'}));
app.use(bodyParse.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParse.text({type: 'text/html'}));
app.use(session({
    secret: 'web_test',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// socket
global.server = require('http').Server(app);
global.io     = require('socket.io')(server);
server.listen(settings.PORT_IO);
io.on('connection', function (socket) {
    socket.broadcast.emit('user connected');
    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});


//require
global.mongoose      = require('mongoose');
global.database      = require(config_path + 'database.config');
global.passport      = require('passport');
global.LocalStrategy = require('passport-local').Strategy;
global.md5           = require('md5');
require(config_path + 'router.config');
require(middleware_path + 'Auth.middleware');