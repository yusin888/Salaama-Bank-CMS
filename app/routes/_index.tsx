// app/routes/index.tsx

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import ProductsSection from "../components/ProductsSection";
import NewsSection from "../components/NewsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100 ">

        <main className="container mx-auto px-4 py-6">
          <Header />
          <WelcomeSection />
          <ProductsSection />
          <NewsSection />
          <TestimonialsSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
