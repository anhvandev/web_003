const axios    = require('axios');
const UserUtil = require(util_path + 'User.util');
const _view    = 'backend/login/';

module.exports.index = function (req, res) {
    req.isAuthenticated();
    res.render(_view + 'index', {title: 'Đăng nhập'});
};

module.exports.indexPost = function (req, res, next) {
    req.logIn(req.user, function (err) {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
    });
    res.end();
    // res.render(_view + 'index', {title: 'Đăng nhập'});
};