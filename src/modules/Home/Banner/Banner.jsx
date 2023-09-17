import React from "react";
import BookingForm from "../BookingForm";
const Banner = () => {
  return (
    <section className="relative">
      <div className="bg-[url('/public/images/banner.jpg')] bg-no-repeat bg-cover bg-center lg:h-[803px] sm:h-[700px] relative">
        <div className="hero-text container pt-[156.42px] sm:text-[72px] text-[50px] sm:leading-4xl leading-1 light px-4">
          <h1>Hello!</h1>
          <h1>Where are</h1>
          <h1>
            you <span className="text-primary">flying</span> to ...
          </h1>
        </div>
        <BookingForm />
      </div>
    </section>
  );
};

export default Banner;
