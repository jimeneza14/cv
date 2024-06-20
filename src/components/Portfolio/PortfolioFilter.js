import React from "react";
import "./Portfolio.css";

const PortfolioFilter = ({ clickHandle, activeButton }) => {
  return (
    <div id="myPortfolioHeading" className="portfolioheading shadow-lg row">
      <h1>Mi portafolio</h1>
      <div id="myPortfolioFilter" className="portfoliofilter row">
        <span id="MyPortfolioFilterS" className="portfolioheadings col">
          Mostrar :
        </span>
        <div
          id="myPortFolioFilterBG"
          className="btn-group btn-group-sm justify-content-center align-items-center portfoliofilterbg"
          role="group"
        >
          <button
            id="myPortfolioFilterBAllBG"
            className={`btn portfoliofilterballbg col
          ${activeButton === "all" ? "active" : ""}`}
            type="button"
            onClick={() => clickHandle("all")}
          >
            Todos
          </button>
          <button
            id="myPortfolioFilterBBackendBG"
            className={`btn portfoliofilterballbg col
          ${activeButton === "backend" ? "active" : ""}`}
            type="button"
            onClick={() => clickHandle("backend")}
          >
            <em className="bi bi-back">  </em>Back End
          </button>
          <button
            id="myPortfolioFilterBFrontendBG"
            className={`btn portfoliofilterballbg col
          ${activeButton === "frontend" ? "active" : ""}`}
            type="button"
            onClick={() => clickHandle("frontend")}
          >
            <em className="bi bi-front">  </em>Front End
          </button>
          <button
            id="myPortfolioFilterBFullstackBG"
            className={`btn portfoliofilterballbg col
          ${activeButton === "fullstack" ? "active" : ""}`}
            type="button"
            onClick={() => clickHandle("fullstack")}
          >
            <em className="bi bi-intersect">  </em>Full Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
