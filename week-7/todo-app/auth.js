const jwt = require("jsonwebtoken");

function auth(req, res, next)
{
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    if(decodedInfo)
    {
        req.id = decodedInfo.id;
        next();
    }
    else
    {
        res.status(403).send({
            message : "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}