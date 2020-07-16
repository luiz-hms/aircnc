const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://luiz:luizinho55@omnistack-acnc.ksqkz.mongodb.net/omnistack-acnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);