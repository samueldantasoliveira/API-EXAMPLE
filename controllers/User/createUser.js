const User = require('../../models/User')
//nome, email, localização, avatar, username, bio

async function createUser(req, res){
    try{
        await User.sync()

        const {
        nome,
        email,
        local,
        username,
        bio
        }=req.body
        if(!nome || !email || !local || !username || !bio)throw new Error("Campos em branco")

        let avatar = req.file.filename
        const newUser = {
            nome,
            email,
            local,
            avatar,
            username,
            bio,
        }
        const user = await User.create(newUser)
        if(!user)throw new Error("Erro ao criar usuário")
        res.send(user) 
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
module.exports = createUser