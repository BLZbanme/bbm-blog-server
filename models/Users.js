const mongoose = require('mongoose');

const {connUsers} = require('../tools/connect.js');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = Users = connUsers.model("blogusers", UsersSchema);