const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('views'));

app.get('/auth/google', (req, res) => {
  const user = {
    name: req.query.name,
    password: req.query.password
  };
  res.render('success', {user});
})

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/login', (req, res) => {
  res.render('index')
 });

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Nie mogliśmy odnaleźć tego, czego żądasz!')
});