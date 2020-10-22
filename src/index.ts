// register root file untuk menggunakan sourcemap
import 'source-map-support/register'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'

// import mongodb from 'mongodb'
import mongoose from 'mongoose'
// import {Customer, CustomerType} from './mongodb'
import {Customer, Account, Transaction, CustomerType, AccountType, TransactionType} from './mongoose'

async function initApp() {
  const app = express()

  try{
    await mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser:true, useUnifiedTopology: true }, err=> {
      if(err){
        console.log("DB CONNECTION ERROR")
      }else{
        console.log("DB Connection Success")
      }
    })
  }catch(error){
    console.log('DB Connection Failed')
  }

  // //init db
  // const connection = await mongodb.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser:true, useUnifiedTopology: true })
  // const db = connection.db(`${process.env.MONGODB_NAME}`)
  // const customerModel = new Customer(db)

  // init mongose db
  
  const customerModel = new Customer()
  const accountModel = new Account()
  const transactionModel = new Transaction()
  
  app.use(bodyParser.json())


  //Customer
  app.post('/customer', async function(req, res, next) {
    try {
      await customerModel.create(req.body)
    } catch (error){
      return next(error)
    }

    res.send({ success: true })
  })

  app.get('/customer', async function(req, res, next) {
    let customers: CustomerType[]
    try {
      customers = await customerModel.getAll()
    }catch(error){
      return next(error)
    }

    return res.send(customers)
  })

  app.get('/customer/:id', async function(req, res, next) {
    let customer: CustomerType | null
    try {
      customer = await customerModel.getByID(req.params.id)
    } catch (error) {
      return next(error)
    }

    return res.send(customer)
  })

  app.put('/customer/:id', async function(req, res, next) {
    try {
      await customerModel.update(req.params.id, req.body)
    }catch(error){
      return next(error)
    }

    res.send({ success: true })
  })

  app.delete('/customer/:id', async function(req, res, next) {
    try {
      await customerModel.delete(req.params.id)
    }catch(error){
      return next(error)
    }

    res.send({success: true})
  })

  // Account
  app.post('/account', async function(req, res, next) {
    try {
      await accountModel.create(req.body)
    } catch (error){
      return next(error)
    }

    res.send({ success: true })
  })

  app.get('/account', async function(req, res, next) {
    let accounts: AccountType[]
    try {
      accounts = await accountModel.getAll()
    }catch(error){
      return next(error)
    }

    return res.send(accounts)
  })

  app.get('/account/:id', async function(req, res, next) {
    let account: AccountType | null
    try {
      account = await accountModel.getByID(req.params.id)
    } catch (error) {
      return next(error)
    }

    return res.send(account)
  })

  app.put('/account:/id', async function(req, res, next) {
    
    try {
      await accountModel.update(req.params.id, req.body)
    }catch(error){
      return next(error)
    }

    res.send({ success: true })
  })

  app.delete('/account/:id', async function(req, res, next) {
    try {
      await accountModel.delete(req.params.id)
    }catch(error){
      return next(error)
    }

    res.send({success: true})
  })

  // Transaction

  // create transaction
  app.post('/trans', async function(req,res,next) {
    
    try {
      await transactionModel.create(req.body)
    } catch (error){
      return next(error)
    }

    res.send({ success: true })
  })
  
  // get all transaction
  app.get('/trans', async function(req,res,next) {
    let transc: TransactionType[]
    try{
      transc = await transactionModel.getAll()
    } catch (error){
      return next(error)
    }

    return res.send(transc)
  })

  // get transaction by id
  app.get('/trans/:id', async function(req,res,next) {
    let transc: TransactionType | null
    try{
      transc = await transactionModel.getByID(req.params.id)
    }catch(error){
      return next(error)
    }

    return res.send(transc)
  })

  // update transaction by id
  app.put('/trans/:id', async function(req, res, next) {
    try {
      await transactionModel.update(req.params.id, req.body)
      res.send({ success: true })
    }catch(error){
      return next(error)
    }

  })

  // delete transaction
  app.delete('/trans/:id', async function(req,res,next) {
    try{
      await transactionModel.delete(req.params.id)
    }catch(error){
      return next(error)
    }

    res.send({success: true})
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