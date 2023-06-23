
const Joi = require('joi');
const users = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/nodejsDemoDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDb'));

app.use(express.json());
app.use('/api/users', users);



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));