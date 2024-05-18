// app/components/Footer.tsx

import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2022 Salaam Micro Finance Bank. All rights reserved.</p>
        <div className="space-x-4 mt-4">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
