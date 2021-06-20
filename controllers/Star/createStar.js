const User = require('../../models/User')
const Repository = require('../../models/Repository')
const Star = require('../../models/Star')

async function createStar(req, res){
    try{
        await User.sync()
        await Repository.sync()
        await Star.sync()

        const {
            user_id: user_id,
            repository_id: repository_id
        } = req.body
        if( !user_id || !repository_id )throw new Error("Campos em Branco")

        const star = await Star.create({
            user_id,
            repository_id
        })
        if(!star)throw new Error("Erro ao criar Star")

        res.status(201).send(star)
    }catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = createStar