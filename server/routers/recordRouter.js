let router = require('express').Router();

let { mongooseUser } = require('../models/User')
let { mongooseRecord } = require('../models/Record')

console.log('model Record', mongooseRecord)

router.get('/', async (req, res, next) => {
  try {
    const records = await mongooseRecord.find().exec();
    res.send(records);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.post('/add', async (req, res, next) => {
  try {
    var record = new mongooseRecord();
    record.isOffToday = req.body.isOffToday
    record.isLateToday = req.body.isLateToday
    record.inlateTime = req.body.inlateTime
    record.actualInlate = req.body.actualInlate
    console.log('record', req.body)
    await mongooseUser.findOne({ _id: req.body.userId },
    (err, user) => {
      if(user) {
        console.log('user' ,user)
        user.records.push(record);
        record.runner = user._id
        record.runnerName = user.name;
        user.save();
        record.save()
        // next();
        return res.send('Successfully saved')
      } else console.log('err',err)
      return res.status(500).send(err);
    })
  }
  catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
