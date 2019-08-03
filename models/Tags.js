const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    tagName: {
        type: String,
        required: true,
        unique: true
    },
    num: {
        type: Number,
        default: 0
    }
})

module.exports = Tags = mongoose.model("tags", TagsSchema);