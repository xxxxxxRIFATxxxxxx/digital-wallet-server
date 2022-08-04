// Name Validator Function Definition
const nameValidator = (name) => {
    const pattern = /^[a-zA-Z\s]+$/;
    return pattern.test(name);
};

// Email Validator Function Definition
const emailValidator = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
};

// Password Validator Function Definition
const passwordValidator = (password) => {
    if (password.length >= 6) {
        return true;
    }

    else {
        return false;
    };
};

// Export
module.exports = { nameValidator, emailValidator, passwordValidator };