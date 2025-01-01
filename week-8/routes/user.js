const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db")
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const {USER_JWT_SECRET} = require("../config")
const {userAuth} = require("../middleware/user")

userRouter.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
        password: z
            .string()
            .regex(/[A-Z]/) // Checks for at least one uppercase letter
            .regex(/[a-z]/) // Checks for at least one lowercase letter
            .regex(/[0-9]/) // Checks for at least one digit
            .regex(/[@$!%*?&#]/) // Checks for at least one special character
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Invalid format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    try {
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashedPassword,
        });

        res.json({
            message: "Sign up successfull !",
        });
    } catch (e) {
        res.status(500).json({
            message: "error while signing up",
        });
    }
})

userRouter.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const foundUser = await userModel.findOne({
        email: email
    })

    if (!foundUser) {
        res.json({
            message: "User not found"
        })
        return
    }

    const checkPassword = await bcrypt.compare(password, foundUser.password);

    if (checkPassword) {
        const token = jwt.sign({
            id: foundUser._id.toString()
        }, USER_JWT_SECRET)

        res.json({
            token,
            message: "Sign in successfull !"
        })

    }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

userRouter.get("/purchases", userAuth, async (req, res) => {

    const userId = req.id;

    try{
        const courses = await purchaseModel.find({
            userId : userId
        })

        const courseData = await courseModel.find({
            _id : { $in : courses.map(x => x.courseId)}
        })

        res.json({
            courses,
            courseData
        })
    }
    catch(e)
    {
        res.status(503).json({
            message : "Error while fetching purchased courses !"
        })
    }

})

module.exports = {
    userRouter: userRouter
}
