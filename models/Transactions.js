const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    trim: true,
    required: [true, "Please add a positive or negative number"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Transaction", TransactionSchema);
