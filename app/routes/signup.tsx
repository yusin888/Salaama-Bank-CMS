// app/routes/signup.tsx

import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);
      navigate("/dashboard");
    } else {
      const errorText = await response.text();
      setError(errorText);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-300 transform -skew-y-6 origin-top-left"></div>
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        <Link to="/login" className="bg-white text-blue-700 py-2 px-4 rounded border border-blue-700 hover:bg-blue-700 hover:text-white">
          Log In
        </Link>
        <Link to="/" className="bg-white text-blue-700 py-2 px-4 rounded border border-blue-700 hover:bg-blue-700 hover:text-white">
          <img src="/images/home-icon.png" alt="home" className="h-6 w-6" />
        </Link>
      </div>
      <div className="relative z-20 bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up for Salaama Bank</h2>
        <p className="text-center mb-8">Quick & Simple way of Banking</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe"
              className="w-full px-3 py-2 border rounded"
              aria-label="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded"
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="w-full px-3 py-2 border rounded"
              aria-label="Password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center my-4">OR USE</div>
        <div className="flex justify-center space-x-4">
          <button className="p-2 bg-gray-100 rounded">
            <img src="/images/google-icon.png" alt="Google" className="h-6 w-6" />
          </button>
          <button className="p-2 bg-gray-100 rounded">
            <img src="/images/apple-icon.png" alt="Apple" className="h-6 w-6" />
          </button>
          <button className="p-2 bg-gray-100 rounded">
            <img src="/images/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center mt-8">
          <p>© 2021. - 2025 All Rights Reserved. Salaama Bank</p>
        </div>
      </div>
    </div>
  );
}
