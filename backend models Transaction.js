const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    date: Date,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
