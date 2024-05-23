import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

type Transaction = {
  id: number;
  amount: number;
  transactionDate: string;
};

type AccountStatement = {
  transactions: Transaction[];
};

const RecentTransactions = () => {
  const [latestTransaction, setLatestTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestTransaction = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not authenticated");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/account-statement", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data: AccountStatement = await response.json();
        const transactions = data.transactions || [];
        const latestTransaction = transactions.length > 0 ? transactions[transactions.length - 1] : null;
        setLatestTransaction(latestTransaction);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchLatestTransaction();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Recent Transaction</h2>
      <div className="space-y-4">
        {latestTransaction ? (
          <div className="flex items-center">
            <i className="fas fa-coins text-3xl mr-4"></i>
            <div>
              <p className="font-bold">Transaction ID: {latestTransaction.id}</p>
              <p>Amount: {latestTransaction.amount}</p>
              <p>Date: {new Date(latestTransaction.transactionDate).toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <p>No transactions available</p>
        )}
        <Link to="/transactions">
          <button className="bg-black text-white py-2 px-4 rounded mt-4 w-full">
            View Transactions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentTransactions;
