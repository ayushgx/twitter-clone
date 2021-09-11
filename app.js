const express = require('express')
const session = require('express-session')
const middleware = require('./middleware')
const path = require('path')
require('dotenv').config() 
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const mongoose = require('./database')

console.log(process.env)

app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`)
})

app.set("view engine", "pug")
app.set("views", "views")

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(session({
    secret: "8ZwNDRCcvAV5PRXL3N",
    resave: true,
    saveUninitialized: false
}))

//Routes
const loginRoute = require('./routes/loginRoutes')
const registerRoute = require('./routes/registerRoutes')

app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.get('/', middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: 'Home',
        userLoggedIn: req.session.user
    }

    res.status(200).render('home', payload)

})