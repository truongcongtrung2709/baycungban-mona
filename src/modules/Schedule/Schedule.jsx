import React from "react";

const Schedule = () => {
  return (
    <div className="bg-gray">
      <div className="my-flight bg-white">
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
        <div className="container flex ">
          <div className="flights mr-[10px]">
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
              <div className="flight-item bg-white px-[15px] py-[23px]">
                <div className="header flex items-center mb-[26px]">
                  <div className="airline-name flex mr-10">
                    <img
                      src="images/icons/bamboo.svg"
                      width={30}
                      height={30}
                      className="mr-3"
                      alt=""
                    />
                    <h3 className="semi-sm-text uppercase tracking-widest">
                      Bamboo Airways
                    </h3>
                  </div>
                  <div className="airline-arrive flex items-center mr-[45px]">
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
                  <div className="airline-service mr-[30px]">
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
                  <div className="airline-price mr-[58px]">
                    <p className="mb-1 line-through regular-sm-text opacity-50 ">
                      1,326,000 vnd
                    </p>
                    <p className="price">1,322,000 vnd</p>
                  </div>
                  <div className="choose-button mr-[5px]">
                    <button className="btn-opacity-orange hover:bg-orange hover:text-white transition-all">
                      Choose
                    </button>
                  </div>
                </div>
                <div className="flight-tabs flex items-center ">
                  <p className="semi-xs-text opacity-40 cursor-pointer uppercase hover:text-primary hover:underline hover:opacity-100 transition-all mr-[30px]">
                    Flight detail
                  </p>
                  <p className="semi-xs-text opacity-40 cursor-pointer uppercase hover:text-primary hover:underline hover:opacity-100 transition-all mr-[31px]">
                    fare info
                  </p>
                  <hr height={1} width={654} className=" opacity-10" />
                  <div className="detail"></div>
                  <div className="info"></div>
                </div>
                {/* ======================TAB-START================== */}
                <div className="detail-content flex mt-[25px] hidden">
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
                      <p className="uppercase semi-sm-text mb-[7px]">
                        Da nang (DAD)
                      </p>
                      <p className="light-xs-text mb-[104px]">
                        Da Nang Airport
                      </p>
                      <p className="uppercase semi-sm-text mb-[7px]">
                        Ho Chi Minh City (SGN)
                      </p>
                      <p className="light-xs-text">Tansonnhat Intl</p>
                    </div>
                  </div>
                  <div className="detail-info">
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
                      <div className="bg-gray rounded-xl p-[15px] grid grid-cols-2 gap-x-[65px] gap-y-1">
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
                          <span className=" pri-semi-sm-text">
                            Entertainment
                          </span>
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
                <div className="fare-info-content flex mt-[20px]">
                  <div className="conditions-content">
                    <h3 className="uppercase semi-sm-text mb-[15px]">
                      conditions
                    </h3>
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
                    <p className="pri-light-xs-text">Economy</p>

                    <div></div>
                  </div>
                  <div className="price-details-content"></div>
                </div>
                {/* ======================TAB-END================== */}
              </div>
            </div>
          </div>
          <div className="receipt bg-white w-[270px] rounded-xl">
            <div className="receipt-header p-[15px]">
              <h3 className="black-title">YOUR FLIGHT</h3>
            </div>
            <hr className="text-black opacity-10" />

            <div className="receipt-body p-[15px]">
              <div className="date flex mb-[15px]">
                <div className="avatar mr-3">01</div>
                <div className="text">
                  <p className="regular-sm-text">Fri, 11 Feb, 2022</p>
                  <p className="semi-sm-text ">Da Nang - Ho Chi Minh</p>
                </div>
              </div>
              <div className="airline mb-[10px] flex">
                <img
                  src="images/icons/bamboo.svg"
                  width={30}
                  height={30}
                  className="mr-3"
                  alt=""
                />
                <div className="airline-info">
                  <h3 className="black-title">Bamboo Airways</h3>
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
            <div className="receipt-footer p-[15px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
