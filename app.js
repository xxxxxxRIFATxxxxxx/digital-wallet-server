// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routers/usersRouter');
const notFoundHandler = require('./middlewares/notFoundHandler');
const defaultErrorHandler = require('./middlewares/defaultErrorHandler');

// Initialize
const app = express();
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(() => console.log('Database Connection Successful!'))
    .catch(err => console.log(err.message));

// Middlewares
app.use(express.json());

// Routing Setup
app.use('/users', userRouter);

// Default Route
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to Digital Wallet Server'
    });
});

// Error Handler
app.use(notFoundHandler);
app.use(defaultErrorHandler);

// Server
app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} app listening on port ${process.env.PORT}`);
});