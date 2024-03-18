/*
Um EJS zu installieren, folgenden Befehl im Terminal eingeben:

npm install ejs

app.set(key, value)

key: Der Name von der Einstellung
value: Der Wert der Einstellung

app.set('view engine', 'ejs')
app.set('port', 3000)
app.set('env', 'development')
*/

const express = require('express');
const app = express();

// View Engine setzen, die bestimmt wie HTML generiert wird
app.set('view engine', 'ejs');

// app.locals.title = 'EJS Template';

app.get('/', (req, res) => {
  res.render('index', {
    title: 'EJS Template',
    message: 'Die Message wird dynamisch durch EJS dargestellt.',
    user: {
      name: 'Max',
      age: 30,
    },
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About EJS',
    htmlContent: '<code>Das ist ein Paragraph aus app.get("/about")</code>',
  });
});

app.listen(3000);
