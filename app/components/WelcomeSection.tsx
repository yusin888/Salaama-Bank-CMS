// app/components/WelcomeSection.tsx

export default function WelcomeSection() {
    return (
      <section className="text-center my-10 bg-blue-200 py-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to Salaam Micro Finance Bank</h2>
        <p className="text-xl text-gray-600 mb-6">Empowering Financial Inclusion</p>
        <input
          type="text"
          placeholder="Search for products or services"
          className="border rounded w-full md:w-1/2 px-4 py-2"
        />
        <button className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Get Started</button>
      </section>
    );
  }
  