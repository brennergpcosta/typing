const express = require('express');
const router = express.Router();
const Members = require('../../Members')
const uuid = require('uuid');

// Get All the Members
router.get('/', (req, res) => res.json(Members))

// Get a single member
router.get('/:id', (req, res) => {
    const found = Members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json(Members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json('No member with this id')
    }
})

// Create new member
router.post('/', (req, res) => {
    newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include a name and/or email" })
    }   

    Members.push(newMember)
    res.status(200).json(Members)
})

// Update existing member
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const member = Members.find(member => member.id === id)

    console.log(member)

    if(member){
        const updatedMembers = req.body
        Members.forEach((member) => {
            if(member.id === parseInt(updatedMembers.id)){
                member.name = member.name ? updatedMembers.name : member.name
                member.email = member.email ? updatedMembers.email : member.email

                res.json({ msg: `Member was updated`, member })
            }
        })
    }else{
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
})

module.exports = router