
const express = require("express");
const app = express();
const db = require("./models");
const cors = require('cors');
//khong can dung bodyparser de lay du lieu tu body, express da tich hop san
app.use(cors());
app.options('*', cors());
app.use(express.json());

//Router
const postRouter = require("./route/Post_route")
app.use('/post', postRouter)

const commentsRouter = require("./route/CommentsRoute")
app.use('/comments', commentsRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on http://localhost:3001");
    });
});