const Router = require('koa-router');
const bcrypt = require('bcryptjs');
const Articles = require('../models/Articles');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const tools = require('../tools/enbcrypt.js');
const passport = require("koa-passport");

const router = new Router({
    prefix: "/api"
});

router.get("/", async ctx => {
    ctx.body = {
        msg: "Welcome to bbm-blog server api"
    }
})

router.get("/articles", async ctx => {
    return await Articles.find();
})

router.get("/articles/:id", async ctx => {
    const id = ctx.params.id;
    return await Articles.findOne({_id: id});
})

router.post("/articles/add", async ctx => {
    let body = ctx.request.body;
    const newArticle = new Articles();
    newArticle.title = body.title;
    newArticle.content = body.content;
    newArticle.categories = body.categories;
    await newArticle.save()
        .then(() => {
            ctx.status = 200;
        }).catch(err => {
            ctx.status = 500;
        });
})

router.post("/articles/edit/:id", passport.authenticate('jwt', { session: false }),
    async ctx => {
        let id = ctx.params.id;
        let {title, content, categories} = ctx.request.body;
        await Articles.updateOne({
            _id: id
        },{
            $set: {
                title,
                content,
                categories,
                editDate: Date.now()
            }
        }).then(() => {
            ctx.status = 200;
        }).catch(err => {
            ctx.status = 500;
        }
);
    }
)

/**
* @route POST api/users/login
* @desc 登录接口地址 返回token
* @access 接口是公开的
*/
router.post("/login", async ctx => {
    console.log(ctx.request.body.name);
    const findResult = await User.find({name: ctx.request.body.name});
    const user = findResult[0];
    const password = ctx.request.body.password;
    if (!findResult.length) {
        ctx.status = 404;
        ctx.body = {name: '用户不存在'};
    }
    else {
        let result = await bcrypt.compareSync(password, user.password);
        if (result) {
            const payLoad = {id: user.id, name: user.name};
            console.log(payLoad);
            const token = jwt.sign(payLoad, 'secret', {expiresIn: 3600});
            ctx.status = 200;
            ctx.body = {
                success: true,
                token: "Bearer " + token
            }
        }
        else {
            ctx.status = 400;
            ctx.body = {success: true};
        }
    }
})

module.exports = router;