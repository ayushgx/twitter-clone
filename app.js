const express = require('express')
const middleware = require('./middleware')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`)
})

app.set("view engine", "pug")
app.set("views", "views")

app.use(express.static(path.join(__dirname, 'public')))

//Routes
const loginRoute = require('./routes/loginRoutes')
const registerRoute = require('./routes/registerRoutes')

app.use("/login", loginRoute)
app.use("/register", registerRoute)


app.get('/', middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: 'Home'
    }

    res.status(200).render('home', payload)

})