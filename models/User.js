// Dependencies
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 255,
        required: true,
        trim: true
    },
    email: {
        type: String,
        maxlength: 255,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true,
    },
    walletAddress: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 500,
        trim: true
    },
    transaction: {
        type: [{
            transactionID: { type: String, required: true, trim: true },
            amount: { type: Number, required: true, trim: true, default: 0 },
            sender: { type: String, required: true, trim: true },
            receiver: { type: String, required: true, trim: true },
            date: { type: Date, default: Date.now() }
        }],
        required: false
    }
},

    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

// Export
module.exports = User;