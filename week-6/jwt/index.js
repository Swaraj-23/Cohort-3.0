const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "helloswaraj"

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        message : "Signed up successfully !"
    })

    console.log(users)
})

app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) =>{
        return u.username == username && u.password == password
    })

    if(user)
    {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.json({
            message : "Signed in successfully !",
            authToken : token
        })
    }
    else
    {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

    console.log(users)

})

app.get("/me", (req, res) =>{
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username;

    const foundUser = users.find(t => t.username === username)

    if(foundUser)
    {
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }
    else{
        res.status(403).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);