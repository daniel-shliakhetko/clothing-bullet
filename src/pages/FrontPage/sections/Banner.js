import React, { useState } from "react";
import { Link } from "react-router-dom";
import HoverableHeading from "../../../components/headings/HoverableHeading";
import model from "./model.png";

export const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={
        "w-full h-fit px-4 md:px-16 flex flex-col lg:flex-row bg-indigo-400 rounded-lg duration-500" +
        (isHovered ? "" : " opacity-95")
      }
    >
      <div className="w-full pt-44 pb-36 relative">
        <div className="flex flex-col items-center min-h-40">
          <HoverableHeading
            title="The Hotest Prices"
            fontSize={"1.5em"}
            colorClassName="text-indigo-100 w-full"
            className={"hover:text-indigo-200 duration-200"}
          />
          <HoverableHeading
            title="on the market"
            fontSize={"1.5em"}
            colorClassName="text-indigo-100 w-full"
            className={"hover:text-indigo-200 pb-8 duration-200"}
          />
        </div>
        <div
          className={
            "absolute bottom-12 right-24 bg-indigo-300 rounded-lg animate-rotate duration-300" +
            (isHovered ? " w-28 h-10" : " w-20 h-20")
          }
        />
        <div
          className={
            "absolute top-16 left-0 bg-indigo-300 rounded-lg animate-rotate duration-300" +
            (isHovered ? " w-7 h-20" : " w-14 h-14")
          }
        />
        <div className="w-full flex md:justify-center">
          <Link to="/products">
            <button className="Button h-12 px-8 bg-indigo-100 text-xl font-semibold text-indigo-500 rounded-full hover:text-indigo-300">
              <span>Check out</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:flex justify-center items-end relative hidden">
        <div
          className={
            "w-full h-80 absolute bottom-0 right-0 bg-indigo-300 rounded-t-full duration-300" +
            (isHovered ? " scale-105 -translate-y-2" : "")
          }
        />
        <div
          className={
            "absolute top-24 right-0 bg-indigo-300 rounded-lg animate-rotate duration-300" +
            (isHovered ? " w-10 h-28" : " h-20 w-20")
          }
        />
        <div
          className={
            "absolute top-12 left-0 bg-indigo-300 rounded-lg animate-rotate duration-300" +
            (isHovered ? " h-7 w-20" : " w-14 h-14")
          }
        />
        <img
          className={
            "absolute bottom-0 right-[calc(50% - 20em)] h-[110%] z-40 duration-200" +
            (isHovered ? " scale-95 translate-y-3.5" : "")
          }
          src={model}
          alt="Model"
        />
      </div>
    </section>
  );
};
