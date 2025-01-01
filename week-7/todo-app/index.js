const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const z = require("zod");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth")

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

    const requiredBody = z.object({
        email : z.string().email(),
        name : z.string(),
        password : z.string().min(4).max(12)
        .refine((value) => /[A-Z]/.test(value))
        .refine((value) => /[a-z]/.test(value))
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value))
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success)
    {
        res.json({
            message : "incorrect format",
            error : parsedDataWithSuccess.error
        })
        return
    }

    try {
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 5)

        await UserModel.create({
            email: email,
            name: name,
            password: hashedPassword
        })

        res.json({
            message: "Signed up successfully !"
        })
    }
    catch(e){
        res.status(500).json({
            message : "error while signing up"
        })
    }
})

app.post("/signin", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    })

    if (!response) {
        res.status(403).json({
            message: "The user does not exist in our database"
        })
        return
    }

    const checkPassword = await bcrypt.compare(password, response.password);

    if (checkPassword) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)

        res.json({
            token,
            message: "Signed In Successfully !"
        })
    }

    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

})

app.post("/todo", auth, async (req, res) => {

    const userId = req.id;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        done,
        userId
    })

    res.json({
        message: "Todo created"
    })

})

app.get("/todos", auth, async (req, res) => {

    const userId = req.id;

    const todos = await TodoModel.find({
        userId
    })

    res.json({
        todos
    })

})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})