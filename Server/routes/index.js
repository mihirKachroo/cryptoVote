'use strict'

const express = require('express')
const router = express.Router()

const test = require('../controller/test.js')
const ballotController = require('../controller/ballotController')

router.route('/test').get(test.working1)
router.route('/test1').get(test.working2)
router.route('/testCreate').get(test.testNew)

router.route('/GET-Ballots').get(ballotController.getBallots)
router.route('/POST-Ballots').post(ballotController.createBallot)

module.exports = router