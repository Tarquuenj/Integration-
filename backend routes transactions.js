const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ message: 'Unauthorized' });
    const transactions = await Transaction.find({ userId: req.session.userId });
    res.json(transactions);
});

module.exports = router;
