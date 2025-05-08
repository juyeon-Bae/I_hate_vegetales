require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = 5000;

const commentRoutes = require('./routes/comment')
const goalRoutes = require('./routes/goals')
const signupRoutes = require('./routes/signup')
const loginRoutes = require('./routes/login')

app.use(cors());
app.use(express.json());

require('./config/db');

//router
app.use('/comments', commentRoutes);
app.use('/goal', goalRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes)

app.listen(PORT, () => {
    console.log(`server ${PORT}에서 실행중임`)
})