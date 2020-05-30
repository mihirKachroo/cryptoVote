Candidate = require('../models/candidateModel')

exports.createCandidate = async function (req, res) {
    const { candidateName, candidatePic } = req.query

    let candidate = Candidate()
    candidate.candidateName = candidateName
    candidate.candidatePic = candidatePic

    candidate.save(
        function (err) {
            if(err){
                res.json({
                    Error: err,
                    msg: 'Failed to upload candidate!'
                })
            }
            res.json({
                msg: 'Success! Candidate created and uploaded.',
                data: candidate
            })
        }
    )

    console.log('Candidate - Debug')
}

exports.getCandidate = async function (req, res) {
    try{
        const results = await Candidate.find({})
        res.json({
            status: 'Success!',
            msg: 'Retrieved candidates',
            data: results
        })
    }catch (e) {
        res.json({
            status: 'Failure!',
            msg: 'Unable to retrieve candidates',
            error: e
        })
    }
}