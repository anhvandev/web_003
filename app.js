require('./config/global.config');

const express = require('express');
const app = express();


app.get('/', function (req, res, next) {
    res.send('123');
    next();
});

app.listen(global_port, function () {
    console.log(1233782372983789);
});