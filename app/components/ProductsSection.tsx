// app/components/ProductsSection.tsx

export default function ProductsSection() {
    return (
      <section className="my-10">
        <h3 className="text-3xl font-bold mb-4">Our Products</h3>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product1.jpg" alt="Product 1" className="rounded shadow" />
              <h4 className="text-xl font-bold mt-2">Savings Account</h4>
              <p>1.5% interest rate</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product2.jpg" alt="Product 2" className="rounded shadow" />
              <h4 className="text-xl font-bold mt-2">Business Loan</h4>
              <p>Flexible repayment terms</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/product3.jpg" alt="Product 3" className="rounded shadow" />
              <h4 className="text-xl font-bold mt-2">Insurance Plans</h4>
              <p>Protect your future</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  