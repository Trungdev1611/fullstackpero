const express = require('express')
const router = express.Router()
const { Posts, Likes } = require('../models')

router.get('/', async (req, res) => {
    const posts = await Posts.findAll({ include: Likes })
    res.json(posts)
})

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    console.log(11111111111111)
    let datafind = await Posts.findOne({ where: { id: id } })
    console.log('dataFind: ', datafind)
    res.json(datafind)

})

router.post('/', async (req, res) => {

    const post = req.body;
    // //tao du lieu trong db
    await Posts.create(post);
    res.json(post);
})
module.exports = router