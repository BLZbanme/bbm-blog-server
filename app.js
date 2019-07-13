const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

const app = new koa();
const router = require('./route');

app.use(bodyParser());

// const connect = require('./tools/connect.js');

// connect("articles");

app.use(router.routes()).use(router.allowedMethods());

app.listen(10086, () => {
    console.log("server is listening 10086")
})