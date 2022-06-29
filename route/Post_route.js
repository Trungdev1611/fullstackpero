const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
    const posts = await Posts.findAll()
    res.send(posts)
})
router.post('/', async (req, res) => {

    const post = req.body;
    // //tao du lieu trong db
    await Posts.create(post);

    console.log('post', post)
    res.json(post);
})
module.exports = router