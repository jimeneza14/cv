import React from "react";

const SideNavSocial = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
  if (!phoneNumber) {
    console.error(
      "Número de WhatsApp no configurado en las variables de entorno."
    );
    return null;
  }
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return (
    <div
      id="mySidenavSocial"
      className="justify-content-between align-items-center align-content-center flex-nowrap sidenavsocial row fixed-bottom"
    >
      <a
        id="mySideNavSocialTwitter"
        className="d-flex sidenavsocialtwitter twitter"
        target="_black"
        href="https://x.com/Jimeneza_02"
      >
        <br />
        <em
          id="mySideNavSocialLTwitterI"
          className="sidenavsociallinktwitteri bi bi-twitter"
        ></em>
      </a>
      <a
        id="mySideNavSociaLinkedin"
        className="d-flex sidenavsociallinkedin linkedin"
        target="_black"
        href="https://www.linkedin.com/in/jimeneza14"
      >
        <br />
        <em
          id="mySideNavSocialLinkedinI"
          className="sidenavsociallinklinkedini bi bi-linkedin"
        ></em>
      </a>
      <a
        id="mySideNavSociaGithubL"
        className="d-flex sidenavsocialgithubli sidenavsocialgithubli"
        target="_black"
        href="https://github.com/jimeneza14"
      >
        <br />
        <em
          id="mySideNavSocialGithubLI"
          className="sidenavsocialgithubli bi bi-github"
        ></em>
      </a>
      <a
        id="mySideNavSociaWhatsappL"
        className="d-flex sidenavsocialwhatsapp whatsapp"
        target="_black"
        href={`https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`}
      >
        <br />
        <em
          id="mySideNavSocialWahstappLI"
          className="sidenavsocialwhatsappli bi bi-whatsapp"
        ></em>
      </a>
      <a
        id="mySideNavSocialYoutubeL"
        className="d-flex sidenavsocialyoutubeli youtube"
        target="_black"
        href="https://www.youtube.com/channel/UCkqxIMNp8yLL1gclqMJnGLw"
      >
        <br />
        <em
          id="mySideNavSocialYoutubeLI"
          className="sidenavsocialyoutubeli bi bi-youtube"
        ></em>
      </a>
    </div>
  );
};

export default SideNavSocial;
