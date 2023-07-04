const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const app = express();

require('./startup/prod')(app);


mongoose.connect('mongodb://localhost/nodejsDemoDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDb'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));