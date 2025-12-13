const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    phone: {
        type: String,
        default: "Not Provided"
    },
    service: {
        type: String,
        default: "Not Selected"
    },
    message: {
        type: String,
        required: [true, 'Please add a message']
    },
    source: {
        type: String,
        default: "General"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);