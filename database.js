const mongoose = require('mongoose')
class Database {

    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect(process.env.DB_URI)
        .then(() => {
            console.log('db connected')
        })
        .catch((err) => {
            console.log('db error '+err)
        })
    }
}

module.exports = new Database()