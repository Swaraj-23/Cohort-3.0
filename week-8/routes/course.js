const { Router } = require("express");
const { courseModel, purchaseModel } = require("../db");
const { userAuth } = require("../middleware/user");
const courseRouter = Router();

courseRouter.get("/preview", async (req, res) => {

    try {
        const courses = await courseModel.find({});

        res.json({
            courses
        })
    }
    catch(e)
    {
        res.status(503).json({
            message : "Error while fetching courses !"
        })
    }
})

courseRouter.post("/purchases", userAuth, async (req, res) => {

    const userId = req.id;
    const courseId = req.body.courseId;

    try{
        await purchaseModel.create({
            userId,
            courseId
        })
        res.json({
            message : "Course purchased successfully !"
        })
    }
    catch(e)
    {
        res.status(503).json({
            message : "Error while purchasing a course"
        })
    }

})

module.exports = {
    courseRouter: courseRouter
}
