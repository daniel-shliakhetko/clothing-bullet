import React from "react";
import HoverableHeading from "../../../components/headings/HoverableHeading";
import "../../../styles/index.scss";

export const Introduction = () => {
  return (
    <section className="w-full relative pt-48 pb-64">
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
      <div className="Decorations top-0 left-0 w-full h-full absolute overflow-none z-30">
        <ul class="circles">
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
      <div className="absolute bottom-0 left-0 w-full h-20 bg-indigo-400 z-30"></div>
    </section>
  );
};
