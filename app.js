const express = require('express');
const app = express()
const port = 3000
const multer = require("multer")
const upload = multer({ dest: "images/" })

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

const getUsers = require('./controllers/User/getUsers')
const login = require('./controllers/User/login')
const createUser = require('./controllers/User/createUser')
const editUser = require('./controllers/User/editUser')
const deleteUser = require('./controllers/User/deleteUser')
const createFollower = require('./controllers/Follower/createFollower');
const getFollowers = require('./controllers/Follower/getFollowers')
const getFollowing = require('./controllers/Follower/getFollowing')
const editFollowers = require('./controllers/Follower/editFollowers')
const deleteFollowers = require('./controllers/Follower/deleteFollowers')

app.get('/users', (req, res) => {
  getUsers(req, res)
})

app.post('/user', (req, res) => {
  login(req, res)
})
app.post('/users', upload.single('avatar'), (req, res) => {
  createUser(req, res)
})

app.put('/users', upload.single('avatar'), (req, res) => {
  editUser(req, res)
})

app.delete('/users', (req, res) => {
  deleteUser(req, res)
})

app.post('/followers', (req, res) => {
  createFollower(req, res)
})

app.get('/followers', (req, res) => {
  getFollowers(req, res)
})
app.get('/following', (req, res) => {
  getFollowing(req, res)
})

app.put('/followers', (req, res) => {
  editFollowers(req, res)
})

app.delete('/followers', (req, res) => {
  deleteFollowers(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})