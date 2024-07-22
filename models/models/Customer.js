const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    address: String,
    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }],
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
