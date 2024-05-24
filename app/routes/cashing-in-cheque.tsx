import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function CashingInCheque() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>("");
  const [chequeNumber, setChequeNumber] = useState<string>("");
  const [senderUsername, setSenderUsername] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/cash-in-cheque", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: parseFloat(amount), chequeNumber, senderUsername }),
    });

    if (response.ok) {
      navigate("/dashboard");
    } else {
      const errorText = await response.text();
      setError(errorText);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Cashing in Cheque</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="chequeNumber" className="block text-gray-700">Cheque Number</label>
          <input
            type="text"
            id="chequeNumber"
            value={chequeNumber}
            onChange={(e) => setChequeNumber(e.target.value)}
            placeholder="Enter cheque number"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="senderUsername" className="block text-gray-700">Sender Username</label>
          <input
            type="text"
            id="senderUsername"
            value={senderUsername}
            onChange={(e) => setSenderUsername(e.target.value)}
            placeholder="Enter sender's username"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">Cash in Cheque</button>
      </form>
    </div>
  );
}
