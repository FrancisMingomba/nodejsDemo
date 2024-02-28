/*const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const cors = require('cors');
const app = express();

require('./startup/prod')(app);


//mongoose.connect('mongodb://localhost:27017/nodejsDemoDB')
mongoose.connect("mongodb+srv://fm:fm@cluster1.kebrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDb', err));

app.use(cors()); 
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

module.exports = app;
*/