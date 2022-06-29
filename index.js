
const express = require("express");
const app = express();
const db = require("./models");
//khong can dung bodyparser de lay du lieu tu body, express da tich hop san
app.use(express.json());

//Router
const postRouter = require("./route/Post_route")

app.use('/post', postRouter)



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on http://localhost:3001");
    });
});