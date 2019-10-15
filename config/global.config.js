//path
global.path_module = require('path');
global.app_root = path_module.dirname(require.main.filename);
global.config_path = app_root + '/config/';

// app
global.express = require('express');
global.global_port = 3000;
global.app = express();
global.router = express.Router();

//require
global.settings = require(config_path + 'settings.config');
require(config_path + 'define.config');
require(config_path + 'database.config');
require(config_path + 'router.config');


