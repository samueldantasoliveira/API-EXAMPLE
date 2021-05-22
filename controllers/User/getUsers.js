const User = require('../../models/User')

async function getUsers(req, res){
    try {
        await User.sync()
        const users = await User.findAll() 
        if(!users)throw new Error("Erro ao buscar dados")
        res.send(users)
    }catch(err) {
        res.status(500).send({message: err.message})
    }
    
}


module.exports = getUsers

