const jwt = require("jsonwebtoken");
const {USER_JWT_SECRET} = require("../config")

function userAuth(req, res, next)
{
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, USER_JWT_SECRET)

    if(decodedInfo)
    {
        req.id = decodedInfo.id;
        next();
    }
    else{
        res.status(403).send({
            message : "Incorrect creds"
        })
    }
}

module.exports = {
    userAuth : userAuth
}


