import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, amount, category: "General", date: new Date().toISOString() });
    window.location.reload();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default TransactionForm;
