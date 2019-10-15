//path
global.path_module = require('path');
global.app_root = path_module.dirname(require.main.filename);
global.config_path = app_root + '/config/';

// app
global.global_port = 3000;
global.express = require('express');
global.app = express();
global.router = express.Router();

//require
require(config_path + 'define.config');
require(config_path + 'database.config');
global.settings = require(config_path + 'settings.config');
