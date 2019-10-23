const axios = require('axios');
const UserUtil = require(util_path + 'User.util');

module.exports.index = function (req, res, next) {
    options = {task:'add'};
    res.render('index', {title:'Trang chủ'});
};