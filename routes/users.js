
const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const { result } = require('lodash');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user = await user.save();

    res.send(user);
});

/*async function updateUser(id) {
    const user = await User.findByIdAndUpdate(id, {
        $set: {

            name: 'simonia',
            email: 'ming@gmail.com',
            password: 'new passwoed'
            //name: req.body.name,
            //email: req.body.email,
            //password: req.body.password
        }
    }, { new: true });
    console.log(user);
}
updateUser('64952bb21204864ec993af5b');

*/


router.put('/:id', async (req, res) => {
    const userInDb = await User.find(c => c.id === parseInt(req.params.id));
    if (!userInDb) res.status(400).send('The user with the given id was not found ');

    const { error } = validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    userInDb.name = req.body.name;
    userInDb.email = req.body.email;
    userInDb.password = req.body.password;
    res.send(userInDb);


});


/*
  
app.delete('/api/genres/:id', (req, res) => {
const genre = genres.find(c => c.id === parseInt(req.params.id));
if (!genre) return res.status(404).send('The genre with the given ID was not found.');
 
const index = genres.indexOf(genre);
genres.splice(index, 1);
 
res.send(genre);
});
 
router.get('/:id', async (req, res) => {
    const userInDb = await User.find(c => c.id === parseInt(req.params.id));
    if (!userInDb) return res.status(404).send('The genre with the given ID was not found.');
    res.send(userInDb);
});


*/


module.exports = router;
