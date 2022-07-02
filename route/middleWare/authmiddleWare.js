// //import ham verify co san trong jwt
// const { verify } = require("jsonwebtoken")

// const validateTokenAuth = (req, res, next) => {
//     let accesstokenclient = req.header("accessToken")
//     console.log('acccessTokenclien', accesstokenclient, req.headers)
//     if (!accesstokenclient) {
//         return res.json({ error: 'User not logged in' })
//     }
//     try {
//         const validToken = verify(accesstokenclient, "importantsecret")  //"importantsecret" duoc truyen tu luc khai bao ham sign
//         if (validToken) {
//             console.log('validtoken true')
//             return next()
//         }
//         // else {
//         //     console.log('chay me vao else roi')
//         //     res.json({ error: "loi me roi" })

//         // }
//     } catch (error) {
//         return res.json({ error: error })
//     }
// }


const { verify } = require("jsonwebtoken");

const validateTokenAuth = (req, res, next) => {
    const accessToken = req.header("accesstoken");
    console.log('acccesssssssssss', accessToken, req.header)


    if (accessToken === 'null') {
        console.log(1111)
        return res.json({ error: "User not logged in!" })
    }
    const validToken = verify(accessToken, "importantsecret");
    console.log('validToken', validToken)
    if (validToken) {
        console.log(2222)
        next();
    }
    else {
        return res.json({ error: "chay me vao catch" });
    }



};

module.exports = { validateTokenAuth };
// module.exports = {
//     validateTokenAuth
// }