import React from "react";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <section className="flex flex-col flex-1 gap-25 text-black">
      <img
        src="/assets/backgrounds/bg2.png"
        className="min-w-full object-cover h-[300px] lg:h-[400px] "
        loading="lazy"
      />
      <div className="flex flex-col text-left justify-center px-5 sm:px-10 md:px-20 gap-10 md:gap-15 ">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div className="flex flex-col gap-10">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <ExploreBox />
      </div>
    </section>
  );
};

function ExploreBox() {
  return (
    <section className="flex flex-col justify-start lg:justify-center gap-10 bg-[rgba(255,204,141,1)] p-10 md:p-15 rounded-md mb-25">
      <h3 className="text-left lg:text-center">
        Your destination is waiting.
        <br className="block lg:hidden" /> Your van is ready.
      </h3>

      <Link
        to="/vans"
        className="secondary-btn text-center max-w-40 md:max-w-60 md:mx-auto"
      >
        Explore our vans
      </Link>
    </section>
  );
}

export default Body;
