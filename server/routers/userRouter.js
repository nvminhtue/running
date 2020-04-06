const router = require('express').Router();
const jwt = require('jsonwebtoken');

const { mongooseUser } = require('../models/User');
const auth = require('../middlewares/auth');

router.get('/', async (req, res, next) => {
  try {
    var results = await mongooseUser.find().exec();
    res.send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/my-profile', auth, async (req, res) => {
  try {
    const user = await mongooseUser.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = new mongooseUser(req.body);
    await user.save();
    const payload = {
      user: {
        id: user._id
      }
    };

    jwt.sign(
      payload,
      'secret',
      {
        expiresIn: '365d'
      },
      (err, token) => {
        if (err) console.log('jwt err', err);
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await mongooseUser.findOne({ username: req.body.username }).exec();
    if (!user) {
      return res.status(400).send({ message: 'Username or password not match' });
    } else {
      user.comparePassword(req.body.password, (err, match) => {
        if (!match) {
          return res.status(400).send({ message: 'Username or password not match' });
        }
        const payload = {
          user: {
            id: user._id,
            name: user.name,
            username: user.username
          }
        };

        jwt.sign(
          payload,
          'secret',
          {
            expiresIn: '365d'
          },
          (err, token) => {
            if (err) console.log('err token', err);
            res.status(200).json({ token });
          }
        );
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
