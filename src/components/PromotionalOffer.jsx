import React from 'react';

const PromotionalOffer = () => {
  return (
    <div className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Promotional Offers</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Promotional Offer Item 1 */}
          <div className="bg-white p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Offer 1</h3>
              <p className="text-lg mb-4">Description of promotional offer 1.</p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Claim Offer</button>
          </div>
          {/* Promotional Offer Item 2 */}
          <div className="bg-white p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Offer 2</h3>
              <p className="text-lg mb-4">Description of promotional offer 2.</p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Claim Offer</button>
          </div>
          {/* Promotional Offer Item 3 */}
          <div className="bg-white p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Offer 3</h3>
              <p className="text-lg mb-4">Description of promotional offer 3.</p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Claim Offer</button>
          </div>
          {/* Promotional Offer Item 4 */}
          <div className="bg-white p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Offer 4</h3>
              <p className="text-lg mb-4">Description of promotional offer 4.</p>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Claim Offer</button>
          </div>
          {/* Repeat for more promotional offer items */}
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffer;
