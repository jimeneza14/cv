import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import SideNavDec from "./SideNavDec";
import SideNavSocial from "./SideNavSocial";
import "./SideNav.css";

const SideNav = () => {
useEffect(() => {
    // Agregar el event listener al cargar el componente
    window.addEventListener("resize", ajustarAnchoElemento);

    // Remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", ajustarAnchoElemento);
    };
  }, []);
  
  function openNav() {
    document.getElementById("mySideNav").style.width = "15rem";
  };

  function closeNav() {
    ajustarAnchoElemento();
  }

  // Función para ajustar el ancho del elemento
  function ajustarAnchoElemento() {
    var elemento = document.getElementById("mySideNav");
    var anchoRestaurado = 15;

    elemento.style.width = (window.innerWidth > 576) ? anchoRestaurado + "rem" : "0";
  }

  return (
  <div id="mySideNav" className="col sidenav">
    <HeroSection closeNav={closeNav}></HeroSection>
    <SideNavDec />
    <SideNavSocial />
  </div>
  );
};

// Exportamos openNav para que sea accesible desde fuera de SideNav
export const openNav = () => {
  document.getElementById("mySideNav").style.width = "15rem";
};

export const ajustarAnchoElemento = () => {
  var elemento = document.getElementById("mySideNav");
  var anchoRestaurado = 15;

  elemento.style.width = (window.innerWidth > 576) ? anchoRestaurado + "rem" : "0";
}

export default SideNav;