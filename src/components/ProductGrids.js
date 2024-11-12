import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard({ name, price, oldPrice, imageSrc }) {
  return (
    <div
      data-layername="card"
      className="flex flex-col items-start w-full text-zinc-800 max-md:mt-7 mx-2 gap-3 "
    >
      <div className="flex shrink-0 self-stretch bg-white rounded-2xl border border-solid aspect-square border-slate-2000 border-opacity-10 h-[300px] mx-5 shadow-lg">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full rounded-2xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3
        data-layername="theBestFurniturMa"
        className="mt-4 text-2xl font-semibold leading-tight lg:ml-16"
      >
        {name}
      </h3>
      <div className="flex gap-5 mt-2 leading-loose whitespace-nowrap lg:ml-20">
        <span data-layername="7500" className="text-base">
          ${price}
        </span>
        <span data-layername="8200" className="text-sm line-through">
          ${oldPrice}
        </span>
      </div>
    </div>
  );
}

function ProductGrids() {
  const products = [
    {
      name: "Ceiling Light",
      price: "75.00",
      oldPrice: "82.00",
      imageSrc: "image1.png",
    },
    {
      name: "Wood Chair",
      price: "50.00",
      oldPrice: "70.00",
      imageSrc: "image2.png",
    },
    {
      name: "Papper Cupboard",
      price: "105.00",
      oldPrice: "120.00",
      imageSrc: "image3.png",
    },
    {
      name: "Ole Gundorse",
      price: "82.00",
      oldPrice: "100.00",
      imageSrc: "image4.png",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 products per slide
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 3000, // Sets the speed for auto-slide (3000 ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 2 products per slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 products per slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 product per slide on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="mt-12 -mb-28 w-full flex flex-col items-center max-md:mt-10 max-md:max-w-full"
      id="features"
    >
      <div className="w-4/5 items-center max-w-[1241px] max-md:max-w-full">
        {/* First Row Slider */}
        <Slider {...sliderSettings} className="my-20 ">
          {products.slice(0 - 4).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProductGrids;
