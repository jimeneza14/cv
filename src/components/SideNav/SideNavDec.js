import  React  from "react";

const SideNavDec = () => {
  return (
  <div id="mySideNavDesc" className="sidenavdesc row">
    <p id="mySideNavDescPProf" className="sidenavdescpprof">
      <em
        id="mySideNavDescPIProf"
        className="sidenavdescpiprof bi bi-briefcase-fill"
      ></em>
         Programador
    </p>
    <p id="mySideNavDescPAddr" className="sidenavdescpaddr">
      <em
        id="mySideNavDescPIAddr"
        className="sidenavdescpiaddr bi bi-house-door-fill"
      ></em>
         Sto. Dgo Rep. Dom.
    </p>
    <p
      id="mySideNavDescPContact"
      className="d-flex sidenavdescpcontactparagraphcontact"
    >
      <em
        id="mySideNavDescPIContact"
        className="sidenavdescpicontact bi bi-send-fill"
      ></em>
      <a
        id="mySideNavDescPIAContact"
        className="sidenavdescpiacontact"
        href="mailto:jimeneza14@hotmail.com"
      >
        &nbsp;&nbsp;&nbsp;jimeneza14@hotmail.com
      </a>
    </p>
  </div>
  );
};

export default SideNavDec;
