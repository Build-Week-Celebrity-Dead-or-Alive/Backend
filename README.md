# Celebrity Dead or Alive App - Backend

This App gives participants the opportunity to guess whether a particular celebrity is dead or alive; thereby testing his/her knowlegde about their favorite celebrities.

The informations contained here are only to be used for entertainment purposes only.

# Initializing the project for Local Use
- run npm in order to install all dependencies
- use the command npm run server to run a live server

# The Available User Endpoints

 https://celebs-dead-or-alive.herokuapp.com

 
Auth (unrestricted)
POST -- ‘https://celebs-dead-or-alive.herokuapp.com/auth/register’ - Registers new user to 'users' DB
- Requires name, username, and password

POST -- ‘https://celebs-dead-or-alive.herokuapp.com/auth/login’ - Logs user to 'users' DB
- Requires username, and password
- Returns: logged in user information and token

Celebs (unrestricted):
GET -- ‘https://celebs-dead-or-alive.herokuapp.com/celebs’ - Returns arrays of celebrities

GET -- ‘https://celebs-dead-or-alive.herokuapp.com/celebs/:id’ - Returns a particular celebrity


Users (restricted => needs token) :
GET -- ‘https://celebs-dead-or-alive.herokuapp.com/users’ - Returns all users from DB
- Requires token

GET -- ‘https://celebs-dead-or-alive.herokuapp.com/users/:id’ - Returns a particular user from DB
- Requires token and "id" param

PUT -- ‘https://celebs-dead-or-alive.herokuapp.com/users/:id’- Updates a particular users points
- Requires token and "id" param

DELETE -- ‘https://celebs-dead-or-alive.herokuapp.com/users/:id’ - Deletes a particular user
- Requires token and "id" param
