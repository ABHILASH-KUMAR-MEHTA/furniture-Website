import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import AboutSection from "./AboutSection";
import NewInStore from "./NewInStore";
import Best from "./Best";
import ProductGrid from "./ProductGrid";
import Testimonial from "./Testimonial";
import DiscountSection from "./DiscountSection";
import Footer from "./Footer";
import ProductGrids from "./ProductGrids";
function FurnitureShop() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col items-center px-20 py-7 w-full min-h-[1000px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/b07caea36984eea657e78188db93cca33ff1c5f68c31391dd81d7e48f8fb5219?apiKey=66f24bb10319401b926f00beb93fa44e&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <Navbar />
        <Hero />
        <Stats />
      </div>
      <AboutSection />
      <NewInStore />
      <Best />
      <ProductGrid />
      <ProductGrids />
      <Testimonial />
      <DiscountSection />
      <Footer />
    </div>
  );
}

export default FurnitureShop;
