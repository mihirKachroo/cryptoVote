TestSchema = require('../models/testModel')

exports.working1 = async function (req, res) {
    res.json({
        testing: 'Working!'
    })
}

exports.working2 = async function (req, res) {
    try{
        const results = TestSchema.find()
        res.json({
            status: 'success',
            data: results
        })
    }catch (e) {
        res.json({
            error: e,
            status: 'failure'
        })
    }
}

exports.testNew = function (req, res) {
    const {testString, testNum} = req.query
    let testSchema = TestSchema()

    TestSchema.testString = testString
    TestSchema.testNum = testNum

    testSchema.save(function (err) {
        if (err) {
            res.json(err)
        }

        res.json({
            status: 'success',
            testNum: testNum,
            testString: testString
        })
    })
}