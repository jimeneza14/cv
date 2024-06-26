import  React  from "react";

const SideNavDec = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  if (!phoneNumber) {
    console.error(
      "Número de telephono no configurado en las variables de entorno."
    );
    return null;
  }
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return (
  <div className="sidenavdesc row">
    <p>
      <em className="bi bi-briefcase-fill"
      ></em>
         Programador
    </p>

    <p>
      <em
        className="bi bi-briefcase-fill"
      ></em>
         &nbsp;Sto. Dgo Rep. Dom.
    </p>

      <a
        href="mailto:jimeneza14@hotmail.com"
      ><em class="bi bi-send-fill" />
	&nbsp;&nbsp;&nbsp;Enviar correo
      </a>

      <a
        href={`tel:+${encodedPhoneNumber}`}
      ><em class="bi bi-telephone-outbound-fill" />
	&nbsp;&nbsp;&nbsp;Llamar
      </a>
  </div>
  );
};

export default SideNavDec;
