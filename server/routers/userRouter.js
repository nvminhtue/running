let router = require('express').Router();

let UserModel = require('../models/User');

router.get('/', (req, res) => res.json({
        status: 'API is working',
        message: 'REST is built'
    })
)

router.post('/register', async (req, res) => {
    try {
        var user = UserModel(req.body);
        var result = await user.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        var user = await UserModel.findOne({ userName: req.body.userName }).exec();
        if (!user || !user.comparePassword(req.body.password)) req.status(400).send({ message: "The username does not exist"});
        req.send(`Welcome back ${user.name}`);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
