const User = require('../../models/User')
const Repository = require('../../models/Repository')
const Star = require('../../models/Star')

async function getUserStars(req, res){
    try{
        await User.sync()
        await Repository.sync()
        await Star.sync()

        const user_id = req.body.user_id
        if(!user_id)throw new Error("Dados em branco")

        const stars = await Star.findAll({
            where: {
                user_id: user_id
            }
        })
        const repositories = new Array
        for(const star of stars){
            repositories.push(
                await Repository.findOne({
                    where: {
                        id: star.repository_id
                    }
                })
            )
        }
        res.send(repositories)
    }catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = getUserStars