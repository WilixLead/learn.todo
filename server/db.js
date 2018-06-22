const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boards');


const Board = mongoose.model('Board', {
    name: {
        type: String,
        default: ''
    },
    items: [BoardItem]
});

const BoardItem = mongoose.model('Item', {
    name: {
        type: String,
        default: ''
    }
});


module.exports = {
    Board: Board,
    BoardItem: BoardItem
}
