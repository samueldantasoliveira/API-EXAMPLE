const User = require('../../models/User')
const Repository = require('../../models/Repository')

async function getRepositories(req, res){
    try{
        await User.sync()
        await Repository.sync()

        const id = req.body.id
        if(!id)throw new Error("Id em branco")

        const user = await User.findOne({
            where: {
                id: id
            }
        })
        if(!user)throw new Error("Usuário não encontrado")

        const repositories = await Repository.findAll({
            where: {
                user_id: id
            }
        })
        res.send(repositories)

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = getRepositories