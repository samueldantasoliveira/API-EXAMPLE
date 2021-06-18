const User = require('../../models/User')
const Repository = require('../../models/Repository')

async function createRepositories(req, res){
    try{
        await User.sync()
        await Repository.sync()
    
        const {
            user_id,
            nome,
            description,
            public
        } = req.body

        const user = User.findOne({
            where: {
                Id: user_id
            }
        })
        if(!user)throw new Error("Usuário não encontrado")

        const newRepository = {user_id, nome, description, public}
        if(!user_id || !nome || !description)throw new Error("Campos em branco")

        const repository = await Repository.create(newRepository)
        if(!repository)throw new Error("Erro ao criar respositório")

        res.status(201).send(repository)
    }catch(err) {
        res.status(500).send(err.message)
    }
    
}

module.exports = createRepositories