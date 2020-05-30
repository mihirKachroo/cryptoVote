'use strict'
const mongoose = require('mongoose')

const BallotSchema = mongoose.Schema({
    voterName: String,
    voterID: String,
    votedFor: String
})

module.exports = mongoose.model('Ballot', BallotSchema)