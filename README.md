# API-EXAMPLE

> Status: Developing ⚠️
## Description:
It is a Simple API with JavaScript, NodeJS, Sequelize and Express, where I did a CRUD of a Github account a CRUD of Followers between this accounts, CRUD of Repositories and Stars

## The Account Model fields:

+ id
+ nome
+ email
+ local
+ avatar
+ username
+ bio

## The Follower model fields:

+ id
+ follower_username
+ followed_username

## The Token model fields:(This model keeps a log of logins)

+ id
+ data
+ user_id

## The Repository model fields:
+ id
+ nome
+ description
+ public
+ user_id

## The Stars model fields:
+ id
+ user_id
+ repository_id

## In addition to CRUD, I implement other features such as:
+ Login -> The Request send a username and the API search that on the Database and return the Account creating a log 

## This features are in developing:


## How to run the application:
1) Run Shell: npm/yarn install
2) Run Shell: node app.js
3) Make a request to http://localhost:3000/ 👉 [See the Routes here](https://github.com/samueldantasoliveira/API-EXAMPLE/blob/main/ROTAS.md)

## Or make a request to the API:
https://showy-magic-vanilla.glitch.me/ 👉 [See the Routes here](https://github.com/samueldantasoliveira/API-EXAMPLE/blob/main/ROTAS.md)
