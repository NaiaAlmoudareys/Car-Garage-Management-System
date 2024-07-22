const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
