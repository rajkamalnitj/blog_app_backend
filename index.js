const express = require('express');

const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config();

console.log(`Hello Node.js v${process.versions.node}!`);
var http = require('http');
app.use('/', (req, res) => {
  console.log('hey this is /raj url');
});

console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => console.log(err));

app.listen('5050', () => {
  console.log('backend is running');
});
