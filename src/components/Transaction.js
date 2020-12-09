import { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
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
        {sign}$ {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTxn(transaction.id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
