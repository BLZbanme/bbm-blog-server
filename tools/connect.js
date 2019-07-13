const mongoose = require('mongoose');

const dbpre = "mongodb://localhost/";

const connArticles = mongoose.createConnection(dbpre + "articles", { useNewUrlParser: true });
    
const connTages = mongoose.createConnection(dbpre + "tags", { useNewUrlParser: true });

module.exports = {connArticles, connTages};