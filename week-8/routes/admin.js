const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const bcrypt = require("bcrypt");
const z = require("zod");
const jwt = require("jsonwebtoken");
const adminRouter = Router();
const { ADMIN_JWT_SECRET } = require("../config")
const { adminAuth } = require("../middleware/admin")

adminRouter.post("/signup", async (req, res) => {
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

    await adminModel.create({
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
});

adminRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const foundAdmin = await adminModel.findOne({
    email: email
  })

  if (!foundAdmin) {
    res.json({
      message: "Admin not found"
    })
    return
  }

  const checkPassword = await bcrypt.compare(password, foundAdmin.password);

  if (checkPassword) {
    const token = jwt.sign({
      id: foundAdmin._id.toString()
    }, ADMIN_JWT_SECRET)

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

});

adminRouter.post("/course", adminAuth, async (req, res) => {
  const adminId = req.id;

  try {
    const { title, description, price, imageUrl} = req.body;

    const course = await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: adminId
    })

    res.json({
      message: "Course added successfully !",
      CourseId : course._id
    })
  }
  catch (e) {
    res.status(503).json({
      message: "Error while adding course"
    })
  }
});

adminRouter.put("/course", adminAuth, async (req, res) => {
  const adminId = req.id;

  try {
    const { title, description, price, imageUrl, CourseId} = req.body;

    const course = await courseModel.updateOne({
      _id : CourseId,
      creatorId : adminId
    },{
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    })

    res.json({
      message: "Course updated successfully !",
      CourseId : CourseId
    })
  }
  catch (e) {
    res.status(503).json({
      message: "Error while updating course"
    })
  }
  
});


adminRouter.get("/course/bulk", adminAuth, async (req, res) => {

  const adminId = req.id;

  try{
    const courses = await courseModel.find({
      creatorId : adminId
    })

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

});

module.exports = {
  adminRouter: adminRouter,
};
