const path = require('path');
const express = require("express");
const app = express();



app.use( express.static(path.join(__dirname,'../dist')) );

app.set('view engine', 'ejs');
app.set('views', './src');



app.get('/', (req, res) => {
  res.render('index/index');
});

app.get('/header', (req, res) => {
  res.render('header/header');
});

app.listen(8888, () => {
  console.log("START SERVER : 8888")
})