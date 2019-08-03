const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport');
const cors = require('koa-cors');
const app = new koa();
const routing = require('./routes');

app.use(bodyParser()); 

require("./tools/connect");

routing(app);

app
    .use(cors({
        maxAge: 7 * 24 * 60 * 60,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
        headers: 'Content-Type, Accept, Authorization'
    }))
    .use(passport.initialize())
    .use(passport.session())
    
//回调到config文件中Passport.js
require('./tools/passport.js')(passport)

app.listen(10086, () => {
    console.log("server is listening 10086")
})