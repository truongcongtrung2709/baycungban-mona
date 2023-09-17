import React, { useState } from "react";

const Header = () => {
  const [isToggle, setToggle] = useState(false);
  function ToggleMenu() {
    setToggle(!isToggle);
  }
  return (
    <header className="absolute z-10  bg-transparent w-full">
      <div className="container">
        <nav className="">
          <div className=" flex flex-wrap items-center justify-between p-4">
            <a href="/" className="flex items-center">
              <img
                width={144.06}
                height={22.13}
                src="/images/baycungbanlogo.svg"
                className="h-8 mr-[14.26px]"
                alt="logo"
              />
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
                className="button leading-lg text-sm  text-center mr-3 md:mr-0"
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
              className={`${
                isToggle ? "block " : "hidden"
              } items-center justify-between  w-full md:flex md:w-auto md:order-1 text-center rounded-lg  border-primary mt-2 pt-0 bg-background md:bg-transparent`}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0  leading-md light ">
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-secondary  hover:bg-primary hover:text-white  rounded md:bg-transparent md:text-secondary md:hover:text-primary md:hover:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Promotion
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-secondary  hover:bg-primary hover:text-white  rounded md:bg-transparent md:text-secondary md:hover:text-primary md:hover:bg-transparent md:p-0 "
                  >
                    Flight Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-secondary  hover:bg-primary hover:text-white  rounded md:bg-transparent md:text-secondary md:hover:text-primary md:hover:bg-transparent md:p-0"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-secondary  hover:bg-primary hover:text-white  rounded md:bg-transparent md:text-secondary md:hover:text-primary md:hover:bg-transparent md:p-0"
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
