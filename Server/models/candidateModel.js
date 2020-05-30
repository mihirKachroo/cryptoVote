'use strict'

const mongoose = require('mongoose')

const CandidateSchema = mongoose.Schema({
    candidateName: String,
    candidatePic: String
})

module.exports = mongoose.model('Candidate', CandidateSchema)