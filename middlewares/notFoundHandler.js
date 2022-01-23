// Dependencies
const createError = require('http-errors');

// Function Definition
const notFoundHandler = (req, res, next) => {
    next(createError(404, 'Your requested content was not found!'));
};

// Export
module.exports = notFoundHandler;