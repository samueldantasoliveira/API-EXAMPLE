const User = require('../../models/User')
const Repository = require('../../models/Repository')
const Star = require('../../models/Star')

async function deleteStar(req, res){
    try{
        await User.sync()
        await Repository.sync()
        await Star.sync()

        const {
            username: username,
            repository_id: repository_id
        } = req.body
        if( !username || !repository_id )throw new Error("Campos em Branco")

        const star = await Star.findOne({
            where: {
                username: username,
                repository_id: repository_id
            }
        })
        if(!star)throw new Error("Erro ao apagar")

        star.destroy()
        res.send("Sucess")
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = deleteStar