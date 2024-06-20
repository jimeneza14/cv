import React from "react";
import { openNav } from "../SideNav/SideNav"; // Importa openNav directamente
import img1 from "../../assets/img/img1.jpg";
import './TopNav.css';

const TopNav = () => {
  return (
    <div id="myTopnavRow" className="row topnavrow">
      <div
        id="myTopNavCol"
        className="align-content-center align-items-center align-items-sm-center bg-dark-subtle col d-flex flex-nowrap justify-content-between shadow-lg topnavcol"
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
