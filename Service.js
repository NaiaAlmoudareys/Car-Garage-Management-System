const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now },
    cost: { type: Number, required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
