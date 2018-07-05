const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boards').then(
result => console.log('Successful connection'),
err => console.log("Can't connect to MongoDb")
);

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
