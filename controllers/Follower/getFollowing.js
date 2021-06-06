const Follower = require('../../models/Follower')
const User = require('../../models/User')

async function getFollowing(req, res){
    try{
        await User.sync()
        await Follower.sync()
        const username = req.body.username
        if(!username)throw new Error("Dados em branco")
        const user = await User.findOne(
            {
                where: {username: username}
            }
        )
        if(!user)throw new Error("Usuário não encontrado")
        const following = await Follower.findAll(
            {
                where: { follower_username: username}
            }
        )
        
        const users = new Array
        for (const followed of following) {
            users.push(
                await User.findOne(
                    {where: { username: followed.dataValues.followed_username}}
                ),
            ) 
        }
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
    

}

module.exports = getFollowing