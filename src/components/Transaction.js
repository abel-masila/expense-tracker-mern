function Transaction({ transaction }) {
  return (
    <li className="minus" key={transaction.id}>
      {transaction.text} <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
