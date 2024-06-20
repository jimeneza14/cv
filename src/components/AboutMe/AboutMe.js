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
      if (window.scrollY > 100) {
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
          <p className="p-4 col-12"><em class="text-success fs-1 bi bi-person-fill" />&nbsp;&nbsp;Profesional de desarrollo de software con amplia experiencia en la creación de aplicaciones web y de escritorio. Poseo habilidades avanzadas en el desarrollo utilizando lenguajes como C#, JavaScript, HTML, CSS, entre otros, así como en la implementación de tecnologías como ASP.NET, MVC, React y Node.js. Experto en infraestructura de Azure, especializado en IaC, IaaS y SRE. Me identifico plenamente con la Visión, Misión y Valores de la empresa.
          </p>
          <nav
            id="myaboutmenav"
            className={`btn-group aboutmenav row row-cols-auto ${
              isNavSticky ? "sticky-nav" : ""
            }`}
          >
	    <a className="btn" role="button" href="#myAboutMe">
              <em class="text-success bi bi-arrow-90deg-up" />&nbsp;&nbsp;Subir
            </a>
            <Link className="btn" role="button" to="/pdfviewer">
              <em class="text-success bi bi-book" />&nbsp;&nbsp;Curriculum
            </Link>
            <a className="btn" role="button" href="#myworkexperience">
              <em class="text-success bi bi-person-workspace" />&nbsp;&nbsp;Experiencias
            </a>
            <a className="btn" role="button" href="#myskills">
              <em class="text-success bi bi-stars" />&nbsp;&nbsp;Habilidades
            </a>
            <a className="btn" role="button" href="#myeducation">
              <em class="text-success bi bi-highlighter" />&nbsp;&nbsp;Educacion
            </a>
            <a className="btn" role="button" href="#mylanguages">
              <em class="text-success bi bi-translate" />&nbsp;Idiomas
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
