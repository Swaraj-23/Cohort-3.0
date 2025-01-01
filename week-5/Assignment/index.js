const express = require ("express");

const app = express();

app.get('/multiply', (req,res)=>{
    let num1 = parseFloat(req.query.a);
    let num2 = parseFloat(req.query.b);

    console.log("multiply ans : ", num1*num2);

    res.json({
        ans : num1 * num2
    })

})


app.get('/division', (req,res)=>{
    let num1 = parseFloat(req.query.a);
    let num2 = parseFloat(req.query.b);

    console.log("division ans : ", num1/num2);

    res.json({
        ans : num1 / num2
    })

})

app.get('/add', (req,res)=>{
    let num1 = parseFloat(req.query.a);
    let num2 = parseFloat(req.query.b);

    console.log("addition ans : ", num1+num2);

    res.json({
        ans : num1 + num2
    })

})

app.get('/subtract/:a/:b', (req,res)=>{
    let num1 = parseFloat(req.params.a);
    let num2 = parseFloat(req.params.b);

    console.log("subtraction ans : ", num1-num2);

    res.json({
        ans : num1 - num2
    })

})

app.listen(3000, () =>{
    console.log("listening on port 3000");
})