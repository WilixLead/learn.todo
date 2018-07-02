const mongoose = require('mongoose');
let promMongo = new Promise((resolve, reject) => {
    resolve(mongoose.connect('mongodb://localhost/boards'));
});
promMongo.then(
    result => console.log('Successful connection'),
    error => console.log("Can't connect to MongoDb")
)

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