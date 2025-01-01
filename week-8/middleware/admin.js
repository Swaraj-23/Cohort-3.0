const jwt = require("jsonwebtoken");
const {ADMIN_JWT_SECRET} = require("../config")

function adminAuth(req, res, next)
{
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, ADMIN_JWT_SECRET)

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
    adminAuth : adminAuth
}