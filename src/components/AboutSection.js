import React from "react";

function AboutSection() {
  return (
    <section className="px-5 py-20 bg-white mx-auto max-w-7xl" id="about">
      <div className="flex gap-5 max-md:flex-col max-md:flex-col-reverse">
        {/* Image Section (Grid 1) */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/4f9bfecaba77b3a13cc2377cd05440a8d8d37aad38dbf5c3ad1b05383ed9cf7e?apiKey=66f24bb10319401b926f00beb93fa44e&"
            alt="A showcase of modern furniture"
            className="object-contain grow w-full rounded-none aspect-[1.25] max-md:mt-10"
          />
        </div>

        {/* Text Section (Grid 2) */}
        <div className="flex flex-col ml-5 w-6/12 max-md:w-full">
          <div className="flex flex-col items-start lg:mt-12 w-full text-xl font-semibold text-zinc-800 max-md:mt-10">
            <h2 className="text-4xl leading-[52px] md:text-2xl lg:text-4xl">
              We Create Your Home More Aesthetic
            </h2>
            <p className="mt-3.5 leading-9 md:text-sm lg:text-lg">
              Furniture power is a software-as-a-service solution for
              multipurpose business management systems.
            </p>

            {/* Valuation Services */}
            <div className="flex gap-4 mt-9 leading-snug md:text-sm lg:text-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/009979264d98a1b7451464bfc812324d52adf446390c30e5bf3e5500e1a01f46?apiKey=66f24bb10319401b926f00beb93fa44e&"
                alt="Icon for Valuation Services"
                className="object-contain shrink-0 w-8 aspect-square"
              />
              <div>Valuation Services</div>
            </div>
            <p className="mt-2 ml-12 text-base leading-7">
              Features related to valuation services are detailed and
              customized.
            </p>

            {/* Development of Furniture Models */}
            <div className="flex gap-4 mt-6 leading-snug md:text-sm lg:text-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/009979264d98a1b7451464bfc812324d52adf446390c30e5bf3e5500e1a01f46?apiKey=66f24bb10319401b926f00beb93fa44e&"
                alt="Icon for Furniture Model Development"
                className="object-contain shrink-0 w-8 aspect-square"
              />
              <div>Development of Furniture Models</div>
            </div>
            <p className="mt-1.5 mr-4 ml-12 text-base leading-7">
              Custom-designed furniture models based on business needs and
              market trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
