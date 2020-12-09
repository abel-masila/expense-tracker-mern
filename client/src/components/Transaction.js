import { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

import { numberWithCommas } from "./../utils/format";
function Transaction({ transaction }) {
  const { deleteTxn } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      key={transaction.id}
    >
      {transaction.text}{" "}
      <span>
        {sign}$ {numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button className="delete-btn" onClick={() => deleteTxn(transaction._id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
