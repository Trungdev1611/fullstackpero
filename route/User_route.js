const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require("bcrypt")
const { sign } = require('jsonwebtoken')

//register
router.post('/', async (req, res) => {
    const { username, password } = req.body
    bcrypt.hash(password, 10).then(hash => Users.create({ username, password: hash }))

    res.json("Success register");
})

// login
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await Users.findOne({ where: { username: username } })
    if (!user) res.json({ error: "User doesn't Exit" })
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) res.json({ error: "Wrong password" })
            else {
                //json web token duoc gui khi dang nhap thanh cong
                const accesstoken = sign({ username: user.username, ud: user.id }, "importantsecret")

                //gui mot chuoi token den frontend. Front end se luu no co the o localstore, seasionstore, cookie
                res.json(accesstoken)

            }
        })
    }
})
module.exports = router