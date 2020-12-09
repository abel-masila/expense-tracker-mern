import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item, idx) => (
          <Transaction transaction={item} key={idx} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
