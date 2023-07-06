import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const HoverableHeading = (props) => {
  return (
    <ul
      className="w-full flex md:justify-center text-[2em] font-bold cursor-default select-none z-40 inline-block"
      title={props.title}
    >
      {
        props.title.split(" ").map((string, ind) => (
          <li key={ind}>
            <ul className="hidden md:flex">
              {string.split("").map((char, i) => (
                <li key={"" + i + ind}>
                  <span
                    style={{ fontSize: props.fontSize || "1em" }}
                    className={
                      (props.className || "") +
                      " hover:text-amber-500 hover:-translate-y-1 duration-300 inline-block " +
                      (props.colorClassName || "")
                    }
                  >
                    {char === " " ? " " : char}
                  </span>
                </li>
              ))}
              <li key={"" + string.length + ind}>
                <span
                  className="hidden md:inline-block"
                  style={{ fontSize: props.fontSize || "1em" }}
                >
                   
                </span>
              </li>
            </ul>
          </li>
        ))

        //props.title.split('').map((char, i)=>(<span key={i} className={"hover:text-amber-500 hover:-translate-y-1 duration-300" +(i%7===1 ? " text-emerald-500" : i%5===0 ? " text-red-600" : "")}>{char}</span>))
      }
      <span
        className={
          (props.colorClassName || "") + " md:hidden inline-block px-2 z-40"
        }
        style={{ fontSize: props.fontSize || "1em" }}
      >
        {props.title}
      </span>
    </ul>
  );
};

HoverableHeading.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
  colorClassName: PropTypes.string,
  className: PropTypes.string,
};

export default HoverableHeading;
