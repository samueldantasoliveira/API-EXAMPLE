const User = require('../../models/User')

async function editUser(req, res){
    try{
        await User.sync()
        

        let username = req.body.username
        if(!username)throw new Error("Username em branco")

        const user = await User.findOne({
        where: {
            username: username
        }
        })
        if(!user)throw new Error("Usuário não encontrado")
        
        let {
            nome,
            email,
            local,
            bio
        }  =req.body
        if(!nome || !email || !local || !bio)throw new Error("Dados em branco")
        
        //apagando avatar
        let avatar = user.avatar
        let fs = require('fs')
        fs.unlink(`./images/${avatar}`, (err) => {
        if (err) {
            throw err;
        }
    
        });
        //novo avatar
        avatar = req.file.filename
        
        
        let newUser = {
            nome,
            email,
            local,
            avatar,
            username,
            bio
        }

        

        await User.update( newUser, {
            where: {
            username: newUser.username
            }
        });
        res.send("User updated")
    } catch(err){
        res.status(500).send(err.message)
    }
    
}

module.exports = editUser