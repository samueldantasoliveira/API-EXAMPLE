const User = require('../../models/User')
const Token = require('../../models/Token')

async function login(req, res){
  try {
    const username = req.body.username
    if(!username)throw new Error("username em branco")

    await User.sync()
    await Token.sync()
    const user = await User.findOne({where: { username: username}})
    let token = null
    if(user){
      token = await Token.create({user_id: user.id})
    }
    if(!token){
      throw new Error("Erro ao logar")
    }
    
    res.send(user)
  } catch (err) {
    res.status(400).send({message: err.message})
  }
    
}

module.exports = login