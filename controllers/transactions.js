// @desc GET all transactions
// @route GET /api/v1/transactions
exports.getTransactions = (req, res, next) => {
  res.send("GET Txns");
};

// @desc Add  transaction
// @route POST /api/v1/transactions
exports.addTransaction = (req, res, next) => {
  res.send("POST Txns");
};

// @desc DELETE  transaction
// @route DELETE /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE Txns");
};
