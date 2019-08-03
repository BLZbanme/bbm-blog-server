const Router = require('koa-router');
const {baseApi} = require('../config')

const UserControllers = require('../controllers/users');


const router = new Router({
    prefix: `/${baseApi}`
});

router.get("/", UserControllers.sayHello)

/**
* @route POST api/users/login
* @desc 登录接口地址 返回token
* @access 接口是公开的
*/
router.post("/login", UserControllers.checkAndReturnToken)

module.exports = router;