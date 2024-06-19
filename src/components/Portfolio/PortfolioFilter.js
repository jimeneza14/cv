import React from "react";
import "./Portfolio.css";

const PortfolioFilter = ({clickHandle, activeButton}) => { 
  return (
    <div id="myPortfolioFilter" className="portfoliofilter row">
    <span id="MyPortfolioFilterS" className="portfolioheadings col">
      Filter :
    </span>
    <div
      id="myPortFolioFilterBG"
      className="btn-group btn-group-sm justify-content-center align-items-center portfoliofilterbg"
      role="group"
    >
      <button
        id="myPortfolioFilterBAllBG"
        className={`btn portfoliofilterballbg col btn-outline-light
          ${activeButton === "all" ? "active" : ""}`}
        type="button"
        onClick={() => clickHandle("all")}
      >
        All
      </button>
      <button
        id="myPortfolioFilterBBackendBG"
        className={`btn portfoliofilterballbg col btn-outline-light
          ${activeButton === "backend" ? "active" : ""}`}
        type="button"
        onClick={() => clickHandle("backend")}
      >
        <em className="bi bi-back">  </em>Back End
      </button>
      <button
        id="myPortfolioFilterBFrontendBG"
        className={`btn portfoliofilterballbg col btn-outline-light
          ${activeButton === "frontend" ? "active" : ""}`}
        type="button"
        onClick={() => clickHandle("frontend")}
      >
        <em className="bi bi-front">  </em>Front End
      </button>
      <button
        id="myPortfolioFilterBFullstackBG"
        className={`btn portfoliofilterballbg col btn-outline-light
          ${activeButton === "fullstack" ? "active" : ""}`}
        type="button"
        onClick={() => clickHandle("fullstack")}
      >
        <em className="bi bi-intersect">  </em>Full Stack
      </button>
    </div>
  </div>
  );
};

export default PortfolioFilter;
