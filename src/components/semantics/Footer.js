import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const footerInfo = {
  info: [
    "Information:",
    "Phone: +380980808080",
    {
      title: "Privacy Policy",
      slug: "/",
    },
  ],
  developer: [
    "Developer:",
    "Daniel Shliakhetko",
    {
      title: "- Git Hub",
      slug: "https://github.com/daniel-shliakhetko/shop-portfolio",
    },
  ],
};

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="relative mt-auto p-8 flex lg:flex-row flex-col bg-indigo-700"
    >
      <div className="w-full lg:w-2/3 flex md:flex-row flex-col">
        {Object.keys(footerInfo).map((key, i) => {
          return (
            <ul key={i} className="text-indigo-100 mb-8 w-full md:w-1/2">
              {footerInfo[key].map((item, i) => (
                <li
                  key={i}
                  className={
                    "" +
                    (i === 0
                      ? " font-bold text-indigo-200 text-lg uppercase"
                      : " pl-1")
                  }
                >
                  {item.slug ? (
                    <Link
                      className="text-indigo-300 hover:text-indigo-400 duration-200"
                      to={item.slug}
                      target={item.slug.match("http") && "_blank"}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
      <p className="pt-4 w-full lg:w-1/3 text-indigo-100 font-medium lg:text-left text-center">
        <FontAwesomeIcon className="text-indigo-100" icon={faCopyright} /> All
        Rights reserved.
      </p>
      <div
        className={
          "Decorations w-full h-6 absolute top-0 right-0 flex flex-row-reverse justify-end duration-200 z-20"
        }
      >
        <div
          className={
            "w-1/2 lg:w-1/4 rounded-bl-lg bg-indigo-100 duration-200" +
            (isHovered ? " h-3" : " h-2")
          }
        ></div>
        <div
          className={
            "w-1/6 rounded-t-lg bg-indigo-700 duration-200" +
            (isHovered ? " h-3 -mt-2" : " h-2 -mt-1")
          }
        ></div>
        <div
          className={
            "w-1/12 rounded-b-lg lg:block hidden bg-indigo-100 duration-200" +
            (isHovered ? " h-3" : " h-2")
          }
        ></div>
        <div
          className={
            "w-1/12 rounded-t-lg lg:block hidden bg-indigo-700 duration-200" +
            (isHovered ? " h-3 -mt-2" : " h-2 -mt-1")
          }
        ></div>
        <div
          className={
            "w-1/6 rounded-b-lg bg-indigo-100 duration-200" +
            (isHovered ? " h-3" : " h-2")
          }
        ></div>
        <div
          className={
            "w-1/4 rounded-tr-lg bg-indigo-700 duration-200" +
            (isHovered ? " h-3 -mt-2" : " h-2 -mt-1")
          }
        ></div>
      </div>
    </footer>
  );
};
