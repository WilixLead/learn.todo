const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BoardsDB');


const Board = mongoose.model('Board', {
    BoardName: {
        type: String,
    },
    Items: Array 
})

const ItemName =const Board = mongoose.model('Item', {
    NameItem: {
    }
})


module.exports = {
    Board: Board,
}
