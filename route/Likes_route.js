const express = require('express')
const router = express.Router()
const { Likes } = require('../models')
const { validateTokenAuth } = require('./middleWare/authmiddleWare')

router.post("/", validateTokenAuth, async (req, res) => {
    const userId = req.user.id
    const postId = req.body.postId
    console.log('postIdddd', postId)
    if (!postId) {
        return res.json("khong co idPost")
    }
    // co che like va unline - tim duoc gia tri userId va PostId trong db thi da like roi, nguoc lai la chua like
    let found = await Likes.findOne({ where: { PostId: postId, UserId: userId } })
    console.log('found', found)
    if (found) { // neu tim thay gia tri
        await Likes.destroy({ where: { PostId: postId, UserId: userId } })
        return res.json('Cancel Liked')
    }
    else {
        await Likes.create({ PostId: postId, UserId: userId })
        res.json('Liked update')
    }

})

// lay trang thai like hien tai

router.get('/checklike', validateTokenAuth, async (req, res) => {
    const userId = req.user.id
    let foundPostidUserLiked = await Likes.findAll({ where: { UserId: userId }, attributes: ['PostId'], raw: true, })

    console.log('found', foundPostidUserLiked)
    let postIdarr = []
    foundPostidUserLiked.forEach(element => {
        postIdarr.push(element.PostId)
    });
    res.json(postIdarr)
})


// lay so luong like
const postId =

    module.exports = router