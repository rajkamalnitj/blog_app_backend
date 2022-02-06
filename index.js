const express = require('express');

const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config();

console.log(`Hello Node.js v${process.versions.node}!`);
var http = require('http');




app.use(express.json());

app.use(express.urlencoded({ extended: true }));
  
app.post('/profile', function (req, res) {
  console.log(req.body);
  res.send();
});
app.get('/',(req,res)=>{
  console.log(' local server');
  
  res.send('<h1> hello</h1>')
})




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
