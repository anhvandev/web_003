module.exports.admin = mongoose.connect('mongodb+srv://admin:anhvan99@cluster0-4quw9.mongodb.net/test?retryWrites=true&w=majority&authSource=tests', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('connected');
    mongoose.connection.on('error', function (err) {
        console.log(err);
    });
});