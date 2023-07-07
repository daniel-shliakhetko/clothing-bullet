import React from "react";
import HoverableHeading from "../../../components/headings/HoverableHeading";
import "../../../styles/index.scss";

export const Introduction = () => {
  return (
    <section className="w-full relative pt-32 md:pt-64 pb-64 relative">
      
      <div className="Decorations top-0 left-0 w-full h-full absolute overflow-none z-20">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {/* <div className="w-10 h-10 absolute top-0 left-0 rounded-xl bg-indigo-500 duration-1000 opacity-50"></div>
        <div className="w-10 h-10 absolute top-0 right-0 rounded-full bg-black duration-1000"></div> */}
      </div>
      <div style={{ zIndex:"50"}} className="md:absolute md:-translate-y-3/4 md:-translate-x-1/2 md:top-1/2 md:left-1/2 space-y-4">
      <HoverableHeading
        title={"Find style of your dream!"}
        fontSize={"1.65em"}
      />
      <HoverableHeading
        title={"Welcome to Clothing Bullet Store!"}
        fontSize={"1.1em"}
        colorClassName={"text-slate-600"}
        className={"hover:text-indigo-400"}
      />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-indigo-400 z-30"></div>
    </section>
  );
};
