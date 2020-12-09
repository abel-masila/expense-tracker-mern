const express = require("express");
const router = express.Router();

const {
  getTransactions,
  deleteTransaction,
  addTransaction,
} = require("./../controllers/transactions");

router.route("/").get(getTransactions);
router.route("/").post(addTransaction);
router.route("/:id").delete(deleteTransaction);

module.exports = router;
