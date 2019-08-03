const Router = require('koa-router')
const {baseApi} = require('../config')
const ArticlesControllers = require('../controllers/articles')
const verify = require('../middlewares/verify');

const theApi = 'articles'
const router = new Router({
    prefix: `/${baseApi}/${theApi}`
})

router.get("/", ArticlesControllers.getAllArticles)

router.get("/:id", ArticlesControllers.getOneArticle);

router.post("/add", ArticlesControllers.addArticle);

router.post("/edit/:id", verify, ArticlesControllers.editTheArticle);

module.exports = router;