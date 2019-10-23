const UserUtil               = require(util_path + 'User.Util');
module.exports.CheckNotLogin = function (req, res, next) {
    req.cookie;
    /*let username = typeof req.cookie.username !== "undefined" ? req.cookie.username : null;
    let password = typeof req.cookie.password !== "undefined" ? req.cookie.password : null;
    if (username !== null) {
        UserUtil.getItem({username: username, password: password});
    }*/
    next();
};