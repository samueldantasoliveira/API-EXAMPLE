const User = require('../../models/User')
const Token = require('../../models/Token')
const Follower = require('../../models/Follower')
const { Op } = require("sequelize");

async function deleteUser(req, res){
    try{
        await User.sync()
        await Token.sync()
        await Follower.sync()

        const username = req.body.username
        if(!username)throw new Error("Username em branco")

        const user = await User.findOne({
            where: {
            username: username
            }
        })
        if(!user)throw new Error("Erro ao apagar")
        await Token.destroy({
            where: {
                user_id: user.id
            }
        })
        await Follower.destroy({
            where: {
                [Op.or]: [
                    {follower_username: user.username},
                    {followed_username: user.username}
                ]
                
            }
        })
        
        await User.destroy({
            where: {
                username: req.body.username
            }
        });

        const fs = require('fs');

        const avatar = user.avatar
        
        fs.unlink(`./images/${avatar}`, (err) => {
            if (err) {
                throw err;
            }

        });
        res.send("User deleted")
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

module.exports = deleteUser