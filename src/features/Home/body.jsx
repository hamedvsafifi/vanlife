import React from "react";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <section className="flex-1 relative bg-[url('/assets/backgrounds/bg1.png')] bg-no-repeat bg-cover bg-center  px-5 sm:px-10 md:px-20 text-white">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 flex flex-col text-left justify-center gap-10 h-full">
        <div className="lg:transform lg:translate-y-[-10%]">
          <h2 className="text-left lg:text-center pb-10 lg:leading-15 ">
            You got the travel plans, <br className="hidden lg:block " />
            we
            <br className="block lg:hidden " /> got the travel vans.
          </h2>
          <p className="text-left lg:text-center">
            Add adventure to your life by joining the #vanlife movement.
            <br className="block " /> Rent the perfect van to make your perfect
            road trip.
          </p>
        </div>
        <Link
          className="bg-primary cursor-pointer text-center w-full mx-auto lg:w-1/2 rounded-md py-2 lg:py-4"
          to="/vans"
        >
          find your van
        </Link>
      </div>
    </section>
  );
};

export default Body;
