const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boards');

const boardItemSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }
});

const Board = mongoose.model('Board', {
    name: {
        type: String,
        default: ''
    },
    items: [boardItemSchema]
});

module.exports = {
    Board: Board
};
