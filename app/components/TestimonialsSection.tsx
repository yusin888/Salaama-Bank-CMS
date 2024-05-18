// app/components/TestimonialsSection.tsx

export default function TestimonialsSection() {
    return (
      <section className="my-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">Customer Testimonials</h3>
          <p className="text-lg text-gray-600 mb-4">See what our customers are saying about us</p>
          <button className="bg-black text-white py-2 px-4 rounded">Write a Review</button>
        </div>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white rounded shadow flex">
              <div className="w-1/3 bg-gray-200 h-32 flex items-center justify-center">
                <p className="text-xl font-bold">John Smith</p>
              </div>
              <div className="w-2/3 pl-4 py-4">
                <p className="italic">&quot;Great experience with Salaam Bank, highly recommended&quot;</p>
                <p className="mt-4 text-gray-500">John Smith</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white rounded shadow flex">
              <div className="w-1/3 bg-gray-200 h-32 flex items-center justify-center">
                <p className="text-xl font-bold">Emily Davis</p>
              </div>
              <div className="w-2/3 pl-4 py-4">
                <p className="italic">&quot;Excellent customer service and fast loan approval process&quot;</p>
                <p className="mt-4 text-gray-500">Emily Davis</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white rounded shadow flex">
              <div className="w-1/3 bg-gray-200 h-32 flex items-center justify-center">
                <p className="text-xl font-bold">Mark Johnson</p>
              </div>
              <div className="w-2/3 pl-4 py-4">
                <p className="italic">&quot;Trustworthy financial partner, always there to help&quot;</p>
                <p className="mt-4 text-gray-500">Mark Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  