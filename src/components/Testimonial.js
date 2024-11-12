import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const carouselImages = [
    "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/f8653ed485085d8fb9a36e373ccab692b493c57b5cec0b566f50dc7edbb70bbb?apiKey=66f24bb10319401b926f00beb93fa44e&",
    "https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/f8653ed485085d8fb9a36e373ccab692b493c57b5cec0b566f50dc7edbb70bbb?apiKey=66f24bb10319401b926f00beb93fa44e&", // Add more URLs as needed
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-20 bottom-4 z-10 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white transition-transform transform hover:scale-110"
        aria-label="Next slide"
      >
        ➔
      </button>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 bottom-4 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-transform transform hover:scale-110"
        aria-label="Previous slide"
      >
        ←
      </button>
    );
  }

  return (
    <section className="self-center mt-36 w-4/5 max-w-[1249px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Column: Testimonial Text and Profile */}
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start pl-2.5 w-full max-md:max-w-full">
              <h2 className="self-stretch text-4xl font-semibold leading-tight max-md:max-w-full">
                What people are saying about us
              </h2>
              <div className="flex gap-5 mt-9 leading-none">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/5753ae6c51176dd0b03db11e71b3d2b8860d0a1099367b6b264da81f13bec27c?apiKey=66f24bb10319401b926f00beb93fa44e&"
                  alt="Josh Smith"
                  className="object-cover shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full" // Set fixed width/height for profile image
                />
                <div className="flex flex-col my-auto">
                  <div className="text-xl font-semibold">Josh Smith</div>
                  <div className="mt-3 text-sm">
                    Manager of The New York Times
                  </div>
                </div>
              </div>
              <blockquote className="mt-7 text-xl leading-9 max-md:max-w-full">
                "They have a perfect touch for making something so professional,
                interesting and useful for a lot of people."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <img
                key={index}
                loading="lazy"
                src={image}
                alt={`Showcase ${index + 1}`}
                className="object-contain w-full h-[300px] md:h-[350px] rounded-md max-md:h-auto max-md:mt-10" // Adjusted max height for carousel images
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
