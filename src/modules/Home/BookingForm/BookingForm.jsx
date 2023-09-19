import React from "react";
const BookingForm = () => {
  return (
    <div className="container">
      <div className="form relative bg-white px-[30px] pt-[30px] pb-[50px] rounded-xl w-full mt-[137px] drop-shadow-[0_4px_30px_rgba(77,70,250,0.1)] xl:h-[224px]">
        <div className="options mb-5 border-none lg:flex semi-sm-text items-center ">
          <div className="round-trip sm:flex">
            <div className="option flex mr-5">
              <div className="h-6 w-6 sm:mb-0 mb-4 bg-gray rounded-full mr-[6px]"></div>
              <p>One way / Round-trip</p>
            </div>
            <div className="option flex mr-[50px] sm:mb-0 mb-4">
              <div className="h-6 w-6 bg-gray rounded-full mr-[6px] border-[6px] border-primary"></div>
              <p>Multi-city</p>
            </div>
          </div>
          <div className="drop-options sm:flex lg:mt-0 mt-4">
            <div className="option flex mr-5 items-center sm:mb-0 mb-4">
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
        </div>
        <div className="pickers xl:flex">
          <div className="location xl:mb-0 mb-4 relative md:flex   items-center mr-5 ">
            <div className="form-box1 px-5 py-[15px] border border-black border-opacity-10  w-[250px] sm:w-[300px] mr-5 hover:border-primary hover:border-2 rounded-xl peer/first md:mb-0 mb-5">
              <p className="text-black  semi-xs-text tracking-widest opacity-50">
                FROM
              </p>
              <h1 className="semi-lg-text sm:text-2xl text-primary">Da Nang</h1>
              <p className="semibold text-xs leading-lg">Quang Nam, Viet Nam</p>
            </div>
            <div
              className="half-circle-left md:block hidden absolute left-[273px] h-[70px] w-10 bg-white border border-black border-opacity-10 border-r-0 
            rounded-tl-full rounded-bl-full z-10 peer-hover/first:border-2 peer-hover/first:border-primary"
            ></div>
            <div className="rectangle md:block hidden absolute h-full w-5 left-[300px] z-20 bg-white"></div>
            <img
              src="images/icons/transfer.svg"
              className="absolute md:w-[25.18px] md:h-[14px] w-16 md:left-[299px] sm:left-[267px] left-[166px] md:top-[46px] top-[92px] bg-white p-4 md:border-none border border-black border-opacity-10 rounded-full   md:p-0  cursor-pointer z-30 md:rotate-0 rotate-90"
              alt="transfer"
            />
            <div className="form-box2 from-box md:px-[40px] px-5 py-[15px] border   border-black border-opacity-10  w-[250px] sm:w-[300px] hover:border-primary hover:border-2 rounded-xl peer/second">
              <p className="text-black  semi-xs-text tracking-widest opacity-50">
                TO
              </p>
              <h1 className="semi-lg-text sm:text-2xl text-primary">
                Ho Chi Minh
              </h1>
              <p className="text-xs leading-lg">Viet Nam</p>
            </div>
            <div
              className="half-circle-right md:block hidden absolute left-[307px] h-[70px] w-10 bg-white border border-black border-opacity-10 border-l-0 
            rounded-tr-full rounded-br-full z-10 peer-hover/second:border-2 peer-hover/second:border-primary"
            ></div>
          </div>
          <div className="date md:w-[530px] sm:w-[300px] w-[250px] xl:mb-0 mb-4 border border-black rounded-xl border-opacity-10 px-5 py-[15px]  md:flex">
            <div className="departure mr-[61px] md:mb-0 mb-5 ">
              <p className="text-black  semi-xs-text tracking-widest opacity-50 ">
                DEPARTURE
              </p>
              <h1 className=" sm:text-2xl text-primary semi-lg-text flex items-center">
                Fri, 22 Mar, 2022
                <img
                  src="images/icons/calendar.svg"
                  className="ml-[10px]"
                  alt=""
                />
              </h1>
              <div className="navigate flex ">
                <p className="semi-sm-text opacity-40 mr-[19px]">Prev</p>
                <p className="semi-sm-text opacity-40">Next</p>
              </div>
            </div>
            <div className="return">
              <p className="text-black semi-xs-text tracking-widest opacity-50 ">
                RETURN
              </p>
              <h1 className="semi-lg-text sm:text-2xl text-primary flex items-center">
                Fri, 22 Mar, 2022
                <img
                  src="images/icons/calendar.svg"
                  className="ml-[10px]"
                  alt=""
                />
              </h1>
              <div className="navigate flex ">
                <p className="semi-sm-text opacity-40 mr-[19px]">Prev</p>
                <p className="semi-sm-text opacity-40">Next</p>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-button right-[30px] top-[194px] xl:absolute">
          <button className="btn1 flex items-center semibold text-sm sm:text-lg leading-2xl px-5 py-5 ">
            Search Flights
            <img
              src="images/icons/long-arrow.svg"
              width={22}
              height={12}
              className=" ml-4 sm:ml-[62px]"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
