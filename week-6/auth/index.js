const express = require("express");
const jwt = require("jsonwebtoken");
// const cors = require("cors");

const JWT_SECRET = "helloswaraj"

const app = express();

// app.use(cors());

app.use(express.json());

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;
    
    if(username)
    {
        req.username = username;
        next();
    }
    else{
        res.status(403).send({
            message : "Not logged in"
        })
    }
}

const users = [];

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        message: "Signed up successfully !"
    })

    console.log(users)
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {
        return u.username == username && u.password == password
    })

    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            message: "Signed in successfully !",
            authToken: token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

    console.log(users)

})

app.get("/me", auth, (req, res) => {

    const foundUser = users.find(t => t.username === req.username)

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })


})

app.listen(3000);