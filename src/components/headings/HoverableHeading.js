import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const HoverableHeading = (props) => {
  return (
    <div
      className="max-w-full flex md:justify-center text-[2em] font-bold cursor-default select-none"
      title={props.title}
    >
      {
        props.title.split(" ").map((string, i) => (
          <>
          <div className="hidden md:flex">
            {string.split("").map((char, i, array) => (
              <span
                key={i}
                style={{ fontSize: props.fontSize || "1em" }}
                className={
                  (props.className || "") +
                  " hover:text-amber-500 hover:-translate-y-1 duration-300 inline-block " + (props.colorClassName || "")
                }
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </div>
          <span className="hidden md:inline-block" style={{ fontSize: props.fontSize || "1em" }}> </span>
          </>
        ))

        //props.title.split('').map((char, i)=>(<span key={i} className={"hover:text-amber-500 hover:-translate-y-1 duration-300" +(i%7===1 ? " text-emerald-500" : i%5===0 ? " text-red-600" : "")}>{char}</span>))
      }
    <span className={(props.colorClassName || "") +" md:hidden inline-block"} style={{ fontSize: props.fontSize || "1em" }}>{props.title}</span>

    </div>
  );
};

HoverableHeading.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
  colorClassName: PropTypes.string,
  className: PropTypes.string,
};

export default HoverableHeading;
