const User = require('../../models/User')
const Repository = require('../../models/Repository')

async function deleteRepository(req, res){
    try{
        await User.sync()
        await Repository.sync()

        const id = req.body.id
        if(!id)throw new Error("Id em branco")

        const repository = await Repository.findOne({
            where: {
                id: id
            }
        })
        if(!repository)throw new Error("Erro ao deletar repositório")

        await Repository.destroy({
            where: {
                id: id
            }
        })

        res.send("Sucess")

    }catch(err) {
        res.status(500).send(err.message)
    }
    
}

module.exports = deleteRepository