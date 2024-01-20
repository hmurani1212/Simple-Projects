const express = require("express");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchUser");
const jwt_secret = "harryisagood$boy";

// Endpoint to create a user: /api/auth/CreateUser
router.post("/CreateUser", [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', 'Enter a valid password with 5 characters').isLength({ min: 4 }),
], async (req, res) => {
    try {
        // Validate input data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(401).json({ error: "Sorry, a user with this email already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        // Create JWT token
        const data = {
            user: {
                id: user.id
            },
        }
        const authToken = jwt.sign(data, jwt_secret)

        // Send response with the token
        res.json({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occurred");
    }
});
//End point of user create /api/auth/login
router.post("/login", [
    body('email', "Enter a valid email").isEmail(),
    body('password', 'password canot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });

    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please Enter a valid creadential to login" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please Enter a valid creadential to login" })
        }
        const data = {
            user: {
                id: user.id
            },
        }
        const AuthToken = jwt.sign(data, jwt_secret)
        // res.json(user)
        res.json({ AuthToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server arror occure");
    }
})
// get login user detail getUser;
router.get("/getUser", fetchUser,  async (req, res) => {
    try {
        userid = req.user.id
        const user = await User.findById(userid).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server arror occure");
    }
});
module.exports = router;