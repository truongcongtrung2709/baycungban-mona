import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const classes = [
  "Business Class",
  "First Class",
  "Premium Economy Class",
  "Economy Class",
];
const locations = [
  { city: "Da Nang ", country: "Quang Nam, Viet Nam" },
  { city: "Ba Ria ", country: "Viet Nam" },
  { city: "Bac Ninh ", country: "Bac Bo, Viet Nam" },
  { city: "Bien Hoa ", country: "Dong Nai, Viet Nam" },
  { city: "Ca Mau ", country: "Viet Nam" },
  { city: "Ho Chi Minh ", country: "Viet Nam" },
  { city: "Ha Noi ", country: "Viet Nam" },
  { city: "Hue ", country: "Viet Nam" },
];
const BookingForm = () => {
  const navigate = useNavigate();

  // =========================Toggle====================
  const [isTogglePeople, setTogglePeople] = useState(false);
  const [isToggleClass, setToggleClass] = useState(false);
  const [isToggleFrom, setToggleFrom] = useState(false);
  const [isToggleTo, setToggleTo] = useState(false);
  const [isToggleDatePickerIn, setToggleDatePickerIn] = useState(false);
  const [isToggleDatePickerOut, setToggleDatePickerOut] = useState(false);
  // =======================Values================
  const [arriveType, setArriveType] = useState("One way / Round-trip");
  const [adult, setAdult] = useState("00");
  const [children, setChildren] = useState("00");
  const [classValue, setClassValue] = useState("Business Class");
  const [fromCityValue, setFromCityValue] = useState("Da Nang");
  const [fromCountryValue, setFromCountryValue] = useState(
    "Quang Nam, Viet Nam"
  );
  const [toCityValue, setToCityValue] = useState("Ho Chi Minh");
  const [toCountryValue, setToCountryValue] = useState("Viet Nam");
  // ============================ERRORS========================
  const [errorsPeopleMessage, setErrorsPeopleMessage] = useState("");
  const [errorsLocationMessage, setErrorsLocationMessage] = useState("");
  const [errorsDateTimeMessage, setErrorsDateTimeMessage] = useState("");
  // ==============================DatePicker====================
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
    console.log(checkInDate);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
    console.log(checkOutDate);
  };

  const onArriveTypeChange = (e) => {
    setArriveType(e.target.value);
  };
  const onChangeAdult = (e) => {
    setAdult(e.target.value);
  };

  const onChangeChildren = (e) => {
    setChildren(e.target.value);
  };

  const onSubmit = () => {
    if (adult <= 0 || children <= 0) {
      setErrorsPeopleMessage("Adult & children must be greater than 0 ");
    } else {
      setErrorsPeopleMessage("");
    }

    if (fromCityValue === toCityValue && fromCountryValue === toCountryValue) {
      setErrorsLocationMessage("2 locations must be different");
    } else {
      setErrorsLocationMessage("");
    }
    if (checkInDate === null && checkOutDate === null) {
      setErrorsDateTimeMessage("Date time can't be blank");
    } else {
      setErrorsDateTimeMessage("");
    }
    if (
      adult > 0 &&
      children > 0 &&
      fromCityValue !== toCityValue &&
      fromCountryValue !== toCountryValue &&
      checkInDate !== null &&
      checkOutDate !== null
    ) {
      console.log(
        arriveType,
        adult + "adult",
        children + "children",
        classValue,
        "from" + fromCityValue + fromCountryValue,
        "to" + toCityValue + toCountryValue,
        checkInDate + checkOutDate
      );
      navigate("/flightschedule");
    } else {
    }
  };
  return (
    <div className="container z-50">
      <form className=" relative bg-white px-[30px] pt-[30px] pb-[50px] rounded-xl w-full mt-[137px] drop-shadow-[0_4px_30px_rgba(77,70,250,0.1)] xl:h-[224px]">
        <div className="options mb-5 border-none lg:flex semi-sm-text items-center ">
          <div className="arrive-type sm:flex">
            <div className="option flex sm:mr-5 items-center">
              <div className="bg-gray rounded-full w-6 h-6 flex flex-shrink-0 justify-center items-center relative mr-[6px]">
                <input
                  type="radio"
                  value="One way / Round-trip"
                  name="arrive-type"
                  defaultChecked
                  onChange={onArriveTypeChange}
                  className="checkbox appearance-none border-none rounded-full absolute cursor-pointer w-full h-full checked:border-none "
                ></input>
                <div className="check-icon hidden border-[6px] border-primary rounded-full w-full h-full z-10 "></div>
              </div>
              <label>One way / Round-trip</label>
            </div>
            <div className="option flex sm:mr-5 sm:mt-0 mt-4 items-center">
              <div className="bg-gray rounded-full w-6 h-6 flex flex-shrink-0 justify-center items-center relative mr-[6px]">
                <input
                  type="radio"
                  value="Multi-city"
                  name="arrive-type"
                  onChange={onArriveTypeChange}
                  className="checkbox appearance-none border-none rounded-full absolute cursor-pointer w-full h-full checked:border-none "
                ></input>

                <div className="check-icon hidden border-[6px] border-primary rounded-full w-full h-full z-10 "></div>
              </div>
              <label>Multi-city</label>
            </div>
          </div>

          <div className="drop-options sm:flex lg:mt-0 mt-4 relative">
            <div
              className="option flex mr-5 items-center sm:mb-0 mb-4"
              onClick={() => setTogglePeople(!isTogglePeople)}
            >
              <p className="mr-[5px]">
                <span className="text-primary">{adult}</span> Adult,
                <span className="text-primary">{children}</span> children
              </p>
              <img src="images/icons/dropdown.svg" alt="" />
            </div>
            <div
              className={` ${
                isTogglePeople ? "block" : "hidden"
              } absolute -bottom-28 left-0 bg-gray top-5 p-3 z-40 shadow-lg rounded-b-xl`}
            >
              <div className="flex justify-between">
                <p>Adult</p>
                <input
                  type="number"
                  className=" w-9 px-1 rounded-md border-none"
                  required
                  name="adult"
                  onChange={onChangeAdult}
                />
              </div>
              <div className="flex mt-3 justify-between ">
                <p>Children</p>
                <input
                  type="number"
                  required
                  className=" w-9 px-1 rounded-md border-none"
                  name="children"
                  onChange={onChangeChildren}
                />
              </div>
            </div>
            <div
              className="option flex mr-[50px] items-center"
              onClick={() => setToggleClass(!isToggleClass)}
            >
              <div className="mr-[5px] min-w-[98px]">{classValue}</div>

              <img src="images/icons/dropdown.svg" alt="" />
            </div>
            <ul
              className={`${
                isToggleClass ? "block" : "hidden"
              } class-list w-[200px] bg-gray lg:right-2  sm:left-32 left-0 sm:top-5 z-40 p-4 absolute rounded-b-xl shadow-xl`}
            >
              {classes.map((item) => (
                <li
                  key={item}
                  className="hover:bg-primary hover:text-white mb-2 rounded-lg"
                  onClick={(e) => {
                    setClassValue(e.target.textContent);
                    setToggleClass(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            {errorsPeopleMessage && (
              <p className="text-red absolute w-[100px] bg-black lg:left-6 lg:-top-24 -top-16  right-0 rounded-xl p-1">
                {errorsPeopleMessage}
              </p>
            )}
          </div>
        </div>
        <div className="pickers xl:flex">
          <div className="location xl:mb-0 mb-4 relative md:flex   items-center mr-5 ">
            <div
              className="form-box1 px-5 py-[15px] border border-black border-opacity-10  w-[250px] sm:w-[300px] mr-5 hover:border-primary hover:border-2 rounded-xl peer/first md:mb-0 mb-5 relative"
              onClick={() => setToggleFrom(!isToggleFrom)}
            >
              <p className="text-black  semi-xs-text tracking-widest opacity-50">
                FROM
              </p>
              <h1 className="semi-lg-text sm:text-2xl text-primary">
                {fromCityValue}
              </h1>
              <p className="semibold text-xs leading-lg">{fromCountryValue}</p>
              <ul
                className={`${
                  isToggleFrom ? "block" : "hidden"
                } class-list w-[300px] bg-gray lg:left-0 lg:top-24   left-0 sm:top-22 z-50 p-4 absolute rounded-b-xl shadow-xl h-[150px] overflow-auto`}
              >
                {locations.map((item, id) => (
                  <li
                    key={id}
                    className="hover:bg-primary hover:text-white mb-2 rounded-lg"
                    onClick={() => {
                      setFromCityValue(item.city);
                      setFromCountryValue(item.country);
                      setToggleFrom(false);
                    }}
                  >
                    {item.city + item.country}
                  </li>
                ))}
              </ul>
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
              onClick={() => {
                setFromCityValue(toCityValue);
                setFromCountryValue(toCountryValue);
                setToCityValue(fromCityValue);
                setToCountryValue(fromCountryValue);
              }}
            />
            <div
              className="form-box2 from-box md:px-[40px] px-5 py-[15px] border   border-black border-opacity-10  w-[250px] sm:w-[300px] hover:border-primary hover:border-2 rounded-xl peer/second relative"
              onClick={() => {
                setToggleTo(!isToggleTo);
              }}
            >
              <p className="text-black  semi-xs-text tracking-widest opacity-50">
                TO
              </p>
              <h1 className="semi-lg-text sm:text-2xl text-primary">
                {toCityValue}
              </h1>
              <p className="semi-xs-text">{toCountryValue}</p>
              <ul
                className={`${
                  isToggleTo ? "block" : "hidden"
                } class-list w-[300px] bg-gray lg:left-0 lg:top-24   left-0 sm:top-22 z-50 p-4 absolute rounded-b-xl shadow-xl h-[150px] overflow-auto`}
              >
                {locations.map((item, id) => (
                  <li
                    key={id}
                    className="hover:bg-primary hover:text-white mb-2 rounded-lg"
                    onClick={() => {
                      setToCityValue(item.city);
                      setToCountryValue(item.country);
                      setToggleTo(false);
                    }}
                  >
                    {item.city + item.country}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="half-circle-right md:block hidden absolute left-[307px] h-[70px] w-10 bg-white border border-black border-opacity-10 border-l-0 
            rounded-tr-full rounded-br-full z-10 peer-hover/second:border-2 peer-hover/second:border-primary"
            ></div>
          </div>
          <div className="date md:w-[530px] sm:w-[300px] w-[250px] xl:mb-0 mb-4 border border-black rounded-xl border-opacity-10 px-5 py-[15px]  md:flex">
            <div className="departure mr-[61px] md:mb-0 mb-5 relative">
              <p className="text-black  semi-xs-text tracking-widest opacity-50 ">
                DEPARTURE
              </p>
              <div className="flex">
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                  className=" sm:text-2xl text-primary semi-lg-text flex items-center w-[180px]"
                />
                <img
                  src="images/icons/calendar.svg"
                  className="ml-[10px]"
                  width={14}
                  height={14}
                  alt=""
                  onClick={() => setToggleDatePickerIn(!isToggleDatePickerIn)}
                />
              </div>
              <div className="navigate flex ">
                <p className="semi-sm-text opacity-40 mr-[19px]">Prev</p>
                <p className="semi-sm-text opacity-40">Next</p>
              </div>
            </div>

            <div className="return relative">
              <p className="text-black semi-xs-text tracking-widest opacity-50 ">
                RETURN
              </p>
              <div className="flex">
                <DatePicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                  className="semi-lg-text sm:text-2xl text-primary flex items-center w-[180px]"
                />
                <img
                  src="images/icons/calendar.svg"
                  className="ml-[10px]"
                  width={14}
                  height={14}
                  alt=""
                  onClick={() => setToggleDatePickerOut(!isToggleDatePickerOut)}
                />
              </div>
              <div className="navigate flex ">
                <p className="semi-sm-text opacity-40 mr-[19px]">Prev</p>
                <p className="semi-sm-text opacity-40">Next</p>
              </div>
            </div>
          </div>
        </div>
        {errorsLocationMessage && (
          <p className="text-red absolute w-[100px] bg-black xl:-top-[50px] xl:right-auto xl:left-20 lg:top-20 md:top-[120px] top-[170px] lg:right-[400px] right-0 rounded-xl p-1">
            {errorsLocationMessage}
          </p>
        )}
        {errorsDateTimeMessage && (
          <p className="text-red absolute w-[100px] bg-black xl:-top-5 xl:right-[230px] rounded-xl p-1 lg:right-[400px]  right-0 bottom-[140px]">
            {errorsDateTimeMessage}
          </p>
        )}
        <div className="submit-button right-[30px] top-[194px] xl:absolute">
          <button
            type="button"
            onClick={() => onSubmit()}
            className="btn-primary  flex items-center semibold text-sm sm:text-lg leading-2xl px-5 py-5 "
          >
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
      </form>
    </div>
  );
};

export default BookingForm;
