// Dependencies
const express = require('express');
const User = require('../models/User');

// Initialize
const userRouter = express.Router();

// Create User
userRouter.post('/', async (req, res) => {
    const image = Buffer.from(req.files.image.data.toString('base64'), 'base64');
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