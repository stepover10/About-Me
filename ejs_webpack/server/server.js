const path = require('path');
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
　
app.use(express.static(path.join(__dirname,'../dist')));

app.set('views', [path.join(__dirname, '../src')]);
app.set('view engine', 'ejs');
　
// ejs-layouts setting
app.set('layout', 'layout/layout');
app.set('layout extractScripts', true);
app.use(expressLayouts);
　
app.get('/', (req, res) => {
    res.render('index/index.ejs')
});

app.get('/community', (req, res) => {
  res.render('community/community.ejs')
});

app.listen(8888);
