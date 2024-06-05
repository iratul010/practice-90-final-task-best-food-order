 

 
 
const Hero = ( ) => {
  
  const handleGetStarted = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="h-[100vh] bg-black bg-cover bg-center flex items-center justify-center relative"
      style={{ 
        backgroundImage: "url('../src/assets/hero.jpg')",
      }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
      >
        <div className="bg-stone-200 p-10 bg-opacity-90 max-w-md text-center rounded-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl" style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 90%, 65% 90%, 90% 100%, 90% 90%, 0% 90%)",
        }}>
          <h1 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">Welcome to Food Order</h1>
          <p className="text-lg lg:text-xl text-stone-800 mb-8">
            Delicious food delivered to your doorstep.
          </p>
          <button onClick={handleGetStarted} className="btn border-none bg-orange-600 hover:bg-orange-500 text-white">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
