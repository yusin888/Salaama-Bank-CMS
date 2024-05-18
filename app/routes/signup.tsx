// app/routes/signup.tsx

import { Link } from "@remix-run/react";

export default function SignUp() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-300 transform -skew-y-6 origin-top-left"></div>
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        <Link to="/login" className="bg-white text-blue-700 py-2 px-4 rounded border border-blue-700 hover:bg-blue-700 hover:text-white">
          Sign In
        </Link>
        <Link to="/" className="bg-white text-blue-700 py-2 px-4 rounded border border-blue-700 hover:bg-blue-700 hover:text-white">
            <img src="/images/home-icon.png" alt="home" className="h-6 w-6" />
        </Link>
      </div>
      <div className="relative z-20 bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up to Salaama Bank</h2>
        <p className="text-center mb-6">Quick & Simple way to Automate your payment</p>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full px-3 py-2 border rounded"
              aria-label="First Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full px-3 py-2 border rounded"
              aria-label="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              className="w-full px-3 py-2 border rounded"
              aria-label="Password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" aria-label="Agree to Terms" />
            <label htmlFor="terms" className="text-gray-700">I agree to the Terms of Service and Privacy Policy</label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            CREATE AN ACCOUNT
          </button>
        </form>
        <div className="text-center my-4">OR</div>
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
        <div className="text-center mt-4">
          <p>© 2021. - 2025 All Rights Reserved. Salaama Bank</p>
        </div>
      </div>
    </div>
  );
}
