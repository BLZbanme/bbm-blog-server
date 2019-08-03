const routesLoader = require('../tools/routersLoader')

module.exports = app => {
    routesLoader(`${__dirname}`).then(routers => {
        routers.forEach(router => {
            app
                .use(router.routes())
                .use(router.allowedMethods({
                    throw: true
                }))
            });
    })
}
