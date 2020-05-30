'use strict'
const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
    testString: String,
    testNum: Number
})

module.exports = mongoose.model('DoesThisWork', TestSchema)