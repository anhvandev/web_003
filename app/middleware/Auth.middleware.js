const UserUtil = require(util_path + 'User.util');
passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    UserUtil.getItem({params: {id: id}, options: {task: 'by_id'}}).then(function (user) {
        return done(null, user);
    }).catch(function (err) {
        return done(err, false);
    });
});

passport.use(new LocalStrategy(function (username, password, done) {
        password = md5(password);
        UserUtil.getItem({params: {username: username, password: password}, options: {task: 'by_user'}})
            .then(function (data) {
                if (data === null) {
                    return done(null, false);
                } else {
                    return done(null, data);
                }
            })
            .catch(function (err) {
                return done(err);
            });
    })
);