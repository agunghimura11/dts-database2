// register root file untuk menggunakan sourcemap
import 'source-map-support/register'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'

import mongodb from 'mongodb'
import {Customer, CustomerType} from './mongodb'

async function initApp() {
  const app = express()

  //init db
  const connection = await mongodb.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser:true, useUnifiedTopology: true })
  const db = connection.db(`${process.env.MONGODB_NAME}`)
  const customerModel = new Customer(db)

  app.use(bodyParser.json())

  app.post('/customer', async function(req, res, next) {
    try {
      await customerModel.create(req.body)
    } catch (error){
      return next(error)
    }

    res.send({ success: true })
  })

  app.get('/customer', function(req, res, next) {

  })

  app.get('/cutomer/:id', function(req, res, next) {

  })

  app.put('/customer', function(req, res, next) {

  })

  app.delete('/customer', function(req, res, next) {

  })

  app.use(function(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(500).send({
      success: false,
      message: err.message
    })
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log(`App listen on port ${ process.env.PORT || 8000 }`)
  })
}

initApp()