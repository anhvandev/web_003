const graph = require('fbgraph');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const User = require(model_path + 'user');
let user_array = {};

let checkUser = function (id, user) {

    return new Promise((rel, rej) => {
        if (Object.entries(user_array).length === 0 && user_array.constructor === Object) {
            rel(id, user);
        } else {
            for (item in user_array) {
                if (user_array[item].id !== user.id) {
                    rel(id, user);
                    break;
                } else {
                    rej(id);
                }
            }
        }
    });
};

function insert(id, user) {
    console.log(user);
    user_array[id].id = user.id;
    user_array[id].name = user.name;
}

module.exports.index = function (req, res, next) {
    res.end();
}