const express = require('express');
const path = require('path');
const router = require('./routes/minerouters')
const firestore = require('./config/firebase');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));





const hostname = 'localhost';
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

