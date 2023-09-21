import React, { useEffect, useState } from "react";
import { MdFlight } from "react-icons/md";
import flightsData from "../../../data/flights.json";
const YourFlight = ({ flightId }) => {
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState([]);
  const [isToggleFlight, setToggleFlight] = useState(
    window.matchMedia("max-width: 1024px").matches
  );
  useEffect(() => {
    setFlights(flightsData);
    setFlight(flights.filter((flight) => flight.id === flightId));
    console.log(flight);
  }, [flightId]);
  return (
    <>
      {flight?.map((flight) => (
        <div
          key={flight.id}
          className={`${
            isToggleFlight ? "block" : "hidden lg:block"
          } your-flight lg:bg-gray bg-gray 2xl:min-w-[270px] lg:w-auto lg:h-auto h-[433px]  rounded-xl lg:static fixed top-1/2 right-0  lg:translate-y-0  -translate-y-1/2  z-20 lg:shadow-none shadow-2xl`}
        >
          <div className="your-flight-header rounded-t-xl bg-white p-[15px]">
            <h3 className="black-title">YOUR FLIGHT</h3>
          </div>
          <hr className="text-black opacity-10" />

          <div className="your-flight-body p-[15px] bg-white">
            <div className="date flex mb-[15px]">
              <div className="avatar mr-3">01</div>
              <div className="text">
                <p className="regular-sm-text">Fri, 11 Feb, 2022</p>
                <p className="semi-sm-text ">Da Nang - Ho Chi Minh</p>
              </div>
            </div>
            <div className="airline mb-[10px] flex">
              <img
                src={flight.avatar}
                width={30}
                height={30}
                className="mr-3"
                alt=""
              />
              <div className="airline-info">
                <h3 className="black-title">{flight.name}</h3>
                <a
                  className="text-primary underline semibold leading-xs text-xs"
                  href="/"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="arrive-time flex text-center mb-5">
              <div className="from text-center mr-5">
                <p className="semi-sm-text">21:40</p>
                <div className="esquire">DAD</div>
              </div>
              <div className="time-range text-center mr-5">
                <p className="regular-sm-text">1h 30m</p>
                <img
                  src="images/icons/line.svg"
                  width={120}
                  height={7}
                  alt=""
                />
                <span className="regular-xs-text">Direct</span>
              </div>
              <div className="to text-center">
                <p className="semi-sm-text">23:10</p>
                <p className="esquire">DAD</p>
              </div>
            </div>
            <button className="btn-opacity-primary w-full mb-[15px]">
              Change departure flight
            </button>
            <hr className="text-black opacity-10" />
          </div>
          <div className="your-flight-footer bg-white p-[15px]">
            <div className="date flex mb-[15px]">
              <div className="avatar-active mr-3">02</div>
              <div className="text">
                <p className="regular-sm-text">Fri, 11 Feb, 2022</p>
                <p className="semi-sm-text">Da Nang - Ho Chi Minh</p>
              </div>
            </div>
          </div>
          <div className="subTotal p-[15px] bg-[#f8f8f8] rounded-b-xl">
            <p className="light-sm-text">Subtotal</p>
            <p className="price">1.322.000 vnd</p>
          </div>
          <button
            onClick={() => setToggleFlight(!isToggleFlight)}
            className="text-4xl text-white bg-primary rounded-full cursor-pointer p-3 lg:hidden  lg:static fixed bottom-2 right-3  lg:translate-y-0  -translate-y-1/2 z-20"
          >
            <MdFlight />
          </button>
        </div>
      ))}
    </>
  );
};

export default YourFlight;
