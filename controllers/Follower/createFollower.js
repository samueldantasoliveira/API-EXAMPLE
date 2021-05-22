const Follower = require('../../models/Follower')
const User = require('../../models/User')

async function createFollower(req, res){
    try{
        await User.sync()
        await Follower.sync()

        const {
        follower,
        followed
        }=req.body
        
        if(!follower || !followed)throw new Error("Dados em branco")
        if(follower==followed)throw new Error("Os usuários são iguais")

        const follow = await Follower.create({follower_username: follower, followed_username: followed})
        res.send(follow) 
    }catch(err) {
        res.status(500).send(err.message)
    }    
    
}
module.exports = createFollower