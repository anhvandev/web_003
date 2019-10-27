const UserModel = require(model_path + 'User.model');

module.exports = {
    countItem(params, options = null) {
        if (options.task === null || typeof options.task === 'undefined') {
            return UserModel.countDocuments();
        }
    },
    saveItem(params, options = null) {
        if (options.task === 'add') {
            let data = params;
            data.created_time = Date.now();

            return new UserModel(data).save();
        }

        if (options.task === 'edit') {
            let data = {};
            ['name', 'username', 'password', 'created_time'].map((value) => {
                if (typeof params[value] !== 'undefined') {
                    data[item] = params[value];
                }
            });
            return UserModel.updateOne({_id: params.id}, data);
        }

        return null;
    },
    getItem({params, options = null}){
        if (options.task === 'by_user'){
            return UserModel.findOne({username: params.username, password: params.password});
        }
        if (options.task === 'by_id'){
            return UserModel.findById(params.id);
        }
        return null;
    }
};