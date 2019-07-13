const mongoose = require('mongoose');

const {connArticles} = require('../tools/connect.js');
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    categroies: {
        type: Array
    },
    author: {
        type: String,
        default: "blzbanme"
    },
    date: {
        type: Date,
        default: Date.now
    },
    editDate: {
        type: Date,
        default: Date.now
    },
    alive: {
        type: Number,
        default: 0 //0表示没被删
    }
})

module.exports = Articles = connArticles.model("articles", ArticlesSchema);