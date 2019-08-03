const Articles = require('../models/Articles');

class ArticlesControllers {

    async getAllArticles(ctx) {
        return await Articles.find();
    }

    async getOneArticle(ctx) {
        const id = ctx.params.id;
        return await Articles.findOne({_id: id});
    }
    
    async addArticle(ctx) {
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
    }

    async editTheArticle(ctx) {
        const id = ctx.params.id;
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
    }

}

module.exports = new ArticlesControllers();