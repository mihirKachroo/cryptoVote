Ballot = require('../models/ballotModel')

exports.createBallot = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const{ voterName, voterID, votedFor } = req.query

    let ballot = Ballot()
    ballot.voterName = voterName
    ballot.voterID = voterID
    ballot.votedFor = votedFor

    ballot.save(
        function (err) {
            if(err){
                res.json({
                    Error: err,
                    msg: 'Failed to upload ballot!'
                })
            }
            res.json({
                msg: 'Success! Ballot created and uploaded.',
                data: ballot
            })
        }
    )

    console.log('debug')
}

exports.getBallots = async function (req, res) {
    try{
        const results = await Ballot.find({})
        res.json({
            status: 'Success!',
            msg: 'Retrieved ballots',
            data: results
        })
    }catch (e) {
        res.json({
            status: 'Failure!',
            msg: 'Unable to retrieve ballots',
            error: e
        })
    }
}