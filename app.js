// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
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
app.use(cors());
app.use(express.json());
app.use(fileUpload());

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