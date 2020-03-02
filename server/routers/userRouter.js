let router = require('express').Router();

let { mongooseUser } = require('../models/User');

console.log('model', mongooseUser)

router.get('/', async (req, res, next) => {
    try {
        var result = await mongooseUser.find().exec();
        console.log(mongooseUser)
        res.send(result);
    } catch (err) {
        res.status(500).send(err)
    }
});

router.post('/register', async (req, res) => {
  try {
    var user = new mongooseUser(req.body);
    console.log('body', req.body)
    console.log('user', user)
    var result = await user.save();
    console.log('result', result)
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    var user = await mongooseUser.findOne({ username: req.body.username }).exec();
    console.log('user', user)
    if (!user) {
      return res.status(400).send({ message: 'Username or password no match' });
    } else {
      console.log('compare')
      user.comparePassword(req.body.password, (err, match) => {
        console.log('match', match)
        if (!match) {
          return res.status(400).send({ message: 'Username or password no match' });
        }
        res.send(`Welcome back ${user.name}`);
      });
    }
  } catch (err) {
    console.log('RETARD ALERT', err);
    res.status(500).send(err);
  }
});

module.exports = router;
