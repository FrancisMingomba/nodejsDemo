const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const express = require('express');
const { result } = require('lodash');
const router = express.Router();
const cors = require('cors');


router.get('/me', auth, async (req,res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})

router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let _user = await User.findOne({ email: req.body.email });
    if (_user) return res.status(400).send('user already exist');

    _user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    _user.password = await  bcrypt.hash(_user.password, salt);
    await _user.save();

    const token = _user.generateAuthToken();
 
    res.header('x-auth-token', token).send(_.pick(_user, ['_id', 'name', 'email']));
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, email: req.body.email, password: req.body.password }, {
        new: true
    });

    if (!user) return res.status(404).send('The user with the given ID was not found.');

    res.send(user);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).send('The genre with the given ID was not found.');

    res.send(user);
});

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).send('The genre with the given ID was not found.');

    res.send(user);
}); router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).send('The genre with the given ID was not found.');

    res.send(user);
});

//----------------------------------------------------------------------

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).send('The user with the given ID was delete.');

    res.send(user);
});

//----------------------------------------------------------------------

module.exports = router;
