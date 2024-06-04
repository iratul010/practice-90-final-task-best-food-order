 

const Services = () => {
  return (
    <section className="text-gray-700 body-font h-[calc(100vh-64px)] bg-gray-100">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">We offer a variety of services to make your food ordering experience convenient and enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-medium title-font text-gray-900 mb-4">Delivery Services</h2>
          <p className="leading-relaxed text-base">Get your favorite food delivered to your doorstep. We offer fast and reliable delivery options.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-medium title-font text-gray-900 mb-4">Pickup Services</h2>
          <p className="leading-relaxed text-base">Place an order for pickup at one of our convenient pickup locations. Skip the line and pick up your order hassle-free.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-medium title-font text-gray-900 mb-4">Catering Services</h2>
          <p className="leading-relaxed text-base">Hosting an event? Let us cater it for you! We offer a variety of catering options to suit your needs.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;
