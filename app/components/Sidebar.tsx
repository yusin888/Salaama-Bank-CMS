// app/components/Sidebar.tsx

import { Link } from "@remix-run/react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Salaam Micro Finance Bank</h2>
        <nav className="space-y-2">
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
          <Link to="/services" className="block py-2 px-4 rounded hover:bg-gray-700">Services</Link>
          <Link to="/about-us" className="block py-2 px-4 rounded hover:bg-gray-700">About Us</Link>
          <input
            type="text"
            placeholder="Search in site"
            className="block w-full mt-4 border rounded px-2 py-1 text-black"
          />
        </nav>
      </div>
    </aside>
  );
}
