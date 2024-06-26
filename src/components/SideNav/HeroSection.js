import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ closeNav }) => {
  return (
    <div id="myHeroImg" className="heroimage row">
      <div id="myHeroText" className="herotext">
        <p className="fs-6 herotextp" id="myHeroTextP">
          Angel Jimenez
        </p>
      </div>
      <div
        className="text-center shadow-lg d-md-flex flex-column align-items-center align-content-center flex-nowrap justify-content-md-center align-items-md-center navlink"
        id="myNavLink"
      >
        <Link
          id="myPortFolioLink"
          className="portfoliolink"
          to="/portfolio"
          onClick={closeNav}
        >
          <em
            data-bs-toggle="tooltip"
            data-bss-tooltip=""
            data-bs-placement="left"
            id="myPortFolioLinkI"
            className="portfoliolinki bi bi-grid-fill"
            title="PORTAFOLIO"
          ></em>
        </Link>
        <Link
          id="myAboutLink"
          className="aboutlink"
          to="/aboutme"
          onClick={closeNav}
        >
          <em
            data-bs-toggle="tooltip"
            data-bss-tooltip=""
            data-bs-placement="left"
            id="myAboutLinkI"
            className="aboutlinki bi bi-person-fill"
            title="ACERCA DE MI"
          ></em>
        </Link>
        <Link
          id="myContactLink"
          className="contactlink"
          to="/contactme"
          onClick={closeNav}
        >
          <em
            data-bs-toggle="tooltip"
            data-bss-tooltip=""
            data-bs-placement="left"
            id="myContactLinki"
            className="contactlinki bi bi-envelope-fill"
            title="CONTACTO"
          ></em>
        </Link>
      </div>
      <a
        className="d-flex closebtn btn"
        id="myCloseBtn"
        onClick={closeNav}
        href="javascript:void(0);"
      >
        ×
      </a>
    </div>
  );
};

export default HeroSection;
