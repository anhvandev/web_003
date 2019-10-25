app.use(function (req, res, next) {
    if (req.isUnauthenticated() && req.originalUrl !== '/login') {
        res.redirect('/login');
    } else {
        next();
    }
});