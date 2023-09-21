import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import YourFlight from "./YourFlight/YourFlight";

const FlightSchedule = () => {
  const [flightId, setFlightId] = useState("");

  return (
    <div className="bg-gray">
      <div className="your-info bg-white">
        <div className="container py-5">
          <div className="lg:flex items-center lg:justify-between">
            <div className="info sm:flex  sm:justify-center lg:justify-start lg:mb-0 mb-5">
              <div className="location  sm:flex text-center  items-center lg:justify-between justify-center sm:mb-0 mb-5">
                <div className="from sm:mb-0 mb-5">
                  <p className="pri-semi-base-text">Da Nang(DAD)</p>
                  <p className="regular-xs-text">Fri, 22 Mar, 2022</p>
                </div>
                <div className="transfer-btn ml-[59px] mr-[72.82px] sm:mb-0 mb-5 ">
                  <img
                    src="images/icons/gray-transfer.svg"
                    alt=""
                    className="w-[25.18px] h-[14px] cursor-pointer justify-between sm:mx-0 mx-auto"
                  />
                </div>
                <div className="to sm:mb-0 mb-5">
                  <p className="pri-semi-base-text">Ho Chi Minh (SGN)</p>
                  <p className="regular-xs-text">Fri, 22 Mar, 2022</p>
                </div>
              </div>
              <div className="information sm:flex text-center items-center lg:justify-between justify-center sm:ml-[94px] semi-sm-text">
                <p className="mr-[15px]">Round-trip</p>
                <div className="w-[1px] h-6 bg-black bg-opacity-10 mr-[15px]"></div>
                <p className="mr-[15px]">
                  <span className="text-primary">02</span> Adult,
                  <span className="text-primary">01</span> children
                </p>
                <div className="w-[1px] h-6 bg-black bg-opacity-10 mr-[15px]"></div>
                <p>Business Class</p>
              </div>
            </div>
            <div className="change-button flex justify-center">
              <button className="btn-orange flex items-center justify-between lg:ml-[149px] semi-sm-text">
                Change Flights
                <img
                  src="images/icons/search.svg"
                  className="w-[14px] h-[14px] ml-[10px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flight-content bg-gray mt-[15px]">
        <div className="container lg:flex ">
          <div className="flights mr-[10px] 2xl:min-w-[890px] min-w-0">
            <div className="filter flex items-center justify-end mb-[5px]">
              <p className="semi-xs-text opacity-50 mr-[14px] ">FILTER</p>
              <div className="drop-option rounded-xl flex items-center bg-white w-[120px] px-[15px] py-2 regular-xs-text cursor-pointer justify-between mr-[5px]">
                <p>Transit</p>
                <img
                  src="images/icons/dropdown.svg"
                  alt=""
                  className=" w-[8px] h-1"
                />
              </div>
              <div className="drop-option rounded-xl flex items-center bg-white w-[120px] px-[15px] py-2 regular-xs-text cursor-pointer justify-between mr-[5px]">
                <p>Time</p>
                <img
                  src="images/icons/dropdown.svg"
                  alt=""
                  className=" w-[8px] h-1"
                />
              </div>
              <div className="drop-option rounded-xl flex items-center bg-white w-[120px] px-[15px] py-2 regular-xs-text cursor-pointer justify-between mr-[5px]">
                <p>Airline</p>
                <img
                  src="images/icons/dropdown.svg"
                  alt=""
                  className="w-[8px] h-1"
                />
              </div>
              <div className="drop-option rounded-xl flex items-center bg-white w-[120px] px-[15px] py-2 regular-xs-text cursor-pointer justify-between">
                <p>Low Price</p>
                <img
                  src="images/icons/dropdown.svg"
                  alt=""
                  className=" w-[8px] h-1"
                />
              </div>
            </div>
            <div className="flight-list">
              <FlightItem setFlightId={setFlightId} />
            </div>
          </div>
          <YourFlight flightId={flightId} />
        </div>
      </div>
    </div>
  );
};

export default FlightSchedule;
