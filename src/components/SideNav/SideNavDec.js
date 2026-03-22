import  React  from "react";

const SideNavDec = () => {
  return (
  <div id="mySideNavDesc" className="sidenavdesc row">
    <p id="" className="">
      <em
        id="mySideNavDescPIProf"
        className="sidenavdescpiprof bi bi-briefcase-fill"
      ></em>
         Programador
    </p>

    <p id="" className="">
      <em
        id="mySideNavDescPIProf"
        className="sidenavdescpiprof bi bi-briefcase-fill"
      ></em>
         &nbsp;Sto. Dgo Rep. Dom.
    </p>

      <a
        id=""
        className=""
        href="mailto:jimeneza14@hotmail.com"
      ><em class="bi bi-send-fill" />
	&nbsp;&nbsp;&nbsp;Enviar correo
      </a>

      <a
        id=""
        className=""
        href="tel:+18297175028"
      ><em class="bi bi-telephone-outbound-fill" />
	&nbsp;&nbsp;&nbsp;Llamar
      </a>
  </div>
  );
};

export default SideNavDec;
