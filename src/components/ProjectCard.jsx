import React from "react";
const ProjectCard = (props) => {
  return (
    <div className={props.style}>
      <img src={props.img} className="w-full lg:w-1/3 max-w-sm lg:max-w-none rounded-2xl shadow-2xl"></img>
      <div className="p-4 w-full lg:w-1/2">
        <h1 className="text-xl md:text-2xl font-semibold">{props.sn}</h1>
        <h2 className="text-2xl md:text-3xl font-bold">{props.title}</h2>
        <p className="py-4 text-sm md:text-base leading-relaxed">
          {props.def}
        </p>
        <i className="pi pi-github cursor-pointer text-xl md:text-2xl hover:text-[var(--primary)] transition-colors"></i>
      </div>
    </div>
  );
};

export default ProjectCard;
