
import mongoose, { Schema } from 'mongoose'

export type CustomerType = {
  first_name: string
	last_name: string
	age: number
	customer_type: string
	street: string
	city: string
	state: string
	zip_code: string
  phone_number: string
}

export type AccountType = {
  customer_id : Schema.Types.ObjectId
  balance : number
  account_type : string
}

export type TransactionType = {
  customer_id : Schema.Types.ObjectId
  date : Date
  update_date : Date
  type : string
  details : {
    acc_from: string
    acc_to: string
    amount: number
  }
} 

export type CustomerDocument = mongoose.Document & CustomerType
export type AccountDocument = mongoose.Document & AccountType
export type TransactionDocument = mongoose.Document & TransactionType

// customer schema definition
const CustomerSchema = new mongoose.Schema({
  first_name: {type:String, required: true},
	last_name: {type:String, required: true},
	age: {type:Number, required: true},
	customer_type: {type:String, required: true},
	street: {type:String, required: true},
	city: {type:String, required: true},
	state: {type:String, required: true},
	zip_code: {type:String, required: true},
	phone_number: {type: String, default: '808080808080'},
})

//account schema definition
const AccountSchema = new mongoose.Schema({
  customer_id : {type:String, required: true},
  balance : {type:Number, required: true},
  account_type : {type:String, required: true},
})

//transaction schema definition
const TransactionSchema = new mongoose.Schema({
  customer_id : {type:String, required: true},
  transc_date : { type : Date, default: Date.now },
  update_date : { type : Date, default: Date.now },
  type : {type:String, required: true},
  details : {
    acc_from: {type:String, required: true},
    acc_to: {type:String, required: true},
    amount: {type:Number, required: true},
  }
})

// CRUD customer
export class Customer {
  private model: mongoose.Model<CustomerDocument>

  constructor() {
    this.model = mongoose.model('customer', CustomerSchema)
  }

  async create(data: CustomerType) {
    try{
      const result = await this.model.create(data)
      console.log('Insert result %j', result)
    } catch(error){
      throw error
    }
  }

  async getAll() {  
    let customers: CustomerType[]

    try{
      customers = await this.model.find({})
    }catch(error){
      throw error
    }

    return customers
  }

  async getByID(customerID: string) {
    let customer: CustomerType | null
    try {
      customer = await this.model.findById(customerID)
    }catch(error){
      throw error
    }

    return customer
  }

  async update(customerID: string, data: Partial<CustomerType>) {
   
    try{
      await this.model.findByIdAndUpdate(customerID, { $set: data })
    }catch(error){
      throw error
    }
  }

  async delete(customerID: string) {
    
    try{
      await this.model.findByIdAndDelete(customerID)
    }catch (error){
      throw error
    }
  }
}

// account CRUD
export class Account {
  private model: mongoose.Model<AccountDocument>

  constructor() {
    this.model = mongoose.model('account', AccountSchema)
  }

  // create accout
  async create(data: AccountType){
    try{
      const result = await this.model.create(data)
    } catch(error){
      throw error
    }
  }

  //get all account
  async getAll(){
    let accounts: AccountType[]

    try {
      accounts = await this.model.find({})
    } catch(error){
      throw error
    }

    return accounts
  }

  // get account by id
  async getByID(accountID: string){
    let account: AccountType | null
    try {
      account = await this.model.findById(accountID)
    }catch(error){
      throw error
    }

    return account
  }

  // update account
  async update(accountID: string, data: Partial<AccountDocument> ) {
    try{
      await this.model.findByIdAndUpdate(accountID, { $set: data })
    } catch(error){
      throw error
    }
  }

  // delete account
  async delete(accountID: string){
    try{
      await this.model.findByIdAndDelete(accountID)
    }catch(error){
      throw error
    }
  }

}

// Transaction CRUD
export class Transaction {
  private model: mongoose.Model<TransactionDocument>

  constructor() {
    this.model = mongoose.model('transaction', TransactionSchema)
  }

  // get transaction
  async create(data: TransactionType){
    try{
      const result = await this.model.create(data)
    } catch(error){
      throw error
    }
  }

  // get all transaction
  async getAll(){
    let transc: TransactionType[]

    try {
      transc = await this.model.find({})
    } catch(error){
      throw error
    }

    return transc
  }

  // get transaction by id
  async getByID(transcID: string){
    let transc: TransactionType | null
    try{
      transc = await this.model.findById(transcID)
    }catch(error){
      throw error
    }

    return transc
  }

  // update transaction
  async update(transcID: string, data: Partial<TransactionDocument>){
    try{
      data.update_date = new Date //save date update
      await this.model.findByIdAndUpdate(transcID, { $set: data })
    }catch(error){
      throw error
    }
  }

  // delete transaction
  async delete(transcID: string){
   
    try{
      await this.model.findByIdAndDelete(transcID)
    }catch(error){
      throw error
    }
  }

}

// arisudana