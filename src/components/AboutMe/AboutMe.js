import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import "./AboutMe.css";

const AboutMe = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="myAboutMe" className="aboutme row">
      <div className="round-3 p-5 pt-2">
        <div className="shadow-lg">
          <p className="col-12">
            Profesional de desarrollo de software con habilidades en el
            desarrollo de aplicaciones utilizando lenguajes como: C#,
            JavaScript, HTML, CSS, entre otras, y en la implementación de
            tecnologías como: ASP.NET, MVC, React y Nodejs. Experto en
            infraestructura de Azure, incluyendo IaC, IaS y SRE. Identificable
            con la Visión, Misión y Valores de la empresa.
          </p>
          <nav id="myaboutmenav" className={`btn-group aboutmenav d-flex justify-content-around ${isNavSticky ? "sticky-nav" : ""}`}>
            <Link className="btn btn-primary" role="button" to="/pdfviewer">
              Curriculum
            </Link>
            <a className="nav-link btn btn-primary" role="button" href="#myworkexperience">
              Experiencias
            </a>
            <a className="nav-link btn btn-primary" role="button" href="#myskills">
              Habilidades
            </a>
            <a className="nav-link btn btn-primary" role="button" href="#myeducation">
              Educacion
            </a>
            <a className="nav-link btn btn-primary" role="button" href="#mylanguages">
              Idiomas
            </a>
          </nav>
        </div>
      </div>
      <WorkExperience />
      <Skills />
      <Education />
      <Languages />
    </section>
  );
};

export default AboutMe;
