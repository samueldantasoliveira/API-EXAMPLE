const express = require('express');
const app = express()
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
const deleteFollowers = require('./controllers/Follower/deleteFollowers')
const createRepositories = require('./controllers/Repository/createRepositories')
const getRepositories = require('./controllers/Repository/getRepositories')
const deleteRepository = require('./controllers/Repository/deleteRepository')

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

app.delete('/followers', (req, res) => {
  deleteFollowers(req, res)
})

app.post('/repositories', (req, res) => {
  createRepositories(req, res)
})

app.post('/repository', (req, res) => {
  getRepositories(req, res)
})

app.delete('/repositories', (req, res) => {
  deleteRepository(req, res)
})

app.listen(process.env.PORT || 3000)