// app/components/NewsSection.tsx

export default function NewsSection() {
    return (
      <section className="my-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">Latest News</h3>
          <p className="text-lg text-gray-600 mb-4">Stay updated with our latest news and updates</p>
          <button className="bg-black text-white py-2 px-4 rounded">Read More</button>
        </div>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white rounded shadow flex">
              <div className="w-1/3 bg-gray-200 h-32"></div>
              <div className="w-2/3 pl-4 py-4">
                <h4 className="text-xl font-bold">New Branch Opening</h4>
                <p>Join us at our new branch in the city center</p>
                <p className="mt-2">Exciting news for our customers!</p>
                <div className="flex items-center mt-4 space-x-2">
                  <span className="px-2 py-1 bg-gray-300 rounded text-sm">Event</span>
                  <span className="px-2 py-1 bg-gray-300 rounded text-sm">Banking</span>
                </div>
                <p className="mt-4 text-gray-500">Salaam Bank Team</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white rounded shadow flex">
              <div className="w-1/3 bg-gray-200 h-32"></div>
              <div className="w-2/3 pl-4 py-4">
                <h4 className="text-xl font-bold">Financial Literacy Workshop</h4>
                <p>Empowering communities through financial education</p>
                <div className="flex items-center mt-4 space-x-2">
                  <span className="px-2 py-1 bg-gray-300 rounded text-sm">Workshop</span>
                </div>
                <p className="mt-4 text-gray-500">Financial Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  