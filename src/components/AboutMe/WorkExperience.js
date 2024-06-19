import React, { useState, useEffect } from "react";
import WorkExperienceData from "../Utils/WorkExperienceData.json";
import "./AboutMe.css";

const WorkExperience = () => {
  return (
    <div id="myworkexperience" className="row workexperience shadow-lg">
      <div className="row">
        <h3>Experiencias Laborales:</h3>
      </div>
      {WorkExperienceData.map((item) => (
        <div
          id={`workexperience-${item.id}`}
          key={item.id}
          className="row workexperience"
        >
          <h5 className="">{item.name}</h5>
          <h6>
            {item.start} -{" "}
            {item.end === "Actual" ? (
              <button
                className="btn disabled bg-dark fs-6 btn-outline-light"
                type="button"
              >
                Actual
              </button>
            ) : (
              item.end
            )}
          </h6>
          <ul className="">
            {item.desc.map((descItem, index) => (
              <li key={index}>{Object.values(descItem)[0]}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
