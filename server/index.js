const db = require('./db.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
  });

// Роут на получение всех досок:

app.get('/boards', (req, res) => {
  db.Board.find({}).then(boards => {
    res.send(boards);
  });
});


// Роут на добавление пустой доски с произвольным именем:

app.post('/:name', function (req, res) {
  let board = new db.Board();
  board.title = req.params.name;
  board.save().then(() => {
    res.send(' Board added ');
  });
});


// Роут на удаление произвольной доски по _id в БД:

app.delete('/:id', function (req, res) {
  db.Board.deleteOne({ _id: { $in: req.params.id } }).then(() => {
    res.send(' Board deleted ');
  })
});

// Роут на обновление произвольной доски по _id в БД:

app.put('/upd', function (req, res) {

  db.Board.findByIdAndUpdate(req.body.id,
    {
      title: req.body.name,
      items: req.body.items
    },
    function(err) {
      if (err) throw err;
      res.send(' Board updated ');
    });

});

// Запуск сервера приемки http-запросов:

app.listen(3000, () => console.log('Server listening on port 3000!'));