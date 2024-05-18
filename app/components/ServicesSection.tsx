// app/components/ServicesSection.tsx

export default function ServicesSection() {
    return (
      <section className="my-10">
        <h3 className="text-3xl font-bold mb-4">Our Services</h3>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/4 px-2 mb-4 text-center">
            <span className="text-4xl">💳</span>
            <h4 className="text-xl font-bold mt-2">Mobile Banking</h4>
            <p>Convenient and secure</p>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 text-center">
            <span className="text-4xl">💰</span>
            <h4 className="text-xl font-bold mt-2">Investment Plans</h4>
            <p>Grow your wealth</p>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 text-center">
            <span className="text-4xl">🏦</span>
            <h4 className="text-xl font-bold mt-2">Loan Solutions</h4>
            <p>Tailored to your needs</p>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4 text-center">
            <span className="text-4xl">🔒</span>
            <h4 className="text-xl font-bold mt-2">Insurance Coverage</h4>
            <p>Protect what matters</p>
          </div>
        </div>
      </section>
    );
  }
  