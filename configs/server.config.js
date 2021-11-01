const express = require('express');
const app = express();
const mongoose = require('mongoose');
var puerto = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



module.exports = {app, puerto, mongoose};
