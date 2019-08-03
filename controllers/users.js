const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const tools = require('../tools/enbcrypt.js');

module.exports = new class UsersControllers {

    async sayHello(ctx) {
        ctx.body = {
            msg: "Welcome to bbm-blog server api"
        }
    }

    async checkAndReturnToken(ctx) {
        const findResult = await User.find({name: ctx.request.body.name});
        const user = findResult[0];
        const password = ctx.request.body.password;
        if (!findResult) {
            ctx.status = 404;
            ctx.body = {msg: '用户不存在'};
        }
        else {
            console.log(tools.enbcrypt(password));
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
    }
}