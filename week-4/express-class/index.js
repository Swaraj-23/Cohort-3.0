const express = require ("express");
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data)
{
    console.log(data);
})

const app = express();

// function sum(n)
// {
//     let ans = 0;
//     for(let i=1; i<=n; i++)
//     {
//         ans += i;
//     }
//     return ans;
// }

app.get('/', (req, res)=> {
    res.send("Hello jee");
})

app.listen(3000);
