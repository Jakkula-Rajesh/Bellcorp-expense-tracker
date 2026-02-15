import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTransactions().then((data) => {
      const sum = data.reduce((acc, t) => acc + t.amount, 0);
      setTotal(sum);
    });
  }, []);

  return (
    <div className="dashboard">
      <h2>Total Expenses</h2>
      <p>₹ {total}</p>
    </div>
  );
}

export default Dashboard;
