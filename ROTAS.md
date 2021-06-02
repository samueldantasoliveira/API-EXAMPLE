/users
- Get: Return all users 
- Post Multipart body(nome, email, local, username, bio, avatar(imagem)): create a user
- Put Multipart body(nome, email, local, username, bio, avatar(imagem)): update a user
- Delete JSON body(username): delete a user

/user
- Post JSON body(username): return a single user(Login)

/followers
- Get JSON body(username): return an array of followers
- Post JSON body(follower, followed): create a follower
- Put JSON body(follower_username, followed_username, newFollowed_username): update a follower
- Delete JSON body(follower, followed): delete a user
