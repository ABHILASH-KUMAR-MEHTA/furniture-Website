import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewInStore() {
  const categories = [
    {
      name: "Chair",
      image:
        "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/a1d12a6398dd61301ba1e5269750c232c5612a86494b0dbb6c589f26140f23f0?apiKey=66f24bb10319401b926f00beb93fa44e&",
    },
    {
      name: "Bed",
      image:
        "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/716f07faea2a8ee4efd7c7756b74930a2cabea93bc96ff2b1ca046295781f8a2?apiKey=66f24bb10319401b926f00beb93fa44e&",
    },
    {
      name: "Cupboard",
      image:
        "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/37c7015046dad19363bbd94d9f3ae9ea6e29e0f207c2ccb1e9a0b783408d44c2?apiKey=66f24bb10319401b926f00beb93fa44e&",
    },
    {
      name: "Lighting",
      image:
        "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/c7b7b76eca13b7566a6e671da1eb436f094f9b2cef16dcde2521bd5f648d8711?apiKey=66f24bb10319401b926f00beb93fa44e&",
    },
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 categories at once
    slidesToScroll: 1, // Scroll one set of 4 at a time
    autoplay: true,
    autoplaySpeed: 2000, // Auto slide every 10 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 categories per slide on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 1 category per slide on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1, // Show 1 category per slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="mt-16 w-full max-w-[1340px] mx-auto max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Section */}
        <div
          data-layername="column"
          className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col items-start self-stretch my-auto w-full text-base text-zinc-800 max-md:mt-10 px-5">
            <h2
              data-layername="newInStoreNow"
              className="text-4xl font-semibold leading-[52px] md:text-2xl lg:text-4xl"
            >
              New In Store Now
            </h2>
            <p
              data-layername="getTheLatestItemsImmediatelyWithPromoPrices"
              className="self-stretch mt-10 tracking-normal leading-7 max-md:mt-10  "
            >
              Get the latest items immediately with promo prices
            </p>
            <a
              href="#check-all"
              className="flex gap-2.5 items-center mt-8 font-medium tracking-normal leading-relaxed max-md:mt-10"
            >
              <span data-layername="checkAll" className="self-stretch my-auto">
                Check All{" "}
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/e14a50c2949451e37caa9aca6cd618a60db2766a1c0e02695d3a9b57b32d1019?apiKey=66f24bb10319401b926f00beb93fa44e&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.57] w-[22px]"
              />
            </a>
          </div>
        </div>

        {/* Right Carousel Slider */}
        <div
          data-layername="column"
          className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full"
        >
          <div className="relative w-full max-md:mt-10 md-mr-10">
            {/* Carousel Slider */}
            <Slider ref={sliderRef} {...sliderSettings}>
              {categories.map((category, index) => (
                <div key={index} className="relative flex flex-col p-5">
                  <div className="relative flex flex-col grow px-16 pt-80 pb-5 text-3xl font-semibold tracking-wide leading-relaxed text-white whitespace-nowrap rounded-md aspect-[0.662] max-md:px-5 max-md:pt-24 max-md:mt-5 md:mr-10 lg:mr-0">
                    <img
                      loading="lazy"
                      src={category.image}
                      alt={`${category.name} category`}
                      className="object-cover absolute inset-0 w-full h-full rounded-md lg:object-scale-down "
                    />
                    <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black text-white rounded-md">
                      {category.name}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full z-10"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full z-10 md:mr-10 lg:mr-0"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewInStore;
