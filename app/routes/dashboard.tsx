import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { Chart } from "chart.js/auto";
import RecentTransactions from "../components/RecentTransactions"; // Import the component

// Type Definitions
type UserDetails = {
  username: string;
  balance: number; // Include balance in UserDetails
};

export default function Dashboard() {
  const navigate = useNavigate();
  const chartRef = useRef<Chart | null>(null);
  const [username, setUsername] = useState<string>("");
  const [balance, setBalance] = useState<number>(0.0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch("http://localhost:3000/user-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then((data: UserDetails) => {
          setUsername(data.username);
          setBalance(data.balance); // Set the balance from the response
        })
        .catch(() => {
          navigate("/login");
        });
    }
  }, [navigate]);

  useEffect(() => {
    const ctx = document.getElementById("financialChart") as HTMLCanvasElement;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Product 1",
            data: [65, 59, 80, 81, 56, 55],
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
          {
            label: "Product 2",
            data: [28, 48, 40, 19, 86, 27],
            borderColor: "rgba(153, 102, 255, 1)",
            fill: false,
          },
        ],
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hello, Welcome {username}</h1>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-blue-700 hover:underline">
              Profile
            </Link>
            <Link to="/logout" className="text-red-700 hover:underline">
              Logout
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <section className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl text-center font-bold mb-4">Balance</h2>
          <p className="text-3xl text-center font-bold text-gray-700">
            Ksh. {balance !== undefined ? balance.toFixed(2) : 'Loading...'}
          </p>
          <div className="flex justify-around mt-6 space-x-4">
            <Link to="/transfer-money">
              <button className="bg-blue-500 text-white py-2 px-4 rounded flex flex-col items-center">
                <i className="fas fa-exchange-alt text-3xl"></i>
                <span>Transfer Money</span>
              </button>
            </Link>
            <Link to="/loans">
              <button className="bg-green-500 text-white py-2 px-4 rounded flex flex-col items-center">
                <i className="fas fa-university text-3xl"></i>
                <span>Loans</span>
              </button>
            </Link>
            <Link to="/withdraw">
              <button className="bg-red-500 text-white py-2 px-4 rounded flex flex-col items-center">
                <i className="fas fa-money-bill-wave text-3xl"></i>
                <span>Withdraw</span>
              </button>
            </Link>
            <Link to="/cashing-in-cheque">
              <button className="bg-purple-500 text-white py-2 px-4 rounded flex flex-col items-center">
                <i className="fas fa-money-check-alt text-3xl"></i>
                <span>Cashing in Cheque</span>
              </button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <RecentTransactions /> {/* Use the component here */}

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Date Range</h2>
            <div className="flex items-center space-x-4">
              <input type="date" className="border p-2 rounded" />
              <span className="mx-2">to</span>
              <input type="date" className="border p-2 rounded" />
            </div>
            <Link to="/transactions">
              <button className="bg-black text-white py-2 px-4 rounded mt-4 w-full">
                View Transactions
              </button>
            </Link>
          </div>
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
          <div>
            <p className="text-2xl font-bold">5,987.34</p>
            <p className="text-gray-700">Secondary text</p>
            <div className="mt-4">
              <canvas id="financialChart"></canvas>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
