import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`${
        pathname === "/"
          ? "overflow-hidden sm:bg-transparent bg-gray relative xl:mt-[37px] md:mt-[350px] sm:mt-[650px]"
          : "overflow-hidden bg-gray relative "
      } `}
    >
      <div className="container px-7 sm:flex justify-between items-center pt-[81px] pb-[40px]">
        <div className="contact sm:flex items-center sm:mb-0 mb-10">
          <p className="flex text-sm leading-md regular">
            <img
              src="images/icons/phone.svg"
              alt=""
              className="w-[18px] h-[18px] mr-[5px]"
            />
            Call us: +84 908 02 02 58
          </p>
          <p className="flex text-sm leading-md sm:ml-[30px] sm:mt-0 mt-4 regular">
            <img
              src="images/icons/email.svg"
              alt=""
              className="w-[18px] h-[18px] mr-[5px]"
            />
            Email: chucinog@gmail.com
          </p>
        </div>
        <div className="follow flex items-center">
          <p className="regular text-sm leading-md">Follow us</p>
          <div className="bg-black h-[1px] w-10 mx-[10px]"></div>
          <img
            src="images/icons/facebook.svg"
            alt=""
            className="w-[18px] h-[18px] "
          />
          <img
            src="images/icons/instagram.svg"
            alt=""
            className="w-[18px] h-[18px] ml-[10px]"
          />
        </div>
      </div>
      <div
        className={`${
          pathname === "/"
            ? "bg-gray absolute top-0 -z-10 left-[229px] w-full h-full"
            : "hidden"
        }`}
      ></div>
    </footer>
  );
};

export default Footer;
