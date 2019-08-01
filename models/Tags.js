const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = Tags = mongoose.model("tags", TagsSchema);