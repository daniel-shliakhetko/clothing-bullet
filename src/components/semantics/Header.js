import {
  faBars,
  faCartShopping,
  faHatCowboySide,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const menu = [
    { title: "Home", slug: "/" },
    { title: "Products", slug: "/products" },
  ];
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const [isMenuShown, setIsMenuShown] = useState(true);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    setWidth(headerRef.current.clientWidth);
    console.log(width);
  }, [width]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(headerRef.current.clientWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header
      onMouseEnter={()=>{setIsHovered(true)}}
      onMouseLeave={()=>{setIsHovered(false)}}
      ref={headerRef}
      className={
        "Header pt-2 pb-3 px-8 relative flex justify-between " +
        {
          /*2xl:rounded-bl-lg*/
        } +
        " rounded-none bg-indigo-500"
      }
    >
      <button
        className="h-8 mt-1 z-20"
        onClick={() => {
          navigate("/");
        }}
      >
        <FontAwesomeIcon
          className="text-indigo-100 h-full duration-200 hover:scale-110 hover:text-indigo-200"
          icon={faHatCowboySide}
        />
      </button>
      <nav
        className={
          "Navigation w-full md:ml-8 -ml-4 duration-500" +
          (width < 768 ? " z-0" : " z-20") +
          (width < 768 && isMenuShown ? " -mt-10 opacity-0" : " md:mt-2 mt-14")
        }
      >
        <ul className="NavigationList w-full flex md:flex-row flex-col pb-2 md:space-x-8">
          {menu.map((item, i) => (
            <li
              key={i}
              title={item.title}
              className="NavigationItem font-semibold lowercase text-indigo-100 duration-200 hover:scale-110 md:translate-x-0 -translate-x-4 hover:translate-x-0 hover:text-indigo-200"
            >
              <Link to={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4 z-20">
        <button
          className="w-10 h-10 mb-1 rounded flex justify-center items-center bg-indigo-100 duration-200 hover:scale-105 hover:bg-indiogo-200"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon
            className="text-indigo-500 h-3/4 duration-200"
            icon={faCartShopping}
          />
        </button>
        <button
          className="w-8 h-8 md:hidden"
          onClick={() => {
            setIsMenuShown(!isMenuShown);
          }}
        >
          <FontAwesomeIcon
            className="text-indigo-100 h-full"
            icon={isMenuShown ? faBars : faXmark}
          />
        </button>
      </div>
      <div className="absolute top-0 left-0 h-10 w-full bg-indigo-500 z-10"></div>
    <div className={"Decorations w-full h-6 absolute -bottom-5 right-0 flex justify-end duration-200 "+{/*(isHovered ? " scale-y-110" : "")*/}}>
        <div className={"w-1/2 lg:w-1/4 rounded-tr-lg bg-indigo-100 duration-200"+(isHovered ? " h-3 -mt-2" : " h-2 -mt-1")}></div>
        <div className={"w-1/6 rounded-b-lg bg-indigo-500 duration-200"+(isHovered ? " h-3" : " h-2")}></div>
        <div className={"w-1/12 rounded-t-lg lg:block hidden bg-indigo-100 duration-200"+(isHovered ? " h-3 -mt-2" : " h-2 -mt-1")}></div>
        <div className={"w-1/12 rounded-b-lg lg:block hidden bg-indigo-500 duration-200"+(isHovered ? " h-3" : " h-2")}></div>
        <div className={"w-1/6 rounded-t-lg bg-indigo-100 duration-200"+(isHovered ? " h-3 -mt-2" : " h-2 -mt-1")}></div>
        <div className={"w-1/4 2xl:rounded-bl-lg rounded-bl-lg bg-indigo-500 duration-200 duration-200"+(isHovered ? " h-3" : " h-2")}></div>
      </div>
    </header>
  );
};
