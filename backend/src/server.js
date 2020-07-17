const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

mongoose.connect('mongodb+srv://luiz:luizinho55@omnistack-acnc.ksqkz.mongodb.net/omnistack-acnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express();
app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);