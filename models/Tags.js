const mongoose = require('mongoose');

const {connTags} = require('../tools/connect.js');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = Tags = connTags.model("tags", TagsSchema);