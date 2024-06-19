import React from "react";
import { openNav } from "../SideNav/SideNav"; // Importa openNav directamente
import img1 from "../../assets/img/img1.jpg";
import './TopNav.css';

const TopNav = () => {
  return (
    <div id="myTopnavRow" className="row topnavrow">
      <div
        id="myTopNavCol"
        className="col d-flex justify-content-between align-items-center align-content-center flex-nowrap align-items-sm-center topnavcol"
      >
        <span id="myOpenNav" className="opennav" onClick={openNav}>
          ☰
        </span>
        <img
          id="myTopNavImg"
          className="rounded-circle topnavimg"
          src={img1}
          alt="TopNavImg"
        />
      </div>
    </div>
  );
};

export default TopNav;
