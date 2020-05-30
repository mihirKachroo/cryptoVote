'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 1234;
const mongooseURI = 'mongodb+srv://BillBai:SecurePassword@cluster0-tikzh.mongodb.net/test?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function (callback) {
    console.log('Connected to DB!')
})

app.use('/', routes)
app.listen(port, () => console.log(`Started on port ${port}`))