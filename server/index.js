const db = require('./db.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/boards', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));