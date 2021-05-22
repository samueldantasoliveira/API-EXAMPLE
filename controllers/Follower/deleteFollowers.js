const Follower = require('../../models/Follower')

async function deleteFollowers(req, res){
    try{
        await Follower.sync()
    
        const {
            follower_username,
            followed_username
        } = req.body
        if(!follower_username || !followed_username)throw new Error("Dados em branco")
        await Follower.findOne({
            where: {
                follower_username: follower_username,
                followed_username: followed_username
            }
        })
        await Follower.destroy({
            where: {
                follower_username: follower_username,
                followed_username: followed_username
            }
        })

        res.send("Sucess")
    }catch(err) {
        res.status(500).send(err.message)
    }
    
}

module.exports = deleteFollowers