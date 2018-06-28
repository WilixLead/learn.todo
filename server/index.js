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

function addBoard () {
  app.post('/:name', function (req, res) {
    let board = new db.Board();
    board.boardName = req.params.name;
    board.save().then(() => {
      res.send(' Board added ');
    });
  })
}

function deleteBoard () {
  app.delete('/:id', function (req, res) {
    db.Board.deleteOne({ _id: { $in: req.params.id } }).then(() => {
      res.send(' Board deleted ');
    })
  })
}

function updateBoard () {
  app.post('/:id', function (req, res) {
    let board = new db.Board();
    board.boardName = req.params.name;
    board.items = req.params.items;
    board.save().then(res.send(' Board updated '));
  })
}

app.listen(3000, () => console.log('Server listening on port 3000!'));