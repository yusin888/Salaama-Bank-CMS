// app/components/Header.tsx

import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Salaam Micro Finance Bank</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-700">Services</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-700">About Us</Link>
          <input
            type="text"
            placeholder="Search in site"
            className="border rounded px-2 py-1"
          />
          <button className="ml-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800">
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}
