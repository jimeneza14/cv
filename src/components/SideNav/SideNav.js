import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import SideNavDec from "./SideNavDec";
import SideNavSocial from "./SideNavSocial";

import "./SideNav.css";

const SideNav = () => {
  const [navWidth, setNavWidth] = useState("0");

  useEffect(() => {
    // Agregar el event listener al cargar el componente
    window.addEventListener("resize", ajustarAnchoElemento);

    // Remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", ajustarAnchoElemento);
    };
  }, []);

  useEffect(() => {
    ajustarAnchoElemento(); // Ajustar el ancho inicial al montar
    
  }, [navWidth]);

  const toggleNav = () => {
    setNavWidth(navWidth === "0" ? "15rem" : "0");
  };

  const ajustarAnchoElemento = () => {
    setNavWidth(window.innerWidth > 576 ? "15rem" : "0");
  };

  return (
    <div id="mySideNav" className="col sidenav" style={{ width: navWidth }}>
      <HeroSection closeNav={toggleNav}></HeroSection>
      <SideNavDec />
      <SideNavSocial />
    </div>
  );
};

export const openNav = () => {
  document.getElementById("mySideNav").style.width = "15rem";
};

export default SideNav;