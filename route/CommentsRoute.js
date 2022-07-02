const express = require('express')
const router = express.Router()
const { Comments } = require('../models')
const { validateTokenAuth } = require('./middleWare/authmiddleWare')
// quan he 1 nhieu: 1 post co nhieu comment nen id cua coment phai duoc xac dinh theo post
//lay tat ca comment dua tren id cua Post
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId
    const comments = await Comments.findAll({ where: { PostId: postId } })  // tim kiem cac comment trong bang comment co postId tuong ung voi id cua bai post
    res.json(comments)

})

//post comment
//them middleware validateTokenAuth de dang nhap thi moi co the comment duoc
router.post("/", validateTokenAuth, async (req, res) => {
    const comment = req.body
    await Comments.create(comment)
    res.json(comment)
})
module.exports = router