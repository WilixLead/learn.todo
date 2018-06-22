const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BoardsDB');


const BoardName = mongoose.model('BoardName', {
    type: String,
    BoardName: {
        type: String,
        default: ''
    },

    ItemName: String
})


module.exports = {
    BoardName: BoardName,
    ItemName: ItemName
}
