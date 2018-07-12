const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boards').then(
result => console.log('Successful connection'),
err => console.log("Can't connect to MongoDb")
);

const boardItemSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ''
    }
});

const Board = mongoose.model('Board', {
    title: {
        type: String,
        default: ''
    },
    items: [boardItemSchema]
});

module.exports = {
    Board: Board
};
