const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: String,
    username: String,
    password: String,
    created_time: Date,
    updated_time: Date,
});

module.exports = mongoose.model(database.table.user, UserModel);