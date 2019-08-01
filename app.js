const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

const app = new koa();
const router = require('./route');

app.use(bodyParser()); 

// const connect = require('./tools/connect.js');

// connect("articles");
require("./tools/connect");

app.use(router.routes()).use(router.allowedMethods());

app.use(passport.initialize());
app.use(passport.session());
//回调到config文件中Passport.js
require('./config/passport.js')(passport)

app.listen(10086, () => {
    console.log("server is listening 10086")
})