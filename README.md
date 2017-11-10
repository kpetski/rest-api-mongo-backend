# Simple REST Server connecting to React front end
This project is putting what we learned on the front end and back end together

## Server
See server.js
- have the server populating with two default messages

## Created a simple react to display messages in a list
See jsx files in components folder

### Setup
- This app is using mongodb, make sure to have mongo db up and running before running
    - install mongodb onto your machine if necessary
    - start database by running the command `mongod`
    - should be started on port `27017`
- Run the app once mongodb is running
    - cd to rest-api-mongo-backend
    - run command `npm install`
    - run command `npm start`
        - when you save changes should automatically restart
    - UI URL: http://localhost:3000/

### Server URLs
I use post man to call the CRUD operations 
- GET
    - get all messages: http://localhost:3000/messages
    - get message by id: http://localhost:3000/messages/[id]
- POST
    - http://localhost:3000/messages
    - Example Parameters; 
        {
        "text": "my post text",
        "name": "my post name"
        }
- PUT 
    - http://localhost:3000/messages/[id]
    - Similar to post, except specifying id and will replace that data
- DELETE
    - http://localhost:3000/messages/[id]
    - no body required, will delete based on given id

