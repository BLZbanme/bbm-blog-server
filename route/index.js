const Router = require('koa-router');

const Articles = require('../models/Articles');

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

router.post("/articles/edit/:id", async ctx => {
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
    });
})

module.exports = router;