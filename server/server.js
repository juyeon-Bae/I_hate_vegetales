require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = 5000;

const commentRoutes = require('./routes/comment')

app.use(cors());
app.use(bodyParser.json());

require('./config/db');

//router
app.use('/comments', commentRoutes);

app.listen(PORT, () => {
    console.log(`server ${PORT}에서 실행중임`)
})