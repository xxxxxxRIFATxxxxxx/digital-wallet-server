// Dependencies
const express = require('express');
const User = require('../models/User');
const { nameValidator, emailValidator, passwordValidator } = require('../helpers/validators');

// Initialize
const userRouter = express.Router();

// Create User
userRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const image = Buffer.from(req.files.image.data.toString('base64'), 'base64');

    // Validation



    const newUser = new User(req.body);
    newUser.image = image;

    // Submit To Database
    try {
        const data = await newUser.save();
        res.status(200);
        res.send({
            result: data,
            message: "Registration Successful!"
        })
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Export
module.exports = userRouter;