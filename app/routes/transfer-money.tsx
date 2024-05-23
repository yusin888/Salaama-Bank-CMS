import { ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData, Form, useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";

type ActionData = {
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const amount = parseFloat(formData.get("amount") as string);
  const recipientUsername = formData.get("recipientUsername") as string;
  const token = formData.get("token") as string;

  if (isNaN(amount) || !token || !recipientUsername) {
    return json<ActionData>({ error: "Invalid form submission" }, { status: 400 });
  }

  try {
    const response = await fetch("http://localhost:3000/transfer-funds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount, recipientUsername }),
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

export default function TransferFund() {
  const actionData = useActionData<ActionData>();
  const [amount, setAmount] = useState<string>("");
  const [recipientUsername, setRecipientUsername] = useState<string>("");
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
      alert("Your balance is too low to make a transfer");
    }
    if (!token) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Form method="post" onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Transfer Money</h2>
        <div className="mb-4">
          <label htmlFor="recipientUsername" className="block text-gray-700">Recipient Username</label>
          <input
            type="text"
            id="recipientUsername"
            name="recipientUsername"
            value={recipientUsername}
            onChange={(e) => setRecipientUsername(e.target.value)}
            placeholder="Enter recipient's username"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
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
        <input type="hidden" name="token" value={token || ""} />
        {actionData?.error && <p className="text-red-500 mb-4">{actionData.error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Transfer</button>
      </Form>
    </div>
  );
}
