const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware.js");

//register a new user
router.post("/register", async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.send({
          message: "User already exists",
          success: false,
          data: null,
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      const newUser = new User(req.body);
      await newUser.save();
      res.send({
        message: "User created successfully",
        success: true,
        data: null,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

  // login user

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.send({
        message: "User does not exist",
        success: false,
        data: null,
      });
    }

    // if (userExists.isBlocked) {
    //   return res.send({
    //     message: "Your account is blocked , please contact admin",
    //     success: false,
    //     data: null,
    //   });
    // }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExists.password
    );

    if (!passwordMatch) {
      return res.send({
        message: "Incorrect password",
        success: false,
        data: null,
      });
    }
    //here we are encrypting the userId and sending it as a token
    // const jwt_secret = 'w4AKsO1dihm0Cggi';
    // const token = jwt.sign({ userId: userExists._id }, jwt_secret, {
    //   expiresIn: "90d",
    // });

    res.send({
      message: "User logged in successfully",
      success: true,
      email: userExists.email,
      id: userExists._id,
      name: userExists.name,
      city:userExists.city,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

  
module.exports = router;