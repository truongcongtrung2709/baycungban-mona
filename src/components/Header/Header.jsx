import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const [isToggle, setToggle] = useState(false);
  function ToggleMenu() {
    setToggle(!isToggle);
  }
  return (
    <header
      className={`${
        pathname === "/"
          ? "absolute top-0 z-10 bg-transparent w-full pt-12"
          : " static bg-primary  py-[20px]"
      }   `}
    >
      <div className="container">
        <nav className="">
          <div className=" flex flex-wrap items-center justify-between ">
            <a href="/" className="flex items-center">
              <p
                className={`${
                  pathname === "/"
                    ? "text-black logo-text mr-[14.26px]"
                    : "text-white logo-text mr-[14.26px]"
                }`}
              >
                Baycungban
              </p>
              <img
                width={20}
                height={20}
                src="images/vietnamflag.svg"
                className="mr-[10px] hidden lg:block"
                alt="vietnamese"
              />
              <img
                width={20}
                height={20}
                src="images/usflag.svg"
                className="hidden lg:block"
                alt="english"
              />
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className={`${
                  pathname === "/"
                    ? "btn-primary mr-3 md:mr-0  "
                    : "btn-white mr-3 md:mr-0   "
                }`}
              >
                Booking now
              </button>
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden "
                onClick={() => ToggleMenu()}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${isToggle ? "block " : "hidden"} ${
                pathname === "/"
                  ? "items-center justify-between  w-full md:flex md:w-auto md:order-1 text-center bg-opacity-50 sm:text-right sm:pr-4 rounded-lg  pt-0 bg-white md:bg-transparent"
                  : "items-center justify-between  w-full md:flex md:w-auto md:order-1 text-center bg-opacity-50 sm:text-right sm:pr-4  rounded-lg  pt-0 bg-primary  md:bg-transparent"
              } `}
            >
              <ul
                className={`${
                  pathname === "/"
                    ? "flex flex-col  md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0  leading-md light text-black"
                    : "flex flex-col  md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0  leading-md light text-white"
                }`}
              >
                <li>
                  <a
                    href="/"
                    className={` ${
                      pathname === "/"
                        ? "block  hover:bg-primary hover:text-white  rounded md:bg-transparent md:hover:text-primary md:hover:bg-transparent md:p-0 md:m-0 "
                        : "block  hover:rounded-[100px] hover:bg-white hover:bg-opacity-10 hover:text-white  rounded md:bg-transparent md:p-0 md:m-0 "
                    } `}
                    aria-current="page"
                  >
                    Promotion
                  </a>
                </li>
                <li>
                  <a
                    href="/flightschedule"
                    className={` ${
                      pathname === "/"
                        ? "block  hover:bg-primary hover:text-white  rounded md:bg-transparent md:hover:text-primary md:hover:bg-transparent md:p-0 md:m-0  mt-5"
                        : "block  hover:rounded-[100px] hover:bg-white hover:bg-opacity-10 hover:text-white  rounded md:bg-transparent md:p-0 md:m-0 mt-5"
                    } `}
                  >
                    Flight Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className={` ${
                      pathname === "/"
                        ? "block  hover:bg-primary hover:text-white  rounded md:bg-transparent md:hover:text-primary md:hover:bg-transparent md:p-0 md:m-0  mt-5"
                        : "block  hover:rounded-[100px] hover:bg-white hover:bg-opacity-10 hover:text-white  rounded md:bg-transparent md:p-0 md:m-0 mt-5"
                    } `}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className={` ${
                      pathname === "/"
                        ? "block  hover:bg-primary hover:text-white  rounded md:bg-transparent md:hover:text-primary md:hover:bg-transparent md:p-0 md:m-0  mt-5"
                        : "block  hover:rounded-[100px] hover:bg-white hover:bg-opacity-10 hover:text-white  rounded md:bg-transparent md:p-0 md:m-0 mt-5"
                    } `}
                  >
                    Payment Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
