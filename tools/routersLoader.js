const glob = require('glob')

module.exports = dirName => {
    return new Promise((resolve, reject) => {
        const routers = []
        glob(
            `${dirName}/*`,
            {ignore: '**/index.js'},
            (err, files) => {
                if (err) {
                    reject(err)
                }
                files.forEach(file => {
                    const router = require(file)
                    routers.push(router)
                })
                resolve(routers)
            }
        )
    })
}