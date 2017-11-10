const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
app.set('port', process.env.PORT || 3000)
const path = require('path')
const mongodb= require('mongodb')
const url = 'mongodb://localhost:27017/nwm'

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(morgan('dev'))

mongodb.MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1) 
  console.log('connected to mongodb: ' + url)

  app.get('/messages', (req, res, next) => {
    db.collection('messages')
      .find({})
      .toArray((error, messages) => {
        if(error) return next(error)
        res.send(messages)
      })
  })

  app.get('/messages/:id', (req, res, next) => {
    db.collection('messages')
      .find({_id: mongodb.ObjectID(req.params.id)})
      .toArray((error, messages) => {
        if(error) return next(error)
        res.send(messages)
      })
  })

  app.post('/messages', (req, res, next) => {
    let newMessage = req.body
    db.collection('messages').insert(newMessage, (error, results) => {
      if(error) return next(error)
      res.send(results)
    })
  })

  app.put('/messages/:id', (req, res, next) => {
    db.collection('messages')
      .update({_id: mongodb.ObjectID(req.params.id)}, {$set: req.body}, (error, results) => {
        if(error) return next(error)
        res.send(results)
      })
  })

  app.delete('/messages/:id', (req, res, next) => {
    db.collection('messages')
      .remove({_id:mongodb.ObjectID(req.params.id)}, (error, results) => {
        if(error) return next (error)
        res.send(results)
      })
  })
  

})

app.use(errorhandler())
app.listen(app.get('port'), ()=>{
  console.log(`server is running on port ${app.get('port')}`)
})
