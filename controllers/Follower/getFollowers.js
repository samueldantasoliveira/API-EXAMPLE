const Follower = require('../../models/Follower')
const User = require('../../models/User')

async function getFollower(req, res){
    try{
        await User.sync()
        await Follower.sync()
        const username = req.body.username
        if(!username)throw new Error("Dados em branco")
        const followers = await Follower.findAll(
            {
                where: { followed_username: username}
            }
        )
            
        const users = new Array
        for (const follower of followers) {
            users.push(
                await User.findOne(
                    {where: { username: follower.dataValues.follower_username}}
                ),
            ) 
        }
        
        res.send(users)
    }catch(err) {
        res.status(500).send(err.message)
    }
        
    
}
module.exports = getFollower