const Footer = () => {
  return (
    <footer className="  py-4 bg-stone-500" >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-2 md:mb-0 text-gray-300">© 2024 Food Delivery. All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-center">
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm">Terms of Service</a>
          <span className="text-gray-300">&bull;</span>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm">Privacy Policy</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
