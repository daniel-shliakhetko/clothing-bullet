import React from "react";
import HoverableHeading from "../../../components/headings/HoverableHeading";
import "../../../styles/index.scss";

export const Introduction = () => {
  return (
    <section className="w-full p-8 py-48">
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
    </section>
  );
};
