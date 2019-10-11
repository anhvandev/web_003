require('./config/global.config');

const express = require('express');
const app = express();


app.get('/', function (req, res, next) {
    res.send('12dsdsdsdsdsds3');
    next();
});

app.listen(global_port, function () {
    console.log(1233782372983789);
});