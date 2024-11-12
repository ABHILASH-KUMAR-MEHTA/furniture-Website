import React from "react";

function Stats() {
  const stats = [
    { number: "7", text: "Year Experience" },
    { number: "2", text: "Opened in the country" },
    { number: "10k+", text: "Furniture sold" },
    { number: "260+", text: "Variant Furniture" },
  ];

  return (
    <section className="flex relative flex-col mt-20 w-4/5 max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center self-end px-2 mr-16 w-9 h-9 rounded-full border border-solid bg-zinc-300 bg-opacity-20 border-zinc-300 max-md:mr-2.5">
        <div className="flex shrink-0 w-full h-2.5 rounded-full bg-zinc-300" />
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-10 mt-24 w-full text-center text-white bg-teal-700 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 gap-5 md:flex md:justify-between w-full max-w-[1018px] max-md:grid-cols-2 max-md:gap-8 lg:mr-0 md:mr-28">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center ">
                <div
                  data-layername={stat.number}
                  className="text-4xl font-semibold leading-tight"
                >
                  {stat.number}
                </div>
                <div
                  data-layername={stat.text.toLowerCase().replace(/\s+/g, "")}
                  className="mt-1.5 text-xl tracking-wide leading-7"
                >
                  {stat.text}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block shrink-0 my-auto w-px border border-white border-solid h-[100px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
