const express = require("express");

const app = express();

function middleware(req, res, next)
{
    console.log("THe method is : " + req.method);
    console.log("THe url is : " + req.url);
    console.log("THe timestamp is : " + new Date());
    console.log("THe host name is : " + req.hostname);
    next();
}

app.use(middleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);