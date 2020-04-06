let router = require('express').Router();

let { mongooseUser } = require('../models/User');
let { mongooseRecord } = require('../models/Record');
const auth = require('../middlewares/auth');
const { findRecordDate } = require('../common');

router.get('/', auth, async (req, res, next) => {
  try {
    const records = await mongooseRecord.find().exec();
    res.send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/add', auth, async (req, res, next) => {
  try {
    var record = new mongooseRecord();
    record.isOffToday = req.body.isOffToday;
    record.isLateToday = req.body.isLateToday;
    record.inlateTime = req.body.inlateTime;
    record.actualInlate = req.body.actualInlate;
    await mongooseUser.findById(req.user.id, async (err, user) => {
      if (user) {
        record.runner = user._id;
        record.runnerName = user.name;
        user.save();

        const foundDate = findRecordDate(new Date());
        const runnerName = user.name;
        const { isOffToday, isLateToday, inlateTime, actualInlate } = record;

        const updatingRecord = {
          isOffToday,
          isLateToday,
          inlateTime,
          actualInlate
        };

        const foundRecord = await mongooseRecord
          .findOne(
            {
              created_at: { $gte: foundDate.today, $lte: foundDate.tomorrow },
              runnerName
            },
            err => err && console.log(err)
          )
          .exec();

        if (foundRecord) {
          foundRecord.update(updatingRecord, (err, newOne) => {
            if (err) console.log(err);
            if (newOne) {
              next();
            }
          });
        } else {
          record.save();
        }
        return res.send('Successfully saved');
      } else console.log('err_add', err);
      return res.status(500).send(err);
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
