const express = require("express");
const router = express.Router()
const users = require("../../data/users")

// Get all the users
router.get('/', (req, res) => {
    res.status(200).json(users)
})

// Get a single user
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.filter(user => user.id === id)
    if(user.length){
        res.status(200).json(user)
    }else{
        res.status(400).send(`No user found with that id`)
    }
})

module.exports = router