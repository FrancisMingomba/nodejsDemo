const { Book, validate } = require('../models/book'); 
const { Genre } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Books.find().sort('name');
  res.send(books);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let _book = new Book({ 
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate
  });

  _book = await _book.save();
  if (_book) return res.status(400).send('book already exist');
  
  res.send(_book);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const book = await book.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate
    }, { new: true });

  if (!book) return res.status(404).send('The movie with the given ID was not found.');
  
  res.send(book);
});

router.delete('/:id', async (req, res) => {
  const book = await book.findByIdAndRemove(req.params.id);

  if (!book) return res.status(404).send('The movie with the given ID was not found.');

  res.send(book);
});

router.get('/:id', async (req, res) => {
  const book = await book.findById(req.params.id);

  if (!book) return res.status(404).send('The movie with the given ID was not found.');

  res.send(book);
});

module.exports = router; 