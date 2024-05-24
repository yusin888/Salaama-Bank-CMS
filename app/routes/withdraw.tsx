import { ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData, Form, useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";

type ActionData = {
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const amount = parseFloat(formData.get("amount") as string);
  const method = formData.get("method") as string;
  const agentNumber = formData.get("agentNumber") as string;
  const storeNumber = formData.get("storeNumber") as string;
  const token = formData.get("token") as string;

  if (isNaN(amount) || !token || !method || (method === "Mpesa" && (!agentNumber || !storeNumber))) {
    return json<ActionData>({ error: "Invalid form submission" }, { status: 400 });
  }

  try {
    const response = await fetch("http://localhost:3000/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount, method, agentNumber, storeNumber }),
    });

    if (response.ok) {
      return redirect("/dashboard");
    } else {
      const errorText = await response.text();
      return json<ActionData>({ error: errorText }, { status: response.status });
    }
  } catch (error) {
    return json<ActionData>({ error: "Internal server error" }, { status: 500 });
  }
};

export default function Withdraw() {
  const actionData = useActionData<ActionData>();
  const [amount, setAmount] = useState<string>("");
  const [withdrawalMethod, setWithdrawalMethod] = useState<string>("");
  const [agentNumber, setAgentNumber] = useState<string>("");
  const [storeNumber, setStoreNumber] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    if (storedToken) {
      fetch("http://localhost:3000/user-details", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setBalance(data.balance);
        })
        .catch(() => {
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (balance !== null && balance <= -5000) {
      e.preventDefault();
      alert("Your balance is too low to make a withdrawal");
    }
    if (!token) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Form method="post" onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Withdraw</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="method" className="block text-gray-700">Withdrawal Method</label>
          <select
            id="method"
            name="method"
            value={withdrawalMethod}
            onChange={(e) => setWithdrawalMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select method</option>
            <option value="ATM">ATM</option>
            <option value="Mpesa">M-Pesa Agent</option>
          </select>
        </div>
        {withdrawalMethod === "Mpesa" && (
          <>
            <div className="mb-4">
              <label htmlFor="agentNumber" className="block text-gray-700">Agent Number</label>
              <input
                type="text"
                id="agentNumber"
                name="agentNumber"
                value={agentNumber}
                onChange={(e) => setAgentNumber(e.target.value)}
                placeholder="Enter agent number"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="storeNumber" className="block text-gray-700">Store Number</label>
              <input
                type="text"
                id="storeNumber"
                name="storeNumber"
                value={storeNumber}
                onChange={(e) => setStoreNumber(e.target.value)}
                placeholder="Enter store number"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </>
        )}
        <input type="hidden" name="token" value={token || ""} />
        {actionData?.error && <p className="text-red-500 mb-4">{actionData.error}</p>}
        <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Withdraw</button>
      </Form>
    </div>
  );
}
