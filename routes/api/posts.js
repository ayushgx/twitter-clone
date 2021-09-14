const express = require('express')
const bodyParser = require('body-parser')
const User = require('../../schema/UserSchema')
const Post = require('../../schema/PostSchema')
const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended:false }))

router.get('/', (req, res, next) => {

})

router.post('/', async (req, res, next) => {

    if(!req.body.content){
        console.log('content param not set with request')
        return res.sendStatus(400)
    }

    var postData = {
        content: req.body.content,
        postedBy: req.session.user
    }

    Post.create(postData).then(newPost => {
        res.status(201).send(newPost)
    }).catch(error => {
        console.log(error)
        res.sendStatus(400)
    })
})

module.exports = router