const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next) => {
    console.log('Time right now is', Date.now())
    next()
})

app.use(express.json());

app.listen(3000, () =>{
    console.log('Server is running at port 3000')
})