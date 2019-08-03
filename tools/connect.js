const mongoose = require('mongoose');

const {user, password, name, host} = require('../config').db;

const dbpre = `mongodb://${user}:${password}@${host}/${name}`;

// const dbpre = "mongodb://root:0000@localhost/blog";

mongoose.connect(dbpre, {useNewUrlParser: true});

mongoose.connection.once("open", () => {
    console.log("数据库连接成功");
})
 