// app/routes/dashboard.tsx

import { useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import { Chart } from "chart.js/auto";

export default function Dashboard() {
  const chartRef = useRef<Chart | null>(null);

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
          <h1 className="text-2xl font-bold">Hello, Welcome Ali</h1>
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
            Ksh. 200,000.00
          </p>
          <div className="flex justify-around mt-6 space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded flex flex-col items-center">
              <i className="fas fa-exchange-alt text-3xl"></i>
              <span>Transfer Money</span>
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded flex flex-col items-center">
              <i className="fas fa-university text-3xl"></i>
              <span>Loans</span>
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded flex flex-col items-center">
              <i className="fas fa-money-bill-wave text-3xl"></i>
              <span>Withdraw</span>
            </button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded flex flex-col items-center">
              <i className="fas fa-money-check-alt text-3xl"></i>
              <span>Cashing in Cheque</span>
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-coins text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Transaction ID: 1234</p>
                  <p>Amount: $50</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-coins text-3xl mr-4"></i>
                <div>
                  <p className="font-bold">Transaction ID: 5678</p>
                  <p>Amount: $100</p>
                </div>
              </div>
              <Link to="/transactions">
                <button className="bg-black text-white py-2 px-4 rounded mt-4 w-full">
                  View Transactions
                </button>
              </Link>
            </div>
          </div>

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
