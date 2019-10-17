module.exports.admin = mongoose.connect('mongodb://admin:anhvan99@168.63.148.223:27017/?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('connected');
    mongoose.connection.on('error', function (err) {
        console.log(err);
    });
});