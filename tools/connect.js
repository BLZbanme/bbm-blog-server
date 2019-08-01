const mongoose = require('mongoose');

const dbpre = "mongodb://@localhost/blog";

mongoose.connect(dbpre, {useNewUrlParser: true});

mongoose.connection.once("open", () => {
    console.log("数据库连接成功");
})
