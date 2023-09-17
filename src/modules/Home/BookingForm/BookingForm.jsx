import React from "react";
const BookingForm = () => {
  return (
    <div className="container">
      <div className="bg-white  rounded-xl w-full mt-[137px] drop-shadow-[0_4px_30px_rgba(77, 70, 250, 0.1)]">
        <div className="options border-none flex p-[30px] semibold text-sm items-center leading-lg">
          <div className="option flex mr-5">
            <div className="h-6 w-6 bg-gray rounded-full mr-[6px]"></div>
            <p>One way / Round-trip</p>
          </div>
          <div className="option flex mr-[50px]">
            <div className="h-6 w-6 bg-gray rounded-full mr-[6px] border-[6px] border-primary"></div>
            <p>Multi-city</p>
          </div>
          <div className="option flex mr-5 items-center">
            <p className="mr-[5px]">
              <span className="text-primary">02</span> Adult,
              <span className="text-primary">01</span> children
            </p>
            <img src="images/icons/dropdown.svg" alt="" />
          </div>
          <div className="option flex mr-[50px] items-center">
            <p className="mr-[5px]">Business Class</p>
            <img src="images/icons/dropdown.svg" alt="" />
          </div>
        </div>
        <div className="pickers flex mx-[30px]">
          <div className="from-box px-5 py-[15px] border-[1px] semibold">
            <p className="text-secondary leading-xs ">FROM</p>
            <h1>Da Nang</h1>
            <p>Quang Nam, Viet Nam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
