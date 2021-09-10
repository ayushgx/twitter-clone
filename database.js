const mongoose = require('mongoose')
mongoose.set('newUrlParser', true)
mongoose.set('newUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)

class Database {

    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect('mongodb+srv://admin:admin@cluster0.hy52a.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority')
        .then(() => {
            console.log('db connected')
        })
        .catch((err) => {
            console.log('db error '+err)
        })
    }
}

module.exports = new Database()