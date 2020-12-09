const Transaction = require("./../models/Transactions");

// @desc GET all transactions
// @route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add  transaction
// @route POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
  res.send("POST Txns");
};

// @desc DELETE  transaction
// @route DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE Txns");
};
