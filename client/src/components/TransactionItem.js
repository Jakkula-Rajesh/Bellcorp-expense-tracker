function TransactionItem({ data }) {
  return (
    <div className="transaction-item">
      <p>{data.title}</p>
      <p>₹ {data.amount}</p>
    </div>
  );
}

export default TransactionItem;
