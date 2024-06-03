 

const FeaturedDish = () => {
  return (
    <div className="py-12 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Dish Item */}
          <div className="bg-gray-100 p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src="../src/assets/item-img/item-1.jpg" alt="Featured Dish 1" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Featured Dish 1</h3>
            <p className="text-lg mb-4">A delicious description of featured dish 1.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Order Now</button>
          </div>
          {/* Repeat for other featured dishes */}
          <div className="bg-gray-100 p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src="../src/assets/item-img/item-2.jpg" alt="Featured Dish 2" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Featured Dish 2</h3>
            <p className="text-lg mb-4">A delicious description of featured dish 2.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Order Now</button>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src="../src/assets/item-img/item-3.jpg" alt="Featured Dish 3" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Featured Dish 3</h3>
            <p className="text-lg mb-4">A delicious description of featured dish 3.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;
