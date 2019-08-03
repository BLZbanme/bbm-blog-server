const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');

const app = new koa();
const routing = require('./routes');

app.use(bodyParser()); 

require("./tools/connect");

routing(app);

app.use(passport.initialize());
app.use(passport.session());
//回调到config文件中Passport.js
require('./tools/passport.js')(passport)

app.listen(10086, () => {
    console.log("server is listening 10086")
})