import { useEffect, useState } from "react";
import { getTransactions, addTransaction } from "../services/api";
import TransactionItem from "../components/TransactionItem";
import TransactionForm from "../components/TransactionForm";
import "../styles/explorer.css";

function Explorer() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  return (
    <div className="explorer">
      <TransactionForm onAdd={addTransaction} />
      {transactions.length === 0 && <p>No transactions found</p>}
      {transactions.map((t) => (
        <TransactionItem key={t.id} data={t} />
      ))}
    </div>
  );
}

export default Explorer;
