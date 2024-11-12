import React from "react";

function Best() {
  return (
    <section className="px-5 py-20 bg-white mx-auto max-w-7xl">
      <div className="flex gap-5 max-md:flex-col max-md:flex-col-reverse">
        {/* Text Section (Grid 2) */}
        <div className="flex flex-col mt-20 ml-5 w-6/12 max-md:w-full ">
          <div className="flex flex-col items-start mt-2.5 w-full text-xl  font-semibold text-zinc-800 max-md:mt-10 ">
            <h2 className="text-4xl lg:mb-10 leading-[52px] md:text-3xl lg:text-4xl">
              The Best Furniture
              <br /> Manufacturer of your <br /> choice
            </h2>
            <p className="mt-3.5 leading-9 md:text-sm sm:text-sm lg:text-2xl">
              Furnitre power is a software as services for multiperpose business
              management system, expecially for them who are running two or more
              business exploree the future Furnitre power is a software as
              services .
            </p>
          </div>
        </div>
        {/* Image Section (Grid 1) */}
        <div className="flex flex-col md:mt-20 sm:y-20 lg:mt-0 w-6/12 max-md:w-full">
          <img
            loading="lazy"
            src="image.png"
            alt="A showcase of modern furniture"
            className="object-contain grow w-full rounded aspect-[1.25] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Best;
