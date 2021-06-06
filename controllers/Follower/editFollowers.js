const Follower = require('../../models/Follower')
const User = require('../../models/User')

async function editFollowers(req, res){
    try{
        await User.sync()
        await Follower.sync()
        
        const {
            follower_username,
            followed_username,
            newFollowed_username
        } = req.body
        if(!follower_username || followed_username || newFollowed_username)throw new Error("Dados em branco")
        const follower = await Follower.update({
            followed_username: newFollowed_username
        },
        {
            where: {
                follower_username: follower_username,
                followed_username: followed_username
            }
        })
        res.status(200).send(follower)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

module.exports = editFollowers