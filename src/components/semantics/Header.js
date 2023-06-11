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
      ref={headerRef}
      className="Header pt-2 pb-3 px-8 relative flex justify-between 2xl:rounded-bl-lg rounded-none bg-indigo-500"
    >
      <button
        className="h-8 mt-1 z-20 duration-200 hover:"
        onClick={() => {
          navigate("/");
        }}
      >
        <FontAwesomeIcon
          className="text-indigo-100 h-full"
          icon={faHatCowboySide}
        />
      </button>
      <nav
        className={
          "Navigation w-full md:ml-8 -ml-10 md:mt-1 mt-14 duration-500" +
          (width < 768 ? " z-0" : " z-20") +
          (width < 768 && isMenuShown ? " -mt-10 opacity-0" : "")
        }
      >
        <ul className="NavigationList w-full flex md:flex-row flex-col md:space-x-8">
          {menu.map((item, i) => (
            <li
              key={i}
              title={item.title}
              className="NavigationItem font-semibold lowercase text-indigo-100"
            >
              <Link to={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4 z-20">
        <button
          className="w-10 h-10 rounded flex justify-center items-center bg-indigo-100"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon
            className="text-indigo-500 h-full h-3/4"
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
      <div className="absolute top-0 left-0 h-14 w-full bg-indigo-500 z-10"></div>
      <div className="Decorations w-full h-fit absolute -bottom-2 right-0 flex justify-end">
        <div className="w-1/6 h-2 rounded-b-lg bg-indigo-500"></div>
        <div className="-mt-1 w-1/12 h-2 rounded-t-lg lg:block hidden bg-indigo-100"></div>
        <div className="w-1/12 h-2 rounded-b-lg lg:block hidden bg-indigo-500"></div>
        <div className="-mt-1 w-1/6 h-2 rounded-t-lg bg-indigo-100"></div>
        <div className="w-1/4 h-2 2xl:rounded-b-lg rounded-bl-lg bg-indigo-500"></div>
      </div>
    </header>
  );
};
