const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BoardsDB');


const Board = mongoose.model('Board', {
    BoardName: {
        type: String,
        default: ''
    },
    Item: String
})


module.exports = {
    Board: Board,
}