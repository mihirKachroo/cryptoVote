'use strict'

const express = require('express')
const router = express.Router()

// const test = require('../controller/test.js')
const ballotController = require('../controller/ballotController')
// const electionController = require('../controller/electionController')
const candidateController = require('../controller/candidateController')

// router.route('/test').get(test.working1)
// router.route('/test1').get(test.working2)
// router.route('/testCreate').get(test.testNew)

router.route('/GET-Ballots').get(ballotController.getBallots)
router.route('/POST-Ballot').post(ballotController.createBallot)

router.route('/GET-Candidates').get(candidateController.getCandidate)
router.route('/POST-Candidate').post(candidateController.createCandidate)
// router.route('/winner').get()

module.exports = router