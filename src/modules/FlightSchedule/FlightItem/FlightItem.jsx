import React, { useEffect, useState } from "react";
import flightsData from "../../../data/flights.json";

const FlightItem = ({ setFlightId }) => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    const data = flightsData;
    setFlights(data);
  }, []);
  const [toggleTab, setToggleTab] = useState();

  function onToggleTab(index) {
    setToggleTab(index);
  }
  const onChooseFlight = (id) => {
    setFlightId(id);
  };
  return (
    <>
      {flights.map((flight) => (
        <div
          className="flight-item bg-white px-[15px] py-[23px] mb-[10px]"
          key={flight.id}
        >
          <div className="header md:flex md:flex-row sm:grid sm:grid-cols-2 grid-cols-1 md:gap-0 gap-5 flex flex-col justify-center  items-center mb-[26px]">
            <div className="airline-name flex md:mr-10 mr-0">
              <img
                src={flight.avatar}
                width={30}
                height={30}
                className="mr-3"
                alt=""
              />
              <h3 className="semi-sm-text uppercase tracking-widest">
                {flight.name}
              </h3>
            </div>
            <div className="airline-arrive flex items-center md:mr-[45px] mr-0">
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
            <div className="airline-service md:mr-[30px] mr-0">
              <p className="light-sm-text flex mb-1">
                <img
                  src="images/icons/suitcase.svg"
                  width={14}
                  height={14}
                  className="mr-[7px]"
                  alt=""
                />
                Baggage&nbsp;
                <span className=" pri-semi-sm-text">20kg</span>
              </p>
              <p className="light-sm-text flex">
                <img
                  src="images/icons/cutlery.svg"
                  width={14}
                  height={14}
                  className="mr-[7px]"
                  alt=""
                />
                In-flight &nbsp;
                <span className=" pri-semi-sm-text">Meal</span>
              </p>
            </div>
            <div className="airline-price md:mr-[58px] mr-0">
              <p className="mb-1 line-through regular-sm-text opacity-50 ">
                1,326,000 vnd
              </p>
              <p className="price">1,322,000 vnd</p>
            </div>
            <div className="choose-button md:mr-[5px] mr-0 md:mt-0 mt-5">
              <button
                onClick={() => onChooseFlight(flight.id)}
                className="btn-opacity-orange hover:bg-orange hover:text-white transition-all "
              >
                Choose
              </button>
            </div>
          </div>
          <div className="flight-tabs flex items-center md:justify-start justify-center ">
            <p
              className={`${
                toggleTab === flight.id
                  ? "pri-semi-xs-text underline opacity-100"
                  : "semi-xs-text opacity-40"
              }  cursor-pointer uppercase transition-all mr-[30px]`}
              onClick={() => {
                onToggleTab(flight.id);
              }}
            >
              Flight detail
            </p>
            <p
              className={`${
                toggleTab === flight.id + 1
                  ? "pri-semi-xs-text underline opacity-100"
                  : "semi-xs-text opacity-40"
              }  cursor-pointer uppercase active:text-primary active:underline active:opacity-100 transition-all mr-[31px]`}
              onClick={() => {
                onToggleTab(flight.id + 1);
              }}
            >
              fare info
            </p>
            <hr
              height={1}
              width={654}
              className=" opacity-10 md:block hidden"
            />
          </div>
          {/* ======================TABs-START================== */}
          <div
            className={`${
              toggleTab === flight.id
                ? "detail-content sm:flex mt-[25px]"
                : "hidden"
            } `}
          >
            <div className="arrive-time flex items-start mr-[106px]">
              <div className="time mr-[19px]">
                <p className="semi-sm-text mb-[3px]">21:40</p>
                <p className="light-xs-text mb-[32px]">11 Feb</p>
                <p className="light-sm-text mb-[51px]">1h 30m</p>
                <p className="semi-sm-text mb-[3px]">21:40</p>
                <p className="light-xs-text mb-[32px]">11 Feb</p>
              </div>
              <img
                src="images/icons/line-vertical.svg"
                width={7}
                h={149}
                className="mr-[26px]"
                alt=""
              />
              <div className="locations">
                <p className="uppercase semi-sm-text mb-[7px]">Da nang (DAD)</p>
                <p className="light-xs-text mb-[104px]">Da Nang Airport</p>
                <p className="uppercase semi-sm-text mb-[7px]">
                  Ho Chi Minh City (SGN)
                </p>
                <p className="light-xs-text">Tansonnhat Intl</p>
              </div>
            </div>
            <div className="detail-info sm:m-0 mt-5">
              <div className="name-card flex items-center mb-[10px]">
                <img
                  src="images/icons/bamboo.svg"
                  className="mr-[11px]"
                  width={30}
                  height={30}
                  alt=""
                />
                <div className="name">
                  <h3 className="black-title mb-[3px]">Bamboo Airways</h3>
                  <div className="flex items-center light-xs-text">
                    <p className="">QH-183</p>
                    <div className="dot w-[3px] h-[3px] bg-black rounded-full mx-[5px]"></div>
                    <p>Economy</p>
                  </div>
                </div>
              </div>
              <div className="specs">
                <div className="bg-gray rounded-xl p-[15px] grid sm:grid-cols-2 sm:gap-x-[65px] sm:gap-y-1 grid-cols-1 gap-2">
                  <p className="light-sm-text flex mb-1">
                    Baggage&nbsp;
                    <span className=" pri-semi-sm-text">20kg</span>
                  </p>
                  <p className="light-sm-text flex mb-1">
                    Aircraft Airbus &nbsp;
                    <span className=" pri-semi-sm-text">A321</span>
                  </p>
                  <p className="light-sm-text flex mb-1">
                    In-flight &nbsp;
                    <span className=" pri-semi-sm-text">Meal</span>
                  </p>
                  <p className="light-sm-text flex mb-1">
                    Seat layout &nbsp;
                    <span className=" pri-semi-sm-text">3-3</span>
                  </p>
                  <p className="light-sm-text flex mb-1">
                    In-flight &nbsp;
                    <span className=" pri-semi-sm-text">Entertainment</span>
                  </p>
                  <p className="light-sm-text flex mb-1">
                    Seat pitch &nbsp;
                    <span className=" pri-semi-sm-text">
                      29 inches (standard)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              toggleTab === flight.id + 1
                ? "md:flex grid grid-cols-1"
                : "hidden"
            } fare-info-content  md:gap-0  gap-8 mt-[20px] `}
          >
            <div className="conditions-content mr-[114px]">
              <h3 className="uppercase semi-sm-text mb-[15px]">conditions</h3>
              <div className="name-card flex items-center mb-[10px]">
                <img
                  src="images/icons/bamboo.svg"
                  className="mr-[11px]"
                  width={30}
                  height={30}
                  alt=""
                />
                <div className="name">
                  <h3 className="black-title tracking-widest uppercase mb-[3px]">
                    Bamboo Airways
                  </h3>
                  <div className="flex items-center light-xs-text">
                    <p className="">QH-183</p>
                    <div className="dot w-[3px] h-[3px] bg-black rounded-full mx-[5px]"></div>
                    <p>Economy</p>
                  </div>
                </div>
              </div>
              <div className="road flex items-center">
                <p className="regular-sm-text mb-[5px]">Da Nang</p>
                <img
                  src="images/icons/short-line.svg"
                  width={63}
                  height={7}
                  alt=""
                  className="mx-[5px]"
                />
                <p className="regular-sm-text mb-[5px]">Da Nang</p>
              </div>
              <p className="pri-light-xs-text mb-[15px]">Economy</p>
              <p className="light-xs-text">Non - Refundable</p>
            </div>
            <div className="price-details-content">
              <h3 className="uppercase semi-sm-text mb-[10px]">
                price details
              </h3>
              <div className="detail-list flex items-center">
                <div className="name sm:mr-[171px] mr-10">
                  <p className="text-sm leading-[24px] light ">
                    Adult Basic Fare (x1)
                  </p>
                  <p className="text-sm leading-[24px] light ">Tax</p>
                  <p className="text-sm leading-[24px] light ">
                    Regular Total Price
                  </p>
                  <p className="text-sm leading-[24px] light text-orange">
                    Save
                  </p>
                </div>
                <div className="detail-price mb-[5px]">
                  <p className="text-sm leading-[24px] semibold ">
                    1,326,000 vnd
                  </p>
                  <p className="text-sm leading-[24px] light ">included</p>
                  <p className="text-sm leading-[24px] light ">1,326,000 vnd</p>
                  <p className="text-sm leading-[24px] light ">-4,000 vnd</p>
                </div>
              </div>

              <hr className="mb-[5px] text-black opacity-10" />
              <div className="paid flex items-center">
                <p className="text-sm leading-[24px] light sm:mr-[246px] mr-28">
                  You pay
                </p>
                <p className="price">1,322,000 vnd</p>
              </div>
            </div>
          </div>

          {/* ======================TABS-END================== */}
        </div>
      ))}
    </>
  );
};

export default FlightItem;
