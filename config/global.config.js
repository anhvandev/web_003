//path
global.path_module = require('path');
global.app_root = path_module.dirname(require.main.filename);
global.config_path = app_root + '/config/';
require(config_path + 'define.config');

// app
global.express = require('express');
global.global_port = process.env.PORT || 3000;
global.app = express();
global.router = express.Router();
app.set('view engine', 'pug');
app.set('views', view_path);
app.use('/static', express.static(static_path));
app.use(function (err, req, res, next) {
    console.log(err);
    next();
});

//require
global.settings = require(config_path + 'settings.config');
global.mongoose = require('mongoose');
require(config_path + 'database.config');
require(config_path + 'router.config');


