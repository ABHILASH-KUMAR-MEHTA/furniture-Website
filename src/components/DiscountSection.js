import React from 'react';

function DiscountSection() {
  return (
    <section className="flex relative flex-col justify-center items-end px-20 py-32 mt-14 w-full leading-none min-h-[490px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/0cdd43d4332cecb09aca1ae5273ad6a4c28fc9e76e502b9b788d5fe936045dde?apiKey=66f24bb10319401b926f00beb93fa44e&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col items-start -mb-7 max-w-full w-[558px] max-md:mb-2.5">
        <h2 data-layername="getMoreDiscountOffYourOrder" className="text-4xl font-semibold text-white leading-[54px]">
          Get more discount <br /> Off your order
        </h2>
        <p data-layername="furnitrePowerIsA" className="mt-5 text-xl text-white">
          Join our mailing list
        </p>
        <form className="flex flex-wrap gap-6 self-stretch mt-10 max-md:max-w-full">
          <label htmlFor="email" className="sr-only">Your email address</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="grow px-6 py-6 text-base bg-white rounded-lg text-zinc-800 w-fit max-md:px-5"
            required
          />
          <button
            type="submit"
            className="px-7 py-5 text-xl font-semibold text-white rounded-lg bg-zinc-800 max-md:px-5"
          >
            Shop Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default DiscountSection;