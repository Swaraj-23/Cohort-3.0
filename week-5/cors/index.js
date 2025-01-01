const express = require ("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

// the below snippet is used to host both frontend and backend on the same port

// app.get("/", (req, res) =>{
//     res.sendFile(__dirname + "/public/index.html")
// })

app.post("/sum", (req, res) =>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

app.post("/multiply", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a * b
    })
});

app.post("/divide", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a / b
    })

});

app.post("/subtract", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})