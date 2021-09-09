const express = require('express')
const middleware = require('./middleware')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`)
})

app.set("view engine", "pug")
app.set("views", "views")

//Routes
const loginRoute = require('./routes/loginRoutes')

app.use("/login", loginRoute)


app.get('/', middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: 'Home'
    }

    res.status(200).render('home', payload)

})