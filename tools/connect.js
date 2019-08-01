const mongoose = require('mongoose');

const dbpre = "mongodb://@localhost/";

const connArticles = mongoose.createConnection(dbpre + "articles", { useNewUrlParser: true });
    
connArticles.then(() => {console.log('连接成功')})

const connTages = mongoose.createConnection(dbpre + "tags", { useNewUrlParser: true });

connTages.then(() => {console.log('连接成功')});

const connUsers = mongoose.createConnection(dbpre + "blogusers", { useNewUrlParser: true });

connUsers.then(() => {console.log('连接成功')});


module.exports = {connArticles, connTages, connUsers};