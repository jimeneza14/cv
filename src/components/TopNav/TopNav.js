import React from "react";
import { openNav } from "../SideNav/SideNav"; // Importa openNav directamente
import img1 from "../../assets/img/img1.jpg";
import flag from "../../assets/img/flag.png";
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="topnavrow">
      <div className="align-items-center bg-dark-subtle col d-flex justify-content-between">
        <span className="opennav fs-1" onClick={openNav}>
          ☰
        </span>
        <div className="flip-img">
          <div className="ang-logo flip-img-inner">
            <img className="flip-img-front rounded-circle shadow-lg" src={img1} alt="TopNavImg"/>
            <img className="flip-img-back rounded-circle shadow-lg" src={flag} alt="TopNavImg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
