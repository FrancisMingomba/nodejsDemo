
const mongoose = require('mongoose');
const express = require('express');
const  Joi  = require('joi');
const router = express.Router();


const Genre  =  mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 25
    }
}));

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name});
    genre = await genre.save();

    res.send(genre);
});

router.put('/:id', async(req, rea) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name },{ 
        new: true
    });
      
    if (!genre) return res.status(400).send('The genre with the given ID not found');
    res.send(genre);
});

router.delete('/:id', async ( req, res ) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if (!genre) return res.status(404).send('The genre with he given id does not exist');

    res.send(genre);
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(res.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID does not exist');
    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()   
};

return Joi.validate(genre, schema);
}

module.exports = router;






