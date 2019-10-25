const axios    = require('axios');
const UserUtil = require(util_path + 'User.util');
require(middleware_path + 'AuthGlobal.middleware');

module.exports.index = function (req, res) {
    options = {task: 'add'};
    res.render('index', {title: 'Trang chủ'});
};