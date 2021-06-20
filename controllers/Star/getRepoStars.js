const User = require('../../models/User')
const Repository = require('../../models/Repository')
const Star = require('../../models/Star')

async function getRepoStars(req, res){
    try{
        await User.sync()
        await Repository.sync()
        await Star.sync()

        const repository_id = req.body.repository_id
        if(!repository_id)throw new Error("Dados em branco")

        const stars = await Star.findAll({
            where: {
                repository_id: repository_id
            }
        })
        const users = new Array
        for(const star of stars){
            users.push(
                await User.findOne({
                    where: {
                        id: star.user_id
                    }
                })
            )
        }
        res.send(users)
    }catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = getRepoStars