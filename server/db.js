const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boards');


const Board = mongoose.model('Board', {
    boardName: {
        type: String,
    },
    items: Array 
})

const itemName =const Board = mongoose.model('Item', {
    nameItem: String
    
})


module.exports = {
    Board: Board,
}
