const BASE_URL = "/api";

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// -------- TRANSACTIONS --------
export const getTransactions = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/transactions`, {
    headers: {
      Authorization: token,
    },
  });

  return res.json();
};

export const addTransaction = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteTransaction = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  return res.json();
};
