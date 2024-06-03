import { Fragment, useRef } from "react";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturedDish from "../components/FeatureDish";
import PromotionalOffer from "../components/PromotionalOffer";
import Hero from "../components/Hero";

const Home = () => {
  
  const nextSectionRef = useRef(null);

  <Hero nextSectionRef={nextSectionRef} />
  return (
    <Fragment>
      <Hero />
      <div id="content-section" ref={nextSectionRef} className="flex flex-wrap items-center justify-center h-screen bg-stone-700 text-white ">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 ">
          <img
            src="../src/assets/home-img.jpg"
            alt="Food"
            className="w-full h-auto rounded-2xl   shadow-slate-900 shadow-2xl"
          />
        </div>

        {/* Right side: Food order page content */}
        <div className="w-full md:w-1/2 px-4 ">
          <h1 className="text-3xl md:text-5xl font-mono    font-bold mb-4 text-orange-500 ">
            Food Order Page
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Delicious Food Delivered to Your Doorstep
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            libero vitae lorem dapibus, ut convallis lectus ultrices.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>

      <FeaturedDish />
      <PromotionalOffer />
      <TestimonialsSection />
    </Fragment>
  );
};

export default Home;
