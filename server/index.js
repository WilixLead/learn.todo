const db = require('./db.js');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function addBoard() {
    app.post('/:name', function(req, res, next) {
        let board = new db.Board();
        board.boardName = req.params.name;
        board.save().then(res.send(' saved '))
    })
}
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/boards', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));